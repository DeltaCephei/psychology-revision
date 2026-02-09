/* ============================================================
   Science Diagram Generator — Main Script
   Generates precise SVG diagrams for science teaching.

   Architecture:
   - Each diagram type is a module with: controls(), render(), presets
   - The shell handles tab switching, export, and control injection
   ============================================================ */

// ============================================================
// GLOBAL STATE
// ============================================================

// Current diagram type and its parameters
const state = {
    activeType: 'ray-diagram',
    params: {}
};

// Reference to the SVG canvas
const canvas = document.getElementById('diagramCanvas');
const controlsPanel = document.getElementById('controlsPanel');

// ============================================================
// DIAGRAM MODULES REGISTRY
// ============================================================

const diagramModules = {};

// ============================================================
// RAY DIAGRAM MODULE (Optics)
// ============================================================

diagramModules['ray-diagram'] = {
    // Default parameters for the convex lens ray diagram
    defaults: {
        lensType: 'convex',          // convex or concave
        focalLength: 150,             // pixels from lens centre to focal point
        objectDistance: 280,          // pixels from lens to object (left side)
        objectHeight: 80,            // pixels tall
        showGrid: true,              // show background grid
        showLabels: true,            // show F, 2F, object/image labels
        showNormal: true,            // show principal axis
        showConstruction: true,      // show construction ray lines
        showVirtualRays: true,       // show dashed virtual ray extensions
        rayColour: '#e63946',        // colour for rays
        lensColour: '#4a6fa5',       // colour for lens
        objectColour: '#2d6a4f',     // colour for object arrow
        imageColour: '#e07a3a',      // colour for image arrow
        title: 'Convex Lens — Real Image Formation'
    },

    // Preset configurations for common scenarios
    presets: {
        'Real image (object beyond 2F)': {
            lensType: 'convex',
            objectDistance: 350,
            objectHeight: 80,
            focalLength: 150,
            title: 'Convex Lens — Object Beyond 2F (Diminished Real Image)'
        },
        'Real image (object at 2F)': {
            lensType: 'convex',
            objectDistance: 300,
            objectHeight: 80,
            focalLength: 150,
            title: 'Convex Lens — Object at 2F (Same Size Real Image)'
        },
        'Real image (object between F and 2F)': {
            lensType: 'convex',
            objectDistance: 200,
            objectHeight: 70,
            focalLength: 150,
            title: 'Convex Lens — Object Between F & 2F (Magnified Real Image)'
        },
        'Virtual image (object inside F)': {
            lensType: 'convex',
            objectDistance: 100,
            objectHeight: 70,
            focalLength: 150,
            title: 'Convex Lens — Object Inside F (Magnified Virtual Image)'
        },
        'Concave lens': {
            lensType: 'concave',
            objectDistance: 280,
            objectHeight: 80,
            focalLength: 150,
            title: 'Concave Lens — Virtual Image (Always Diminished & Upright)'
        }
    },

    // Build the controls HTML for this diagram type
    controls(params) {
        return `
            <h3>Ray Diagram Controls</h3>

            <!-- Presets row -->
            <div class="presets-row" id="presetButtons">
                ${Object.keys(this.presets).map(name =>
                    `<button class="btn-preset" data-preset="${name}">${name}</button>`
                ).join('')}
            </div>

            <div class="control-group" style="margin-top: 1rem;">
                <div class="control-item">
                    <label>Lens Type</label>
                    <select id="ctrlLensType">
                        <option value="convex" ${params.lensType === 'convex' ? 'selected' : ''}>Convex (converging)</option>
                        <option value="concave" ${params.lensType === 'concave' ? 'selected' : ''}>Concave (diverging)</option>
                    </select>
                </div>
                <div class="control-item">
                    <label>Focal Length</label>
                    <input type="range" id="ctrlFocalLength" min="60" max="200" value="${params.focalLength}">
                    <span class="range-value" id="valFocalLength">${params.focalLength}px</span>
                </div>
                <div class="control-item">
                    <label>Object Distance</label>
                    <input type="range" id="ctrlObjectDistance" min="50" max="400" value="${params.objectDistance}">
                    <span class="range-value" id="valObjectDistance">${params.objectDistance}px</span>
                </div>
                <div class="control-item">
                    <label>Object Height</label>
                    <input type="range" id="ctrlObjectHeight" min="20" max="140" value="${params.objectHeight}">
                    <span class="range-value" id="valObjectHeight">${params.objectHeight}px</span>
                </div>
            </div>

            <div class="control-group">
                <div class="toggle-item">
                    <input type="checkbox" id="ctrlShowGrid" ${params.showGrid ? 'checked' : ''}>
                    <label for="ctrlShowGrid">Grid</label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="ctrlShowLabels" ${params.showLabels ? 'checked' : ''}>
                    <label for="ctrlShowLabels">Labels</label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="ctrlShowConstruction" ${params.showConstruction ? 'checked' : ''}>
                    <label for="ctrlShowConstruction">Construction Rays</label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="ctrlShowVirtualRays" ${params.showVirtualRays ? 'checked' : ''}>
                    <label for="ctrlShowVirtualRays">Virtual Ray Extensions</label>
                </div>
            </div>

            <div class="control-group">
                <div class="control-item">
                    <label>Ray Colour</label>
                    <input type="color" id="ctrlRayColour" value="${params.rayColour}">
                </div>
                <div class="control-item">
                    <label>Title</label>
                    <input type="text" id="ctrlTitle" value="${params.title}" style="width: 320px;">
                </div>
            </div>
        `;
    },

    // Bind event listeners after controls are injected
    bindControls(params, onUpdate) {
        // Preset buttons
        document.querySelectorAll('#presetButtons .btn-preset').forEach(btn => {
            btn.addEventListener('click', () => {
                const preset = this.presets[btn.dataset.preset];
                if (preset) {
                    Object.assign(params, preset);
                    // Re-render controls and diagram
                    controlsPanel.innerHTML = this.controls(params);
                    this.bindControls(params, onUpdate);
                    onUpdate();
                }
            });
        });

        // Range sliders with live value display
        const bindRange = (id, key, suffix = 'px') => {
            const el = document.getElementById(id);
            const valEl = document.getElementById('val' + id.replace('ctrl', ''));
            if (el) {
                el.addEventListener('input', () => {
                    params[key] = parseInt(el.value);
                    if (valEl) valEl.textContent = el.value + suffix;
                    onUpdate();
                });
            }
        };

        bindRange('ctrlFocalLength', 'focalLength');
        bindRange('ctrlObjectDistance', 'objectDistance');
        bindRange('ctrlObjectHeight', 'objectHeight');

        // Select
        const lensTypeEl = document.getElementById('ctrlLensType');
        if (lensTypeEl) {
            lensTypeEl.addEventListener('change', () => {
                params.lensType = lensTypeEl.value;
                // Update title to match lens type
                if (params.lensType === 'concave') {
                    params.title = 'Concave Lens — Virtual Image (Always Diminished & Upright)';
                } else {
                    params.title = 'Convex Lens — Real Image Formation';
                }
                const titleEl = document.getElementById('ctrlTitle');
                if (titleEl) titleEl.value = params.title;
                onUpdate();
            });
        }

        // Checkboxes
        const bindCheck = (id, key) => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('change', () => {
                    params[key] = el.checked;
                    onUpdate();
                });
            }
        };

        bindCheck('ctrlShowGrid', 'showGrid');
        bindCheck('ctrlShowLabels', 'showLabels');
        bindCheck('ctrlShowConstruction', 'showConstruction');
        bindCheck('ctrlShowVirtualRays', 'showVirtualRays');

        // Colour picker
        const rayColourEl = document.getElementById('ctrlRayColour');
        if (rayColourEl) {
            rayColourEl.addEventListener('input', () => {
                params.rayColour = rayColourEl.value;
                onUpdate();
            });
        }

        // Title text
        const titleEl = document.getElementById('ctrlTitle');
        if (titleEl) {
            titleEl.addEventListener('input', () => {
                params.title = titleEl.value;
                onUpdate();
            });
        }
    },

    // Render the ray diagram to SVG
    render(svg, params) {
        const W = 900;
        const H = 500;
        const cx = W / 2;    // Lens centre x
        const cy = H / 2;    // Principal axis y (slightly below centre for title space)
        const axisY = cy + 15;

        // Shorthand params
        const f = params.focalLength;
        const objDist = params.objectDistance;
        const objH = params.objectHeight;
        const isConvex = params.lensType === 'convex';

        let svgContent = '';

        // --- Arrowhead marker definitions ---
        svgContent += `
            <defs>
                <marker id="arrowRay" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <path d="M0,0 L8,3 L0,6 Z" fill="${params.rayColour}" />
                </marker>
                <marker id="arrowObj" markerWidth="8" markerHeight="6" refX="4" refY="6" orient="auto">
                    <path d="M0,6 L4,0 L8,6 Z" fill="${params.objectColour}" />
                </marker>
                <marker id="arrowImg" markerWidth="8" markerHeight="6" refX="4" refY="6" orient="auto">
                    <path d="M0,6 L4,0 L8,6 Z" fill="${params.imageColour}" />
                </marker>
                <marker id="arrowImgDown" markerWidth="8" markerHeight="6" refX="4" refY="0" orient="auto">
                    <path d="M0,0 L4,6 L8,0 Z" fill="${params.imageColour}" />
                </marker>
            </defs>
        `;

        // --- Background grid ---
        if (params.showGrid) {
            svgContent += `<g class="grid" opacity="0.15">`;
            // Vertical lines every 50px
            for (let x = 50; x < W; x += 50) {
                const weight = (x === cx) ? 0 : (x % 150 === cx % 150) ? 0.8 : 0.5;
                svgContent += `<line x1="${x}" y1="40" x2="${x}" y2="${H - 10}" stroke="#888" stroke-width="${weight}" />`;
            }
            // Horizontal lines every 50px
            for (let y = 50; y < H; y += 50) {
                const weight = (y === axisY) ? 0 : 0.5;
                svgContent += `<line x1="10" y1="${y}" x2="${W - 10}" y2="${y}" stroke="#888" stroke-width="${weight}" />`;
            }
            svgContent += `</g>`;
        }

        // --- Principal axis ---
        svgContent += `<line x1="10" y1="${axisY}" x2="${W - 10}" y2="${axisY}"
            stroke="#333" stroke-width="1.5" stroke-dasharray="8,4" />`;

        // --- Lens drawing ---
        const lensHalfH = 160; // Half the lens height
        if (isConvex) {
            // Convex lens: two outward-curving arcs forming a biconvex shape
            const bulge = 18;
            svgContent += `
                <path d="M${cx},${axisY - lensHalfH}
                         Q${cx + bulge},${axisY} ${cx},${axisY + lensHalfH}"
                      fill="none" stroke="${params.lensColour}" stroke-width="2.5" />
                <path d="M${cx},${axisY - lensHalfH}
                         Q${cx - bulge},${axisY} ${cx},${axisY + lensHalfH}"
                      fill="none" stroke="${params.lensColour}" stroke-width="2.5" />
            `;
            // Lens fill (semi-transparent)
            svgContent += `
                <path d="M${cx},${axisY - lensHalfH}
                         Q${cx + bulge},${axisY} ${cx},${axisY + lensHalfH}
                         Q${cx - bulge},${axisY} ${cx},${axisY - lensHalfH} Z"
                      fill="${params.lensColour}" opacity="0.08" />
            `;
        } else {
            // Concave lens: two inward-curving arcs
            const bulge = 15;
            const edgeW = 8;
            svgContent += `
                <path d="M${cx - edgeW},${axisY - lensHalfH}
                         Q${cx + bulge},${axisY} ${cx - edgeW},${axisY + lensHalfH}"
                      fill="none" stroke="${params.lensColour}" stroke-width="2.5" />
                <path d="M${cx + edgeW},${axisY - lensHalfH}
                         Q${cx - bulge},${axisY} ${cx + edgeW},${axisY + lensHalfH}"
                      fill="none" stroke="${params.lensColour}" stroke-width="2.5" />
            `;
            // Top and bottom connecting lines
            svgContent += `
                <line x1="${cx - edgeW}" y1="${axisY - lensHalfH}" x2="${cx + edgeW}" y2="${axisY - lensHalfH}"
                      stroke="${params.lensColour}" stroke-width="2.5" />
                <line x1="${cx - edgeW}" y1="${axisY + lensHalfH}" x2="${cx + edgeW}" y2="${axisY + lensHalfH}"
                      stroke="${params.lensColour}" stroke-width="2.5" />
            `;
            // Fill
            svgContent += `
                <path d="M${cx - edgeW},${axisY - lensHalfH}
                         Q${cx + bulge},${axisY} ${cx - edgeW},${axisY + lensHalfH}
                         L${cx + edgeW},${axisY + lensHalfH}
                         Q${cx - bulge},${axisY} ${cx + edgeW},${axisY - lensHalfH} Z"
                      fill="${params.lensColour}" opacity="0.08" />
            `;
        }

        // --- Small arrows at lens tips (convention) ---
        if (isConvex) {
            // Outward-pointing arrows at top and bottom of convex lens
            svgContent += `
                <polygon points="${cx},${axisY - lensHalfH} ${cx - 6},${axisY - lensHalfH + 10} ${cx + 6},${axisY - lensHalfH + 10}"
                         fill="${params.lensColour}" />
                <polygon points="${cx},${axisY + lensHalfH} ${cx - 6},${axisY + lensHalfH - 10} ${cx + 6},${axisY + lensHalfH - 10}"
                         fill="${params.lensColour}" />
            `;
        } else {
            // Inward-pointing arrows at top and bottom of concave lens
            svgContent += `
                <polygon points="${cx - 8},${axisY - lensHalfH - 2} ${cx},${axisY - lensHalfH + 8} ${cx + 8},${axisY - lensHalfH - 2}"
                         fill="${params.lensColour}" />
                <polygon points="${cx - 8},${axisY + lensHalfH + 2} ${cx},${axisY + lensHalfH - 8} ${cx + 8},${axisY + lensHalfH + 2}"
                         fill="${params.lensColour}" />
            `;
        }

        // --- Focal points and 2F markers ---
        if (params.showLabels) {
            const markerSize = 5;
            // F and 2F on both sides
            const points = [
                { x: cx - f, label: 'F', side: 'left' },
                { x: cx + f, label: 'F', side: 'right' },
                { x: cx - 2 * f, label: '2F', side: 'left' },
                { x: cx + 2 * f, label: '2F', side: 'right' }
            ];

            points.forEach(p => {
                if (p.x > 15 && p.x < W - 15) {
                    // Small cross mark on axis
                    svgContent += `
                        <line x1="${p.x}" y1="${axisY - markerSize}" x2="${p.x}" y2="${axisY + markerSize}"
                              stroke="${params.lensColour}" stroke-width="2" />
                        <text x="${p.x}" y="${axisY + 20}" text-anchor="middle"
                              font-size="13" font-weight="600" fill="${params.lensColour}">${p.label}</text>
                    `;
                }
            });

            // Optical centre label
            svgContent += `
                <text x="${cx}" y="${axisY + 20}" text-anchor="middle"
                      font-size="13" font-weight="600" fill="${params.lensColour}">C</text>
            `;
        }

        // --- Object arrow (left side of lens) ---
        const objX = cx - objDist;
        const objTopY = axisY - objH;

        // Only draw if object is within visible area
        if (objX > 20) {
            svgContent += `
                <line x1="${objX}" y1="${axisY}" x2="${objX}" y2="${objTopY}"
                      stroke="${params.objectColour}" stroke-width="3" marker-end="url(#arrowObj)" />
            `;

            if (params.showLabels) {
                svgContent += `
                    <text x="${objX}" y="${axisY + 35}" text-anchor="middle"
                          font-size="12" font-weight="600" fill="${params.objectColour}">Object</text>
                `;
            }
        }

        // --- RAY TRACING CALCULATIONS ---
        // Using thin lens equation: 1/f = 1/v - 1/u  (real-is-positive convention, u is negative for real objects)
        // Simplified: 1/v = 1/f + 1/u where u = -objDist (object on left)

        let imageX, imageTopY, imageH, isVirtual;

        if (isConvex) {
            // Convex lens: f is positive
            // Using 1/v = 1/f - 1/u where u = objDist (positive, object distance)
            // v = (f * u) / (u - f)
            const v = (f * objDist) / (objDist - f);

            if (objDist > f) {
                // Real image: formed on opposite side of lens
                isVirtual = false;
                imageX = cx + v;
                // Magnification m = -v/u (negative means inverted)
                const m = v / objDist;
                imageH = objH * m;
                imageTopY = axisY + imageH; // Inverted (below axis)
            } else {
                // Virtual image: object inside focal length
                isVirtual = true;
                // v comes out negative, meaning image is on same side as object
                imageX = cx + v; // v is negative, so image is to the left of lens
                const m = Math.abs(v) / objDist;
                imageH = objH * m;
                imageTopY = axisY - imageH; // Upright (above axis)
            }
        } else {
            // Concave lens: f is negative, always produces virtual upright diminished image
            isVirtual = true;
            const fNeg = -f; // focal length magnitude
            // 1/v = -1/f - 1/u (using sign convention)
            const v = -(fNeg * objDist) / (objDist + fNeg);
            imageX = cx + v; // v is negative
            const m = Math.abs(v) / objDist;
            imageH = objH * m;
            imageTopY = axisY - imageH; // Upright
        }

        // --- DRAW CONSTRUCTION RAYS ---
        if (params.showConstruction && objX > 20) {
            const rayStroke = `stroke="${params.rayColour}" stroke-width="2"`;

            if (isConvex) {
                if (objDist > f) {
                    // === REAL IMAGE (convex, object beyond F) ===

                    // Ray 1: Parallel to axis → through far focal point
                    // From object tip, horizontal to lens, then refracts through F on other side
                    svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${cx}" y2="${objTopY}" ${rayStroke} />`;
                    svgContent += `<line x1="${cx}" y1="${objTopY}" x2="${imageX}" y2="${imageTopY}" ${rayStroke} />`;
                    // Extend ray beyond image
                    const ext1 = extendLine(cx, objTopY, imageX, imageTopY, W - 20);
                    svgContent += `<line x1="${imageX}" y1="${imageTopY}" x2="${ext1.x}" y2="${ext1.y}" ${rayStroke} opacity="0.3" />`;

                    // Ray 2: Through optical centre (straight through)
                    const ext2 = extendLine(objX, objTopY, cx, axisY, W - 20);
                    svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${ext2.x}" y2="${ext2.y}" ${rayStroke} />`;

                    // Ray 3: Through near focal point → parallel after lens
                    // From object tip towards near F, hits lens, then goes parallel
                    const nearFX = cx - f;
                    // Line from object tip towards near F — find where it hits the lens (x = cx)
                    const hitY = objTopY + (axisY - objTopY) * ((cx - objX) / (nearFX - objX));
                    svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${cx}" y2="${hitY}" ${rayStroke} />`;
                    svgContent += `<line x1="${cx}" y1="${hitY}" x2="${W - 20}" y2="${hitY}" ${rayStroke} />`;

                } else {
                    // === VIRTUAL IMAGE (convex, object inside F) ===

                    // Ray 1: Parallel to axis → refracts through far F
                    svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${cx}" y2="${objTopY}" ${rayStroke} />`;
                    // Refracted ray goes through far focal point and beyond
                    const farFX = cx + f;
                    const ext1 = extendLine(cx, objTopY, farFX, axisY, W - 20);
                    svgContent += `<line x1="${cx}" y1="${objTopY}" x2="${ext1.x}" y2="${ext1.y}" ${rayStroke} />`;

                    // Virtual extension of ray 1 backwards (dashed)
                    if (params.showVirtualRays) {
                        const vExt1 = extendLine(farFX, axisY, cx, objTopY, 20);
                        svgContent += `<line x1="${cx}" y1="${objTopY}" x2="${vExt1.x}" y2="${vExt1.y}"
                            ${rayStroke} stroke-dasharray="6,4" opacity="0.5" />`;
                    }

                    // Ray 2: Through optical centre (straight through)
                    const ext2Start = extendLine(cx, axisY, objX, objTopY, 20);
                    const ext2End = extendLine(objX, objTopY, cx, axisY, W - 20);
                    svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${ext2End.x}" y2="${ext2End.y}" ${rayStroke} />`;

                    // Virtual extension backwards (dashed)
                    if (params.showVirtualRays) {
                        svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${ext2Start.x}" y2="${ext2Start.y}"
                            ${rayStroke} stroke-dasharray="6,4" opacity="0.5" />`;
                    }

                    // Ray 3: Aimed at far focal point → exits parallel
                    // Line from object tip aimed towards far F
                    const aimY = objTopY + (axisY - objTopY) * ((cx - objX) / (farFX - objX));
                    svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${cx}" y2="${aimY}" ${rayStroke} />`;
                    svgContent += `<line x1="${cx}" y1="${aimY}" x2="${W - 20}" y2="${aimY}" ${rayStroke} />`;

                    // Virtual extension backwards (dashed)
                    if (params.showVirtualRays) {
                        const vExt3 = extendLine(cx, aimY, objX, objTopY, 20);
                        svgContent += `<line x1="${cx}" y1="${aimY}" x2="${vExt3.x}" y2="${vExt3.y}"
                            ${rayStroke} stroke-dasharray="6,4" opacity="0.5" />`;
                    }
                }
            } else {
                // === CONCAVE LENS (always virtual, upright, diminished) ===
                const nearFX = cx - f; // Virtual focal point on same side as object
                const farFX = cx + f;  // Virtual focal point on far side — wait, for concave:
                // Near F is on SAME side as incoming light (left), far F is on right
                // Actually for concave: F on same side as object is the one rays diverge FROM

                // Ray 1: Parallel to axis → diverges AS IF from near focal point
                svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${cx}" y2="${objTopY}" ${rayStroke} />`;
                // Refracted ray diverges away from near F (on object side)
                const ext1 = extendLine(cx - f, axisY, cx, objTopY, W - 20);
                svgContent += `<line x1="${cx}" y1="${objTopY}" x2="${ext1.x}" y2="${ext1.y}" ${rayStroke} />`;

                // Virtual extension backwards through near F (dashed)
                if (params.showVirtualRays) {
                    svgContent += `<line x1="${cx}" y1="${objTopY}" x2="${cx - f}" y2="${axisY}"
                        ${rayStroke} stroke-dasharray="6,4" opacity="0.5" />`;
                }

                // Ray 2: Through optical centre (straight through)
                const ext2 = extendLine(objX, objTopY, cx, axisY, W - 20);
                svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${ext2.x}" y2="${ext2.y}" ${rayStroke} />`;

                // Ray 3: Aimed at far focal point → exits parallel (but on object side for concave...)
                // For concave lens: a ray aimed at the far F exits parallel to axis
                const aimY = objTopY + (axisY - objTopY) * ((cx - objX) / (farFX - objX));
                svgContent += `<line x1="${objX}" y1="${objTopY}" x2="${cx}" y2="${aimY}" ${rayStroke} />`;
                // Exits parallel to axis
                svgContent += `<line x1="${cx}" y1="${aimY}" x2="${W - 20}" y2="${aimY}" ${rayStroke} />`;

                // Virtual extension backwards (dashed)
                if (params.showVirtualRays) {
                    const vExt3 = extendLine(cx, aimY, objX, objTopY, 20);
                    svgContent += `<line x1="${cx}" y1="${aimY}" x2="${vExt3.x}" y2="${vExt3.y}"
                        ${rayStroke} stroke-dasharray="6,4" opacity="0.5" />`;
                }
            }
        }

        // --- Image arrow ---
        if (imageX > 20 && imageX < W - 20) {
            if (!isVirtual) {
                // Real image: inverted, solid arrow below axis
                svgContent += `
                    <line x1="${imageX}" y1="${axisY}" x2="${imageX}" y2="${imageTopY}"
                          stroke="${params.imageColour}" stroke-width="3" marker-end="url(#arrowImgDown)" />
                `;
            } else {
                // Virtual image: upright, dashed arrow above axis
                svgContent += `
                    <line x1="${imageX}" y1="${axisY}" x2="${imageX}" y2="${imageTopY}"
                          stroke="${params.imageColour}" stroke-width="3" stroke-dasharray="8,4" marker-end="url(#arrowImg)" />
                `;
            }

            if (params.showLabels) {
                const labelY = isVirtual ? imageTopY - 10 : imageTopY + 15;
                const imageType = isVirtual ? 'Virtual Image' : 'Real Image';
                svgContent += `
                    <text x="${imageX}" y="${labelY}" text-anchor="middle"
                          font-size="12" font-weight="600" fill="${params.imageColour}">${imageType}</text>
                `;
            }
        }

        // --- Title ---
        if (params.title) {
            svgContent += `
                <text x="${cx}" y="28" text-anchor="middle"
                      font-size="16" font-weight="700" fill="#2c3e50">${escapeXml(params.title)}</text>
            `;
        }

        svg.innerHTML = svgContent;
    }
};

