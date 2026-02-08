/* ============================================
   History of Psychology — Interactive Timeline
   ============================================ */

// ---- Timeline event data ----
// Each event has: year (for sorting), date (display label), title, summary,
// detail (expanded text), category ('psychology' or 'nz'), and optional image path.
const timelineEvents = [
    // --- Ancient ---
    {
        year: -387,
        date: "387 BC",
        title: "Plato — The Brain and the Mind",
        summary: "Plato suggested that the brain is the mechanism of mental processes.",
        detail: "The Greek philosopher Plato was one of the first thinkers to locate the mind in the brain, arguing that rational thought originates there. This was a significant early step toward a biological understanding of behaviour, even though it was based on philosophical reasoning rather than scientific evidence.",
        category: "psychology",
        approach: "biological",
        approachNote: "Plato's idea that the brain controls mental processes is an early form of biological thinking — linking behaviour to physical structures in the body."
    },
    {
        year: -335,
        date: "335 BC",
        title: "Aristotle — The Heart and the Mind",
        summary: "Aristotle suggested that the heart is the mechanism of mental processes.",
        detail: "Aristotle disagreed with his teacher Plato, arguing instead that the heart was the seat of thought and emotion, while the brain simply cooled the blood. This debate — brain vs heart — would take centuries to resolve and shows how early thinkers grappled with questions psychology still explores today.",
        category: "psychology",
        approach: "biological",
        approachNote: "Though Aristotle got the organ wrong, he was still trying to explain the mind through the body — a biological way of thinking."
    },

    // --- 1600s ---
    {
        year: 1650,
        date: "1600s",
        title: "Trepanning — Early Brain Surgery",
        summary: "Physicians drilled holes in skulls to try to cure epilepsy and depression.",
        detail: "Dr John Clarke (1609–76) and other physicians practised trepanning — drilling or cutting holes into the skull. They believed this could release evil spirits or relieve pressure causing conditions like epilepsy and depression. While crude, it reflected a growing belief that mental disorders had physical causes located in the brain.",
        category: "psychology",
        approach: "biological",
        approachNote: "Trepanning was a physical intervention on the brain to treat mental symptoms — a direct example of the biological approach to treatment, even in its earliest form."
    },

    // --- Te Ao Māori — pre-European ---
    {
        year: 1200,
        date: "Pre-1840",
        title: "Te Ao Māori — Hauora and Wellbeing",
        summary: "Long before European contact, Māori had holistic models of health and wellbeing grounded in whakapapa, wairua, and connection to whenua.",
        detail: "Māori understandings of hauora (health and wellbeing) were holistic centuries before Western psychology existed. Wellbeing was not just about the individual — it was inseparable from whānau (family), whakapapa (genealogy and identity), wairua (spirituality), and connection to whenua (land) and te taiao (the natural world). Tohunga (experts in healing, knowledge, and spiritual guidance) played a central role in maintaining the wellbeing of individuals and communities. These indigenous frameworks for understanding the mind, emotions, and behaviour predate and in many ways challenge the Western psychological approaches that would arrive much later.",
        category: "psychology",
        approach: "humanistic",
        approachNote: "Māori models of hauora focus on whole-person wellbeing — spiritual, emotional, physical, and social — which aligns most closely with the humanistic approach's emphasis on holistic health. However, Te Ao Māori is its own framework that predates and goes beyond any single Western approach."
    },

    // --- 1800s ---
    {
        year: 1808,
        date: "1808",
        title: "Franz Gall — Phrenology",
        summary: "Gall proposed that skull shape and bumps reveal personality traits.",
        detail: "Franz Gall developed phrenology — the idea that different mental abilities are located in specific brain regions, and that the shape of a person's skull reveals their personality. While phrenology was eventually discredited as pseudoscience, Gall's underlying idea that different brain areas have different functions turned out to be broadly correct and influenced modern neuroscience.",
        category: "psychology",
        approach: "biological",
        approachNote: "Phrenology tried to map personality to brain regions — a biological idea. While wrong about the method, the principle of brain localisation influenced modern biological psychology."
    },
    {
        year: 1840,
        date: "1840",
        title: "Te Tiriti o Waitangi Signed",
        summary: "Te Tiriti o Waitangi was signed between the British Crown and Māori rangatira, becoming the founding document of Aotearoa New Zealand.",
        detail: "Te Tiriti o Waitangi, signed in 1840, established a partnership between Māori and the Crown. The te reo Māori and English texts differed significantly — the Māori version guaranteed tino rangatiratanga (full authority) over taonga (treasures, including cultural practices and wellbeing), while the English version claimed sovereignty for Britain. These differences would have lasting consequences. European settlement increased rapidly after signing, and the disruption to Māori land, language, culture, and social structures had profound psychological and intergenerational effects that continue to be felt today.",
        category: "nz"
    },
    {
        year: 1859,
        date: "1859",
        title: "Darwin — On the Origin of Species",
        summary: "Darwin demonstrated that genetics and evolution influence behaviour through natural selection.",
        detail: "Charles Darwin's groundbreaking book On the Origin of Species introduced the theory of evolution by natural selection. For psychology, this was transformative — it suggested that human behaviour, like physical traits, could be shaped by evolutionary pressures. This idea laid the foundation for evolutionary psychology and the biological approach.",
        category: "psychology",
        approach: "biological",
        approachNote: "Darwin's theory of evolution is foundational to the biological approach — it explains behaviour as shaped by genetics and natural selection."
    },
    {
        year: 1879,
        date: "1879",
        title: "Wundt — First Psychology Laboratory",
        summary: "Wilhelm Wundt opened the world's first psychology laboratory in Leipzig, Germany.",
        detail: "German physiologist Wilhelm Wundt established the first formal psychology laboratory at the University of Leipzig. Some 17,000 students enrolled to study there. Wundt used a method called introspection — asking people to systematically describe their conscious experiences. This moment is widely considered the birth of psychology as a scientific discipline, separate from philosophy.",
        category: "psychology",
        approach: "cognitive",
        approachNote: "Wundt studied conscious experience through introspection — examining internal mental processes. This focus on the mind makes him a precursor to the cognitive approach."
    },
    {
        year: 1885,
        date: "1880s",
        title: "William James — American Psychology",
        summary: "William James emerged as one of the major US psychologists.",
        detail: "William James helped establish psychology in the United States, publishing his influential textbook The Principles of Psychology in 1890. James took a functionalist approach, asking what mental processes do and how they help us adapt — influenced by Darwin's ideas about evolution. He is often called the 'father of American psychology'.",
        category: "psychology",
        approach: "cognitive",
        approachNote: "James studied how the mind works and how mental processes help us adapt — a functionalist perspective that laid groundwork for the cognitive approach."
    },
    {
        year: 1886,
        date: "1886",
        title: "Mt Tarawera Erupts",
        summary: "The eruption killed 153 people and destroyed the famous Pink and White Terraces.",
        detail: "On 10 June 1886, Mt Tarawera in the Bay of Plenty erupted violently, burying several villages including Te Wairoa. The eruption destroyed the Pink and White Terraces, which had been considered one of the natural wonders of the world and a major tourist attraction.",
        category: "nz"
    },
    {
        year: 1890,
        date: "1890s",
        title: "Telephone Exchanges Open",
        summary: "Telephone exchanges opened in Auckland and Christchurch.",
        detail: "The arrival of telephone technology in New Zealand connected communities in new ways. Telephone exchanges opening in Auckland and Christchurch marked the beginning of rapid communications technology in the country.",
        category: "nz"
    },
    {
        year: 1893,
        date: "1893",
        title: "Women Win the Right to Vote",
        summary: "New Zealand became the first self-governing country where women could vote in national elections.",
        detail: "On 19 September 1893, New Zealand became the first self-governing country to grant women the right to vote in parliamentary elections. Led by Kate Sheppard and the suffrage movement, this was a landmark moment for equality and democratic rights worldwide.",
        category: "nz"
    },
    {
        year: 1907,
        date: "1907",
        title: "Tohunga Suppression Act",
        summary: "The New Zealand government banned traditional Māori healers (tohunga) from practising.",
        detail: "The Tohunga Suppression Act 1907 made it illegal for tohunga to practise traditional Māori healing. Tohunga had long been central to Māori communities — providing guidance on physical, mental, and spiritual wellbeing. The Act was part of a broader pattern of colonial policies that undermined Māori culture, language, and identity. By suppressing indigenous approaches to health and healing, it cut communities off from practices that had sustained hauora for generations, contributing to long-term harm to Māori wellbeing.",
        category: "nz"
    },

    // --- Early 1900s ---
    {
        year: 1905,
        date: "1905",
        title: "Binet — Intelligence Testing",
        summary: "French psychologist Alfred Binet developed the first practical intelligence test.",
        detail: "Alfred Binet, working with Théodore Simon, created the Binet-Simon scale to identify children who needed extra help in school. This was the first practical IQ test and introduced the concept of 'mental age'. It would later be adapted into the Stanford-Binet test and spark ongoing debates about what intelligence really is and whether it can be fairly measured.",
        category: "psychology",
        approach: "cognitive",
        approachNote: "Intelligence testing measures mental abilities like reasoning and problem-solving — core concerns of the cognitive approach."
    },
    {
        year: 1914,
        date: "1914",
        title: "World War One Begins",
        summary: "New Zealand soldiers were deployed overseas as part of the war effort.",
        detail: "World War One (1914–1918) had a profound impact on New Zealand. Around 100,000 New Zealanders served overseas, and over 18,000 were killed. The war also shaped psychology — the need to treat soldiers suffering from 'shell shock' (now known as PTSD) drove new approaches to understanding and treating mental health.",
        category: "nz"
    },
    {
        year: 1916,
        date: "1916",
        title: "US Army IQ Testing",
        summary: "The US Army began large-scale intelligence testing during World War One.",
        detail: "During WWI, the US Army used IQ tests (Army Alpha and Army Beta) to assess nearly two million recruits — placing them in roles suited to their abilities. This was the first mass application of psychological testing and demonstrated that psychology could have large-scale practical uses beyond the laboratory.",
        category: "psychology",
        approach: "cognitive",
        approachNote: "IQ testing measures cognitive abilities — mental processes like reasoning, memory, and problem-solving. This is a practical application of the cognitive approach."
    },
    {
        year: 1918,
        date: "1918",
        title: "WWI Ends — Influenza Epidemic",
        summary: "World War One ended. The influenza pandemic killed around 8,600 people in New Zealand.",
        detail: "The 1918 influenza pandemic struck New Zealand hard, killing approximately 8,600 people in just two months. Māori communities were disproportionately affected, with a death rate about seven times higher than Pākehā. The combined trauma of war and pandemic had lasting psychological effects on the nation.",
        category: "nz"
    },
    {
        year: 1920,
        date: "1920",
        title: "Watson & Rayner — Little Albert",
        summary: "John Watson and Rosalie Rayner demonstrated classical conditioning of fear in a child.",
        detail: "In one of psychology's most famous (and controversial) experiments, John B. Watson and his graduate student Rosalie Rayner conditioned a young child known as 'Little Albert' to fear a white rat by pairing it with a loud, frightening noise. Watson became one of the strongest advocates of behaviourism — the idea that psychology should focus only on observable behaviour, not internal mental states. The experiment raised serious ethical concerns that would influence modern research ethics.",
        category: "psychology",
        approach: "behaviourist",
        approachNote: "Classical conditioning — learning through association — is a core concept of the behaviourist approach. Watson was one of behaviourism's founding figures."
    },
    {
        year: 1930,
        date: "1930s",
        title: "Radio Broadcasting Begins",
        summary: "Radio stations began broadcasting across New Zealand.",
        detail: "Radio broadcasting transformed how New Zealanders received news, entertainment, and education. It connected isolated rural communities to the wider world and became a powerful tool for shaping public opinion and culture.",
        category: "nz"
    },
    {
        year: 1932,
        date: "1932",
        title: "Piaget — The Moral Judgment of the Child",
        summary: "Jean Piaget became the foremost cognitive theorist, showing that childhood experiences are central to development.",
        detail: "Swiss developmental psychologist Jean Piaget published The Moral Judgment of the Child, becoming the foremost cognitive theorist of his era. Piaget showed that children don't simply know less than adults — they think in fundamentally different ways at different stages of development. Children and the experiences of childhood began to be viewed as more important and worthy of study. His work transformed how we understand childhood and had enormous influence on education.",
        category: "psychology",
        approach: "cognitive",
        approachNote: "Piaget studied how children think — their mental schemas, stages of reasoning, and how understanding develops. He is one of the cognitive approach's most important figures."
    },
    {
        year: 1932,
        date: "1932",
        title: "Airmail Services Begin",
        summary: "Airmail services began operating in New Zealand.",
        detail: "The introduction of airmail services in New Zealand marked another step in connecting the country's communities and linking New Zealand to the wider world, shrinking the distances that had long defined life in the South Pacific.",
        category: "nz"
    },
    {
        year: 1936,
        date: "1936",
        title: "First Lobotomy in the US",
        summary: "The first lobotomy was performed in the US on a Kansas housewife with emotional problems.",
        detail: "The first lobotomy — cutting the brain via holes drilled in the head — was performed in the United States on a Kansas housewife suffering from emotional problems. Psycho-surgery, as these medical operations were called, is part of biological psychology. Lobotomies became widespread in the 1940s and 50s before being largely abandoned due to devastating side effects, and they remain one of the most controversial chapters in the history of mental health treatment.",
        category: "psychology",
        approach: "biological",
        approachNote: "Lobotomy is psycho-surgery — a direct physical intervention on the brain to change behaviour. This is the biological approach in its most extreme (and controversial) form."
    },
    {
        year: 1936,
        date: "1936",
        title: "Jean Batten Flies the Atlantic",
        summary: "New Zealand aviator Jean Batten made a solo flight across the Atlantic Ocean.",
        detail: "Jean Batten, one of New Zealand's most celebrated aviators, completed a solo flight across the Atlantic Ocean. Batten set multiple world records for long-distance flying and became a national hero, demonstrating New Zealand's growing presence on the world stage.",
        category: "nz"
    },
    {
        year: 1942,
        date: "1942",
        title: "Skinner — Operant Conditioning",
        summary: "B.F. Skinner explored the behaviourist perspective with his concept of operant conditioning.",
        detail: "US psychologist B.F. Skinner developed the concept of operant conditioning, which demonstrates the effect of punishment and reinforcement on behaviour. Using his famous 'Skinner box', he showed that behaviour could be shaped systematically through consequences — reinforcement increases a behaviour, while punishment decreases it. Skinner became one of the most influential psychologists of the 20th century and a leading figure in the behaviourist approach.",
        category: "psychology",
        approach: "behaviourist",
        approachNote: "Operant conditioning — learning through reinforcement and punishment — is a central concept of the behaviourist approach. Skinner is one of its most famous figures."
    },
    {
        year: 1942,
        date: "1942",
        title: "Seacliff Mental Hospital Fire",
        summary: "37 of the 39 female patients in Ward 5 at Seacliff Mental Hospital near Dunedin were killed in a fire.",
        detail: "In one of New Zealand's worst institutional tragedies, 37 of the 39 female patients in Ward 5 at Seacliff Mental Hospital near Dunedin were killed when a fire broke out. The disaster highlighted the appalling conditions in which people with mental illness were confined, and raised serious questions about the care and treatment of vulnerable people in New Zealand's mental health system.",
        category: "nz"
    },
    {
        year: 1943,
        date: "1943",
        title: "Maslow — Hierarchy of Needs",
        summary: "Abraham Maslow contributed to early humanistic psychology with his theory of human motivation.",
        detail: "US psychologist Abraham Maslow proposed the hierarchy of needs — a theory of human motivation arranged in levels from basic survival needs (food, safety) to higher needs like belonging, esteem, and self-actualisation. The humanistic approach that Maslow helped establish would eventually rival behavioural psychology, arguing that people are motivated by growth and potential rather than just rewards and punishments.",
        category: "psychology",
        approach: "humanistic",
        approachNote: "Maslow's hierarchy of needs focuses on personal growth and reaching your potential (self-actualisation) — core ideas of the humanistic approach."
    },
    {
        year: 1953,
        date: "1953",
        title: "Hillary and Tenzing Summit Everest",
        summary: "New Zealander Edmund Hillary and Sherpa Tenzing Norgay became the first people to climb Mount Everest.",
        detail: "On 29 May 1953, New Zealander Sir Edmund Hillary and Nepali-Indian Sherpa Tenzing Norgay became the first climbers confirmed to have reached the summit of Mount Everest. The achievement made Hillary a national icon and a source of immense pride for New Zealand.",
        category: "nz"
    },
    {
        year: 1962,
        date: "1962",
        title: "Tohunga Suppression Act Repealed",
        summary: "The 1907 law banning traditional Māori healers was finally repealed.",
        detail: "After 55 years, the Tohunga Suppression Act was repealed, removing the legal prohibition on traditional Māori healing practices. The repeal was part of a broader shift toward recognising the value of Māori culture and tikanga. However, by this time, decades of suppression had already caused significant damage — many traditional practices and knowledge had been lost or driven underground, and the effects of cultural disconnection on Māori wellbeing would take generations to address.",
        category: "nz"
    },

    // --- Mid-to-late 20th century ---
    {
        year: 1968,
        date: "1968",
        title: "DSM-II Published",
        summary: "The second edition of the Diagnostic and Statistical Manual of Mental Disorders was published.",
        detail: "The DSM-II (Diagnostic and Statistical Manual of Mental Disorders, second edition) was published by the American Psychiatric Association. This manual provided a standardised system for diagnosing modern mental illnesses, giving psychologists and psychiatrists a shared language for identifying and classifying psychological disorders. The DSM has been revised several times since and remains a cornerstone of clinical psychology.",
        category: "psychology",
        approach: "biological",
        approachNote: "The DSM uses a medical model to classify mental disorders — treating them as diagnosable conditions with biological and clinical features. This aligns with the biological approach to mental health."
    },
    {
        year: 1968,
        date: "1968",
        title: "The Wahine Disaster",
        summary: "The inter-island ferry Wahine sank in Wellington Harbour, killing 51 people.",
        detail: "On 10 April 1968, the inter-island ferry TEV Wahine was hit by a fierce storm as it entered Wellington Harbour. The ship capsized and sank, killing 51 people. It remains one of New Zealand's worst maritime disasters and a defining moment in the national consciousness.",
        category: "nz"
    },
    {
        year: 1971,
        date: "1971",
        title: "Stanford Prison Experiment",
        summary: "Philip Zimbardo's study of captivity quickly got out of hand and was ended early.",
        detail: "US psychologist Philip Zimbardo conducted the Stanford Prison Experiment, assigning volunteer students to the roles of 'prisoners' and 'guards' in a simulated prison. The study aimed to explore how people respond to captivity and authority, but it quickly got out of hand — guards became increasingly cruel and prisoners suffered severe psychological distress. The experiment was ended after just six days. It remains a powerful (and controversial) demonstration of how situational factors can shape behaviour.",
        category: "psychology",
        approach: "sociocultural",
        approachNote: "The Stanford Prison Experiment showed how social roles and situational pressure shape behaviour — people acted according to the role they were given, not their personality. This is a key idea in the sociocultural approach."
    },
    {
        year: 1971,
        date: "1971",
        title: "TV2 and Social Change",
        summary: "TV2 prepared to launch. The rise of feminism and pro-abortion marches marked growing social activism.",
        detail: "The early 1970s saw significant social change in New Zealand. TV2 was preparing to launch, expanding the media landscape. At the same time, the rise of the feminist movement and pro-abortion marches reflected a growing culture of social activism and debate about rights, equality, and personal freedom.",
        category: "nz"
    },
    {
        year: 1974,
        date: "1974",
        title: "Milgram — Obedience to Authority",
        summary: "Stanley Milgram published findings from his infamous obedience experiments of the 1960s.",
        detail: "US social psychologist Stanley Milgram published Obedience to Authority, presenting the findings of his now-infamous experiments conducted in the 1960s. Participants were instructed by an authority figure to deliver what they believed were increasingly dangerous electric shocks to another person. A startling 65% obeyed to the maximum level. The experiments revealed how powerfully authority can override personal conscience, and remain among the most discussed studies in psychology.",
        category: "psychology",
        approach: "sociocultural",
        approachNote: "Milgram's experiments demonstrated the power of social influence and obedience to authority — how the social situation, not just the individual, drives behaviour. This is central to the sociocultural approach."
    },
    {
        year: 1978,
        date: "1978",
        title: "Ainsworth — Attachment Theory",
        summary: "Mary Ainsworth published her work on attachment theory and the Strange Situation Experiment.",
        detail: "US-Canadian developmental psychologist Mary Ainsworth published her influential work on attachment theory, building on John Bowlby's earlier ideas. Her Strange Situation Experiment observed how infants responded when briefly separated from their caregivers, identifying distinct attachment styles — secure, insecure-avoidant, and insecure-resistant. Ainsworth's research transformed our understanding of early relationships and their lasting impact on emotional development.",
        category: "psychology",
        approach: "psychodynamic",
        approachNote: "Attachment theory has roots in the psychodynamic approach — it focuses on how early childhood relationships with caregivers shape emotional development and behaviour throughout life, echoing Freud's emphasis on early experience."
    },
    {
        year: 1982,
        date: "1982",
        title: "Te Kōhanga Reo Established",
        summary: "The first Māori language nests were established, immersing young children in te reo Māori and tikanga.",
        detail: "Te Kōhanga Reo (language nests) were established to revitalise te reo Māori by immersing preschool children in the language and tikanga (customs). By this time, decades of colonial policies — including punishing children for speaking Māori in schools — had brought the language to the brink of extinction. The Kōhanga Reo movement recognised a critical psychological insight: cultural identity, language, and wellbeing are deeply interconnected. Restoring te reo was not just a cultural act — it was an act of healing.",
        category: "nz"
    },
    {
        year: 1984,
        date: "1984",
        title: "Mason Durie — Te Whare Tapa Whā",
        summary: "Sir Mason Durie introduced Te Whare Tapa Whā, a Māori model of health and wellbeing now widely used across Aotearoa.",
        detail: "Māori psychiatrist Sir Mason Durie introduced Te Whare Tapa Whā (the four-sided house), a model of hauora that describes wellbeing as a whare (house) supported by four walls: taha wairua (spiritual wellbeing), taha hinengaro (mental and emotional wellbeing), taha tinana (physical wellbeing), and taha whānau (family and social wellbeing). If any wall is weakened, the whole house is at risk. This model drew on traditional Māori understandings of health and offered a holistic alternative to Western medical models that tend to separate mind and body. Te Whare Tapa Whā is now one of the most widely used health frameworks in New Zealand — used in schools, health services, and psychology practice — and is a powerful example of indigenous knowledge enriching modern approaches to wellbeing.",
        category: "psychology",
        approach: "humanistic",
        approachNote: "Te Whare Tapa Whā focuses on whole-person wellbeing — spiritual, mental, physical, and social — which aligns with the humanistic approach's emphasis on holistic health and self-actualisation. However, it is an indigenous Māori model that predates and goes beyond any single Western psychological approach."
    },
    {
        year: 1983,
        date: "1983",
        title: "Gardner — Multiple Intelligences",
        summary: "Howard Gardner introduced his theory of multiple intelligences.",
        detail: "American psychologist Howard Gardner challenged the traditional view of intelligence as a single, measurable ability (IQ). He proposed that people have multiple intelligences — including linguistic, logical-mathematical, musical, spatial, bodily-kinaesthetic, interpersonal, intrapersonal, and naturalistic. This theory had a major impact on education, encouraging teachers to recognise and support different kinds of ability in students.",
        category: "psychology",
        approach: "cognitive",
        approachNote: "Gardner's theory is about how we think and process information — proposing multiple types of mental ability rather than one general intelligence. This is a cognitive approach to understanding the mind."
    },
    {
        year: 1985,
        date: "1985",
        title: "Merzenich — Neuroplasticity",
        summary: "Michael Merzenich showed that the brain can physically change shape through experience.",
        detail: "Neuroscientist Michael Merzenich demonstrated that sensory and motor maps in the brain can reorganise themselves in response to experience — a property called neuroplasticity. This overturned the long-held belief that the adult brain is fixed and unchangeable. Neuroplasticity is now a cornerstone of modern neuroscience and has implications for rehabilitation, learning, and mental health treatment.",
        category: "psychology",
        approach: "biological",
        approachNote: "Neuroplasticity is about how the physical brain changes — this is the biological approach, studying the relationship between brain structure and behaviour."
    },
    {
        year: 1987,
        date: "1987",
        title: "Stock Market Crash",
        summary: "The 1987 crash left around 100,000 New Zealanders unemployed.",
        detail: "The global stock market crash of October 1987 hit New Zealand particularly hard. Share prices collapsed, businesses failed, and unemployment surged to around 100,000. The economic upheaval had widespread psychological and social effects on communities across the country.",
        category: "nz"
    },
    {
        year: 1997,
        date: "1997",
        title: "Deep Blue Beats Kasparov",
        summary: "IBM's Deep Blue supercomputer defeated the world's best chess player — a milestone for artificial intelligence.",
        detail: "In 1997, IBM's Deep Blue became the first computer to defeat a reigning world chess champion, Garry Kasparov, in a full match. This was a landmark moment for artificial intelligence and raised profound questions about the nature of intelligence, thinking, and what makes human cognition unique — questions at the heart of cognitive psychology.",
        category: "psychology",
        approach: "cognitive",
        approachNote: "Deep Blue raised questions about thinking, intelligence, and information processing — can a machine 'think'? This connects directly to the cognitive approach, which often compares the mind to a computer."
    },
    {
        year: 2000,
        date: "2000s",
        title: "The Digital Age",
        summary: "Online shopping grew rapidly. People began spending more time on screens than interacting face-to-face.",
        detail: "The rise of the internet and digital technology transformed daily life. Online shopping, social media, and screen-based entertainment became dominant. Psychologists began studying the effects of screen time, social media, and digital communication on mental health, social skills, and wellbeing — research that continues to be highly relevant today.",
        category: "nz"
    },
    {
        year: 2003,
        date: "2003",
        title: "Human Genome Mapped",
        summary: "Genomic researchers finished mapping the human genome, advancing the biological study of behaviour.",
        detail: "The Human Genome Project completed its mapping of all human DNA. For psychology, this opened new frontiers in understanding the genetic basis of behaviour, mental health conditions, and individual differences. Scientists continue to explore how genes interact with environment to shape who we are — the modern face of the nature–nurture debate.",
        category: "psychology",
        approach: "biological",
        approachNote: "Mapping the human genome is about understanding genetics — how our DNA influences behaviour and mental health. This is the biological approach at its most modern."
    },

    // --- 2010s and beyond ---
    {
        year: 2011,
        date: "2011",
        title: "Christchurch Earthquake",
        summary: "A magnitude 6.3 earthquake struck Christchurch, killing 185 people and devastating the city.",
        detail: "On 22 February 2011, a shallow earthquake struck Christchurch during the middle of a working day. Buildings collapsed, 185 people were killed, and thousands were injured. The earthquake and its aftershocks had profound psychological effects — widespread PTSD, anxiety, and grief. Research into the mental health impact of the quakes has contributed to our understanding of trauma and community resilience.",
        category: "nz"
    },
    {
        year: 2013,
        date: "2013",
        title: "DSM-5 Published",
        summary: "The fifth edition of the Diagnostic and Statistical Manual of Mental Disorders was released.",
        detail: "The American Psychiatric Association published the DSM-5, replacing the DSM-IV which had been in use since 1994. The revision updated how mental disorders are classified and diagnosed — for example, Asperger's syndrome was folded into a broader Autism Spectrum Disorder diagnosis. The DSM-5 remains the standard reference for diagnosing mental health conditions worldwide and reflects the ongoing evolution of how psychology understands mental illness.",
        category: "psychology",
        approach: "biological",
        approachNote: "The DSM uses a medical/clinical model to classify mental disorders — diagnosing conditions based on observable symptoms, much like physical illness. This aligns with the biological approach."
    },
    {
        year: 2015,
        date: "2015",
        title: "The Replication Crisis",
        summary: "A major study found that only 39 of 100 published psychology experiments could be successfully replicated.",
        detail: "The Reproducibility Project attempted to replicate 100 psychology studies published in top journals. Only 39 produced the same results the second time. This 'replication crisis' shook the field, raising serious questions about research methods, publication bias, and whether some well-known findings were reliable. It led to major reforms in how psychological research is conducted and reported — including pre-registration of studies and open data sharing.",
        category: "psychology",
        approach: "sociocultural",
        approachNote: "Many of the studies that failed to replicate were from social psychology — research on social influence, priming, and group behaviour. The crisis particularly challenged findings within the sociocultural approach, though it affected all areas of psychology."
    },
    {
        year: 2016,
        date: "2016",
        title: "Kaikōura Earthquake",
        summary: "A magnitude 7.8 earthquake struck near Kaikōura, isolating the town and causing widespread damage across the South and North Islands.",
        detail: "On 14 November 2016, a powerful magnitude 7.8 earthquake struck near Kaikōura just after midnight. Two people were killed and the town was completely cut off when massive landslides blocked road and rail links. Significant damage also occurred in Wellington. The earthquake had a considerable psychological impact — communities already carrying the emotional weight of the Canterbury quakes faced renewed trauma. Research found elevated rates of anxiety, PTSD, and stress in affected areas, particularly among those who experienced displacement and prolonged disruption to daily life. The Kaikōura quake reinforced what psychologists had learned from Christchurch: recovery from natural disasters is as much psychological as it is physical, and community connection and cultural support are essential to resilience.",
        category: "nz"
    },
    {
        year: 2018,
        date: "2018",
        title: "Social Media and Teen Mental Health",
        summary: "Research increasingly linked heavy social media use to rising rates of anxiety and depression in young people.",
        detail: "By 2018, a growing body of research was documenting links between social media use and declining mental health in teenagers — particularly girls. Studies found correlations with anxiety, depression, poor sleep, and negative body image. The debate intensified over whether social media was a cause or merely a correlate of teen distress, and led to calls for regulation, screen time limits, and digital wellbeing education in schools. This remains one of the most actively researched areas of modern psychology.",
        category: "psychology",
        approach: "sociocultural",
        approachNote: "Social media's impact on mental health is driven by social comparison, peer pressure, and cultural norms — all key concerns of the sociocultural approach. Our online social environment shapes how we think, feel, and behave."
    },
    {
        year: 2018,
        date: "2018",
        title: "He Ara Oranga — Mental Health Inquiry",
        summary: "A landmark government inquiry called for a transformation of mental health services in Aotearoa, with a focus on equity for Māori.",
        detail: "He Ara Oranga (the pathway to wellness), the Government Inquiry into Mental Health and Addiction, reported its findings in 2018. The inquiry heard from thousands of New Zealanders and found significant inequities in mental health outcomes — particularly for Māori, Pasifika, rainbow communities, and young people. It called for a fundamental shift away from a purely clinical model toward community-based, culturally grounded approaches to wellbeing. For Māori, the inquiry emphasised the importance of kaupapa Māori services, whānau-centred care, and models like Te Whare Tapa Whā. It was a pivotal moment for mental health in Aotearoa.",
        category: "nz"
    },
    {
        year: 2019,
        date: "2019",
        title: "Christchurch Mosque Shootings",
        summary: "A terrorist attack on two mosques killed 51 people, profoundly affecting the nation.",
        detail: "On 15 March 2019, a gunman attacked two mosques in Christchurch during Friday prayers, killing 51 people and injuring 40 others. It was the deadliest mass shooting in New Zealand's modern history. The attack caused widespread grief and trauma, and prompted a national response including rapid gun law reform, a Royal Commission of Inquiry, and significant investment in mental health support for affected communities. Prime Minister Jacinda Ardern's compassionate leadership during the crisis drew international recognition.",
        category: "nz"
    },
    {
        year: 2020,
        date: "2020",
        title: "COVID-19 — Global Mental Health Crisis",
        summary: "The pandemic triggered a worldwide surge in anxiety, depression, and psychological distress.",
        detail: "The COVID-19 pandemic caused a global mental health crisis alongside the physical health emergency. Lockdowns, social isolation, job losses, fear of illness, and grief led to dramatic increases in anxiety (up to 50.9% prevalence in some studies), depression (up to 48.3%), and PTSD. Young people, women, and healthcare workers were particularly affected. The pandemic accelerated the adoption of telehealth for mental health services and highlighted the critical importance of psychological wellbeing to overall health.",
        category: "psychology",
        approach: "sociocultural",
        approachNote: "COVID's mental health impact was largely driven by social factors — isolation, loss of social connection, economic stress, and disrupted routines. The sociocultural approach helps explain why removing people from their social environment has such a devastating psychological effect."
    },
    {
        year: 2020,
        date: "2020",
        title: "NZ COVID-19 Lockdowns",
        summary: "New Zealand declared a State of National Emergency and entered strict lockdown to eliminate COVID-19.",
        detail: "On 25 March 2020, New Zealand entered one of the world's strictest lockdowns under an elimination strategy. The 'team of five million' approach was initially successful at eliminating community transmission, but lockdowns took a significant toll on mental health. Research showed increased rates of anxiety, depression, and loneliness — particularly among young people, Māori and Pasifika communities, and those in already vulnerable situations. The pandemic reshaped how New Zealanders think about mental health and wellbeing.",
        category: "nz"
    },
    {
        year: 2023,
        date: "2023",
        title: "ChatGPT and the Rise of AI",
        summary: "AI chatbots raised profound questions about the nature of intelligence, thinking, and what makes us human.",
        detail: "The rapid rise of large language models like ChatGPT (released late 2022) reignited fundamental questions at the heart of cognitive psychology: What is intelligence? Can machines truly think, or are they just sophisticated pattern-matchers? How does human cognition differ from artificial intelligence? These questions echo the mind-as-computer metaphor that has been central to the cognitive approach since the 1960s — but with AI now capable of passing university exams and holding conversations, the line between human and machine cognition has become more contested than ever.",
        category: "psychology",
        approach: "cognitive",
        approachNote: "AI and chatbots connect directly to the cognitive approach's central metaphor — the mind as an information processor. The question of whether machines can truly 'think' is a modern version of debates cognitive psychologists have been having for decades."
    },
    {
        year: 2023,
        date: "2023",
        title: "Cyclone Gabrielle",
        summary: "New Zealand's most costly natural disaster caused widespread destruction and community trauma across the North Island.",
        detail: "In February 2023, Cyclone Gabrielle struck the North Island, causing catastrophic flooding and landslides — particularly in Hawke's Bay, Tairāwhiti, and the Coromandel. Eleven people were killed and thousands were displaced. The cyclone became New Zealand's costliest natural disaster, with significant psychological impacts on affected communities including trauma, anxiety, and the stress of displacement and rebuilding.",
        category: "nz"
    },
    {
        year: 2024,
        date: "2024",
        title: "Neuralink — Brain-Computer Interface",
        summary: "Elon Musk's Neuralink successfully implanted a brain-computer interface in a human for the first time.",
        detail: "In January 2024, Neuralink implanted its first brain-computer interface (BCI) in a human patient, allowing them to control a computer cursor using only their thoughts. While BCIs have been in development for years, this represented a high-profile milestone in merging technology with the brain. For psychology, BCIs raise fascinating questions about the relationship between brain activity and behaviour, the nature of consciousness, and the future of treating neurological and mental health conditions through direct brain intervention.",
        category: "psychology",
        approach: "biological",
        approachNote: "Brain-computer interfaces are a direct application of the biological approach — reading and interacting with brain activity to understand and influence behaviour. This technology embodies the idea that behaviour is rooted in brain function."
    }
];


