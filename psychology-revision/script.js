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
        { category: 'sociocultural', question: 'How does culture influence behaviour?', answer: 'Culture shapes our values, beliefs, norms, and practices. It affects how we think, feel, and behave in social situations.' },

        // ============================================
        // DEBATES CONTENT — Biological
        // ============================================
        { category: 'biological', question: 'What is the diathesis-stress model?', answer: 'A model proposing that psychological disorders result from the interaction of a biological predisposition (diathesis) and environmental triggers (stress). Neither factor alone is sufficient — both must be present.' },
        { category: 'biological', question: 'What did twin studies reveal about nature vs nurture?', answer: 'Identical twins (100% shared genes) show higher concordance rates for traits than fraternal twins (50% shared). For schizophrenia, concordance is ~48% in identical twins vs ~17% in fraternal — supporting genetics but also showing environment matters.' },
        { category: 'biological', question: 'What is the MAOA gene controversy?', answer: 'The MAOA gene (nicknamed the "warrior gene") produces an enzyme that breaks down neurotransmitters like serotonin and dopamine. Low-activity variants were linked to aggression, but associating this with specific ethnic groups (e.g., Māori) was criticised as genetic reductionism and racial stereotyping.' },
        { category: 'biological', question: 'How does epigenetics challenge pure genetic determinism?', answer: 'Epigenetics shows that environmental factors (stress, diet, nurturing) can switch genes on or off without changing the DNA sequence. This means biology is not fixed — the environment shapes how genes are expressed.' },
        { category: 'biological', question: 'What is biological reductionism?', answer: 'Explaining complex behaviour by breaking it down to simple biological components like genes, neurotransmitters, or brain structures. For example, explaining depression solely as low serotonin levels ignores social and psychological factors.' },
        { category: 'biological', question: 'What did Libet\'s experiment (1983) suggest about free will?', answer: 'Using EEG, Libet found that brain activity (the "readiness potential") began about 350-400 milliseconds before participants were consciously aware of their decision to move. This suggests the brain may "decide" before we are aware of it.' },
        { category: 'biological', question: 'What is the difference between fMRI and EEG?', answer: 'fMRI measures blood oxygenation to show where brain activity occurs (high spatial resolution, poor temporal). EEG measures electrical activity via scalp electrodes to show when activity occurs (high temporal resolution, poor spatial).' },

        // ============================================
        // DEBATES CONTENT — Behaviourist
        // ============================================
        { category: 'behaviourist', question: 'What is environmental determinism?', answer: 'The belief that behaviour is governed entirely by environmental influences — systems of reward and punishment — rather than individual choice. Skinner argued that even when we think we choose freely, our decisions trace back to past reinforcement.' },
        { category: 'behaviourist', question: 'What did the Little Albert study demonstrate?', answer: 'Watson and Rayner (1920) conditioned a toddler to fear a white rat by pairing it with a loud noise. This demonstrated that emotional responses (like fear) can be learned through classical conditioning — an example of environmental determinism.' },
        { category: 'behaviourist', question: 'What is environmental reductionism?', answer: 'Reducing all behaviour to simple stimulus-response links learned through experience. Behaviourists break complex behaviour into basic components: stimulus, response, reinforcement, and punishment.' },
        { category: 'behaviourist', question: 'What is systematic desensitisation?', answer: 'A therapy based on classical conditioning that treats phobias by gradually exposing the patient to the feared stimulus while in a relaxed state. It works on the principle that if behaviour is learned, it can be unlearned.' },
        { category: 'behaviourist', question: 'What are the four schedules of reinforcement?', answer: 'Fixed-ratio (reward after set number of responses), variable-ratio (reward after random number), fixed-interval (reward after set time), variable-interval (reward after random time). Variable schedules produce behaviour most resistant to extinction.' },
        { category: 'behaviourist', question: 'What is a token economy?', answer: 'A behaviour modification system using operant conditioning where individuals receive tokens for appropriate behaviour. Tokens are secondary reinforcers — they have no inherent value but can be exchanged for primary reinforcers like food or privileges.' },

        // ============================================
        // DEBATES CONTENT — Cognitive
        // ============================================
        { category: 'cognitive', question: 'What is machine reductionism?', answer: 'The cognitive approach portrays the mind as an information-processing system like a computer (input → processing → output). Critics argue this ignores the influence of emotion, motivation, and social context on thinking.' },
        { category: 'cognitive', question: 'What are System 1 and System 2 thinking?', answer: 'System 1 is fast, automatic, and intuitive but prone to errors and biases. System 2 is slow, deliberate, and logical but requires effort. Humans rely heavily on System 1, which is why cognitive biases are so common.' },
        { category: 'cognitive', question: 'What is the availability heuristic?', answer: 'A mental shortcut where we judge the likelihood of events by how easily examples come to mind. For example, people think homicide is more common than suicide because homicide gets more media coverage, even though suicide is actually more frequent.' },
        { category: 'cognitive', question: 'How did Loftus demonstrate false memories?', answer: 'In the "Lost in the Mall" study (1995), researchers presented participants with three true childhood events and one false one. After repeated interviews, 25% of participants came to believe the false event actually happened, showing memories can be implanted.' },
        { category: 'cognitive', question: 'What is confirmation bias?', answer: 'The tendency to seek out and give greater weight to evidence that confirms existing beliefs while ignoring contradictory information. Also called "myside bias," it is linked to System 1 processing which is biased to believe and confirm.' },
        { category: 'cognitive', question: 'What is the misinformation effect?', answer: 'When false information presented after an event contaminates a witness\'s memory of that event. Loftus et al. (1978) showed participants could be led to remember a yield sign instead of a stop sign through misleading questions.' },

        // ============================================
        // DEBATES CONTENT — Humanistic
        // ============================================
        { category: 'humanistic', question: 'What is personal agency in humanistic psychology?', answer: 'The exercise of free will — the choices individuals make, the paths they follow, and the consequences of those choices. Humanistic psychologists argue this is essential for human dignity and personal responsibility.' },
        { category: 'humanistic', question: 'What is Self-Determination Theory (SDT)?', answer: 'Deci and Ryan\'s theory that three universal needs must be met for well-being: competence (feeling effective), autonomy (feeling in control), and relatedness (feeling connected to others). It distinguishes between autonomous and controlled motivation.' },
        { category: 'humanistic', question: 'Why is the humanistic approach considered holistic?', answer: 'It studies the whole person rather than breaking behaviour into parts. Humanists argue "the whole is greater than the sum of its parts" — you cannot understand a person by only examining their biology, cognition, or environment separately.' },
        { category: 'humanistic', question: 'What is Rogers\' Q-sort technique?', answer: 'A method to investigate self-concept where clients sort self-evaluative statements (e.g., "I am ambitious") into piles from "most like me" to "least like me." It allows comparison between the Real Self and the Ideal Self.' },
        { category: 'humanistic', question: 'What is locus of control?', answer: 'Rotter\'s (1966) concept describing whether a person believes they control their own fate (internal locus) or that outcomes are controlled by outside forces like luck (external locus). Internal locus is linked to better achievement and coping.' },
        { category: 'humanistic', question: 'How does the humanistic approach view determinism?', answer: 'Humanistic psychologists largely reject determinism. They argue it removes freedom and dignity, devaluing human behaviour by suggesting it is inevitable. Freedom is seen as necessary for self-actualisation.' },

        // ============================================
        // DEBATES CONTENT — Psychodynamic
        // ============================================
        { category: 'psychodynamic', question: 'What is psychic determinism?', answer: 'Freud\'s belief that no behaviour is accidental — all actions, including slips of the tongue and dreams, have unconscious causes. This is a form of hard determinism, suggesting free will is an illusion because we are driven by forces we don\'t consciously realise.' },
        { category: 'psychodynamic', question: 'What are Freudian slips?', answer: 'Slips of the tongue that Freud interpreted as revealing unconscious thoughts or desires. For example, calling someone by the wrong name might reveal hidden feelings. They support psychic determinism — the idea that nothing is truly accidental.' },
        { category: 'psychodynamic', question: 'What is Freud\'s dual instinct theory?', answer: 'Freud proposed two fundamental drives: Eros (the life instinct, linked to libido and sexuality) and Thanatos (the death instinct, linked to aggression and self-destruction). These opposing forces shape all human behaviour.' },
        { category: 'psychodynamic', question: 'How does repression work as a defence mechanism?', answer: 'Repression keeps threatening impulses, memories, and desires out of conscious awareness. It requires significant mental energy to maintain. Freud believed repressed material still influences behaviour through symptoms, dreams, and slips of the tongue.' },
        { category: 'psychodynamic', question: 'What is rationalisation as a defence mechanism?', answer: 'Explaining away a negative event by minimising its effect or creating a logical-sounding excuse. For example, saying "I didn\'t like her anyway" after being rejected protects the ego from the pain of rejection.' },
        { category: 'psychodynamic', question: 'How did Bowlby connect attachment theory to evolution?', answer: 'Bowlby argued that the attachment system was designed by natural selection — infants have an innate need to attach to a caregiver for survival. However, the quality of attachment depends on the caregiver\'s responsiveness, showing nature-nurture interaction.' },

        // ============================================
        // DEBATES CONTENT — Sociocultural
        // ============================================
        { category: 'sociocultural', question: 'What does WEIRD stand for in psychology research?', answer: 'Western, Educated, Industrialised, Rich, and Democratic. About 96% of psychology study participants come from WEIRD countries, raising serious questions about whether findings can be generalised to the wider human population.' },
        { category: 'sociocultural', question: 'What did the culture of honour study (Cohen et al., 1996) find?', answer: 'After being insulted, 85% of Southern US participants (from a "culture of honour") became angry compared to 35% of Northerners. Southerners also showed spikes in cortisol and testosterone, showing cultural conditioning can produce biological responses.' },
        { category: 'sociocultural', question: 'What did the Stanford Prison Experiment demonstrate?', answer: 'Zimbardo\'s (1972) study randomly assigned students as guards or inmates. Guards quickly became abusive, demonstrating that social roles and situations are powerful determinants of behaviour — often overpowering individual personality.' },
        { category: 'sociocultural', question: 'How does socioeconomic status (SES) affect health?', answer: 'Higher SES (education, income) is linked to lower mortality and disease rates. Research shows SES affects central nervous system serotonin responsivity — a biological change driven by the social environment, with implications for depression and aggression.' },
        { category: 'sociocultural', question: 'How does individualism differ from collectivism?', answer: 'Individualist cultures (e.g., NZ, USA) emphasise personal traits, uniqueness, and individual success. Collectivist cultures (e.g., Japan) emphasise group harmony, social duty, and shared achievement. This affects attribution, self-concept, and attachment patterns.' },
        { category: 'sociocultural', question: 'Why is Ainsworth\'s Strange Situation criticised as ethnocentric?', answer: 'It is based on Western child-rearing norms. Japanese children rarely show "avoidant-insecure" attachment because their culture views such independence as impolite. The test imposes Western assumptions about what healthy attachment looks like.' },

        // ============================================
        // DEBATES CONTENT — Cross-Approach
        // ============================================
        { category: 'biological', question: 'What is the nature-nurture debate?', answer: 'The question of whether behaviour is shaped by biology (nature — genes, brain, hormones) or environment (nurture — upbringing, culture, experience). Modern psychology favours interactionism: both constantly interact to shape who we are.' },
        { category: 'cognitive', question: 'What is the replication crisis in psychology?', answer: 'The finding that many psychology studies cannot be reproduced. The Open Science Collaboration (2015) replicated 100 studies and only ~36% produced the same results. Causes include small samples, publication bias, and HARKing (Hypothesising After Results are Known).' }
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
            },

            // ============================================
            // DEBATES MC QUESTIONS
            // ============================================
            // Nature vs Nurture / Interactionism
            {
                question: 'The diathesis-stress model proposes that psychological disorders result from:',
                options: ['Genetics alone', 'Environmental stress alone', 'The interaction of biological predisposition and environmental triggers', 'Poor parenting in childhood'],
                correct: 2,
                explanation: 'The diathesis-stress model says neither biology nor environment alone is sufficient — a genetic vulnerability (diathesis) must be triggered by environmental stress.'
            },
            {
                question: 'Epigenetics shows that:',
                options: ['DNA sequence changes when we experience stress', 'Environmental factors can switch genes on or off without changing DNA', 'Genes have no influence on behaviour', 'Identical twins always develop the same disorders'],
                correct: 1,
                explanation: 'Epigenetics demonstrates that environmental factors like stress and diet can alter gene expression without changing the DNA sequence itself.'
            },
            {
                question: 'The MAOA gene controversy was criticised because:',
                options: ['The gene does not exist', 'It linked aggression to specific ethnic groups, promoting stereotyping', 'It proved free will is an illusion', 'Twin studies disproved it'],
                correct: 1,
                explanation: 'Associating the "warrior gene" with specific populations (e.g., Māori) was criticised as genetic reductionism and racial stereotyping.'
            },
            // Free Will vs Determinism
            {
                question: 'Psychic determinism in the psychodynamic approach means:',
                options: ['Behaviour is controlled by the environment', 'All behaviour has unconscious causes and nothing is accidental', 'People can freely choose their actions', 'The mind works like a computer'],
                correct: 1,
                explanation: 'Freud argued that no behaviour is accidental — even slips of the tongue and dreams have meaningful unconscious causes.'
            },
            {
                question: 'Which approach most strongly supports the idea of free will?',
                options: ['Biological', 'Behaviourist', 'Psychodynamic', 'Humanistic'],
                correct: 3,
                explanation: 'The humanistic approach argues that humans have personal agency and can freely choose their actions — free will is essential for self-actualisation.'
            },
            {
                question: 'Libet\'s (1983) experiment suggested that:',
                options: ['Free will is the basis of all decisions', 'Brain activity begins before conscious awareness of a decision', 'The unconscious mind does not influence behaviour', 'Reinforcement determines all choices'],
                correct: 1,
                explanation: 'Libet found that brain activity (the "readiness potential") began 350-400ms before participants were aware of deciding to move, challenging the concept of free will.'
            },
            {
                question: 'Environmental determinism is the view that behaviour is governed by:',
                options: ['Genes and hormones', 'Unconscious childhood experiences', 'Systems of reward and punishment in the environment', 'Personal choice and free will'],
                correct: 2,
                explanation: 'Environmental determinism — a behaviourist position — holds that behaviour is entirely shaped by external reinforcement and punishment.'
            },
            // Holism vs Reductionism
            {
                question: 'Which approach is the best example of a holistic perspective?',
                options: ['Biological', 'Behaviourist', 'Humanistic', 'Cognitive'],
                correct: 2,
                explanation: 'The humanistic approach studies the whole person rather than breaking behaviour into parts, arguing "the whole is greater than the sum of its parts."'
            },
            {
                question: 'Biological reductionism involves explaining behaviour through:',
                options: ['Social and cultural influences', 'Stimulus-response links', 'Genes, neurotransmitters, and brain structures', 'Free will and personal choice'],
                correct: 2,
                explanation: 'Biological reductionism reduces complex behaviour to biological components — for example, explaining depression solely as low serotonin.'
            },
            {
                question: 'Machine reductionism is a criticism of which approach?',
                options: ['Biological', 'Behaviourist', 'Cognitive', 'Sociocultural'],
                correct: 2,
                explanation: 'The cognitive approach is criticised for machine reductionism — portraying the mind as a computer, which ignores emotion and social context.'
            },
            // Replication Crisis
            {
                question: 'The Open Science Collaboration (2015) found that when 100 psychology studies were replicated:',
                options: ['All produced the same results', 'About 75% replicated successfully', 'Only about 36% replicated successfully', 'None could be replicated'],
                correct: 2,
                explanation: 'Only about one-third (36%) of the 100 replicated studies produced the same results as the original, highlighting the replication crisis.'
            },
            {
                question: 'HARKing (Hypothesising After Results are Known) is a problem because:',
                options: ['It makes studies too expensive', 'Researchers pretend they predicted surprise results, undermining scientific integrity', 'It requires too many participants', 'It only applies to biological research'],
                correct: 1,
                explanation: 'HARKing involves pretending a surprise finding was predicted all along, which undermines the scientific method and contributes to the replication crisis.'
            },
            // Behaviourist applications
            {
                question: 'Systematic desensitisation is based on the principle that:',
                options: ['Unconscious conflicts cause phobias', 'If behaviour is learned, it can be unlearned', 'Free will allows people to overcome fears', 'Brain chemistry determines fear responses'],
                correct: 1,
                explanation: 'Systematic desensitisation uses classical conditioning principles — if a fear was learned through association, it can be unlearned by replacing the fear response with relaxation.'
            },
            {
                question: 'Variable-ratio schedules of reinforcement produce behaviour that is:',
                options: ['Easy to extinguish', 'Highly resistant to extinction', 'Only seen in animals', 'Unrelated to gambling'],
                correct: 1,
                explanation: 'Variable-ratio schedules (reward after unpredictable number of responses) produce behaviour most resistant to extinction — this explains why gambling is so addictive.'
            },
            // Cognitive studies
            {
                question: 'In Loftus\'s "Lost in the Mall" study, what percentage of participants came to believe a false childhood memory?',
                options: ['5%', '25%', '50%', '75%'],
                correct: 1,
                explanation: 'After repeated interviews, 25% of participants came to believe a completely fabricated childhood event (being lost in a shopping mall) actually happened.'
            },
            {
                question: 'System 1 thinking is best described as:',
                options: ['Slow, deliberate, and logical', 'Fast, automatic, and prone to biases', 'Only used in scientific reasoning', 'Controlled by the prefrontal cortex alone'],
                correct: 1,
                explanation: 'System 1 (Kahneman) is fast, automatic, and intuitive but prone to cognitive biases. System 2 is the slow, deliberate thinking system.'
            },
            // Humanistic concepts
            {
                question: 'Self-Determination Theory identifies three universal needs:',
                options: ['Id, ego, superego', 'Competence, autonomy, relatedness', 'Safety, love, esteem', 'Encoding, storage, retrieval'],
                correct: 1,
                explanation: 'Deci and Ryan\'s Self-Determination Theory proposes that competence, autonomy, and relatedness must be met for well-being and optimal motivation.'
            },
            {
                question: 'An internal locus of control means believing that:',
                options: ['Outside forces control your fate', 'Luck determines outcomes', 'You control your own outcomes through your choices', 'The unconscious mind drives behaviour'],
                correct: 2,
                explanation: 'Rotter\'s (1966) concept — internal locus of control means believing you control your own fate, linked to better achievement and coping.'
            },
            // Sociocultural studies
            {
                question: 'WEIRD in psychology research stands for:',
                options: ['Wild, Experimental, Interesting, Replicable, Detailed', 'Western, Educated, Industrialised, Rich, Democratic', 'Widespread, Empirical, Influential, Reliable, Direct', 'Worthy, Ethical, Independent, Randomised, Diverse'],
                correct: 1,
                explanation: 'About 96% of psychology participants come from WEIRD (Western, Educated, Industrialised, Rich, Democratic) countries, limiting generalisability.'
            },
            {
                question: 'The Stanford Prison Experiment demonstrated that:',
                options: ['Personality is the main driver of behaviour', 'Social roles and situations powerfully determine behaviour', 'People always resist authority', 'Biological factors explain aggression'],
                correct: 1,
                explanation: 'Zimbardo\'s study showed that social roles (guard/prisoner) overpowered individual personality, with "guards" quickly becoming abusive.'
            },
            {
                question: 'In the culture of honour study (Cohen et al., 1996), Southern US participants who were insulted showed:',
                options: ['No emotional reaction', 'Lower cortisol than Northerners', 'Spikes in cortisol and testosterone', 'Decreased aggression'],
                correct: 2,
                explanation: '85% of Southerners became angry (vs 35% Northerners) and showed hormonal spikes, demonstrating that cultural conditioning produces biological responses.'
            },
            // Cross-approach debates
            {
                question: 'Which debate asks whether complex behaviour should be studied as a whole or broken into parts?',
                options: ['Nature vs nurture', 'Free will vs determinism', 'Holism vs reductionism', 'The replication crisis'],
                correct: 2,
                explanation: 'The holism vs reductionism debate asks whether psychology should study whole systems (holism) or break behaviour into simpler components (reductionism).'
            },
            {
                question: 'The nature-nurture debate is best resolved by:',
                options: ['Accepting that only genes matter', 'Accepting that only environment matters', 'Interactionism — recognising that nature and nurture constantly interact', 'Ignoring the debate entirely'],
                correct: 2,
                explanation: 'Modern psychology favours interactionism — both biology and environment constantly interact to shape behaviour, as demonstrated by epigenetics.'
            },
            {
                question: 'Bowlby\'s attachment theory is an example of interactionism because:',
                options: ['It only considers biology', 'It only considers the environment', 'The attachment system is innate (nature) but its quality depends on caregiving (nurture)', 'It ignores both nature and nurture'],
                correct: 2,
                explanation: 'Bowlby argued infants have an innate need to attach (nature/evolution), but the quality of attachment depends on the caregiver\'s responsiveness (nurture).'
            },
            {
                question: 'Freud\'s dual instinct theory proposes two fundamental drives:',
                options: ['Nature and nurture', 'Eros (life/libido) and Thanatos (death/aggression)', 'System 1 and System 2', 'Competence and autonomy'],
                correct: 1,
                explanation: 'Freud proposed Eros (life instinct, linked to sexuality) and Thanatos (death instinct, linked to aggression) as the two opposing forces shaping all behaviour.'
            },
            {
                question: 'Publication bias contributes to the replication crisis because:',
                options: ['Journals prefer to publish negative results', 'Journals prefer surprising positive results, distorting the evidence base', 'All studies are published equally', 'It only affects biological research'],
                correct: 1,
                explanation: 'Academic journals tend to publish positive or surprising results (the "file drawer effect"), meaning failed replications and negative results go unpublished.'
            },
            {
                question: 'Ainsworth\'s Strange Situation is criticised as ethnocentric because:',
                options: ['It was conducted in too many countries', 'It imposes Western assumptions about healthy attachment onto other cultures', 'It only studied boys', 'It did not use any observation methods'],
                correct: 1,
                explanation: 'The Strange Situation is based on Western child-rearing norms. Japanese children, for example, rarely show avoidant attachment because their culture discourages such independence.'
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
            },

            // ============================================
            // DEBATES T/F QUESTIONS
            // ============================================
            {
                question: 'The diathesis-stress model states that genetics alone cause psychological disorders.',
                correct: false,
                explanation: 'False. The diathesis-stress model proposes that disorders result from the interaction of a biological predisposition AND environmental triggers — both are needed.'
            },
            {
                question: 'Epigenetics shows that environmental factors can change gene expression without altering the DNA sequence.',
                correct: true,
                explanation: 'True. Epigenetics demonstrates that factors like stress, diet, and nurturing can switch genes on or off without changing the underlying DNA.'
            },
            {
                question: 'In twin studies, identical twins share approximately 50% of their genes.',
                correct: false,
                explanation: 'False. Identical (monozygotic) twins share 100% of their genes. It is fraternal (dizygotic) twins who share approximately 50%.'
            },
            {
                question: 'Psychic determinism means Freud believed all behaviour has unconscious causes.',
                correct: true,
                explanation: 'True. Freud argued that no behaviour is accidental — even slips of the tongue and dreams have determinable unconscious causes.'
            },
            {
                question: 'The Open Science Collaboration (2015) found that most psychology studies replicated successfully.',
                correct: false,
                explanation: 'False. Only about 36% of the 100 replicated studies produced the same results as the original, revealing a significant replication crisis.'
            },
            {
                question: 'Libet\'s experiment found that conscious awareness of a decision occurs before any brain activity.',
                correct: false,
                explanation: 'False. Libet found that brain activity (the "readiness potential") began 350-400 milliseconds BEFORE conscious awareness, suggesting the brain "decides" first.'
            },
            {
                question: 'WEIRD samples make up approximately 96% of participants in psychology studies.',
                correct: true,
                explanation: 'True. About 96% of psychology participants come from Western, Educated, Industrialised, Rich, and Democratic countries, limiting how broadly findings can be generalised.'
            },
            {
                question: 'The humanistic approach supports reductionism as the best way to understand human behaviour.',
                correct: false,
                explanation: 'False. The humanistic approach is holistic — it argues that studying the whole person is essential and that breaking behaviour into parts loses meaning.'
            },
            {
                question: 'B.F. Skinner believed that free will is an illusion and behaviour is controlled by environmental reinforcement.',
                correct: true,
                explanation: 'True. Skinner was a hard determinist who argued that even when we think we choose freely, our decisions can be traced back to past environmental reinforcement.'
            },
            {
                question: 'Variable-ratio schedules of reinforcement produce behaviour that is easy to extinguish.',
                correct: false,
                explanation: 'False. Variable-ratio schedules produce the MOST resistant behaviour to extinction. This is why gambling (which operates on variable-ratio reinforcement) is so addictive.'
            },
            {
                question: 'In Loftus\'s research, it was possible to implant entirely false childhood memories in participants.',
                correct: true,
                explanation: 'True. In the "Lost in the Mall" study, 25% of participants came to believe a fabricated childhood event actually happened after repeated suggestive interviews.'
            },
            {
                question: 'The Stanford Prison Experiment showed that individual personality is more powerful than social roles.',
                correct: false,
                explanation: 'False. Zimbardo\'s study demonstrated the opposite — social roles and situations overpowered individual personality, with "guards" quickly becoming abusive.'
            },
            {
                question: 'Self-Determination Theory identifies competence, autonomy, and relatedness as three universal human needs.',
                correct: true,
                explanation: 'True. Deci and Ryan\'s SDT proposes these three needs must be met for psychological well-being and optimal motivation.'
            },
            {
                question: 'Bowlby argued that the attachment system is entirely learned from the environment.',
                correct: false,
                explanation: 'False. Bowlby argued attachment is innate (designed by natural selection) but the QUALITY of attachment depends on the caregiver\'s responsiveness — showing nature-nurture interaction.'
            },
            {
                question: 'The culture of honour study showed that cultural conditioning can produce measurable biological responses.',
                correct: true,
                explanation: 'True. Southern US participants showed spikes in cortisol and testosterone after being insulted, demonstrating that cultural values can trigger physiological stress responses.'
            },
            {
                question: 'Confirmation bias involves actively seeking out information that contradicts your existing beliefs.',
                correct: false,
                explanation: 'False. Confirmation bias is the opposite — the tendency to seek out and favour information that CONFIRMS existing beliefs while ignoring contradictory evidence.'
            },
            {
                question: 'System 1 thinking is slow, deliberate, and logical.',
                correct: false,
                explanation: 'False. System 1 is fast, automatic, and intuitive (but prone to biases). System 2 is the slow, deliberate, logical thinking system.'
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
let currentFilterCategory = 'all'; // Track active filter for Review Due badge updates

// ============================================
// SPACED REPETITION — DATA LAYER
// ============================================
// localStorage keys
const LS_FLASHCARD_DATA = 'psych_flashcard_data';
const LS_QUIZ_HISTORY = 'psych_quiz_history';
const LS_STUDY_STREAK = 'psych_study_streak';
const LS_CONFIDENCE_DATA = 'psych_confidence_data';

// Generate stable card ID: "{category}_{origIndex}" — survives shuffle/filter
function getCardId(card) {
    return `${card.category}_${card._origIndex}`;
}

// Load SR data for all cards (keyed by level → cardId)
function loadFlashcardData() {
    try {
        return JSON.parse(localStorage.getItem(LS_FLASHCARD_DATA)) || {};
    } catch { return {}; }
}

function saveFlashcardData(data) {
    localStorage.setItem(LS_FLASHCARD_DATA, JSON.stringify(data));
}

// Get SR state for one card, creating defaults if it doesn't exist
function getCardSRState(cardId) {
    const data = loadFlashcardData();
    const levelKey = `level${currentLevel}`;
    if (!data[levelKey]) data[levelKey] = {};
    return data[levelKey][cardId] || {
        ease: 2.5,
        interval: 0,
        repetitions: 0,
        dueDate: null,      // ISO date string, null = never seen
        lastReviewed: null
    };
}

// Save SR state for one card
function setCardSRState(cardId, state) {
    const data = loadFlashcardData();
    const levelKey = `level${currentLevel}`;
    if (!data[levelKey]) data[levelKey] = {};
    data[levelKey][cardId] = state;
    saveFlashcardData(data);
}

// Simplified SM-2 algorithm
// rating: 'hard' | 'good' | 'easy'
function calculateSR(state, rating) {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    let { ease, interval, repetitions } = state;

    if (rating === 'hard') {
        // Reset interval, decrease ease
        interval = 1;
        ease = Math.max(1.3, ease - 0.2);
        repetitions = 0;
    } else if (rating === 'good') {
        ease = Math.max(1.3, ease - 0.1);
        if (interval === 0) {
            interval = 1;
        } else if (interval === 1) {
            interval = 3;
        } else {
            interval = Math.round(interval * ease);
        }
        repetitions++;
    } else if (rating === 'easy') {
        ease = Math.min(2.5, ease + 0.1);
        if (interval === 0) {
            interval = 3;
        } else if (interval <= 3) {
            interval = 7;
        } else {
            interval = Math.round(interval * ease * 1.3);
        }
        repetitions++;
    }

    // Calculate next due date
    const due = new Date();
    due.setDate(due.getDate() + interval);
    const dueDate = due.toISOString().slice(0, 10);

    return {
        ease,
        interval,
        repetitions,
        dueDate,
        lastReviewed: today
    };
}

// Card mastery states: 'new', 'learning', 'mastered'
function getCardMastery(state) {
    if (!state.lastReviewed) return 'new';
    if (state.repetitions >= 3 && state.interval >= 21) return 'mastered';
    return 'learning';
}

// Check if a card is due for review (due today or earlier, or never seen)
function isCardDue(cardId) {
    const state = getCardSRState(cardId);
    if (!state.lastReviewed) return true; // Never seen = due
    if (!state.dueDate) return true;
    const today = new Date().toISOString().slice(0, 10);
    return state.dueDate <= today;
}

// Count due cards for current level
function countDueCards() {
    const levelCards = currentLevel === 2 ? flashcards.level2 : flashcards.level3;
    let count = 0;
    levelCards.forEach((card, i) => {
        const cardId = `${card.category}_${i}`;
        if (isCardDue(cardId)) count++;
    });
    return count;
}

// ============================================
// QUIZ HISTORY
// ============================================
function loadQuizHistory() {
    try {
        return JSON.parse(localStorage.getItem(LS_QUIZ_HISTORY)) || [];
    } catch { return []; }
}

function saveQuizAttempt(level, type, score, total) {
    const history = loadQuizHistory();
    history.push({
        date: new Date().toISOString(),
        level,
        type,
        score,
        total,
        percentage: Math.round((score / total) * 100)
    });
    // Keep only the last 50 attempts
    if (history.length > 50) history.splice(0, history.length - 50);
    localStorage.setItem(LS_QUIZ_HISTORY, JSON.stringify(history));
}

// ============================================
// STUDY STREAK
// ============================================
function loadStreak() {
    try {
        return JSON.parse(localStorage.getItem(LS_STUDY_STREAK)) || {
            current: 0,
            longest: 0,
            lastStudyDate: null
        };
    } catch {
        return { current: 0, longest: 0, lastStudyDate: null };
    }
}

function recordStudyActivity() {
    const streak = loadStreak();
    const today = new Date().toISOString().slice(0, 10);

    // Already recorded today
    if (streak.lastStudyDate === today) return;

    // Check if yesterday was the last study date (continuing streak)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);

    if (streak.lastStudyDate === yesterdayStr) {
        streak.current++;
    } else if (streak.lastStudyDate !== today) {
        // Streak broken — start fresh
        streak.current = 1;
    }

    streak.lastStudyDate = today;
    streak.longest = Math.max(streak.longest, streak.current);
    localStorage.setItem(LS_STUDY_STREAK, JSON.stringify(streak));
}

// ============================================
// CONFIDENCE RATING — DATA LAYER
// ============================================
// Tracks the confidence level for the current card (before flip)
let currentConfidence = null;

// Load all confidence records from localStorage
function loadConfidenceData() {
    try {
        return JSON.parse(localStorage.getItem(LS_CONFIDENCE_DATA)) || {};
    } catch { return {}; }
}

// Save confidence data to localStorage
function saveConfidenceData(data) {
    localStorage.setItem(LS_CONFIDENCE_DATA, JSON.stringify(data));
}

// Record a confidence-vs-rating pair after the student rates a card
// confidence: 1 (not sure), 2 (think I know), 3 (confident)
// rating: 'hard', 'good', or 'easy'
function saveConfidenceRecord(cardId, confidence, rating) {
    const data = loadConfidenceData();
    const levelKey = `level${currentLevel}`;
    if (!data[levelKey]) data[levelKey] = {};
    if (!data[levelKey][cardId]) data[levelKey][cardId] = [];

    data[levelKey][cardId].push({
        confidence,
        rating,
        date: new Date().toISOString().slice(0, 10)
    });

    // Keep last 10 records per card to avoid unbounded growth
    if (data[levelKey][cardId].length > 10) {
        data[levelKey][cardId] = data[levelKey][cardId].slice(-10);
    }

    saveConfidenceData(data);
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeLevelSelector();
    initializeNavigation();
    initializeApproachCards();
    initializeFlashcards();
    initializeQuiz();
    initializeAudio();
    initializeFlashcardAudio();
    initializeRatingButtons();
    initializeConfidenceButtons();
    initializeElaborationPrompts();
    initializeBrainDump();
    initializeProgressDashboard();
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
    // Stop any playing audio when switching levels
    if (typeof stopCurrentAudio === 'function') stopCurrentAudio();

    // Update approach card content visibility
    document.querySelectorAll('.level-content').forEach(content => {
        content.style.display = 'none';
    });
    document.querySelectorAll(`.level-content.level-${currentLevel}`).forEach(content => {
        content.style.display = 'block';
    });

    // Reset flashcards for new level
    currentFilterCategory = 'all';
    // Reset active category button
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.category-btn[data-category="all"]');
    if (allBtn) allBtn.classList.add('active');
    filterFlashcards('all');
    updateFlashcard();

    // Update due badge for new level
    updateDueBadge();

    // Reset quiz
    resetQuiz();

    // Refresh progress dashboard if visible
    if (currentSection === 'progress') renderProgressDashboard();
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

    // Render progress dashboard when navigating to it
    if (sectionId === 'progress') renderProgressDashboard();
    // Update due badge when navigating to flashcards
    if (sectionId === 'flashcards') updateDueBadge();
    // Clean up brain dump timer when navigating away
    if (sectionId !== 'braindump' && braindumpTimerInterval) {
        clearInterval(braindumpTimerInterval);
        braindumpTimerInterval = null;
    }
    // Refresh brain dump history when navigating to it
    if (sectionId === 'braindump') renderBraindumpHistory();
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

    // Clicking the card is now a no-op on the front face (must use confidence
    // buttons to flip). If already flipped, clicking unflips it.
    flashcard.addEventListener('click', () => {
        if (flashcard.classList.contains('flipped')) {
            // Allow unflipping by clicking the card
            if (typeof stopFlashcardAudio === 'function') stopFlashcardAudio();
            flashcard.classList.remove('flipped');
            const ratingEl = document.getElementById('sr-rating-buttons');
            if (ratingEl) ratingEl.classList.remove('visible');
            updateConfidenceVisibility();
        }
        // If not flipped, do nothing — student must pick confidence first
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
            if (!flashcard.classList.contains('flipped')) {
                // Quick-flip with default "Think I know" confidence
                recordConfidence(2);
            } else {
                // Unflip if already showing answer
                flashcard.classList.remove('flipped');
                const ratingEl = document.getElementById('sr-rating-buttons');
                if (ratingEl) ratingEl.classList.remove('visible');
                updateConfidenceVisibility();
            }
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
    currentFilterCategory = category;

    // Tag each card with its original array index (for audio file mapping)
    const tagged = levelCards.map((card, i) => ({ ...card, _origIndex: i }));

    if (category === 'review') {
        // Show due and never-seen cards, with never-seen first
        const due = [];
        const neverSeen = [];
        tagged.forEach(card => {
            const cardId = getCardId(card);
            const state = getCardSRState(cardId);
            if (!state.lastReviewed) {
                neverSeen.push(card);
            } else if (isCardDue(cardId)) {
                due.push(card);
            }
        });
        filteredFlashcards = [...neverSeen, ...due];
    } else if (category === 'all') {
        filteredFlashcards = tagged;
    } else {
        filteredFlashcards = tagged.filter(card => card.category === category);
    }

    currentFlashcardIndex = 0;
    // Stop flashcard audio when filtering
    stopFlashcardAudio();
    updateFlashcard();
}

function navigateFlashcard(direction) {
    const flashcard = document.getElementById('current-flashcard');
    flashcard.classList.remove('flipped');
    // Stop audio when moving to a different card
    stopFlashcardAudio();

    currentFlashcardIndex += direction;
    if (currentFlashcardIndex < 0) {
        currentFlashcardIndex = filteredFlashcards.length - 1;
    } else if (currentFlashcardIndex >= filteredFlashcards.length) {
        currentFlashcardIndex = 0;
    }

    setTimeout(() => updateFlashcard(), 150);
}

function updateFlashcard() {
    // Hide rating buttons whenever card changes (they reappear on flip)
    const ratingEl = document.getElementById('sr-rating-buttons');
    if (ratingEl) ratingEl.classList.remove('visible');

    // Hide any visible elaboration prompt
    hideElaborationPrompt();

    // Reset confidence state and show confidence buttons for the new card
    updateConfidenceVisibility();

    if (filteredFlashcards.length === 0) {
        document.querySelector('.flashcard-question').textContent = 'No flashcards available for this category.';
        document.querySelector('.flashcard-answer').textContent = '';
        document.getElementById('current-card-num').textContent = '0';
        document.getElementById('total-cards').textContent = '0';
        // Hide confidence buttons when no cards
        const confEl = document.getElementById('confidence-buttons');
        if (confEl) confEl.classList.add('hidden');
        return;
    }

    const card = filteredFlashcards[currentFlashcardIndex];
    document.querySelector('.flashcard-question').textContent = card.question;
    document.querySelector('.flashcard-answer').textContent = card.answer;
    document.getElementById('current-card-num').textContent = currentFlashcardIndex + 1;
    document.getElementById('total-cards').textContent = filteredFlashcards.length;
}

function shuffleFlashcards() {
    stopFlashcardAudio();
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

    if (quizType === 'interleaved') {
        // Interleaved mode: mix all existing + approach-id questions
        availableQuestions = buildInterleavedPool();
        interleavedApproachResults = {}; // Reset per-approach tracking
    } else if (quizType === 'multiple') {
        availableQuestions = [...levelQuestions.multiple];
    } else if (quizType === 'truefalse') {
        availableQuestions = [...levelQuestions.truefalse];
    } else {
        availableQuestions = [...levelQuestions.multiple, ...levelQuestions.truefalse];
    }

    // Shuffle and select questions (interleaved pool is already shuffled)
    if (quizType !== 'interleaved') {
        for (let i = availableQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
        }
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

    // Track per-approach accuracy for interleaved quizzes
    if (document.getElementById('quiz-type').value === 'interleaved' && question.approach) {
        if (!interleavedApproachResults[question.approach]) {
            interleavedApproachResults[question.approach] = { correct: 0, total: 0 };
        }
        interleavedApproachResults[question.approach].total++;
        if (isCorrect) interleavedApproachResults[question.approach].correct++;
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

    // Save quiz attempt to localStorage and update streak
    const quizType = document.getElementById('quiz-type').value;
    saveQuizAttempt(currentLevel, quizType, quizScore, currentQuiz.length);
    recordStudyActivity();

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

    // Show per-approach breakdown for interleaved quizzes
    if (quizType === 'interleaved') {
        renderApproachBreakdown();
    } else {
        const breakdownEl = document.getElementById('approach-breakdown');
        if (breakdownEl) breakdownEl.style.display = 'none';
    }
}

function resetQuiz() {
    currentQuiz = [];
    currentQuestionIndex = 0;
    quizScore = 0;
    quizAnswers = [];
    interleavedApproachResults = {};

    document.querySelector('.quiz-options').style.display = 'flex';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    const breakdownEl = document.getElementById('approach-breakdown');
    if (breakdownEl) breakdownEl.style.display = 'none';
}

// ============================================
// AUDIO NARRATION
// ============================================

// Map data-audio values to file name prefixes
const audioFileMap = {
    biological: 'biological',
    behaviourist: 'behaviourist',
    cognitive: 'cognitive',
    humanistic: 'humanistic',
    psychodynamic: 'psychodynamic',
    sociocultural: 'sociocultural'
};

// Currently playing audio element and its button
let currentAudio = null;
let currentAudioBtn = null;

function initializeAudio() {
    // Attach click handlers to all audio buttons (stop event bubbling so
    // clicking the button doesn't also toggle the card open/closed)
    document.querySelectorAll('.audio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleAudio(btn);
        });
    });
}

function toggleAudio(btn) {
    const approach = btn.dataset.audio;
    const prefix = audioFileMap[approach];
    // Build the file path using current level
    const src = `audio/level${currentLevel}_${prefix}.mp3`;

    // If this button is already playing, pause it
    if (currentAudioBtn === btn && currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        btn.textContent = '▶';
        btn.classList.remove('playing');
        return;
    }

    // Stop any other playing audio first
    stopCurrentAudio();

    // Create and play new audio
    currentAudio = new Audio(src);
    currentAudioBtn = btn;
    btn.textContent = '⏸︎';
    btn.classList.add('playing');

    currentAudio.play();

    // Reset button when audio finishes
    currentAudio.addEventListener('ended', () => {
        btn.textContent = '▶';
        btn.classList.remove('playing');
        currentAudio = null;
        currentAudioBtn = null;
    });
}

function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    if (currentAudioBtn) {
        currentAudioBtn.textContent = '▶';
        currentAudioBtn.classList.remove('playing');
    }
    currentAudio = null;
    currentAudioBtn = null;
}

// ============================================
// FLASHCARD AUDIO
// ============================================

let fcAudio = null;  // Currently playing flashcard audio

function initializeFlashcardAudio() {
    const btn = document.getElementById('fc-audio-btn');
    btn.addEventListener('click', toggleFlashcardAudio);
}

function toggleFlashcardAudio() {
    const btn = document.getElementById('fc-audio-btn');

    // If already playing, pause
    if (fcAudio && !fcAudio.paused) {
        fcAudio.pause();
        btn.textContent = '▶';
        btn.classList.remove('playing');
        return;
    }

    // Stop any approach-card audio that might be playing
    stopCurrentAudio();
    stopFlashcardAudio();

    // Build the file path: _q.mp3 for front (question), _a.mp3 for back (answer)
    if (filteredFlashcards.length === 0) return;
    const card = filteredFlashcards[currentFlashcardIndex];
    const idx = String(card._origIndex).padStart(2, '0');
    const isFlipped = document.getElementById('current-flashcard').classList.contains('flipped');
    const side = isFlipped ? 'a' : 'q';
    const src = `audio/fc_l${currentLevel}_${idx}_${side}.mp3`;

    fcAudio = new Audio(src);
    btn.textContent = '⏸︎';
    btn.classList.add('playing');

    fcAudio.play();

    fcAudio.addEventListener('ended', () => {
        btn.textContent = '▶';
        btn.classList.remove('playing');
        fcAudio = null;
    });
}

function stopFlashcardAudio() {
    const btn = document.getElementById('fc-audio-btn');
    if (fcAudio) {
        fcAudio.pause();
        fcAudio.currentTime = 0;
        fcAudio = null;
    }
    if (btn) {
        btn.textContent = '▶';
        btn.classList.remove('playing');
    }
}

// ============================================
// SPACED REPETITION — RATING BUTTONS
// ============================================
function initializeRatingButtons() {
    document.querySelectorAll('.sr-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Don't flip the card
            const rating = btn.dataset.rating;
            rateCurrentCard(rating);
        });
    });
}