// ============================================================
// FOOD WEB MODULE
// ============================================================

diagramModules['food-web'] = {
    defaults: {
        title: 'Simple Food Web',
        organisms: [
            // Trophic level 1 — Producers
            { name: 'Grass', x: 150, y: 400, level: 1 },
            { name: 'Algae', x: 400, y: 400, level: 1 },
            { name: 'Phytoplankton', x: 650, y: 400, level: 1 },
            // Trophic level 2 — Primary consumers
            { name: 'Grasshopper', x: 100, y: 280, level: 2 },
            { name: 'Rabbit', x: 300, y: 280, level: 2 },
            { name: 'Snail', x: 500, y: 280, level: 2 },
            { name: 'Small Fish', x: 700, y: 280, level: 2 },
            // Trophic level 3 — Secondary consumers
            { name: 'Frog', x: 200, y: 160, level: 3 },
            { name: 'Snake', x: 450, y: 160, level: 3 },
            { name: 'Large Fish', x: 680, y: 160, level: 3 },
            // Trophic level 4 — Tertiary consumers
            { name: 'Hawk', x: 350, y: 55, level: 4 },
        ],
        // Arrows: [prey index, predator index] — energy flows from prey to predator
        connections: [
            [0, 3], [0, 4],           // Grass → Grasshopper, Rabbit
            [1, 5], [1, 6],           // Algae → Snail, Small Fish
            [2, 6],                    // Phytoplankton → Small Fish
            [3, 7],                    // Grasshopper → Frog
            [4, 8],                    // Rabbit → Snake
            [5, 7], [5, 8],           // Snail → Frog, Snake
            [6, 9],                    // Small Fish → Large Fish
            [7, 8], [7, 10],          // Frog → Snake, Hawk
            [8, 10],                   // Snake → Hawk
            [9, 10],                   // Large Fish → Hawk
        ],
        showLevels: true,
        showArrows: true,
        nodeColours: ['#2d6a4f', '#52b788', '#e07a3a', '#e63946'],
        bgColour: '#ffffff'
    },

    presets: {
        'Grassland ecosystem': {},
        'Marine ecosystem': {
            title: 'Marine Food Web',
            organisms: [
                { name: 'Phytoplankton', x: 150, y: 400, level: 1 },
                { name: 'Seaweed', x: 450, y: 400, level: 1 },
                { name: 'Kelp', x: 700, y: 400, level: 1 },
                { name: 'Zooplankton', x: 100, y: 280, level: 2 },
                { name: 'Sea Urchin', x: 350, y: 280, level: 2 },
                { name: 'Small Fish', x: 600, y: 280, level: 2 },
                { name: 'Crab', x: 780, y: 280, level: 2 },
                { name: 'Squid', x: 200, y: 160, level: 3 },
                { name: 'Tuna', x: 500, y: 160, level: 3 },
                { name: 'Seal', x: 720, y: 160, level: 3 },
                { name: 'Orca', x: 400, y: 55, level: 4 },
            ],
            connections: [
                [0, 3], [0, 5],
                [1, 4], [1, 5],
                [2, 4], [2, 6],
                [3, 7], [3, 5],
                [4, 8],
                [5, 7], [5, 8], [5, 9],
                [6, 9],
                [7, 10],
                [8, 10],
                [9, 10],
            ]
        },
        'Simple 3-level chain': {
            title: 'Simple Food Chain',
            organisms: [
                { name: 'Grass', x: 200, y: 380, level: 1 },
                { name: 'Seeds', x: 550, y: 380, level: 1 },
                { name: 'Caterpillar', x: 200, y: 250, level: 2 },
                { name: 'Mouse', x: 550, y: 250, level: 2 },
                { name: 'Bird', x: 350, y: 120, level: 3 },
            ],
            connections: [
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 4],
            ]
        }
    },

    controls(params) {
        return `
            <h3>Food Web Controls</h3>
            <div class="presets-row" id="presetButtons">
                ${Object.keys(this.presets).map(name =>
                    `<button class="btn-preset" data-preset="${name}">${name}</button>`
                ).join('')}
            </div>
            <div class="control-group" style="margin-top: 1rem;">
                <div class="control-item">
                    <label>Title</label>
                    <input type="text" id="ctrlTitle" value="${params.title}" style="width: 280px;">
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="ctrlShowLevels" ${params.showLevels ? 'checked' : ''}>
                    <label for="ctrlShowLevels">Trophic Level Bands</label>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="ctrlShowArrows" ${params.showArrows ? 'checked' : ''}>
                    <label for="ctrlShowArrows">Energy Flow Arrows</label>
                </div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-light); margin-top: 0.5rem;">
                Tip: Drag organism nodes to reposition them. Right-click to edit names.
            </p>
        `;
    },

    bindControls(params, onUpdate) {
        // Presets
        document.querySelectorAll('#presetButtons .btn-preset').forEach(btn => {
            btn.addEventListener('click', () => {
                const preset = this.presets[btn.dataset.preset];
                if (preset && Object.keys(preset).length > 0) {
                    Object.assign(params, JSON.parse(JSON.stringify(preset)));
                    controlsPanel.innerHTML = this.controls(params);
                    this.bindControls(params, onUpdate);
                    onUpdate();
                }
            });
        });

        const titleEl = document.getElementById('ctrlTitle');
        if (titleEl) titleEl.addEventListener('input', () => { params.title = titleEl.value; onUpdate(); });

        const levelsEl = document.getElementById('ctrlShowLevels');
        if (levelsEl) levelsEl.addEventListener('change', () => { params.showLevels = levelsEl.checked; onUpdate(); });

        const arrowsEl = document.getElementById('ctrlShowArrows');
        if (arrowsEl) arrowsEl.addEventListener('change', () => { params.showArrows = arrowsEl.checked; onUpdate(); });

        // Enable drag on organism nodes after render
        this._enableDrag(params, onUpdate);
    },

    // Make organism nodes draggable within the SVG
    _enableDrag(params, onUpdate) {
        // We need to set this up after render, so use a small delay
        setTimeout(() => {
            const svg = document.getElementById('diagramCanvas');
            const nodes = svg.querySelectorAll('.organism-node');
            let dragging = null;
            let offset = { x: 0, y: 0 };

            // Convert screen coords to SVG coords
            const toSVG = (clientX, clientY) => {
                const pt = svg.createSVGPoint();
                pt.x = clientX;
                pt.y = clientY;
                return pt.matrixTransform(svg.getScreenCTM().inverse());
            };

            nodes.forEach((node, i) => {
                node.style.cursor = 'grab';
                node.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    dragging = i;
                    const svgPt = toSVG(e.clientX, e.clientY);
                    offset.x = svgPt.x - params.organisms[i].x;
                    offset.y = svgPt.y - params.organisms[i].y;
                    node.style.cursor = 'grabbing';
                });
            });

            svg.addEventListener('mousemove', (e) => {
                if (dragging !== null) {
                    const svgPt = toSVG(e.clientX, e.clientY);
                    params.organisms[dragging].x = Math.round(svgPt.x - offset.x);
                    params.organisms[dragging].y = Math.round(svgPt.y - offset.y);
                    onUpdate();
                }
            });

            svg.addEventListener('mouseup', () => {
                if (dragging !== null) {
                    dragging = null;
                }
            });

            svg.addEventListener('mouseleave', () => {
                dragging = null;
            });
        }, 50);
    },

    render(svg, params) {
        const W = 900;
        const H = 500;
        let svgContent = '';

        // Arrowhead definition
        svgContent += `
            <defs>
                <marker id="arrowFood" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <path d="M0,0 L10,3.5 L0,7 Z" fill="#666" />
                </marker>
            </defs>
        `;

        // Trophic level background bands
        if (params.showLevels) {
            const levels = [
                { label: 'Producers', y: 360, h: 100, colour: '#d8f3dc' },
                { label: 'Primary Consumers', y: 230, h: 120, colour: '#fde2c8' },
                { label: 'Secondary Consumers', y: 110, h: 110, colour: '#ffc5c5' },
                { label: 'Tertiary Consumers', y: 20, h: 85, colour: '#e0c3fc' },
            ];
            levels.forEach(lv => {
                svgContent += `<rect x="0" y="${lv.y}" width="${W}" height="${lv.h}" fill="${lv.colour}" opacity="0.4" />`;
                svgContent += `<text x="12" y="${lv.y + 16}" font-size="11" font-weight="600" fill="#666" opacity="0.7">${lv.label}</text>`;
            });
        }

        // Connection arrows (energy flow from prey to predator)
        if (params.showArrows) {
            params.connections.forEach(([from, to]) => {
                const a = params.organisms[from];
                const b = params.organisms[to];
                if (a && b) {
                    // Shorten arrows so they don't overlap nodes
                    const dx = b.x - a.x;
                    const dy = b.y - a.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const shrink = 30; // pixels to shrink from each end
                    const startX = a.x + (dx / dist) * shrink;
                    const startY = a.y + (dy / dist) * shrink;
                    const endX = b.x - (dx / dist) * shrink;
                    const endY = b.y - (dy / dist) * shrink;

                    svgContent += `<line x1="${startX}" y1="${startY}" x2="${endX}" y2="${endY}"
                        stroke="#888" stroke-width="1.5" marker-end="url(#arrowFood)" opacity="0.6" />`;
                }
            });
        }

        // Organism nodes
        params.organisms.forEach((org, i) => {
            const colour = params.nodeColours[org.level - 1] || '#666';
            const textWidth = org.name.length * 7.5 + 20;
            const nodeW = Math.max(textWidth, 60);
            const nodeH = 28;

            svgContent += `
                <g class="organism-node" data-index="${i}">
                    <rect x="${org.x - nodeW / 2}" y="${org.y - nodeH / 2}"
                          width="${nodeW}" height="${nodeH}" rx="14" ry="14"
                          fill="${colour}" opacity="0.9" />
                    <text x="${org.x}" y="${org.y + 5}" text-anchor="middle"
                          font-size="12" font-weight="600" fill="white">${escapeXml(org.name)}</text>
                </g>
            `;
        });

        // Title
        if (params.title) {
            svgContent += `
                <text x="${W / 2}" y="${H - 10}" text-anchor="middle"
                      font-size="15" font-weight="700" fill="#2c3e50">${escapeXml(params.title)}</text>
            `;
        }

        svg.innerHTML = svgContent;

        // Re-enable drag after render
        this._enableDrag(params, () => this.render(svg, params));
    }
};

