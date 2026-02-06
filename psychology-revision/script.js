// ============================================
// NCEA Psychology Revision - JavaScript
// ============================================

// ============================================
// FLASHCARD DATA
// ============================================
const flashcards = {
    level2: [
        // Biological
        { category: 'biological', question: 'What is the main assumption of the biological approach?', answer: 'Behaviour and mental processes are shaped by biological factors including the brain, nervous system, hormones, and genetics.' },
        { category: 'biological', question: 'What do neurotransmitters do?', answer: 'Neurotransmitters are chemical messengers that transmit signals between neurons. Examples include serotonin (mood), dopamine (reward), and adrenaline (fight-or-flight).' },
        { category: 'biological', question: 'What is a limitation of the biological approach?', answer: 'It is reductionist - it reduces complex human behaviour to biology alone and ignores environmental and social influences.' },

        // Behaviourist
        { category: 'behaviourist', question: 'What is classical conditioning?', answer: 'Learning through association - pairing a neutral stimulus with an unconditioned stimulus until the neutral stimulus alone triggers the response. Discovered by Pavlov.' },
        { category: 'behaviourist', question: 'What is the difference between positive and negative reinforcement?', answer: 'Positive reinforcement adds something pleasant to increase behaviour. Negative reinforcement removes something unpleasant to increase behaviour. Both strengthen behaviour.' },
        { category: 'behaviourist', question: 'What does "tabula rasa" mean in behaviourism?', answer: 'It means "blank slate" - the idea that we are born with no innate knowledge or behaviour, and everything is learned from the environment.' },
        { category: 'behaviourist', question: 'Who developed operant conditioning?', answer: 'B.F. Skinner developed operant conditioning, which explains learning through consequences (reinforcement and punishment).' },

        // Cognitive
        { category: 'cognitive', question: 'What is a schema?', answer: 'A mental framework or concept that helps organise and interpret information. Schemas are built from experience and influence how we process new information.' },
        { category: 'cognitive', question: 'How does the cognitive approach view the mind?', answer: 'Like a computer - with input (senses), processing (thinking), and output (behaviour). Information is encoded, stored, and retrieved.' },
        { category: 'cognitive', question: 'What is a cognitive bias?', answer: 'A systematic error in thinking that affects judgments and decisions. Examples include confirmation bias and availability heuristic.' },

        // Humanistic
        { category: 'humanistic', question: 'What is self-actualisation?', answer: 'The innate drive to reach your full potential and become the best version of yourself. It\'s at the top of Maslow\'s hierarchy of needs.' },
        { category: 'humanistic', question: 'List Maslow\'s hierarchy of needs from bottom to top.', answer: '1. Physiological (food, water), 2. Safety, 3. Love/Belonging, 4. Esteem, 5. Self-actualisation. Lower needs must be met before higher needs.' },
        { category: 'humanistic', question: 'How does the humanistic approach differ from behaviourism?', answer: 'Humanistic psychology believes in free will and personal choice, while behaviourism sees behaviour as determined by environmental conditioning.' },

        // Psychodynamic
        { category: 'psychodynamic', question: 'What are the three parts of personality according to Freud?', answer: 'Id (pleasure principle - wants immediate gratification), Ego (reality principle - balances id and superego), and Superego (morality principle - conscience).' },
        { category: 'psychodynamic', question: 'What are defence mechanisms?', answer: 'Unconscious strategies the ego uses to protect itself from anxiety. Examples include denial, repression, and projection.' },
        { category: 'psychodynamic', question: 'What is the unconscious mind?', answer: 'The part of the mind containing thoughts, memories, and desires that we are not aware of but that still influence our behaviour.' },

        // Sociocultural
        { category: 'sociocultural', question: 'What is conformity?', answer: 'Changing your behaviour, attitudes, or beliefs to match those of a group. It can be due to normative influence (wanting to fit in) or informational influence (believing others are correct).' },
        { category: 'sociocultural', question: 'What is social identity?', answer: 'The part of your self-concept that comes from belonging to social groups (e.g., nationality, sports team, school).' },
        { category: 'sociocultural', question: 'How does culture influence behaviour?', answer: 'Culture shapes our values, beliefs, norms, and practices. It affects how we think, feel, and behave in social situations.' }
    ],

    level3: [
        // Biological
        { category: 'biological', question: 'What is neuroplasticity?', answer: 'The brain\'s ability to reorganise itself by forming new neural connections throughout life. This allows adaptation to new experiences and recovery from injury.' },
        { category: 'biological', question: 'What is epigenetics?', answer: 'The study of how environmental factors can switch genes on or off without changing the DNA sequence itself. This shows nature and nurture interact.' },
        { category: 'biological', question: 'What did the case of Phineas Gage demonstrate?', answer: 'That specific brain regions control specific functions. Damage to his prefrontal cortex caused personality changes, showing this area\'s role in impulse control and planning.' },
        { category: 'biological', question: 'What is localisation of function?', answer: 'The theory that specific areas of the brain are responsible for specific functions (e.g., Broca\'s area for speech production, Wernicke\'s area for language comprehension).' },

        // Behaviourist
        { category: 'behaviourist', question: 'What is social learning theory?', answer: 'Bandura\'s theory that learning can occur through observation and imitation of others, not just direct experience. Key processes: attention, retention, reproduction, motivation.' },
        { category: 'behaviourist', question: 'What is vicarious reinforcement?', answer: 'Learning from observing the consequences of others\' behaviour. If we see someone rewarded, we\'re more likely to imitate them.' },
        { category: 'behaviourist', question: 'What did Bandura\'s Bobo Doll study show?', answer: 'Children who observed adults being aggressive toward a Bobo doll were more likely to imitate that aggression, demonstrating observational learning.' },
        { category: 'behaviourist', question: 'What is self-efficacy?', answer: 'A person\'s belief in their ability to succeed in specific situations. High self-efficacy leads to greater effort and persistence.' },

        // Cognitive
        { category: 'cognitive', question: 'Describe the multi-store memory model.', answer: 'Atkinson & Shiffrin\'s model: Information flows from Sensory Memory → Short-term Memory (limited capacity, ~20 seconds) → Long-term Memory (unlimited capacity) through rehearsal.' },
        { category: 'cognitive', question: 'What are the components of working memory?', answer: 'Baddeley\'s model: Central Executive (controls attention), Phonological Loop (verbal info), Visuospatial Sketchpad (visual/spatial info), and Episodic Buffer (integrates information).' },
        { category: 'cognitive', question: 'What did Loftus and Palmer\'s research show?', answer: 'That memory is reconstructive and can be influenced by leading questions. Participants estimated higher speeds when asked "How fast were the cars going when they smashed?" vs "hit".' },
        { category: 'cognitive', question: 'What is reconstructive memory?', answer: 'Bartlett\'s idea that memories are not exact recordings but are actively rebuilt each time. Schemas can distort memories to fit expectations.' },

        // Humanistic
        { category: 'humanistic', question: 'What are Rogers\' three core conditions for therapy?', answer: 'Unconditional positive regard (acceptance without judgment), Empathy (understanding the client\'s perspective), and Congruence (therapist being genuine and authentic).' },
        { category: 'humanistic', question: 'What are conditions of worth?', answer: 'When a person feels they must meet certain conditions to receive love or acceptance from others, leading to incongruence between ideal self and actual self.' },
        { category: 'humanistic', question: 'What is the difference between idiographic and nomothetic approaches?', answer: 'Idiographic focuses on the unique individual (humanistic). Nomothetic seeks general laws applying to all people (scientific approaches like behaviourism).' },

        // Psychodynamic
        { category: 'psychodynamic', question: 'Name Freud\'s psychosexual stages in order.', answer: 'Oral (0-1), Anal (1-3), Phallic (3-6), Latency (6-puberty), Genital (puberty onwards). Fixation at any stage can affect adult personality.' },
        { category: 'psychodynamic', question: 'What is transference in psychoanalysis?', answer: 'When a client redirects feelings about significant people (usually parents) onto the therapist. This reveals unconscious patterns in relationships.' },
        { category: 'psychodynamic', question: 'How did Erik Erikson extend Freud\'s theory?', answer: 'Erikson proposed 8 psychosocial stages across the entire lifespan (not just childhood), focusing on social and cultural influences rather than just sexual drives.' },

        // Sociocultural
        { category: 'sociocultural', question: 'What is the difference between individualist and collectivist cultures?', answer: 'Individualist cultures (e.g., NZ, USA) prioritise personal goals and independence. Collectivist cultures (e.g., Japan, China) prioritise group harmony and interdependence.' },
        { category: 'sociocultural', question: 'What is Vygotsky\'s Zone of Proximal Development?', answer: 'The gap between what a learner can do alone and what they can achieve with guidance. Learning occurs best within this zone with appropriate scaffolding.' },
        { category: 'sociocultural', question: 'What did Milgram\'s obedience study demonstrate?', answer: '65% of participants administered maximum "shocks" when instructed by an authority figure. This shows the powerful influence of authority on behaviour.' },
        { category: 'sociocultural', question: 'What is the difference between emic and etic approaches?', answer: 'Emic studies behaviour from within a culture (culture-specific). Etic studies behaviour from outside, looking for universal patterns across cultures.' }
    ]
};