// ---- External links for each event ----
// Keyed by event title. Each entry is an array of {label, url, type} objects.
// type: 'video' | 'article' | 'nz' | 'revision' (for cross-links to main site)
const eventLinks = {
    // --- Ancient & Early ---
    "Plato — The Brain and the Mind": [
        { label: "Plato's philosophy of mind", url: "https://en.wikipedia.org/wiki/Plato%27s_theory_of_soul", type: "article" }
    ],
    "Aristotle — The Heart and the Mind": [
        { label: "Aristotle's psychology", url: "https://en.wikipedia.org/wiki/Aristotle%27s_biology#Psychology", type: "article" }
    ],
    "Trepanning — Early Brain Surgery": [
        { label: "History of trepanning", url: "https://en.wikipedia.org/wiki/Trepanning", type: "article" }
    ],

    // --- Te Ao Māori ---
    "Te Ao Māori — Hauora and Wellbeing": [
        { label: "Te hauora Māori — history of Māori health", url: "https://teara.govt.nz/en/te-hauora-maori-i-mua-history-of-maori-health", type: "nz" },
        { label: "Te Whare Tapa Whā model (Te Ara)", url: "https://teara.govt.nz/en/diagram/31387/maori-health-te-whare-tapa-wha-model", type: "nz" }
    ],

    // --- 1800s ---
    "Franz Gall — Phrenology": [
        { label: "Phrenology explained", url: "https://en.wikipedia.org/wiki/Phrenology", type: "article" }
    ],
    "Te Tiriti o Waitangi Signed": [
        { label: "The Treaty in brief (NZ History)", url: "https://nzhistory.govt.nz/politics/treaty/the-treaty-in-brief", type: "nz" },
        { label: "Read the Treaty texts", url: "https://nzhistory.govt.nz/politics/treaty/read-the-treaty/english-text", type: "nz" },
        { label: "Treaty FAQs", url: "https://nzhistory.govt.nz/page/treaty-faqs", type: "nz" }
    ],
    "Darwin — On the Origin of Species": [
        { label: "Darwin and natural selection", url: "https://www.simplypsychology.org/charles-darwin.html", type: "article" },
        { label: "Biological approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Wundt — First Psychology Laboratory": [
        { label: "Wilhelm Wundt — father of psychology", url: "https://www.simplypsychology.org/wundt.html", type: "article" }
    ],
    "William James — American Psychology": [
        { label: "William James and functionalism", url: "https://www.simplypsychology.org/william-james.html", type: "article" }
    ],
    "Mt Tarawera Erupts": [
        { label: "Mt Tarawera eruption (NZ History)", url: "https://nzhistory.govt.nz/culture/tarawera-eruption", type: "nz" }
    ],
    "Telephone Exchanges Open": [],
    "Women Win the Right to Vote": [
        { label: "Women's suffrage (NZ History)", url: "https://nzhistory.govt.nz/politics/womens-suffrage", type: "nz" },
        { label: "Kate Sheppard", url: "https://nzhistory.govt.nz/people/kate-sheppard", type: "nz" }
    ],
    "Tohunga Suppression Act": [
        { label: "Tohunga Suppression Act (Te Ara)", url: "https://teara.govt.nz/en/document/28223/tohunga-suppression-act", type: "nz" },
        { label: "Impact of colonisation on Māori health", url: "https://teara.govt.nz/en/rongoa-medicinal-use-of-plants/page-5", type: "nz" }
    ],

    // --- Early 1900s ---
    "Binet — Intelligence Testing": [
        { label: "Alfred Binet and IQ testing", url: "https://www.simplypsychology.org/alfred-binet.html", type: "article" },
        { label: "Cognitive approach", url: "../index.html#summaries", type: "revision" }
    ],
    "World War One Begins": [
        { label: "NZ in World War One (NZ History)", url: "https://nzhistory.govt.nz/war/first-world-war-overview", type: "nz" }
    ],
    "US Army IQ Testing": [
        { label: "History of IQ testing", url: "https://en.wikipedia.org/wiki/Army_Alpha", type: "article" }
    ],
    "WWI Ends — Influenza Epidemic": [
        { label: "1918 influenza pandemic in NZ (NZ History)", url: "https://nzhistory.govt.nz/culture/influenza-pandemic-1918", type: "nz" }
    ],
    "Watson & Rayner — Little Albert": [
        { label: "Little Albert experiment explained", url: "https://www.simplypsychology.org/little-albert.html", type: "article" },
        { label: "Original 1920 footage", url: "https://commons.wikimedia.org/wiki/File:Little_Albert_experiment_(1920).webm", type: "video" },
        { label: "Behaviourist approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Radio Broadcasting Begins": [],

    // --- 1930s–1950s ---
    "Piaget — The Moral Judgment of the Child": [
        { label: "Piaget's stages of development", url: "https://www.simplypsychology.org/piaget.html", type: "article" },
        { label: "Piaget's stages (Khan Academy video)", url: "https://www.khanacademy.org/science/health-and-medicine/executive-systems-of-the-brain/cognition-lesson/v/piagets-stages-of-cognitive-development", type: "video" },
        { label: "Cognitive approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Airmail Services Begin": [],
    "First Lobotomy in the US": [
        { label: "History of lobotomy", url: "https://en.wikipedia.org/wiki/Lobotomy", type: "article" },
        { label: "Biological approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Jean Batten Flies the Atlantic": [
        { label: "Jean Batten (NZ History)", url: "https://nzhistory.govt.nz/people/jean-batten", type: "nz" }
    ],
    "Skinner — Operant Conditioning": [
        { label: "Operant conditioning explained", url: "https://www.simplypsychology.org/operant-conditioning.html", type: "article" },
        { label: "Behaviourist approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Seacliff Mental Hospital Fire": [
        { label: "Seacliff Lunatic Asylum", url: "https://en.wikipedia.org/wiki/Seacliff_Lunatic_Asylum", type: "article" }
    ],
    "Maslow — Hierarchy of Needs": [
        { label: "Maslow's hierarchy explained", url: "https://www.simplypsychology.org/maslow.html", type: "article" },
        { label: "Humanistic approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Hillary and Tenzing Summit Everest": [
        { label: "Edmund Hillary (NZ History)", url: "https://nzhistory.govt.nz/people/edmund-hillary", type: "nz" }
    ],

    // --- 1960s–1970s ---
    "Tohunga Suppression Act Repealed": [
        { label: "Tohunga Suppression Act (Te Ara)", url: "https://teara.govt.nz/en/document/28223/tohunga-suppression-act", type: "nz" }
    ],
    "DSM-II Published": [
        { label: "History of the DSM", url: "https://en.wikipedia.org/wiki/Diagnostic_and_Statistical_Manual_of_Mental_Disorders", type: "article" },
        { label: "Biological approach", url: "../index.html#summaries", type: "revision" }
    ],
    "The Wahine Disaster": [
        { label: "The Wahine disaster (NZ History)", url: "https://nzhistory.govt.nz/page/wahine-disaster-0", type: "nz" },
        { label: "Wahine disaster on television", url: "https://nzhistory.govt.nz/media/video/wahine-disaster-on-television", type: "video" }
    ],
    "Stanford Prison Experiment": [
        { label: "Stanford Prison Experiment explained", url: "https://www.simplypsychology.org/zimbardo.html", type: "article" },
        { label: "Official SPE website (Stanford)", url: "https://www.prisonexp.org/", type: "article" },
        { label: "Sociocultural approach", url: "../index.html#summaries", type: "revision" }
    ],
    "TV2 and Social Change": [],
    "Milgram — Obedience to Authority": [
        { label: "Milgram experiment explained", url: "https://www.simplypsychology.org/milgram.html", type: "article" },
        { label: "Milgram experiment (Khan Academy video)", url: "https://www.khanacademy.org/test-prep/mcat/behavior/social-psychology/v/milgram-experiment-on-obedience", type: "video" },
        { label: "Sociocultural approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Ainsworth — Attachment Theory": [
        { label: "Strange Situation explained", url: "https://www.simplypsychology.org/mary-ainsworth.html", type: "article" },
        { label: "Psychodynamic approach", url: "../index.html#summaries", type: "revision" }
    ],

    // --- 1980s ---
    "Te Kōhanga Reo Established": [
        { label: "Te Kōhanga Reo (Te Ara)", url: "https://teara.govt.nz/en/kohanga-reo", type: "nz" }
    ],
    "Mason Durie — Te Whare Tapa Whā": [
        { label: "Te Whare Tapa Whā (Te Ara diagram)", url: "https://teara.govt.nz/en/diagram/31387/maori-health-te-whare-tapa-wha-model", type: "nz" },
        { label: "Te Whare Tapa Whā for learning about wellbeing (PDF)", url: "https://healtheducation.org.nz/wp-content/uploads/2023/03/Using-Te-Whare-Tapa-Wha%CC%84-for-learning-about-wellbeing.pdf", type: "article" },
        { label: "Open Polytechnic — Te Whare Tapa Whā", url: "https://www.openpolytechnic.ac.nz/current-students/wellbeing/new-te-whare-tapa-wha/", type: "nz" }
    ],
    "Gardner — Multiple Intelligences": [
        { label: "Multiple intelligences explained", url: "https://www.simplypsychology.org/howard-gardner.html", type: "article" },
        { label: "Cognitive approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Merzenich — Neuroplasticity": [
        { label: "Neuroplasticity explained", url: "https://www.simplypsychology.org/brain-plasticity.html", type: "article" },
        { label: "Biological approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Stock Market Crash": [
        { label: "1987 crash (NZ History)", url: "https://nzhistory.govt.nz/keyword/1987-sharemarket-crash", type: "nz" }
    ],
    "Deep Blue Beats Kasparov": [
        { label: "Deep Blue vs Kasparov", url: "https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov", type: "article" },
        { label: "Cognitive approach", url: "../index.html#summaries", type: "revision" }
    ],

    // --- 2000s ---
    "The Digital Age": [],
    "Human Genome Mapped": [
        { label: "Human Genome Project", url: "https://en.wikipedia.org/wiki/Human_Genome_Project", type: "article" },
        { label: "Biological approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Christchurch Earthquake": [
        { label: "Christchurch earthquake (NZ History)", url: "https://nzhistory.govt.nz/culture/february-2011-christchurch-earthquake", type: "nz" }
    ],
    "DSM-5 Published": [
        { label: "DSM-5 overview", url: "https://en.wikipedia.org/wiki/DSM-5", type: "article" },
        { label: "Biological approach", url: "../index.html#summaries", type: "revision" }
    ],
    "The Replication Crisis": [
        { label: "Replication crisis explained", url: "https://www.simplypsychology.org/replication-crisis.html", type: "article" }
    ],
    "Kaikōura Earthquake": [
        { label: "Kaikōura earthquake (NZ History)", url: "https://nzhistory.govt.nz/page/kaik%C5%8Dura-earthquake", type: "nz" }
    ],
    "Social Media and Teen Mental Health": [
        { label: "Social media and mental health research", url: "https://www.simplypsychology.org/social-media-mental-health.html", type: "article" },
        { label: "Sociocultural approach", url: "../index.html#summaries", type: "revision" }
    ],
    "He Ara Oranga — Mental Health Inquiry": [
        { label: "He Ara Oranga report (NZ Government)", url: "https://www.mentalhealth.inquiry.govt.nz/inquiry-report/he-ara-oranga/", type: "nz" }
    ],
    "Christchurch Mosque Shootings": [
        { label: "15 March 2019 (NZ History)", url: "https://nzhistory.govt.nz/page/christchurch-mosque-shootings", type: "nz" }
    ],
    "COVID-19 — Global Mental Health Crisis": [
        { label: "COVID-19 and mental health (Pew Research)", url: "https://www.pewresearch.org/short-reads/2023/03/02/mental-health-and-the-pandemic-what-u-s-surveys-have-found/", type: "article" },
        { label: "Sociocultural approach", url: "../index.html#summaries", type: "revision" }
    ],
    "NZ COVID-19 Lockdowns": [
        { label: "COVID-19 in NZ (NZ History)", url: "https://nzhistory.govt.nz/page/covid-19-pandemic", type: "nz" }
    ],
    "ChatGPT and the Rise of AI": [
        { label: "AI and cognitive psychology", url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_mental_health", type: "article" },
        { label: "Cognitive approach", url: "../index.html#summaries", type: "revision" }
    ],
    "Cyclone Gabrielle": [
        { label: "Cyclone Gabrielle (NZ History)", url: "https://nzhistory.govt.nz/page/cyclone-gabrielle", type: "nz" }
    ],
    "Neuralink — Brain-Computer Interface": [
        { label: "Brain-computer interfaces explained", url: "https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface", type: "article" },
        { label: "Biological approach", url: "../index.html#summaries", type: "revision" }
    ]
};

// Merge links into events
timelineEvents.forEach(event => {
    event.links = eventLinks[event.title] || [];
});


// ---- Render the timeline ----
const timelineEl = document.getElementById('timeline');

function renderTimeline(filter = 'all') {
    timelineEl.innerHTML = '';

    const filtered = timelineEvents
        .filter(e => filter === 'all' || e.category === filter)
        .sort((a, b) => a.year - b.year);

    filtered.forEach((event, index) => {
        const div = document.createElement('div');
        div.className = `timeline-event ${event.category}`;
        // Stagger animation delay
        div.style.animationDelay = `${index * 0.06}s`;

        div.innerHTML = `
            <div class="event-card" data-index="${index}">
                <span class="event-date">${event.date}</span>
                <div class="event-category">${event.category === 'psychology' ? 'Psychology' : 'Aotearoa NZ'}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-summary">${event.summary}</div>
                <div class="expand-hint">Click to learn more</div>
                <div class="event-detail">
                    <div class="event-detail-inner">
                        <p>${event.detail}</p>
                        ${event.links && event.links.length > 0 ? `
                        <div class="dig-deeper">
                            <div class="dig-deeper-heading">Dig Deeper</div>
                            <div class="dig-deeper-links">
                                ${event.links.map(link => `
                                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="dig-link dig-link-${link.type}">
                                        <span class="dig-icon">${link.type === 'video' ? '▶' : link.type === 'nz' ? '🥝' : link.type === 'revision' ? '📚' : '📄'}</span>
                                        ${link.label}
                                    </a>
                                `).join('')}
                            </div>
                        </div>` : ''}
                    </div>
                </div>
                ${event.image ? `<img class="event-image" src="${event.image}" alt="${event.title}">` : ''}
            </div>
        `;

        timelineEl.appendChild(div);
    });
}

// Initial render
renderTimeline();


// ---- Filter buttons ----
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Re-render with selected filter
        const filter = btn.dataset.filter;
        renderTimeline(filter);

        // Reset expand-all button text
        document.getElementById('expandAll').textContent = 'Expand All';
    });
});


// ---- Expand/collapse individual cards ----
timelineEl.addEventListener('click', (e) => {
    const card = e.target.closest('.event-card');
    if (!card) return;
    card.classList.toggle('expanded');
});


// ---- Expand All / Collapse All toggle ----
const expandAllBtn = document.getElementById('expandAll');
let allExpanded = false;

expandAllBtn.addEventListener('click', () => {
    allExpanded = !allExpanded;
    const cards = timelineEl.querySelectorAll('.event-card');
    cards.forEach(card => {
        if (allExpanded) {
            card.classList.add('expanded');
        } else {
            card.classList.remove('expanded');
        }
    });
    expandAllBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
});


/* ============================================
   Match the Approach — Interactive Activity
   ============================================ */

// The six Level 2 approaches with their display colours
const approaches = [
    { id: 'biological', label: 'Biological', colour: '#e74c3c' },
    { id: 'behaviourist', label: 'Behaviourist', colour: '#f39c12' },
    { id: 'cognitive', label: 'Cognitive', colour: '#3498db' },
    { id: 'humanistic', label: 'Humanistic', colour: '#2ecc71' },
    { id: 'psychodynamic', label: 'Psychodynamic', colour: '#9b59b6' },
    { id: 'sociocultural', label: 'Sociocultural', colour: '#1abc9c' }
];

// Activity state
let activityEvents = [];   // Shuffled psychology events for the quiz
let currentIndex = 0;       // Which event we're on
let score = 0;              // Correct answers
let activityActive = false; // Whether activity mode is open
let answered = false;       // Whether the current question has been answered

// Grab the activity overlay elements (use functions for elements that get rebuilt)
const activityOverlay = document.getElementById('activityOverlay');
const activityCard = document.getElementById('activityCard');
const activityProgress = document.getElementById('activityProgress');
const activityScore = document.getElementById('activityScore');

// These elements live inside activityCard and may be rebuilt, so access them dynamically
function getEl(id) { return document.getElementById(id); }

// Start the activity
function startActivity() {
    // Get only psychology events (NZ events don't have approaches)
    activityEvents = timelineEvents
        .filter(e => e.category === 'psychology')
        .sort(() => Math.random() - 0.5); // Shuffle

    currentIndex = 0;
    score = 0;
    activityActive = true;
    answered = false;

    activityOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    showQuestion();
}

// Display the current question
function showQuestion() {
    const event = activityEvents[currentIndex];
    answered = false;

    // Update card content
    getEl('activityDate').textContent = event.date;
    getEl('activityTitle').textContent = event.title;
    getEl('activitySummary').textContent = event.summary;

    // Update progress and score
    activityProgress.textContent = `Question ${currentIndex + 1} of ${activityEvents.length}`;
    activityScore.textContent = `Score: ${score}/${currentIndex}`;

    // Clear feedback
    const feedback = getEl('activityFeedback');
    feedback.className = 'activity-feedback';
    feedback.innerHTML = '';

    // Hide next button
    getEl('activityNext').style.display = 'none';

    // Build approach buttons
    const buttons = getEl('activityButtons');
    buttons.innerHTML = '';
    approaches.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'approach-btn';
        btn.dataset.approach = a.id;
        btn.style.setProperty('--approach-colour', a.colour);
        btn.textContent = a.label;
        btn.addEventListener('click', () => handleAnswer(a.id));
        buttons.appendChild(btn);
    });

    // Reset card animation
    activityCard.classList.remove('slide-in');
    void activityCard.offsetWidth; // Force reflow
    activityCard.classList.add('slide-in');
}

// Handle a student's answer
function handleAnswer(chosenApproach) {
    if (answered) return; // Prevent double-answering
    answered = true;

    const event = activityEvents[currentIndex];
    const correct = chosenApproach === event.approach;

    if (correct) score++;

    // Highlight buttons — correct in green, wrong choice in red
    const allBtns = getEl('activityButtons').querySelectorAll('.approach-btn');
    allBtns.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.approach === event.approach) {
            btn.classList.add('correct');
        } else if (btn.dataset.approach === chosenApproach && !correct) {
            btn.classList.add('incorrect');
        } else {
            btn.classList.add('dimmed');
        }
    });

    // Show feedback
    const approachLabel = approaches.find(a => a.id === event.approach).label;
    const feedback = getEl('activityFeedback');
    feedback.className = `activity-feedback ${correct ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <div class="feedback-verdict">${correct ? 'Correct!' : 'Not quite — it\'s ' + approachLabel}</div>
        <div class="feedback-explanation">${event.approachNote}</div>
    `;

    // Update score display
    activityScore.textContent = `Score: ${score}/${currentIndex + 1}`;

    // Show next button (or finish)
    const nextBtn = getEl('activityNext');
    nextBtn.style.display = 'block';
    nextBtn.textContent = currentIndex < activityEvents.length - 1 ? 'Next Question →' : 'See Results';
}

// Move to next question or show results (use event delegation on the card)
activityCard.addEventListener('click', (e) => {
    if (e.target.closest('.activity-next')) {
        currentIndex++;
        if (currentIndex < activityEvents.length) {
            showQuestion();
        } else {
            showResults();
        }
    }
});

// Show final results screen
function showResults() {
    const percentage = Math.round((score / activityEvents.length) * 100);
    let message, emoji;

    if (percentage === 100) {
        emoji = '🌟';
        message = 'Perfect score! You really know your approaches.';
    } else if (percentage >= 80) {
        emoji = '💪';
        message = 'Great work! You\'ve got a strong grasp of the approaches.';
    } else if (percentage >= 60) {
        emoji = '👍';
        message = 'Good effort! Review the ones you missed and try again.';
    } else if (percentage >= 40) {
        emoji = '📚';
        message = 'Getting there — spend some time with the topic summaries and have another go.';
    } else {
        emoji = '🔄';
        message = 'This is a tough one! Read through the timeline details, then try again.';
    }

    activityCard.innerHTML = `
        <div class="results-screen">
            <div class="results-emoji">${emoji}</div>
            <div class="results-title">Activity Complete</div>
            <div class="results-score">${score} / ${activityEvents.length}</div>
            <div class="results-percentage">${percentage}%</div>
            <div class="results-message">${message}</div>
            <div class="results-actions">
                <button class="results-btn retry" onclick="startActivity()">Try Again</button>
                <button class="results-btn close" onclick="closeActivity()">Back to Timeline</button>
            </div>
        </div>
    `;
}

// Close the activity
function closeActivity() {
    activityActive = false;
    activityOverlay.classList.remove('active');
    document.body.style.overflow = '';

    // Restore the card's inner HTML for next time
    activityCard.innerHTML = `
        <span class="event-date" id="activityDate"></span>
        <div class="event-title" id="activityTitle"></div>
        <div class="event-summary" id="activitySummary"></div>
        <div class="activity-buttons" id="activityButtons"></div>
        <div class="activity-feedback" id="activityFeedback"></div>
        <button class="activity-next" id="activityNext" style="display:none;">Next Question →</button>
    `;
}

// Wire up the start button
document.getElementById('startActivity').addEventListener('click', startActivity);

// Close on overlay click (outside the card)
activityOverlay.addEventListener('click', (e) => {
    if (e.target === activityOverlay) closeActivity();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activityActive) closeActivity();
});