function rateCurrentCard(rating) {
    if (filteredFlashcards.length === 0) return;

    const card = filteredFlashcards[currentFlashcardIndex];
    const cardId = getCardId(card);
    const currentState = getCardSRState(cardId);
    const newState = calculateSR(currentState, rating);
    setCardSRState(cardId, newState);

    // Save confidence-vs-rating pair if a confidence was recorded
    if (currentConfidence !== null) {
        saveConfidenceRecord(cardId, currentConfidence, rating);
        currentConfidence = null;
    }

    // Record study activity for streak
    recordStudyActivity();

    // Update due badge
    updateDueBadge();

    // Auto-advance to next card after a short delay
    setTimeout(() => {
        const flashcard = document.getElementById('current-flashcard');
        flashcard.classList.remove('flipped');
        document.getElementById('sr-rating-buttons').classList.remove('visible');
        stopFlashcardAudio();

        // If in review mode and we've gone through all cards, refresh the filter
        if (currentFilterCategory === 'review') {
            // Remove the current card from the filtered set if it's no longer due
            if (!isCardDue(cardId)) {
                filteredFlashcards.splice(currentFlashcardIndex, 1);
                if (filteredFlashcards.length === 0) {
                    updateFlashcard();
                    updateDueBadge();
                    return;
                }
                // Keep index in bounds
                if (currentFlashcardIndex >= filteredFlashcards.length) {
                    currentFlashcardIndex = 0;
                }
            } else {
                // Card is still due (rated hard) — move to next
                currentFlashcardIndex++;
                if (currentFlashcardIndex >= filteredFlashcards.length) {
                    currentFlashcardIndex = 0;
                }
            }
        } else {
            // Normal mode — just go to next card
            currentFlashcardIndex++;
            if (currentFlashcardIndex >= filteredFlashcards.length) {
                currentFlashcardIndex = 0;
            }
        }

        setTimeout(() => updateFlashcard(), 150);
    }, 200);
}