// ============================================
// QUIZ DATA
// ============================================
const quizQuestions = {
    level2: {
        multiple: [
            {
                question: 'According to the biological approach, behaviour is primarily influenced by:',
                options: ['Past experiences and learning', 'Brain structure, genes, and neurotransmitters', 'Unconscious desires', 'Social and cultural factors'],
                correct: 1,
                explanation: 'The biological approach focuses on how physical factors like brain structure, genetics, hormones, and neurotransmitters influence behaviour.'
            },
            {
                question: 'In classical conditioning, the neutral stimulus becomes a:',
                options: ['Unconditioned stimulus', 'Unconditioned response', 'Conditioned stimulus', 'Conditioned response'],
                correct: 2,
                explanation: 'After being paired with an unconditioned stimulus, the neutral stimulus becomes a conditioned stimulus that can trigger a response on its own.'
            },
            {
                question: 'Which approach views the mind as working like a computer?',
                options: ['Behaviourist', 'Psychodynamic', 'Cognitive', 'Humanistic'],
                correct: 2,
                explanation: 'The cognitive approach uses the computer analogy: input (senses) → processing (thinking) → output (behaviour).'
            },
            {
                question: 'Self-actualisation is a key concept in which approach?',
                options: ['Biological', 'Behaviourist', 'Psychodynamic', 'Humanistic'],
                correct: 3,
                explanation: 'Self-actualisation - reaching your full potential - is central to the humanistic approach, particularly Maslow\'s hierarchy of needs.'
            },
            {
                question: 'The id, ego, and superego are concepts from which approach?',
                options: ['Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
                correct: 2,
                explanation: 'Freud\'s psychodynamic approach proposed these three parts of personality: id (pleasure), ego (reality), and superego (morality).'
            },
            {
                question: 'Negative reinforcement involves:',
                options: ['Punishing unwanted behaviour', 'Adding something unpleasant', 'Removing something unpleasant to increase behaviour', 'Ignoring behaviour'],
                correct: 2,
                explanation: 'Negative reinforcement removes something unpleasant to strengthen behaviour (e.g., taking painkillers removes pain, reinforcing pill-taking).'
            },
            {
                question: 'A schema is best described as:',
                options: ['A type of memory', 'A mental framework for organising information', 'A defence mechanism', 'A stage of development'],
                correct: 1,
                explanation: 'Schemas are mental frameworks that help us organise and interpret information based on our experiences.'
            },
            {
                question: 'Which approach is most likely to use brain scans as a research method?',
                options: ['Humanistic', 'Biological', 'Psychodynamic', 'Sociocultural'],
                correct: 1,
                explanation: 'The biological approach uses scientific methods like brain scans, twin studies, and experiments to study physical factors.'
            },
            {
                question: 'Conformity is a key concept in which approach?',
                options: ['Biological', 'Cognitive', 'Psychodynamic', 'Sociocultural'],
                correct: 3,
                explanation: 'Conformity - changing behaviour to fit in with a group - is a key concept in the sociocultural approach.'
            },
            {
                question: 'A strength of the behaviourist approach is that it:',
                options: ['Focuses on free will', 'Considers the unconscious mind', 'Uses scientific, controlled experiments', 'Is holistic and considers the whole person'],
                correct: 2,
                explanation: 'Behaviourism is scientific, using controlled lab experiments to study observable behaviour.'
            },
            {
                question: 'Defence mechanisms are used by the:',
                options: ['Id', 'Ego', 'Superego', 'Conscious mind'],
                correct: 1,
                explanation: 'The ego uses defence mechanisms unconsciously to protect itself from anxiety caused by conflicts between the id and superego.'
            },
            {
                question: 'Maslow\'s hierarchy suggests that before seeking self-actualisation, a person must:',
                options: ['Have a high IQ', 'Meet their basic needs first', 'Undergo therapy', 'Be part of a group'],
                correct: 1,
                explanation: 'Maslow proposed that lower needs (physiological, safety, love, esteem) must be met before self-actualisation can be pursued.'
            },
            {
                question: 'Which neurotransmitter is associated with the reward system?',
                options: ['Serotonin', 'Adrenaline', 'Dopamine', 'Cortisol'],
                correct: 2,
                explanation: 'Dopamine is associated with pleasure and reward, playing a key role in motivation and addiction.'
            },
            {
                question: 'Pavlov\'s dogs experiment demonstrated:',
                options: ['Operant conditioning', 'Classical conditioning', 'Social learning', 'Self-actualisation'],
                correct: 1,
                explanation: 'Pavlov demonstrated classical conditioning when dogs learned to salivate at the sound of a bell that had been paired with food.'
            },
            {
                question: 'A limitation of the humanistic approach is that it:',
                options: ['Is too scientific', 'Is difficult to test scientifically', 'Ignores free will', 'Focuses too much on the unconscious'],
                correct: 1,
                explanation: 'Humanistic concepts like self-actualisation are subjective and difficult to measure or test scientifically.'
            }
        ],
        truefalse: [
            {
                question: 'The biological approach considers the environment as the main influence on behaviour.',
                correct: false,
                explanation: 'False. The biological approach focuses on biological factors (brain, genes, hormones) as the main influences on behaviour.'
            },
            {
                question: 'Positive reinforcement involves adding something pleasant to increase behaviour.',
                correct: true,
                explanation: 'True. Positive reinforcement adds a reward to strengthen behaviour (e.g., giving praise for good work).'
            },
            {
                question: 'The cognitive approach ignores internal mental processes.',
                correct: false,
                explanation: 'False. The cognitive approach specifically focuses on internal mental processes like memory, perception, and thinking.'
            },
            {
                question: 'Maslow believed that self-actualisation is the most basic human need.',
                correct: false,
                explanation: 'False. Self-actualisation is at the top of Maslow\'s hierarchy. Physiological needs (food, water) are the most basic.'
            },
            {
                question: 'According to Freud, the unconscious mind can influence our behaviour.',
                correct: true,
                explanation: 'True. A key idea in psychodynamic theory is that unconscious thoughts and feelings influence our behaviour without us being aware.'
            },
            {
                question: 'The behaviourist approach believes we are born as a "blank slate".',
                correct: true,
                explanation: 'True. Behaviourists believe in tabula rasa - that we are born without innate knowledge and all behaviour is learned.'
            },
            {
                question: 'Schemas help us organise and interpret new information.',
                correct: true,
                explanation: 'True. Schemas are mental frameworks built from experience that help us process and understand new information.'
            },
            {
                question: 'The sociocultural approach focuses only on individual factors, not group influences.',
                correct: false,
                explanation: 'False. The sociocultural approach specifically emphasises how social groups and culture influence behaviour.'
            },
            {
                question: 'Repression is a defence mechanism where unwanted memories are pushed into the unconscious.',
                correct: true,
                explanation: 'True. Repression involves unconsciously blocking distressing memories or thoughts from conscious awareness.'
            },
            {
                question: 'The humanistic approach is deterministic, believing behaviour is not under our control.',
                correct: false,
                explanation: 'False. The humanistic approach strongly believes in free will - that we choose our own behaviour and can change.'
            }
        ]
    },

    level3: {
        multiple: [
            {
                question: 'Neuroplasticity refers to the brain\'s ability to:',
                options: ['Produce new neurotransmitters', 'Reorganise and form new neural connections', 'Resist damage', 'Increase in size with age'],
                correct: 1,
                explanation: 'Neuroplasticity is the brain\'s ability to reorganise itself by forming new neural connections throughout life.'
            },
            {
                question: 'Bandura\'s Bobo Doll study provided evidence for:',
                options: ['Classical conditioning', 'Operant conditioning', 'Observational learning', 'Insight learning'],
                correct: 2,
                explanation: 'The Bobo Doll study showed that children learn aggressive behaviour by observing and imitating adult models.'
            },
            {
                question: 'In Baddeley\'s working memory model, the central executive:',
                options: ['Stores visual information', 'Processes verbal information', 'Controls attention and coordinates other components', 'Stores long-term memories'],
                correct: 2,
                explanation: 'The central executive is the control centre that directs attention and coordinates the other components of working memory.'
            },
            {
                question: 'According to Rogers, incongruence occurs when:',
                options: ['The id and superego conflict', 'There is a gap between ideal self and actual self', 'Schemas are incorrect', 'Basic needs are not met'],
                correct: 1,
                explanation: 'Incongruence is the mismatch between how a person sees themselves (actual self) and who they want to be (ideal self).'
            },
            {
                question: 'Loftus and Palmer\'s research on eyewitness testimony demonstrated:',
                options: ['Memory is like a video recording', 'Leading questions can alter memory', 'Eyewitness testimony is always reliable', 'Memory cannot be influenced'],
                correct: 1,
                explanation: 'Their study showed that the wording of questions can influence memory, demonstrating memory is reconstructive.'
            },
            {
                question: 'Which approach would explain depression as a chemical imbalance in the brain?',
                options: ['Cognitive', 'Humanistic', 'Biological', 'Sociocultural'],
                correct: 2,
                explanation: 'The biological approach explains mental health conditions through biological factors like neurotransmitter imbalances.'
            },
            {
                question: 'Vygotsky\'s Zone of Proximal Development refers to:',
                options: ['The unconscious mind', 'Tasks a learner can do with guidance but not alone', 'Maslow\'s hierarchy', 'Brain development stages'],
                correct: 1,
                explanation: 'The ZPD is the gap between what someone can do independently and what they can achieve with help.'
            },
            {
                question: 'Milgram\'s obedience study found that participants:',
                options: ['Refused to obey authority figures', 'Were unaffected by authority', '65% gave maximum shocks when instructed', 'Only obeyed in groups'],
                correct: 2,
                explanation: '65% of participants obeyed instructions to deliver maximum shocks, showing the powerful influence of authority.'
            },
            {
                question: 'Epigenetics demonstrates that:',
                options: ['Genes cannot change', 'Environment can affect gene expression without changing DNA', 'Only nature matters, not nurture', 'Behaviour is fully determined by genetics'],
                correct: 1,
                explanation: 'Epigenetics shows how environmental factors can switch genes on/off, demonstrating nature-nurture interaction.'
            },
            {
                question: 'Self-efficacy, according to Bandura, is:',
                options: ['Actual ability to complete a task', 'Belief in one\'s ability to succeed', 'Learning from direct experience', 'Unconscious motivation'],
                correct: 1,
                explanation: 'Self-efficacy is a person\'s belief in their capability to succeed, which influences effort and persistence.'
            },
            {
                question: 'The phonological loop in working memory processes:',
                options: ['Visual information', 'Verbal and acoustic information', 'Emotional memories', 'Motor skills'],
                correct: 1,
                explanation: 'The phonological loop handles verbal and sound-based information, including inner speech.'
            },
            {
                question: 'An emic approach to cultural research:',
                options: ['Studies behaviour from outside the culture', 'Looks for universal patterns', 'Studies behaviour from within the culture', 'Ignores cultural differences'],
                correct: 2,
                explanation: 'Emic research studies behaviour from inside a culture, looking at culture-specific meanings and practices.'
            },
            {
                question: 'Transference in psychodynamic therapy occurs when:',
                options: ['Memories transfer to long-term memory', 'The client projects feelings about others onto the therapist', 'Learning transfers to new situations', 'The therapist shares their experiences'],
                correct: 1,
                explanation: 'Transference happens when clients redirect feelings (often about parents) onto the therapist, revealing unconscious patterns.'
            },
            {
                question: 'Bartlett\'s "War of the Ghosts" study demonstrated:',
                options: ['Memory is accurate and unchanging', 'Memory is reconstructive and influenced by schemas', 'Classical conditioning affects memory', 'Memory improves with age'],
                correct: 1,
                explanation: 'Bartlett showed that people altered unfamiliar stories to fit their cultural schemas, demonstrating reconstructive memory.'
            },
            {
                question: 'Conditions of worth, according to Rogers, develop when:',
                options: ['Basic needs are met', 'A person reaches self-actualisation', 'Love and acceptance are conditional on meeting expectations', 'The id is dominant'],
                correct: 2,
                explanation: 'Conditions of worth arise when people feel they must meet certain conditions to be accepted and loved.'
            }
        ],
        truefalse: [
            {
                question: 'Neuroplasticity only occurs during childhood.',
                correct: false,
                explanation: 'False. The brain can form new neural connections throughout life, though plasticity is greatest in childhood.'
            },
            {
                question: 'Social learning can occur without direct reinforcement to the observer.',
                correct: true,
                explanation: 'True. Bandura showed people can learn by watching others being reinforced (vicarious reinforcement).'
            },
            {
                question: 'The working memory model replaced the multi-store model of memory.',
                correct: false,
                explanation: 'False. Baddeley\'s working memory model expanded on the short-term memory component of the multi-store model.'
            },
            {
                question: 'Unconditional positive regard means accepting someone without judgment.',
                correct: true,
                explanation: 'True. Rogers believed therapists should accept clients completely without conditions, which promotes growth.'
            },
            {
                question: 'Collectivist cultures prioritise individual achievement over group harmony.',
                correct: false,
                explanation: 'False. Collectivist cultures prioritise group harmony and interdependence. Individualist cultures emphasise personal achievement.'
            },
            {
                question: 'The HM case study demonstrated the role of the hippocampus in forming new memories.',
                correct: true,
                explanation: 'True. After his hippocampus was removed, HM could not form new long-term memories, showing its importance.'
            },
            {
                question: 'Freud believed psychosexual development continues throughout adulthood.',
                correct: false,
                explanation: 'False. Freud\'s psychosexual stages end at puberty with the genital stage. Erikson later proposed lifelong development.'
            },
            {
                question: 'According to Vygotsky, learning is primarily a social process.',
                correct: true,
                explanation: 'True. Vygotsky emphasised that cognitive development occurs through social interaction and cultural tools.'
            },
            {
                question: 'An etic approach looks for universal patterns across different cultures.',
                correct: true,
                explanation: 'True. Etic research examines behaviour from outside, looking for patterns that apply across cultures.'
            },
            {
                question: 'Erikson agreed with Freud that personality is fixed by age 5.',
                correct: false,
                explanation: 'False. Erikson proposed eight stages across the lifespan, believing development continues throughout life.'
            }
        ]
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================
let currentLevel = 2;
let currentSection = 'summaries';
let currentFlashcardIndex = 0;
let filteredFlashcards = [];
let currentQuiz = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let quizAnswers = [];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeLevelSelector();
    initializeNavigation();
    initializeApproachCards();
    initializeFlashcards();
    initializeQuiz();
    updateContentForLevel();
});

// ============================================
// LEVEL SELECTOR
// ============================================
function initializeLevelSelector() {
    const levelButtons = document.querySelectorAll('.level-btn');
    levelButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            levelButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLevel = parseInt(btn.dataset.level);
            updateContentForLevel();
        });
    });
}