// ============================================================
// PROCESS / CYCLE DIAGRAM MODULE
// ============================================================

diagramModules['process-cycle'] = {
    defaults: {
        title: 'Water Cycle',
        steps: [
            { name: 'Evaporation', x: 150, y: 380, description: 'Water heats up and turns to vapour' },
            { name: 'Condensation', x: 150, y: 120, description: 'Vapour cools and forms clouds' },
            { name: 'Precipitation', x: 500, y: 120, description: 'Water falls as rain, snow, or hail' },
            { name: 'Collection', x: 700, y: 380, description: 'Water gathers in rivers, lakes, oceans' },
            { name: 'Infiltration', x: 500, y: 380, description: 'Water soaks into the ground' },
        ],
        // Connections: [from index, to index]
        connections: [
            [0, 1], [1, 2], [2, 3], [2, 4], [3, 0], [4, 0]
        ],
        showDescriptions: true,
        nodeColour: '#4a6fa5',
        arrowColour: '#e07a3a',
        layout: 'custom' // 'circular' or 'custom'
    },

    presets: {
        'Water cycle': {},
        'Carbon cycle': {
            title: 'Carbon Cycle',
            steps: [
                { name: 'Atmosphere (CO₂)', x: 400, y: 60, description: 'Carbon dioxide in the air' },
                { name: 'Photosynthesis', x: 130, y: 200, description: 'Plants absorb CO₂' },
                { name: 'Respiration', x: 700, y: 200, description: 'Organisms release CO₂' },
                { name: 'Decomposition', x: 450, y: 400, description: 'Dead matter breaks down' },
                { name: 'Fossil Fuels', x: 150, y: 400, description: 'Carbon stored underground' },
                { name: 'Combustion', x: 700, y: 400, description: 'Burning releases CO₂' },
            ],
            connections: [
                [0, 1], [1, 3], [3, 0], [2, 0], [1, 2], [3, 4], [4, 5], [5, 0]
            ]
        },
        'Rock cycle': {
            title: 'Rock Cycle',
            steps: [
                { name: 'Igneous Rock', x: 150, y: 250, description: 'Formed from cooled magma/lava' },
                { name: 'Sediment', x: 450, y: 80, description: 'Broken down rock fragments' },
                { name: 'Sedimentary Rock', x: 720, y: 250, description: 'Layers compressed over time' },
                { name: 'Metamorphic Rock', x: 450, y: 420, description: 'Changed by heat and pressure' },
                { name: 'Magma', x: 450, y: 250, description: 'Molten rock beneath the surface' },
            ],
            connections: [
                [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 3], [2, 1], [3, 1]
            ]
        }
    },

    controls(params) {
        return `
            <h3>Process / Cycle Diagram Controls</h3>
            <div class="presets-row" id="presetButtons">
                ${Object.keys(this.presets).map(name =>
                    `<button class="btn-preset" data-preset="${name}">${name}</button>`
                ).join('')}
            </div>
            <div class="control-group" style="margin-top: 1rem;">
                <div class="control-item">
                    <label>Title</label>
                    <input type="text" id="ctrlTitle" value="${params.title}" style="width: 280px;">
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="ctrlShowDescriptions" ${params.showDescriptions ? 'checked' : ''}>
                    <label for="ctrlShowDescriptions">Show Descriptions</label>
                </div>
                <div class="control-item">
                    <label>Node Colour</label>
                    <input type="color" id="ctrlNodeColour" value="${params.nodeColour}">
                </div>
                <div class="control-item">
                    <label>Arrow Colour</label>
                    <input type="color" id="ctrlArrowColour" value="${params.arrowColour}">
                </div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-light); margin-top: 0.5rem;">
                Tip: Drag nodes to reposition them.
            </p>
        `;
    },

    bindControls(params, onUpdate) {
        document.querySelectorAll('#presetButtons .btn-preset').forEach(btn => {
            btn.addEventListener('click', () => {
                const preset = this.presets[btn.dataset.preset];
                if (preset && Object.keys(preset).length > 0) {
                    Object.assign(params, JSON.parse(JSON.stringify(preset)));
                    controlsPanel.innerHTML = this.controls(params);
                    this.bindControls(params, onUpdate);
                    onUpdate();
                }
            });
        });

        const titleEl = document.getElementById('ctrlTitle');
        if (titleEl) titleEl.addEventListener('input', () => { params.title = titleEl.value; onUpdate(); });

        const descEl = document.getElementById('ctrlShowDescriptions');
        if (descEl) descEl.addEventListener('change', () => { params.showDescriptions = descEl.checked; onUpdate(); });

        const nodeColEl = document.getElementById('ctrlNodeColour');
        if (nodeColEl) nodeColEl.addEventListener('input', () => { params.nodeColour = nodeColEl.value; onUpdate(); });

        const arrowColEl = document.getElementById('ctrlArrowColour');
        if (arrowColEl) arrowColEl.addEventListener('input', () => { params.arrowColour = arrowColEl.value; onUpdate(); });

        this._enableDrag(params, onUpdate);
    },

    _enableDrag(params, onUpdate) {
        setTimeout(() => {
            const svg = document.getElementById('diagramCanvas');
            const nodes = svg.querySelectorAll('.cycle-node');
            let dragging = null;
            let offset = { x: 0, y: 0 };

            const toSVG = (clientX, clientY) => {
                const pt = svg.createSVGPoint();
                pt.x = clientX;
                pt.y = clientY;
                return pt.matrixTransform(svg.getScreenCTM().inverse());
            };

            nodes.forEach((node, i) => {
                node.style.cursor = 'grab';
                node.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    dragging = i;
                    const svgPt = toSVG(e.clientX, e.clientY);
                    offset.x = svgPt.x - params.steps[i].x;
                    offset.y = svgPt.y - params.steps[i].y;
                });
            });

            svg.addEventListener('mousemove', (e) => {
                if (dragging !== null) {
                    const svgPt = toSVG(e.clientX, e.clientY);
                    params.steps[dragging].x = Math.round(svgPt.x - offset.x);
                    params.steps[dragging].y = Math.round(svgPt.y - offset.y);
                    onUpdate();
                }
            });

            svg.addEventListener('mouseup', () => { dragging = null; });
            svg.addEventListener('mouseleave', () => { dragging = null; });
        }, 50);
    },

    render(svg, params) {
        const W = 900;
        const H = 500;
        let svgContent = '';

        // Arrow marker
        svgContent += `
            <defs>
                <marker id="arrowCycle" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <path d="M0,0 L10,3.5 L0,7 Z" fill="${params.arrowColour}" />
                </marker>
            </defs>
        `;

        // Connection arrows (curved)
        params.connections.forEach(([from, to]) => {
            const a = params.steps[from];
            const b = params.steps[to];
            if (a && b) {
                const dx = b.x - a.x;
                const dy = b.y - a.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const shrink = 50;
                const startX = a.x + (dx / dist) * shrink;
                const startY = a.y + (dy / dist) * shrink;
                const endX = b.x - (dx / dist) * shrink;
                const endY = b.y - (dy / dist) * shrink;

                // Slight curve using quadratic bezier
                const midX = (startX + endX) / 2;
                const midY = (startY + endY) / 2;
                // Perpendicular offset for curve
                const perpX = -(endY - startY) * 0.15;
                const perpY = (endX - startX) * 0.15;

                svgContent += `<path d="M${startX},${startY} Q${midX + perpX},${midY + perpY} ${endX},${endY}"
                    fill="none" stroke="${params.arrowColour}" stroke-width="2.5" marker-end="url(#arrowCycle)" />`;
            }
        });

        // Step nodes
        params.steps.forEach((step, i) => {
            const nodeW = Math.max(step.name.length * 9 + 30, 80);
            const nodeH = 36;

            svgContent += `
                <g class="cycle-node" data-index="${i}">
                    <rect x="${step.x - nodeW / 2}" y="${step.y - nodeH / 2}"
                          width="${nodeW}" height="${nodeH}" rx="18" ry="18"
                          fill="${params.nodeColour}" />
                    <text x="${step.x}" y="${step.y + 5}" text-anchor="middle"
                          font-size="13" font-weight="600" fill="white">${escapeXml(step.name)}</text>
                </g>
            `;

            // Description below node
            if (params.showDescriptions && step.description) {
                svgContent += `
                    <text x="${step.x}" y="${step.y + nodeH / 2 + 16}" text-anchor="middle"
                          font-size="10" fill="#666" font-style="italic">${escapeXml(step.description)}</text>
                `;
            }
        });

        // Title
        if (params.title) {
            svgContent += `
                <text x="${W / 2}" y="${H - 10}" text-anchor="middle"
                      font-size="15" font-weight="700" fill="#2c3e50">${escapeXml(params.title)}</text>
            `;
        }

        svg.innerHTML = svgContent;
        this._enableDrag(params, () => this.render(svg, params));
    }
};