// ============================================
// REVIEW DUE BADGE
// ============================================
function updateDueBadge() {
    const badge = document.getElementById('due-badge');
    if (badge) {
        const count = countDueCards();
        badge.textContent = count;
    }
}

// ============================================
// PROGRESS DASHBOARD
// ============================================
function initializeProgressDashboard() {
    // Clear progress button
    const clearBtn = document.getElementById('clear-progress');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all progress? This cannot be undone.')) {
                localStorage.removeItem(LS_FLASHCARD_DATA);
                localStorage.removeItem(LS_QUIZ_HISTORY);
                localStorage.removeItem(LS_STUDY_STREAK);
                localStorage.removeItem(LS_CONFIDENCE_DATA);
                localStorage.removeItem(LS_ELABORATION_ENABLED);
                localStorage.removeItem(LS_BRAINDUMP_HISTORY);
                updateDueBadge();
                renderProgressDashboard();
            }
        });
    }
}

// Render all panels of the progress dashboard
function renderProgressDashboard() {
    renderStreakPanel();
    renderMasteryPanel();
    renderQuizHistoryPanel();
    renderReviewSummaryPanel();
    renderCalibrationPanel();
}

function renderStreakPanel() {
    const streak = loadStreak();
    document.getElementById('streak-current').textContent = streak.current;
    document.getElementById('streak-longest').textContent = streak.longest;
}