function updateContentForLevel() {
    // Update approach card content visibility
    document.querySelectorAll('.level-content').forEach(content => {
        content.style.display = 'none';
    });
    document.querySelectorAll(`.level-content.level-${currentLevel}`).forEach(content => {
        content.style.display = 'block';
    });

    // Reset flashcards for new level
    filterFlashcards('all');
    updateFlashcard();

    // Reset quiz
    resetQuiz();
}

// ============================================
// NAVIGATION
// ============================================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    currentSection = sectionId;
}

// ============================================
// APPROACH CARDS
// ============================================
function initializeApproachCards() {
    const cards = document.querySelectorAll('.approach-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle expanded state
            const wasExpanded = card.classList.contains('expanded');

            // Optionally close other cards
            // cards.forEach(c => c.classList.remove('expanded'));

            if (!wasExpanded) {
                card.classList.add('expanded');
            } else {
                card.classList.remove('expanded');
            }
        });
    });
}

// ============================================
// FLASHCARDS
// ============================================
function initializeFlashcards() {
    const flashcard = document.getElementById('current-flashcard');
    const prevBtn = document.querySelector('.flashcard-nav.prev');
    const nextBtn = document.querySelector('.flashcard-nav.next');
    const shuffleBtn = document.getElementById('shuffle-cards');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // Flip card on click
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });

    // Navigation
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateFlashcard(-1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateFlashcard(1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (currentSection !== 'flashcards') return;
        if (e.key === 'ArrowLeft') navigateFlashcard(-1);
        if (e.key === 'ArrowRight') navigateFlashcard(1);
        if (e.key === ' ') {
            e.preventDefault();
            flashcard.classList.toggle('flipped');
        }
    });

    // Shuffle
    shuffleBtn.addEventListener('click', () => {
        shuffleFlashcards();
    });

    // Category filter
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterFlashcards(btn.dataset.category);
        });
    });

    // Initialize with all cards
    filterFlashcards('all');
}