// ============================================================
// LABELLED STRUCTURE MODULE
// ============================================================

diagramModules['labelled-structure'] = {
    defaults: {
        title: 'Animal Cell Structure',
        // Central shape properties
        shapeType: 'ellipse', // 'ellipse', 'rectangle', 'custom'
        shapeCx: 450,
        shapeCy: 260,
        shapeW: 300,
        shapeH: 220,
        shapeColour: '#dce1e8',
        shapeBorder: '#4a6fa5',
        // Labels with leader lines
        labels: [
            { text: 'Cell Membrane', x: 100, y: 80, anchorX: 300, anchorY: 160 },
            { text: 'Nucleus', x: 750, y: 100, anchorX: 480, anchorY: 240 },
            { text: 'Cytoplasm', x: 100, y: 420, anchorX: 350, anchorY: 300 },
            { text: 'Mitochondria', x: 750, y: 350, anchorX: 550, anchorY: 310 },
            { text: 'Ribosome', x: 100, y: 250, anchorX: 370, anchorY: 220 },
            { text: 'Endoplasmic Reticulum', x: 750, y: 230, anchorX: 530, anchorY: 200 },
        ],
        showDots: true,
        labelColour: '#2c3e50',
        lineColour: '#888'
    },

    presets: {
        'Animal cell': {},
        'Plant cell': {
            title: 'Plant Cell Structure',
            shapeType: 'rectangle',
            shapeW: 320,
            shapeH: 240,
            labels: [
                { text: 'Cell Wall', x: 80, y: 70, anchorX: 280, anchorY: 140 },
                { text: 'Cell Membrane', x: 80, y: 140, anchorX: 310, anchorY: 180 },
                { text: 'Nucleus', x: 760, y: 100, anchorX: 480, anchorY: 230 },
                { text: 'Chloroplast', x: 760, y: 200, anchorX: 540, anchorY: 280 },
                { text: 'Vacuole', x: 760, y: 300, anchorX: 470, anchorY: 300 },
                { text: 'Cytoplasm', x: 80, y: 400, anchorX: 380, anchorY: 320 },
                { text: 'Mitochondria', x: 760, y: 400, anchorX: 550, anchorY: 330 },
            ]
        },
        'Eye diagram': {
            title: 'Structure of the Human Eye',
            shapeType: 'ellipse',
            shapeW: 260,
            shapeH: 240,
            labels: [
                { text: 'Cornea', x: 80, y: 80, anchorX: 310, anchorY: 200 },
                { text: 'Iris', x: 80, y: 170, anchorX: 340, anchorY: 230 },
                { text: 'Pupil', x: 80, y: 260, anchorX: 330, anchorY: 260 },
                { text: 'Lens', x: 80, y: 350, anchorX: 370, anchorY: 260 },
                { text: 'Retina', x: 750, y: 100, anchorX: 580, anchorY: 180 },
                { text: 'Optic Nerve', x: 750, y: 200, anchorX: 600, anchorY: 260 },
                { text: 'Vitreous Humour', x: 750, y: 300, anchorX: 500, anchorY: 280 },
                { text: 'Sclera', x: 750, y: 400, anchorX: 590, anchorY: 340 },
            ]
        }
    },

    controls(params) {
        return `
            <h3>Labelled Structure Controls</h3>
            <div class="presets-row" id="presetButtons">
                ${Object.keys(this.presets).map(name =>
                    `<button class="btn-preset" data-preset="${name}">${name}</button>`
                ).join('')}
            </div>
            <div class="control-group" style="margin-top: 1rem;">
                <div class="control-item">
                    <label>Title</label>
                    <input type="text" id="ctrlTitle" value="${params.title}" style="width: 280px;">
                </div>
                <div class="control-item">
                    <label>Shape</label>
                    <select id="ctrlShapeType">
                        <option value="ellipse" ${params.shapeType === 'ellipse' ? 'selected' : ''}>Ellipse</option>
                        <option value="rectangle" ${params.shapeType === 'rectangle' ? 'selected' : ''}>Rectangle</option>
                    </select>
                </div>
                <div class="toggle-item">
                    <input type="checkbox" id="ctrlShowDots" ${params.showDots ? 'checked' : ''}>
                    <label for="ctrlShowDots">Show Anchor Dots</label>
                </div>
            </div>
            <div class="control-group">
                <div class="control-item">
                    <label>Shape Colour</label>
                    <input type="color" id="ctrlShapeColour" value="${params.shapeColour}">
                </div>
                <div class="control-item">
                    <label>Border Colour</label>
                    <input type="color" id="ctrlShapeBorder" value="${params.shapeBorder}">
                </div>
                <div class="control-item">
                    <label>Width</label>
                    <input type="range" id="ctrlShapeW" min="100" max="400" value="${params.shapeW}">
                    <span class="range-value" id="valShapeW">${params.shapeW}px</span>
                </div>
                <div class="control-item">
                    <label>Height</label>
                    <input type="range" id="ctrlShapeH" min="100" max="350" value="${params.shapeH}">
                    <span class="range-value" id="valShapeH">${params.shapeH}px</span>
                </div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-light); margin-top: 0.5rem;">
                Tip: Drag labels and anchor dots to reposition them.
            </p>
        `;
    },

    bindControls(params, onUpdate) {
        document.querySelectorAll('#presetButtons .btn-preset').forEach(btn => {
            btn.addEventListener('click', () => {
                const preset = this.presets[btn.dataset.preset];
                if (preset && Object.keys(preset).length > 0) {
                    Object.assign(params, JSON.parse(JSON.stringify(preset)));
                    controlsPanel.innerHTML = this.controls(params);
                    this.bindControls(params, onUpdate);
                    onUpdate();
                }
            });
        });

        const titleEl = document.getElementById('ctrlTitle');
        if (titleEl) titleEl.addEventListener('input', () => { params.title = titleEl.value; onUpdate(); });

        const shapeEl = document.getElementById('ctrlShapeType');
        if (shapeEl) shapeEl.addEventListener('change', () => { params.shapeType = shapeEl.value; onUpdate(); });

        const dotsEl = document.getElementById('ctrlShowDots');
        if (dotsEl) dotsEl.addEventListener('change', () => { params.showDots = dotsEl.checked; onUpdate(); });

        const shapeColEl = document.getElementById('ctrlShapeColour');
        if (shapeColEl) shapeColEl.addEventListener('input', () => { params.shapeColour = shapeColEl.value; onUpdate(); });

        const borderColEl = document.getElementById('ctrlShapeBorder');
        if (borderColEl) borderColEl.addEventListener('input', () => { params.shapeBorder = borderColEl.value; onUpdate(); });

        const bindRange = (id, key, suffix = 'px') => {
            const el = document.getElementById(id);
            const valEl = document.getElementById('val' + id.replace('ctrl', ''));
            if (el) {
                el.addEventListener('input', () => {
                    params[key] = parseInt(el.value);
                    if (valEl) valEl.textContent = el.value + suffix;
                    onUpdate();
                });
            }
        };
        bindRange('ctrlShapeW', 'shapeW');
        bindRange('ctrlShapeH', 'shapeH');

        this._enableDrag(params, onUpdate);
    },

    _enableDrag(params, onUpdate) {
        setTimeout(() => {
            const svg = document.getElementById('diagramCanvas');
            let dragging = null;
            let dragType = null; // 'label' or 'anchor'
            let offset = { x: 0, y: 0 };

            const toSVG = (clientX, clientY) => {
                const pt = svg.createSVGPoint();
                pt.x = clientX;
                pt.y = clientY;
                return pt.matrixTransform(svg.getScreenCTM().inverse());
            };

            // Label text drag
            svg.querySelectorAll('.label-text').forEach((el, i) => {
                el.style.cursor = 'grab';
                el.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    dragging = i;
                    dragType = 'label';
                    const svgPt = toSVG(e.clientX, e.clientY);
                    offset.x = svgPt.x - params.labels[i].x;
                    offset.y = svgPt.y - params.labels[i].y;
                });
            });

            // Anchor dot drag
            svg.querySelectorAll('.anchor-dot').forEach((el, i) => {
                el.style.cursor = 'grab';
                el.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    dragging = i;
                    dragType = 'anchor';
                    const svgPt = toSVG(e.clientX, e.clientY);
                    offset.x = svgPt.x - params.labels[i].anchorX;
                    offset.y = svgPt.y - params.labels[i].anchorY;
                });
            });

            svg.addEventListener('mousemove', (e) => {
                if (dragging !== null) {
                    const svgPt = toSVG(e.clientX, e.clientY);
                    if (dragType === 'label') {
                        params.labels[dragging].x = Math.round(svgPt.x - offset.x);
                        params.labels[dragging].y = Math.round(svgPt.y - offset.y);
                    } else {
                        params.labels[dragging].anchorX = Math.round(svgPt.x - offset.x);
                        params.labels[dragging].anchorY = Math.round(svgPt.y - offset.y);
                    }
                    onUpdate();
                }
            });

            svg.addEventListener('mouseup', () => { dragging = null; });
            svg.addEventListener('mouseleave', () => { dragging = null; });
        }, 50);
    },

    render(svg, params) {
        const W = 900;
        const H = 500;
        let svgContent = '';

        const cx = params.shapeCx;
        const cy = params.shapeCy;
        const hw = params.shapeW / 2;
        const hh = params.shapeH / 2;

        // Central shape
        if (params.shapeType === 'ellipse') {
            svgContent += `<ellipse cx="${cx}" cy="${cy}" rx="${hw}" ry="${hh}"
                fill="${params.shapeColour}" stroke="${params.shapeBorder}" stroke-width="2.5" />`;
        } else {
            svgContent += `<rect x="${cx - hw}" y="${cy - hh}" width="${params.shapeW}" height="${params.shapeH}" rx="8"
                fill="${params.shapeColour}" stroke="${params.shapeBorder}" stroke-width="2.5" />`;
        }

        // Labels with leader lines
        params.labels.forEach((label, i) => {
            // Leader line
            svgContent += `<line x1="${label.x}" y1="${label.y}" x2="${label.anchorX}" y2="${label.anchorY}"
                stroke="${params.lineColour}" stroke-width="1.2" stroke-dasharray="4,3" />`;

            // Anchor dot
            if (params.showDots) {
                svgContent += `<circle class="anchor-dot" cx="${label.anchorX}" cy="${label.anchorY}" r="4"
                    fill="${params.shapeBorder}" />`;
            }

            // Label text with background
            const textW = label.text.length * 7.5 + 12;
            svgContent += `
                <g class="label-text" data-index="${i}">
                    <rect x="${label.x - textW / 2}" y="${label.y - 12}" width="${textW}" height="22" rx="4"
                          fill="white" stroke="${params.lineColour}" stroke-width="0.8" />
                    <text x="${label.x}" y="${label.y + 4}" text-anchor="middle"
                          font-size="12" font-weight="600" fill="${params.labelColour}">${escapeXml(label.text)}</text>
                </g>
            `;
        });

        // Title
        if (params.title) {
            svgContent += `
                <text x="${W / 2}" y="30" text-anchor="middle"
                      font-size="16" font-weight="700" fill="#2c3e50">${escapeXml(params.title)}</text>
            `;
        }

        svg.innerHTML = svgContent;
        this._enableDrag(params, () => this.render(svg, params));
    }
};


// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Extend a line from (x1,y1)→(x2,y2) to a target x coordinate.
 * Returns {x, y} of the extended point.
 */
function extendLine(x1, y1, x2, y2, targetX) {
    if (x2 === x1) return { x: targetX, y: y2 }; // Vertical line edge case
    const slope = (y2 - y1) / (x2 - x1);
    const targetY = y1 + slope * (targetX - x1);
    return { x: targetX, y: targetY };
}

/**
 * Escape text for safe SVG/XML insertion.
 */
function escapeXml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


// ============================================================
// SHELL: Tab switching, rendering, export
// ============================================================

/**
 * Switch to a diagram type: load its defaults, render controls and diagram.
 */
function switchDiagramType(type) {
    const mod = diagramModules[type];
    if (!mod) return;

    state.activeType = type;
    // Deep-clone defaults into params
    state.params = JSON.parse(JSON.stringify(mod.defaults));

    // Update active tab styling
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.tab[data-type="${type}"]`).classList.add('active');

    // Inject controls
    controlsPanel.innerHTML = mod.controls(state.params);
    mod.bindControls(state.params, renderCurrentDiagram);

    // Render diagram
    renderCurrentDiagram();
}

/**
 * Render the current diagram type with current params.
 */
function renderCurrentDiagram() {
    const mod = diagramModules[state.activeType];
    if (mod) {
        mod.render(canvas, state.params);
    }
}

// --- Tab click handlers ---
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        switchDiagramType(tab.dataset.type);
    });
});

// --- Export Functions ---

/**
 * Export the current SVG as a downloadable .svg file.
 */
document.getElementById('exportSvg').addEventListener('click', () => {
    const svgData = canvas.outerHTML;
    // Wrap in proper SVG XML declaration
    const fullSvg = `<?xml version="1.0" encoding="UTF-8"?>\n${svgData}`;
    const blob = new Blob([fullSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.activeType}-diagram.svg`;
    a.click();
    URL.revokeObjectURL(url);
});

