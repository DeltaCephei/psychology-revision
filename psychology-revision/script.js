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

    // Flip card on click — stop audio so it doesn't play the wrong side
    flashcard.addEventListener('click', () => {
        if (typeof stopFlashcardAudio === 'function') stopFlashcardAudio();
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

    // Tag each card with its original array index (for audio file mapping)
    const tagged = levelCards.map((card, i) => ({ ...card, _origIndex: i }));

    if (category === 'all') {
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