function filterFlashcards(category) {
    const levelCards = currentLevel === 2 ? flashcards.level2 : flashcards.level3;

    if (category === 'all') {
        filteredFlashcards = [...levelCards];
    } else {
        filteredFlashcards = levelCards.filter(card => card.category === category);
    }

    currentFlashcardIndex = 0;
    updateFlashcard();
}

function navigateFlashcard(direction) {
    const flashcard = document.getElementById('current-flashcard');
    flashcard.classList.remove('flipped');

    currentFlashcardIndex += direction;
    if (currentFlashcardIndex < 0) {
        currentFlashcardIndex = filteredFlashcards.length - 1;
    } else if (currentFlashcardIndex >= filteredFlashcards.length) {
        currentFlashcardIndex = 0;
    }

    setTimeout(() => updateFlashcard(), 150);
}

function updateFlashcard() {
    if (filteredFlashcards.length === 0) {
        document.querySelector('.flashcard-question').textContent = 'No flashcards available for this category.';
        document.querySelector('.flashcard-answer').textContent = '';
        document.getElementById('current-card-num').textContent = '0';
        document.getElementById('total-cards').textContent = '0';
        return;
    }

    const card = filteredFlashcards[currentFlashcardIndex];
    document.querySelector('.flashcard-question').textContent = card.question;
    document.querySelector('.flashcard-answer').textContent = card.answer;
    document.getElementById('current-card-num').textContent = currentFlashcardIndex + 1;
    document.getElementById('total-cards').textContent = filteredFlashcards.length;
}