/**
 * Export the current SVG as a PNG image via canvas rendering.
 */
document.getElementById('exportPng').addEventListener('click', () => {
    const svgData = canvas.outerHTML;
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
        // Render at 2x for crisp output
        const scale = 2;
        const c = document.createElement('canvas');
        c.width = 900 * scale;
        c.height = 500 * scale;
        const ctx = c.getContext('2d');
        ctx.scale(scale, scale);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 900, 500);
        ctx.drawImage(img, 0, 0, 900, 500);

        c.toBlob((blob) => {
            const pngUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = pngUrl;
            a.download = `${state.activeType}-diagram.png`;
            a.click();
            URL.revokeObjectURL(pngUrl);
        }, 'image/png');

        URL.revokeObjectURL(url);
    };
    img.src = url;
});

/**
 * Copy SVG markup to clipboard.
 */
document.getElementById('copyToClipboard').addEventListener('click', () => {
    const svgData = canvas.outerHTML;
    navigator.clipboard.writeText(svgData).then(() => {
        const btn = document.getElementById('copyToClipboard');
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = orig; }, 1500);
    }).catch(() => {
        alert('Failed to copy to clipboard. Your browser may not support this feature.');
    });
});


// ============================================================
// INITIALISE — Load the default diagram type on page load
// ============================================================

switchDiagramType('ray-diagram');