function renderMasteryPanel() {
    const levelCards = currentLevel === 2 ? flashcards.level2 : flashcards.level3;
    const overviewEl = document.getElementById('mastery-overview');
    const barsEl = document.getElementById('mastery-bars');

    // Count mastery states across all cards
    let newCount = 0, learningCount = 0, masteredCount = 0;
    // Per-approach counts
    const approaches = {};

    levelCards.forEach((card, i) => {
        const cardId = `${card.category}_${i}`;
        const state = getCardSRState(cardId);
        const mastery = getCardMastery(state);

        if (mastery === 'new') newCount++;
        else if (mastery === 'learning') learningCount++;
        else masteredCount++;

        if (!approaches[card.category]) {
            approaches[card.category] = { total: 0, mastered: 0, learning: 0 };
        }
        approaches[card.category].total++;
        if (mastery === 'mastered') approaches[card.category].mastered++;
        if (mastery === 'learning') approaches[card.category].learning++;
    });

    const total = levelCards.length;
    const masteredPct = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

    overviewEl.innerHTML = `
        <div class="mastery-summary">
            <div class="mastery-stat mastered">
                <span class="stat-value">${masteredPct}%</span>
                <span class="stat-label">Mastered (${masteredCount})</span>
            </div>
            <div class="mastery-stat learning">
                <span class="stat-value">${learningCount}</span>
                <span class="stat-label">Learning</span>
            </div>
            <div class="mastery-stat new">
                <span class="stat-value">${newCount}</span>
                <span class="stat-label">New</span>
            </div>
        </div>
    `;

    // Approach names for display
    const approachNames = {
        biological: '🧬 Biological',
        behaviourist: '🔔 Behaviourist',
        cognitive: '💭 Cognitive',
        humanistic: '🌱 Humanistic',
        psychodynamic: '🛋️ Psychodynamic',
        sociocultural: '🌍 Sociocultural'
    };

    let barsHTML = '';
    for (const [key, data] of Object.entries(approaches)) {
        const pct = data.total > 0 ? Math.round(((data.mastered + data.learning) / data.total) * 100) : 0;
        barsHTML += `
            <div class="mastery-bar-item">
                <div class="mastery-bar-label">
                    <span>${approachNames[key] || key}</span>
                    <span>${pct}%</span>
                </div>
                <div class="mastery-bar-track">
                    <div class="mastery-bar-fill" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    }
    barsEl.innerHTML = barsHTML;
}

function renderQuizHistoryPanel() {
    const history = loadQuizHistory();
    const listEl = document.getElementById('quiz-history-list');

    // Filter to current level
    const levelHistory = history.filter(h => h.level === currentLevel);

    if (levelHistory.length === 0) {
        listEl.innerHTML = '<p class="empty-state">No quizzes completed yet.</p>';
        return;
    }

    // Show last 5
    const recent = levelHistory.slice(-5).reverse();

    // Calculate trend (compare last 2 scores)
    let trend = '';
    if (levelHistory.length >= 2) {
        const last = levelHistory[levelHistory.length - 1].percentage;
        const prev = levelHistory[levelHistory.length - 2].percentage;
        if (last > prev) trend = '↗';
        else if (last < prev) trend = '↘';
        else trend = '→';
    }

    let html = '';
    recent.forEach((attempt, i) => {
        const date = new Date(attempt.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short' });
        const trendDisplay = (i === 0 && trend) ? `<span class="quiz-history-trend">${trend}</span>` : '';
        html += `
            <div class="quiz-history-item">
                <span class="quiz-history-date">${date}</span>
                <span class="quiz-history-score">${attempt.score}/${attempt.total} (${attempt.percentage}%)</span>
                ${trendDisplay}
            </div>
        `;
    });
    listEl.innerHTML = html;
}

function renderReviewSummaryPanel() {
    const levelCards = currentLevel === 2 ? flashcards.level2 : flashcards.level3;
    let dueCount = 0, masteredCount = 0, learningCount = 0, newCount = 0;

    levelCards.forEach((card, i) => {
        const cardId = `${card.category}_${i}`;
        const state = getCardSRState(cardId);
        const mastery = getCardMastery(state);

        if (mastery === 'new') newCount++;
        else if (mastery === 'mastered') masteredCount++;
        else learningCount++;

        if (isCardDue(cardId)) dueCount++;
    });

    const statsEl = document.getElementById('review-stats');
    statsEl.innerHTML = `
        <div class="review-stat-item due">
            <span class="review-stat-value">${dueCount}</span>
            <span class="review-stat-label">Due Today</span>
        </div>
        <div class="review-stat-item mastered">
            <span class="review-stat-value">${masteredCount}</span>
            <span class="review-stat-label">Mastered</span>
        </div>
        <div class="review-stat-item learning">
            <span class="review-stat-value">${learningCount}</span>
            <span class="review-stat-label">Learning</span>
        </div>
        <div class="review-stat-item new-cards">
            <span class="review-stat-value">${newCount}</span>
            <span class="review-stat-label">New</span>
        </div>
    `;
}

// ============================================
// CONFIDENCE RATING — UI
// ============================================

// Set up click handlers on the three confidence buttons
function initializeConfidenceButtons() {
    document.querySelectorAll('.confidence-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const level = parseInt(btn.dataset.confidence);
            recordConfidence(level);
        });
    });
}

// Store the confidence pick, then flip the card to reveal the answer
function recordConfidence(confidenceLevel) {
    currentConfidence = confidenceLevel;

    // Flip the card
    const flashcard = document.getElementById('current-flashcard');
    if (typeof stopFlashcardAudio === 'function') stopFlashcardAudio();
    flashcard.classList.add('flipped');

    // Show SR rating buttons, hide confidence buttons
    const ratingEl = document.getElementById('sr-rating-buttons');
    if (ratingEl) ratingEl.classList.add('visible');
    const confEl = document.getElementById('confidence-buttons');
    if (confEl) confEl.classList.add('hidden');

    // Maybe show an elaboration prompt
    if (filteredFlashcards.length > 0) {
        maybeShowElaborationPrompt(filteredFlashcards[currentFlashcardIndex]);
    }
}

// Show/hide confidence buttons based on card state
function updateConfidenceVisibility() {
    const flashcard = document.getElementById('current-flashcard');
    const confEl = document.getElementById('confidence-buttons');
    if (!confEl) return;

    // Show confidence buttons when card is NOT flipped and there are cards to show
    if (flashcard && !flashcard.classList.contains('flipped') && filteredFlashcards.length > 0) {
        confEl.classList.remove('hidden');
    } else {
        confEl.classList.add('hidden');
    }

    // Reset confidence for the new card
    currentConfidence = null;
}

// ============================================
// CONFIDENCE CALIBRATION — Dashboard Panel
// ============================================

// Render the calibration panel in the progress dashboard
function renderCalibrationPanel() {
    const displayEl = document.getElementById('calibration-display');
    if (!displayEl) return;

    const data = loadConfidenceData();
    const levelKey = `level${currentLevel}`;
    const levelData = data[levelKey] || {};

    // Collect all confidence-rating pairs across all cards
    const buckets = { 1: { knew: 0, total: 0 }, 2: { knew: 0, total: 0 }, 3: { knew: 0, total: 0 } };
    const labels = { 1: 'Not sure', 2: 'Think I know', 3: 'Confident' };

    for (const records of Object.values(levelData)) {
        for (const record of records) {
            const c = record.confidence;
            if (buckets[c]) {
                buckets[c].total++;
                // "Knew it" = rated good or easy (not hard)
                if (record.rating === 'good' || record.rating === 'easy') {
                    buckets[c].knew++;
                }
            }
        }
    }

    const totalRecords = buckets[1].total + buckets[2].total + buckets[3].total;
    if (totalRecords === 0) {
        displayEl.innerHTML = '<p class="empty-state">No confidence data yet. Rate your confidence before flipping flashcards to build data here.</p>';
        return;
    }

    // Build calibration bars
    let html = '';
    for (const level of [1, 2, 3]) {
        const b = buckets[level];
        const pct = b.total > 0 ? Math.round((b.knew / b.total) * 100) : 0;
        // Colour based on expected calibration:
        // Level 1 (not sure): low accuracy expected, so anything is fine
        // Level 3 (confident): should be high accuracy — poor if < 60%
        let barClass = 'good';
        if (level === 3 && pct < 60) barClass = 'poor';
        else if (level === 3 && pct < 80) barClass = 'ok';
        else if (level === 2 && pct < 40) barClass = 'ok';

        html += `
            <div class="calibration-row">
                <span class="calibration-label">${labels[level]}</span>
                <div class="calibration-bar-wrap">
                    <div class="calibration-bar-track">
                        <div class="calibration-bar-fill ${barClass}" style="width: ${pct}%"></div>
                    </div>
                    <span class="calibration-pct">${pct}%</span>
                </div>
                <span class="calibration-count">(${b.total})</span>
            </div>
        `;
    }

    // Add a calibration insight message
    const confBucket = buckets[3];
    if (confBucket.total >= 5 && confBucket.total > 0) {
        const confPct = Math.round((confBucket.knew / confBucket.total) * 100);
        if (confPct < 60) {
            html += `<div class="calibration-message">You said "Confident" on ${confBucket.total} cards but only knew ${confBucket.knew}. Try slowing down and testing yourself more carefully.</div>`;
        } else if (confPct >= 90) {
            html += `<div class="calibration-message">Great calibration! When you feel confident, you usually do know the answer.</div>`;
        }
    }

    const unsureBucket = buckets[1];
    if (unsureBucket.total >= 5 && unsureBucket.total > 0) {
        const unsurePct = Math.round((unsureBucket.knew / unsureBucket.total) * 100);
        if (unsurePct > 70) {
            html += `<div class="calibration-message">You often say "Not sure" but actually know the answer (${unsurePct}% correct). Trust yourself more!</div>`;
        }
    }

    displayEl.innerHTML = html;
}

// ============================================
// ELABORATION PROMPTS — Thinking nudges
// ============================================

// localStorage key for the toggle preference
const LS_ELABORATION_ENABLED = 'psych_elaboration_enabled';

// Pool of prompts — general + per-approach + comparison
const elaborationPrompts = {
    general: [
        'Why is this the case?',
        'Give a real-life example of this.',
        'Explain this in your own words to a friend.',
        'How might you use this concept in an internal?',
        'What would someone who disagrees with this say?',
        'Can you think of a New Zealand example?'
    ],
    biological: [
        'What brain region or neurotransmitter might be involved?',
        'How might a twin study test this?',
        'Is this an example of nature, nurture, or both?'
    ],
    behaviourist: [
        'What conditioning principle is at work here?',
        'Is this classical or operant conditioning?',
        'How could this be applied in a classroom?'
    ],
    cognitive: [
        'What schema might be involved?',
        'Is this a System 1 or System 2 process?',
        'How could this lead to a cognitive bias?'
    ],
    humanistic: [
        'Where does this fit on Maslow\'s hierarchy?',
        'Does this relate to free will or determinism?',
        'How does this connect to self-actualisation?'
    ],
    psychodynamic: [
        'Which part of personality (id/ego/superego) is involved?',
        'Could a defence mechanism be at play here?',
        'How might childhood experiences relate to this?'
    ],
    sociocultural: [
        'Would this apply in a collectivist culture?',
        'How might conformity or social influence play a role?',
        'Could this finding be limited by WEIRD samples?'
    ],
    comparison: [
        'How would the biological approach explain this differently?',
        'How would a behaviourist and a humanist disagree about this?',
        'Which debate is most relevant here: nature/nurture, free will/determinism, or holism/reductionism?'
    ]
};

// Track recently shown prompts to avoid repetition
let recentPrompts = [];
let elaborationEnabled = true;

// Set up the elaboration toggle checkbox
function initializeElaborationPrompts() {
    const toggle = document.getElementById('elaboration-toggle');
    if (!toggle) return;

    // Load saved preference
    const saved = localStorage.getItem(LS_ELABORATION_ENABLED);
    elaborationEnabled = saved === null ? true : saved === 'true';
    toggle.checked = elaborationEnabled;

    toggle.addEventListener('change', () => {
        elaborationEnabled = toggle.checked;
        localStorage.setItem(LS_ELABORATION_ENABLED, elaborationEnabled);
        if (!elaborationEnabled) hideElaborationPrompt();
    });
}

// Maybe show an elaboration prompt when a card is flipped (~35% chance)
function maybeShowElaborationPrompt(card) {
    if (!elaborationEnabled) return;
    if (Math.random() > 0.35) return; // Only show ~35% of the time

    // Build pool from general + card-specific + comparison prompts
    const pool = [...elaborationPrompts.general];
    const categoryPrompts = elaborationPrompts[card.category];
    if (categoryPrompts) pool.push(...categoryPrompts);
    pool.push(...elaborationPrompts.comparison);

    // Filter out recently shown prompts
    const available = pool.filter(p => !recentPrompts.includes(p));

    // If all prompts have been shown recently, reset the buffer
    if (available.length === 0) {
        recentPrompts = [];
        return; // Skip this time — fresh pool starts next flip
    }

    // Pick a random prompt
    const prompt = available[Math.floor(Math.random() * available.length)];
    recentPrompts.push(prompt);

    // Keep the recent buffer small (last 8 shown)
    if (recentPrompts.length > 8) recentPrompts.shift();

    // Display the prompt
    const promptEl = document.getElementById('elaboration-prompt');
    const textEl = document.getElementById('elaboration-text');
    if (promptEl && textEl) {
        textEl.textContent = prompt;
        promptEl.style.display = 'block';
    }
}

// Hide the elaboration prompt
function hideElaborationPrompt() {
    const promptEl = document.getElementById('elaboration-prompt');
    if (promptEl) promptEl.style.display = 'none';
}

// ============================================
// BRAIN DUMP — Write-then-compare mode
// ============================================

const LS_BRAINDUMP_HISTORY = 'psych_braindump_history';

// Approach display mapping — handles the behaviorist/behaviourist spelling mismatch
// in HTML data-approach attributes vs app-wide NZ English spelling
const approachMap = {
    biological:    { label: '🧬 Biological',    dataAttr: 'biological' },
    behaviourist:  { label: '🔔 Behaviourist',  dataAttr: 'behaviorist' },
    cognitive:     { label: '💭 Cognitive',      dataAttr: 'cognitive' },
    humanistic:    { label: '🌱 Humanistic',     dataAttr: 'humanistic' },
    psychodynamic: { label: '🛋️ Psychodynamic', dataAttr: 'psychodynamic' },
    sociocultural: { label: '🌍 Sociocultural',  dataAttr: 'sociocultural' }
};

// Brain dump state
let braindumpTimerInterval = null;
let braindumpStartTime = null;
let selectedBraindumpApproach = null;

// Set up topic buttons, event handlers, and render history
function initializeBrainDump() {
    const topicsEl = document.getElementById('braindump-topics');
    const startBtn = document.getElementById('start-braindump');
    const revealBtn = document.getElementById('braindump-reveal');
    const againBtn = document.getElementById('braindump-again');
    const textarea = document.getElementById('braindump-textarea');

    if (!topicsEl) return;

    // Generate topic buttons from approach map
    for (const [key, info] of Object.entries(approachMap)) {
        const btn = document.createElement('button');
        btn.className = 'braindump-topic-btn';
        btn.dataset.approach = key;
        btn.textContent = info.label;
        btn.addEventListener('click', () => {
            // Deselect all, select this one
            document.querySelectorAll('.braindump-topic-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedBraindumpApproach = key;
            startBtn.disabled = false;
        });
        topicsEl.appendChild(btn);
    }

    // Start brain dump
    startBtn.addEventListener('click', startBrainDump);

    // Reveal summary
    revealBtn.addEventListener('click', revealBraindumpSummary);

    // Try again
    againBtn.addEventListener('click', resetBrainDump);

    // Word count on textarea input
    textarea.addEventListener('input', updateBraindumpWordCount);

    // Render any saved history
    renderBraindumpHistory();
}

// Begin the writing phase
function startBrainDump() {
    if (!selectedBraindumpApproach) return;

    const info = approachMap[selectedBraindumpApproach];
    document.getElementById('braindump-topic-title').textContent = info.label;
    document.getElementById('braindump-textarea').value = '';
    document.getElementById('braindump-word-count').textContent = '0 words';
    document.getElementById('braindump-timer').textContent = '0:00';

    // Show writing phase, hide setup
    document.getElementById('braindump-setup').style.display = 'none';
    document.getElementById('braindump-writing').style.display = 'block';
    document.getElementById('braindump-comparison').style.display = 'none';

    // Start timer
    braindumpStartTime = Date.now();
    braindumpTimerInterval = setInterval(updateBraindumpTimer, 1000);

    // Focus the textarea
    document.getElementById('braindump-textarea').focus();
}

// Update the timer display every second
function updateBraindumpTimer() {
    const elapsed = Math.floor((Date.now() - braindumpStartTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    document.getElementById('braindump-timer').textContent = `${mins}:${String(secs).padStart(2, '0')}`;
}

// Count words in the textarea
function updateBraindumpWordCount() {
    const text = document.getElementById('braindump-textarea').value.trim();
    const count = text.length === 0 ? 0 : text.split(/\s+/).length;
    document.getElementById('braindump-word-count').textContent = `${count} word${count !== 1 ? 's' : ''}`;
}

// Extract summary HTML from the existing approach card in the DOM
function getApproachSummaryHTML(approachKey) {
    const info = approachMap[approachKey];
    if (!info) return '<p>Summary not found.</p>';

    const card = document.querySelector(`.approach-card[data-approach="${info.dataAttr}"]`);
    if (!card) return '<p>Summary not found.</p>';

    // Get level-specific content (read currentLevel at reveal time, not start time)
    const content = card.querySelector(`.level-content.level-${currentLevel}`);
    if (!content) return '<p>No content for this level.</p>';

    return content.innerHTML;
}

// Show comparison: user text vs actual summary
function revealBraindumpSummary() {
    // Stop timer
    if (braindumpTimerInterval) {
        clearInterval(braindumpTimerInterval);
        braindumpTimerInterval = null;
    }

    const userText = document.getElementById('braindump-textarea').value;
    const duration = Math.floor((Date.now() - braindumpStartTime) / 1000);
    const wordCount = userText.trim().length === 0 ? 0 : userText.trim().split(/\s+/).length;

    // Populate comparison panels
    const userContentEl = document.getElementById('braindump-user-content');
    userContentEl.textContent = userText;
    userContentEl.classList.add('user-text');

    document.getElementById('braindump-actual-content').innerHTML = getApproachSummaryHTML(selectedBraindumpApproach);

    // Show comparison, hide writing
    document.getElementById('braindump-writing').style.display = 'none';
    document.getElementById('braindump-comparison').style.display = 'block';

    // Save to history
    saveBraindumpAttempt(selectedBraindumpApproach, wordCount, duration);

    // Record study activity for streak
    recordStudyActivity();

    // Refresh history display
    renderBraindumpHistory();
}

// Reset brain dump to setup phase
function resetBrainDump() {
    // Stop timer if running
    if (braindumpTimerInterval) {
        clearInterval(braindumpTimerInterval);
        braindumpTimerInterval = null;
    }

    // Reset selection
    selectedBraindumpApproach = null;
    document.querySelectorAll('.braindump-topic-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('start-braindump').disabled = true;

    // Show setup, hide other phases
    document.getElementById('braindump-setup').style.display = 'block';
    document.getElementById('braindump-writing').style.display = 'none';
    document.getElementById('braindump-comparison').style.display = 'none';
}

// Save a brain dump attempt to localStorage
function saveBraindumpAttempt(approach, wordCount, duration) {
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem(LS_BRAINDUMP_HISTORY)) || [];
    } catch { history = []; }

    history.push({
        date: new Date().toISOString(),
        level: currentLevel,
        approach,
        wordCount,
        duration
    });

    // Keep last 20 attempts
    if (history.length > 20) history.splice(0, history.length - 20);
    localStorage.setItem(LS_BRAINDUMP_HISTORY, JSON.stringify(history));
}

// Render brain dump history list
function renderBraindumpHistory() {
    const listEl = document.getElementById('braindump-history-list');
    if (!listEl) return;

    let history = [];
    try {
        history = JSON.parse(localStorage.getItem(LS_BRAINDUMP_HISTORY)) || [];
    } catch { history = []; }

    // Filter to current level and show last 10
    const levelHistory = history.filter(h => h.level === currentLevel);

    if (levelHistory.length === 0) {
        listEl.innerHTML = '<p class="empty-state">No brain dumps recorded yet.</p>';
        return;
    }

    const recent = levelHistory.slice(-10).reverse();
    let html = '';
    for (const attempt of recent) {
        const date = new Date(attempt.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short' });
        const mins = Math.floor(attempt.duration / 60);
        const secs = attempt.duration % 60;
        const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;
        const label = approachMap[attempt.approach]?.label || attempt.approach;

        html += `
            <div class="braindump-history-item">
                <span class="braindump-history-topic">${label}</span>
                <span class="braindump-history-stats">${attempt.wordCount} words · ${timeStr}</span>
                <span class="braindump-history-date">${date}</span>
            </div>
        `;
    }
    listEl.innerHTML = html;
}

// ============================================
// INTERLEAVED PRACTICE — Approach-identification questions
// ============================================

// New question type: "Which approach?" and "Compare approaches" questions
// These are mixed with existing MC/TF questions in interleaved mode
const interleavedQuestions = {
    level2: [
        // Approach identification — given a scenario, identify the approach
        {
            question: 'A psychologist explains a patient\'s aggression by examining their testosterone levels and brain structure. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 0,
            explanation: 'Examining testosterone and brain structure is characteristic of the biological approach, which focuses on physical causes of behaviour.',
            approach: 'biological'
        },
        {
            question: 'A therapist treats a client\'s phobia by gradually exposing them to the feared stimulus while teaching relaxation. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 1,
            explanation: 'Systematic desensitisation is a behaviourist technique based on classical conditioning principles.',
            approach: 'behaviourist'
        },
        {
            question: 'A researcher argues that a student\'s poor test performance is due to faulty mental schemas about the exam. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 2,
            explanation: 'Schemas are a cognitive concept — mental frameworks that organise and interpret information.',
            approach: 'cognitive'
        },
        {
            question: 'A counsellor focuses on helping their client reach their full potential by providing unconditional positive regard. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 3,
            explanation: 'Unconditional positive regard and self-actualisation are key humanistic concepts from Rogers and Maslow.',
            approach: 'humanistic'
        },
        {
            question: 'A therapist explores a client\'s recurring dream, suggesting it reveals unconscious desires from childhood. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 4,
            explanation: 'Dream analysis and unconscious desires are central to Freud\'s psychodynamic approach.',
            approach: 'psychodynamic'
        },
        {
            question: 'A researcher studies how peer pressure in a group of teenagers affects their risk-taking behaviour. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 5,
            explanation: 'Peer pressure and group influence on behaviour are key concerns of the sociocultural approach.',
            approach: 'sociocultural'
        },
        {
            question: 'A doctor prescribes SSRIs to increase serotonin levels in a patient with depression. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 0,
            explanation: 'Drug treatment targeting neurotransmitters is a biological approach to mental health.',
            approach: 'biological'
        },
        {
            question: 'A teacher uses a sticker chart to reward students for completing homework. Which approach explains this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 1,
            explanation: 'A sticker chart is a token economy — a behaviourist technique using operant conditioning (positive reinforcement).',
            approach: 'behaviourist'
        },
        {
            question: 'A psychologist explains road rage as the result of the availability heuristic and confirmation bias. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 2,
            explanation: 'Heuristics and cognitive biases are concepts from the cognitive approach.',
            approach: 'cognitive'
        },
        {
            question: 'A researcher studies how New Zealand\'s collectivist Māori culture shapes attitudes toward mental health differently from individualist Pākehā culture. Which approach?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 5,
            explanation: 'Comparing cultural influences on attitudes is a sociocultural approach to psychology.',
            approach: 'sociocultural'
        },
        {
            question: 'A psychologist explains a client\'s anger issues as the result of an overactive id overwhelming a weak ego. Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 4,
            explanation: 'The id, ego, and superego are structures of personality in Freud\'s psychodynamic theory.',
            approach: 'psychodynamic'
        },
        {
            question: 'A therapist helps a client explore the gap between their "ideal self" and "actual self". Which approach is this?',
            options: ['Biological', 'Behaviourist', 'Cognitive', 'Humanistic', 'Psychodynamic', 'Sociocultural'],
            correct: 3,
            explanation: 'The concept of incongruence between ideal and actual self comes from Rogers\' humanistic approach.',
            approach: 'humanistic'
        },
        // Discrimination questions — compare two approaches
        {
            question: 'A student is anxious before a speech. A behaviourist would say this is because anxiety was conditioned through past experience. How would a biological psychologist explain it?',
            options: ['The amygdala is overactive and cortisol levels are elevated', 'The student has an external locus of control', 'The student\'s superego is in conflict with the id', 'The student conforms to group expectations of nervousness'],
            correct: 0,
            explanation: 'The biological approach would focus on brain activity (amygdala) and stress hormones (cortisol) as the cause of anxiety.',
            approach: 'biological'
        },
        {
            question: 'Both the behaviourist and cognitive approaches study learning. What is the key difference?',
            options: ['Behaviourists use experiments but cognitivists do not', 'Behaviourists focus on observable behaviour while cognitivists focus on internal mental processes', 'There is no real difference between them', 'Behaviourists study humans while cognitivists study animals'],
            correct: 1,
            explanation: 'The behaviourist approach only studies observable behaviour, while the cognitive approach investigates internal mental processes like schemas and memory.',
            approach: 'cognitive'
        },
        {
            question: 'Which two approaches would DISAGREE most about whether we have free will?',
            options: ['Humanistic and behaviourist', 'Biological and cognitive', 'Sociocultural and psychodynamic', 'Cognitive and humanistic'],
            correct: 0,
            explanation: 'Humanists strongly support free will (we choose our behaviour), while behaviourists support environmental determinism (behaviour is controlled by reinforcement).',
            approach: 'humanistic'
        },
        {
            question: 'A teenager steals from a shop. How would a psychodynamic explanation differ from a sociocultural one?',
            options: ['Psychodynamic: unconscious impulses from a dominant id. Sociocultural: peer pressure and social norms.', 'Psychodynamic: genetic predisposition. Sociocultural: cognitive bias.', 'Psychodynamic: lack of reinforcement. Sociocultural: conditioned response.', 'They would explain it the same way.'],
            correct: 0,
            explanation: 'The psychodynamic approach would look at unconscious drives (id), while the sociocultural approach would examine social influences like peer pressure.',
            approach: 'psychodynamic'
        },
        {
            question: 'Explaining depression as "low serotonin" is an example of which type of reductionism?',
            options: ['Machine reductionism', 'Environmental reductionism', 'Biological reductionism', 'Cultural reductionism'],
            correct: 2,
            explanation: 'Reducing depression to a single neurotransmitter is biological reductionism — ignoring psychological, social, and environmental factors.',
            approach: 'biological'
        },
        {
            question: 'Which approach is MOST likely to be criticised for ignoring cultural differences?',
            options: ['Sociocultural', 'Biological', 'Humanistic', 'Behaviourist'],
            correct: 1,
            explanation: 'The biological approach focuses on universal biological mechanisms and is often criticised for ignoring how culture shapes behaviour and health.',
            approach: 'biological'
        },
        {
            question: 'A researcher claims memories are stored like files on a computer. This is an example of:',
            options: ['Biological reductionism', 'Environmental reductionism', 'Machine reductionism', 'Psychic determinism'],
            correct: 2,
            explanation: 'The computer analogy for the mind is machine reductionism — a criticism of the cognitive approach for oversimplifying mental processes.',
            approach: 'cognitive'
        },
        {
            question: 'Which debate is MOST relevant when comparing the biological and behaviourist approaches?',
            options: ['Holism vs reductionism', 'Nature vs nurture', 'The replication crisis', 'Idiographic vs nomothetic'],
            correct: 1,
            explanation: 'The biological approach emphasises nature (genes, brain) while the behaviourist approach emphasises nurture (environment, conditioning) — the core of the nature-nurture debate.',
            approach: 'biological'
        }
    ],
    level3: [
        {
            question: 'A researcher uses fMRI to show that London taxi drivers have larger hippocampi due to navigation experience. Which approach and concept does this best demonstrate?',
            options: ['Biological — neuroplasticity', 'Cognitive — schemas', 'Behaviourist — operant conditioning', 'Sociocultural — cultural learning'],
            correct: 0,
            explanation: 'Brain changes from experience demonstrate neuroplasticity — a key biological concept showing the brain adapts to environmental demands.',
            approach: 'biological'
        },
        {
            question: 'Bandura showed children imitated aggressive behaviour from adult models. This challenges which approach\'s view that learning requires direct reinforcement?',
            options: ['Cognitive', 'Behaviourist', 'Humanistic', 'Psychodynamic'],
            correct: 1,
            explanation: 'Social learning theory challenged traditional behaviourism by showing learning can occur through observation without direct reinforcement.',
            approach: 'behaviourist'
        },
        {
            question: 'Baddeley\'s working memory model includes a central executive. What does this component do?',
            options: ['Stores visual information', 'Processes verbal sounds', 'Controls attention and coordinates other components', 'Transfers information to long-term memory'],
            correct: 2,
            explanation: 'The central executive is the supervisory system that directs attention and coordinates the phonological loop and visuospatial sketchpad.',
            approach: 'cognitive'
        },
        {
            question: 'Rogers argued that conditions of worth lead to incongruence. This means:',
            options: ['The id and superego are in conflict', 'There is a gap between actual self and ideal self due to conditional acceptance', 'Reinforcement schedules are inconsistent', 'Brain chemistry is imbalanced'],
            correct: 1,
            explanation: 'Conditions of worth create incongruence — when people feel they must meet conditions to be accepted, causing a gap between who they are and who they want to be.',
            approach: 'humanistic'
        },
        {
            question: 'Erikson extended Freud\'s theory by proposing development continues across the lifespan. How does this differ from Freud?',
            options: ['Erikson focused on biological drives while Freud focused on social stages', 'Erikson proposed 8 psychosocial stages while Freud proposed 5 psychosexual stages ending at puberty', 'Erikson rejected the unconscious mind entirely', 'There is no significant difference'],
            correct: 1,
            explanation: 'Erikson expanded psychodynamic theory beyond childhood, proposing 8 stages across the whole lifespan with a focus on social rather than sexual development.',
            approach: 'psychodynamic'
        },
        {
            question: 'Vygotsky\'s Zone of Proximal Development emphasises learning through social interaction. This aligns most closely with which approach?',
            options: ['Biological', 'Cognitive', 'Behaviourist', 'Sociocultural'],
            correct: 3,
            explanation: 'Vygotsky\'s theory is sociocultural — it argues cognitive development occurs through social interaction and cultural tools.',
            approach: 'sociocultural'
        },
        {
            question: 'A researcher finds that eyewitness testimony is unreliable because leading questions distort memory. Which approach\'s concepts explain this?',
            options: ['Psychodynamic — repression', 'Cognitive — reconstructive memory and schemas', 'Behaviourist — extinction', 'Biological — hippocampal damage'],
            correct: 1,
            explanation: 'Loftus\'s research on the misinformation effect demonstrates cognitive concepts: memory is reconstructive and influenced by schemas and post-event information.',
            approach: 'cognitive'
        },
        {
            question: 'Self-efficacy (Bandura) and self-actualisation (Maslow) both relate to personal potential. How do the approaches differ?',
            options: ['Self-efficacy is about belief in ability (behaviourist/social learning); self-actualisation is about reaching full potential (humanistic)', 'They are the same concept from different eras', 'Self-efficacy is biological; self-actualisation is cognitive', 'Self-efficacy is about groups; self-actualisation is about individuals'],
            correct: 0,
            explanation: 'Self-efficacy (behaviourist/social learning) focuses on specific beliefs about capability, while self-actualisation (humanistic) is the broader drive to fulfil one\'s potential.',
            approach: 'humanistic'
        },
        {
            question: 'An emic approach to studying depression in Japan would involve:',
            options: ['Applying Western diagnostic criteria directly', 'Using standardised tests developed in the USA', 'Studying how depression is understood within Japanese culture itself', 'Comparing Japanese rates with American rates'],
            correct: 2,
            explanation: 'An emic approach studies behaviour from within the culture, understanding how Japanese society conceptualises and experiences depression on its own terms.',
            approach: 'sociocultural'
        },
        {
            question: 'Bowlby\'s attachment theory combines elements of which two broad influences on behaviour?',
            options: ['Nature (innate attachment system) and nurture (quality of caregiving)', 'Conscious and unconscious processes', 'Individual and group behaviour', 'Classical and operant conditioning'],
            correct: 0,
            explanation: 'Bowlby argued attachment is innate (nature/evolution) but its quality depends on the caregiver\'s responsiveness (nurture) — a clear example of interactionism.',
            approach: 'psychodynamic'
        },
        {
            question: 'Milgram\'s obedience study showed 65% of participants obeyed authority to deliver maximum shocks. This best supports which concept?',
            options: ['Self-actualisation', 'Biological determinism', 'Situational determinism', 'Cognitive bias'],
            correct: 2,
            explanation: 'Milgram demonstrated situational determinism — the power of social situations (authority, setting) to override individual conscience and personality.',
            approach: 'sociocultural'
        },
        {
            question: 'Transference in psychodynamic therapy occurs when a client projects feelings about parents onto the therapist. This reveals:',
            options: ['Conditioned emotional responses', 'Unconscious relationship patterns from childhood', 'Cognitive distortions', 'Cultural norms about authority'],
            correct: 1,
            explanation: 'Transference reveals unconscious patterns in relationships that originated in childhood experiences with caregivers — a key psychodynamic concept.',
            approach: 'psychodynamic'
        }
    ]
};

// Track per-approach accuracy during an interleaved quiz
let interleavedApproachResults = {};

// Build the interleaved question pool: existing MC/TF + new approach-id questions
function buildInterleavedPool() {
    const levelQuestions = currentLevel === 2 ? quizQuestions.level2 : quizQuestions.level3;
    const levelInterleaved = currentLevel === 2 ? interleavedQuestions.level2 : interleavedQuestions.level3;

    // Combine all question types
    const pool = [
        ...levelQuestions.multiple,
        ...levelQuestions.truefalse,
        ...levelInterleaved
    ];

    // Shuffle the combined pool
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool;
}

// Render per-approach accuracy breakdown in quiz results
function renderApproachBreakdown() {
    const breakdownEl = document.getElementById('approach-breakdown');
    const barsEl = document.getElementById('approach-breakdown-bars');
    if (!breakdownEl || !barsEl) return;

    // Only show if there's data
    const approaches = Object.entries(interleavedApproachResults);
    if (approaches.length === 0) {
        breakdownEl.style.display = 'none';
        return;
    }

    breakdownEl.style.display = 'block';

    // Approach display names
    const names = {
        biological: '🧬 Biological',
        behaviourist: '🔔 Behaviourist',
        cognitive: '💭 Cognitive',
        humanistic: '🌱 Humanistic',
        psychodynamic: '🛋️ Psychodynamic',
        sociocultural: '🌍 Sociocultural'
    };

    let html = '';
    for (const [approach, data] of approaches) {
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        html += `
            <div class="mastery-bar-item">
                <div class="mastery-bar-label">
                    <span>${names[approach] || approach}</span>
                    <span>${data.correct}/${data.total} (${pct}%)</span>
                </div>
                <div class="mastery-bar-track">
                    <div class="mastery-bar-fill" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    }
    barsEl.innerHTML = html;
}