function shuffleFlashcards() {
    for (let i = filteredFlashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredFlashcards[i], filteredFlashcards[j]] = [filteredFlashcards[j], filteredFlashcards[i]];
    }
    currentFlashcardIndex = 0;
    document.getElementById('current-flashcard').classList.remove('flipped');
    updateFlashcard();
}

// ============================================
// QUIZ
// ============================================
function initializeQuiz() {
    const startBtn = document.getElementById('start-quiz');
    const nextBtn = document.getElementById('next-question');
    const retryBtn = document.getElementById('retry-quiz');

    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    retryBtn.addEventListener('click', resetQuiz);
}

function startQuiz() {
    const quizType = document.getElementById('quiz-type').value;
    const quizLength = parseInt(document.getElementById('quiz-length').value);

    const levelQuestions = currentLevel === 2 ? quizQuestions.level2 : quizQuestions.level3;
    let availableQuestions = [];

    if (quizType === 'multiple') {
        availableQuestions = [...levelQuestions.multiple];
    } else if (quizType === 'truefalse') {
        availableQuestions = [...levelQuestions.truefalse];
    } else {
        availableQuestions = [...levelQuestions.multiple, ...levelQuestions.truefalse];
    }

    // Shuffle and select questions
    for (let i = availableQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
    }

    currentQuiz = availableQuestions.slice(0, Math.min(quizLength, availableQuestions.length));
    currentQuestionIndex = 0;
    quizScore = 0;
    quizAnswers = [];

    document.querySelector('.quiz-options').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-total').textContent = currentQuiz.length;

    displayQuestion();
}

function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const questionText = document.querySelector('.question-text');
    const answersDiv = document.getElementById('quiz-answers');
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-question');

    // Update progress
    document.getElementById('quiz-current').textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex) / currentQuiz.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = `${progress}%`;

    questionText.textContent = question.question;
    answersDiv.innerHTML = '';
    feedback.innerHTML = '';
    feedback.className = 'quiz-feedback';
    nextBtn.style.display = 'none';

    if (question.options) {
        // Multiple choice
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-option';
            btn.textContent = option;
            btn.addEventListener('click', () => selectAnswer(index));
            answersDiv.appendChild(btn);
        });
    } else {
        // True/False
        ['True', 'False'].forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-option';
            btn.textContent = option;
            btn.addEventListener('click', () => selectAnswer(index === 0));
            answersDiv.appendChild(btn);
        });
    }
}

function selectAnswer(answer) {
    const question = currentQuiz[currentQuestionIndex];
    const answerBtns = document.querySelectorAll('.answer-option');
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-question');

    let isCorrect;
    if (question.options) {
        // Multiple choice
        isCorrect = answer === question.correct;
        answerBtns.forEach((btn, index) => {
            btn.classList.add('disabled');
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === answer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        // True/False
        isCorrect = answer === question.correct;
        answerBtns.forEach((btn, index) => {
            btn.classList.add('disabled');
            const btnValue = index === 0;
            if (btnValue === question.correct) {
                btn.classList.add('correct');
            } else if (btnValue === answer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    }

    // Record answer
    quizAnswers.push(isCorrect);
    if (isCorrect) {
        quizScore++;
        feedback.className = 'quiz-feedback correct';
        feedback.innerHTML = `<strong>Correct!</strong> ${question.explanation}`;
    } else {
        feedback.className = 'quiz-feedback incorrect';
        feedback.innerHTML = `<strong>Incorrect.</strong> ${question.explanation}`;
    }

    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = currentQuestionIndex === currentQuiz.length - 1 ? 'See Results' : 'Next Question →';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= currentQuiz.length) {
        showResults();
    } else {
        displayQuestion();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';

    document.getElementById('final-score').textContent = quizScore;
    document.getElementById('final-total').textContent = currentQuiz.length;

    const percentage = (quizScore / currentQuiz.length) * 100;
    let message = '';
    if (percentage === 100) {
        message = 'Perfect score! You\'ve mastered this material! 🌟';
    } else if (percentage >= 80) {
        message = 'Excellent work! You have a strong understanding. 💪';
    } else if (percentage >= 60) {
        message = 'Good effort! Review the topics you missed. 📚';
    } else if (percentage >= 40) {
        message = 'Keep studying! Focus on the approaches you found challenging. 📖';
    } else {
        message = 'Time to review! Go through the topic summaries again. 💡';
    }
    document.getElementById('score-message').textContent = message;

    // Show breakdown
    const breakdown = document.getElementById('results-breakdown');
    breakdown.innerHTML = '';
    quizAnswers.forEach(correct => {
        const dot = document.createElement('div');
        dot.className = `result-indicator ${correct ? 'correct' : 'incorrect'}`;
        breakdown.appendChild(dot);
    });
}

function resetQuiz() {
    currentQuiz = [];
    currentQuestionIndex = 0;
    quizScore = 0;
    quizAnswers = [];

    document.querySelector('.quiz-options').style.display = 'flex';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
}
