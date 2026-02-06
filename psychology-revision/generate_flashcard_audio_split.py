"""Generate SEPARATE question and answer audio for each flashcard.

Files: fc_l{level}_{index}_q.mp3 (question) and fc_l{level}_{index}_a.mp3 (answer)
"""

import os
import time

from elevenlabs import ElevenLabs

API_KEY = "28c9a007ab7691a53034447c954a6a68e59d887445cb5dfe02c0dcc92198edbc"
VOICE_ID = "tghQO4ccpTi1eriPYDPW"  # Eliot (professional)
MODEL_ID = "eleven_multilingual_v2"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "audio")

# Flashcard data — mirrors script.js array order exactly.

LEVEL2 = [
    ("What is the main assumption of the biological approach?", "Behaviour and mental processes are shaped by biological factors including the brain, nervous system, hormones, and genetics."),
    ("What do neurotransmitters do?", "Neurotransmitters are chemical messengers that transmit signals between neurons. Examples include serotonin for mood, dopamine for reward, and adrenaline for fight-or-flight."),
    ("What is a limitation of the biological approach?", "It is reductionist — it reduces complex human behaviour to biology alone and ignores environmental and social influences."),
    ("What is classical conditioning?", "Learning through association — pairing a neutral stimulus with an unconditioned stimulus until the neutral stimulus alone triggers the response. Discovered by Pavlov."),
    ("What is the difference between positive and negative reinforcement?", "Positive reinforcement adds something pleasant to increase behaviour. Negative reinforcement removes something unpleasant to increase behaviour. Both strengthen behaviour."),
    ("What does tabula rasa mean in behaviourism?", "It means blank slate — the idea that we are born with no innate knowledge or behaviour, and everything is learned from the environment."),
    ("Who developed operant conditioning?", "B.F. Skinner developed operant conditioning, which explains learning through consequences — reinforcement and punishment."),
    ("What is a schema?", "A mental framework or concept that helps organise and interpret information. Schemas are built from experience and influence how we process new information."),
    ("How does the cognitive approach view the mind?", "Like a computer — with input from the senses, processing through thinking, and output as behaviour. Information is encoded, stored, and retrieved."),
    ("What is a cognitive bias?", "A systematic error in thinking that affects judgments and decisions. Examples include confirmation bias and the availability heuristic."),
    ("What is self-actualisation?", "The innate drive to reach your full potential and become the best version of yourself. It's at the top of Maslow's hierarchy of needs."),
    ("List Maslow's hierarchy of needs from bottom to top.", "First, physiological needs like food and water. Then safety. Then love and belonging. Then esteem. And at the top, self-actualisation. Lower needs must be met before higher needs."),
    ("How does the humanistic approach differ from behaviourism?", "Humanistic psychology believes in free will and personal choice, while behaviourism sees behaviour as determined by environmental conditioning."),
    ("What are the three parts of personality according to Freud?", "The id, which operates on the pleasure principle and wants immediate gratification. The ego, which deals with reality and balances the id and superego. And the superego, which handles morality and conscience."),
    ("What are defence mechanisms?", "Unconscious strategies the ego uses to protect itself from anxiety. Examples include denial, repression, and projection."),
    ("What is the unconscious mind?", "The part of the mind containing thoughts, memories, and desires that we are not aware of but that still influence our behaviour."),
    ("What is conformity?", "Changing your behaviour, attitudes, or beliefs to match those of a group. It can be due to normative influence — wanting to fit in — or informational influence — believing others are correct."),
    ("What is social identity?", "The part of your self-concept that comes from belonging to social groups, such as your nationality, sports team, or school."),
    ("How does culture influence behaviour?", "Culture shapes our values, beliefs, norms, and practices. It affects how we think, feel, and behave in social situations."),
    ("What is the diathesis-stress model?", "A model proposing that psychological disorders result from the interaction of a biological predisposition and environmental triggers. Neither factor alone is sufficient — both must be present."),
    ("What did twin studies reveal about nature vs nurture?", "Identical twins show higher concordance rates for traits than fraternal twins. For schizophrenia, concordance is about 48% in identical twins versus 17% in fraternal — supporting genetics but also showing environment matters."),
    ("What is the MAOA gene controversy?", "The MAOA gene, nicknamed the warrior gene, produces an enzyme that breaks down neurotransmitters. Low-activity variants were linked to aggression, but associating this with specific ethnic groups was criticised as genetic reductionism and racial stereotyping."),
    ("How does epigenetics challenge pure genetic determinism?", "Epigenetics shows that environmental factors like stress, diet, and nurturing can switch genes on or off without changing the DNA sequence. This means biology is not fixed — the environment shapes how genes are expressed."),
    ("What is biological reductionism?", "Explaining complex behaviour by breaking it down to simple biological components like genes, neurotransmitters, or brain structures. For example, explaining depression solely as low serotonin levels ignores social and psychological factors."),
    ("What did Libet's experiment suggest about free will?", "Using EEG, Libet found that brain activity began about 350 to 400 milliseconds before participants were consciously aware of their decision to move. This suggests the brain may decide before we are aware of it."),
    ("What is the difference between fMRI and EEG?", "fMRI measures blood oxygenation to show where brain activity occurs, with high spatial resolution but poor temporal. EEG measures electrical activity via scalp electrodes to show when activity occurs, with high temporal resolution but poor spatial."),
    ("What is environmental determinism?", "The belief that behaviour is governed entirely by environmental influences — systems of reward and punishment — rather than individual choice. Skinner argued that even when we think we choose freely, our decisions trace back to past reinforcement."),
    ("What did the Little Albert study demonstrate?", "Watson and Rayner conditioned a toddler to fear a white rat by pairing it with a loud noise. This demonstrated that emotional responses like fear can be learned through classical conditioning — an example of environmental determinism."),
    ("What is environmental reductionism?", "Reducing all behaviour to simple stimulus-response links learned through experience. Behaviourists break complex behaviour into basic components: stimulus, response, reinforcement, and punishment."),
    ("What is systematic desensitisation?", "A therapy based on classical conditioning that treats phobias by gradually exposing the patient to the feared stimulus while in a relaxed state. It works on the principle that if behaviour is learned, it can be unlearned."),
    ("What are the four schedules of reinforcement?", "Fixed-ratio — reward after a set number of responses. Variable-ratio — reward after a random number. Fixed-interval — reward after a set time. Variable-interval — reward after random time. Variable schedules produce behaviour most resistant to extinction."),
    ("What is a token economy?", "A behaviour modification system using operant conditioning where individuals receive tokens for appropriate behaviour. Tokens are secondary reinforcers — they have no inherent value but can be exchanged for primary reinforcers like food or privileges."),
    ("What is machine reductionism?", "The cognitive approach portrays the mind as an information-processing system like a computer. Critics argue this ignores the influence of emotion, motivation, and social context on thinking."),
    ("What are System 1 and System 2 thinking?", "System 1 is fast, automatic, and intuitive but prone to errors and biases. System 2 is slow, deliberate, and logical but requires effort. Humans rely heavily on System 1, which is why cognitive biases are so common."),
    ("What is the availability heuristic?", "A mental shortcut where we judge the likelihood of events by how easily examples come to mind. For example, people think homicide is more common than suicide because homicide gets more media coverage, even though suicide is actually more frequent."),
    ("How did Loftus demonstrate false memories?", "In the Lost in the Mall study, researchers presented participants with three true childhood events and one false one. After repeated interviews, 25 percent of participants came to believe the false event actually happened."),
    ("What is confirmation bias?", "The tendency to seek out and give greater weight to evidence that confirms existing beliefs while ignoring contradictory information. It is linked to System 1 processing, which is biased to believe and confirm."),
    ("What is the misinformation effect?", "When false information presented after an event contaminates a witness's memory. Loftus showed participants could be led to remember a yield sign instead of a stop sign through misleading questions."),
    ("What is personal agency in humanistic psychology?", "The exercise of free will — the choices individuals make, the paths they follow, and the consequences of those choices. Humanistic psychologists argue this is essential for human dignity and personal responsibility."),
    ("What is Self-Determination Theory?", "Deci and Ryan's theory that three universal needs must be met for well-being: competence — feeling effective, autonomy — feeling in control, and relatedness — feeling connected to others."),
    ("Why is the humanistic approach considered holistic?", "It studies the whole person rather than breaking behaviour into parts. Humanists argue the whole is greater than the sum of its parts — you cannot understand a person by only examining their biology, cognition, or environment separately."),
    ("What is Rogers' Q-sort technique?", "A method to investigate self-concept where clients sort self-evaluative statements into piles from most like me to least like me. It allows comparison between the real self and the ideal self."),
    ("What is locus of control?", "Rotter's concept describing whether a person believes they control their own fate — internal locus — or that outcomes are controlled by outside forces like luck — external locus. Internal locus is linked to better achievement and coping."),
    ("How does the humanistic approach view determinism?", "Humanistic psychologists largely reject determinism. They argue it removes freedom and dignity, devaluing human behaviour by suggesting it is inevitable. Freedom is seen as necessary for self-actualisation."),
    ("What is psychic determinism?", "Freud's belief that no behaviour is accidental — all actions, including slips of the tongue and dreams, have unconscious causes. This is a form of hard determinism, suggesting free will is an illusion."),
    ("What are Freudian slips?", "Slips of the tongue that Freud interpreted as revealing unconscious thoughts or desires. For example, calling someone by the wrong name might reveal hidden feelings. They support psychic determinism — nothing is truly accidental."),
    ("What is Freud's dual instinct theory?", "Freud proposed two fundamental drives: Eros, the life instinct linked to libido and sexuality, and Thanatos, the death instinct linked to aggression and self-destruction. These opposing forces shape all human behaviour."),
    ("How does repression work as a defence mechanism?", "Repression keeps threatening impulses, memories, and desires out of conscious awareness. It requires significant mental energy to maintain. Freud believed repressed material still influences behaviour through symptoms, dreams, and slips of the tongue."),
    ("What is rationalisation as a defence mechanism?", "Explaining away a negative event by minimising its effect or creating a logical-sounding excuse. For example, saying I didn't like her anyway after being rejected protects the ego from the pain of rejection."),
    ("How did Bowlby connect attachment theory to evolution?", "Bowlby argued that the attachment system was designed by natural selection — infants have an innate need to attach to a caregiver for survival. However, the quality of attachment depends on the caregiver's responsiveness, showing nature-nurture interaction."),
    ("What does WEIRD stand for in psychology research?", "Western, Educated, Industrialised, Rich, and Democratic. About 96 percent of psychology study participants come from WEIRD countries, raising serious questions about whether findings can be generalised to the wider human population."),
    ("What did the culture of honour study find?", "After being insulted, 85 percent of Southern US participants became angry compared to 35 percent of Northerners. Southerners also showed spikes in cortisol and testosterone, showing cultural conditioning can produce biological responses."),
    ("What did the Stanford Prison Experiment demonstrate?", "Zimbardo's study randomly assigned students as guards or inmates. Guards quickly became abusive, demonstrating that social roles and situations are powerful determinants of behaviour — often overpowering individual personality."),
    ("How does socioeconomic status affect health?", "Higher socioeconomic status is linked to lower mortality and disease rates. Research shows it affects central nervous system serotonin responsivity — a biological change driven by the social environment, with implications for depression and aggression."),
    ("How does individualism differ from collectivism?", "Individualist cultures emphasise personal traits, uniqueness, and individual success. Collectivist cultures emphasise group harmony, social duty, and shared achievement. This affects attribution, self-concept, and attachment patterns."),
    ("Why is Ainsworth's Strange Situation criticised as ethnocentric?", "It is based on Western child-rearing norms. Japanese children rarely show avoidant-insecure attachment because their culture views such independence as impolite. The test imposes Western assumptions about what healthy attachment looks like."),
    ("What is the nature-nurture debate?", "The question of whether behaviour is shaped by biology — nature, including genes, brain, and hormones — or environment — nurture, including upbringing, culture, and experience. Modern psychology favours interactionism: both constantly interact to shape who we are."),
    ("What is the replication crisis in psychology?", "The finding that many psychology studies cannot be reproduced. The Open Science Collaboration replicated 100 studies and only about 36 percent produced the same results. Causes include small samples, publication bias, and HARKing."),
]

LEVEL3 = [
    ("What is neuroplasticity?", "The brain's ability to reorganise itself by forming new neural connections throughout life. This allows adaptation to new experiences and recovery from injury."),
    ("What is epigenetics?", "The study of how environmental factors can switch genes on or off without changing the DNA sequence itself. This shows nature and nurture interact."),
    ("What did the case of Phineas Gage demonstrate?", "That specific brain regions control specific functions. Damage to his prefrontal cortex caused personality changes, showing this area's role in impulse control and planning."),
    ("What is localisation of function?", "The theory that specific areas of the brain are responsible for specific functions. For example, Broca's area for speech production and Wernicke's area for language comprehension."),
    ("What is social learning theory?", "Bandura's theory that learning can occur through observation and imitation of others, not just direct experience. Key processes are attention, retention, reproduction, and motivation."),
    ("What is vicarious reinforcement?", "Learning from observing the consequences of others' behaviour. If we see someone rewarded, we're more likely to imitate them."),
    ("What did Bandura's Bobo Doll study show?", "Children who observed adults being aggressive toward a Bobo doll were more likely to imitate that aggression, demonstrating observational learning."),
    ("What is self-efficacy?", "A person's belief in their ability to succeed in specific situations. High self-efficacy leads to greater effort and persistence."),
    ("Describe the multi-store memory model.", "Atkinson and Shiffrin's model describes information flowing from sensory memory to short-term memory — which has limited capacity and lasts about 20 seconds — to long-term memory, which has unlimited capacity, through rehearsal."),
    ("What are the components of working memory?", "Baddeley's model includes the central executive, which controls attention; the phonological loop for verbal information; the visuospatial sketchpad for visual and spatial information; and the episodic buffer, which integrates information."),
    ("What did Loftus and Palmer's research show?", "That memory is reconstructive and can be influenced by leading questions. Participants estimated higher speeds when asked how fast were the cars going when they smashed, versus when the word hit was used instead."),
    ("What is reconstructive memory?", "Bartlett's idea that memories are not exact recordings but are actively rebuilt each time. Schemas can distort memories to fit expectations."),
    ("What are Rogers' three core conditions for therapy?", "Unconditional positive regard — acceptance without judgment. Empathy — understanding the client's perspective. And congruence — the therapist being genuine and authentic."),
    ("What are conditions of worth?", "When a person feels they must meet certain conditions to receive love or acceptance from others, leading to incongruence between ideal self and actual self."),
    ("What is the difference between idiographic and nomothetic approaches?", "Idiographic focuses on the unique individual — that's the humanistic approach. Nomothetic seeks general laws applying to all people — that's scientific approaches like behaviourism."),
    ("Name Freud's psychosexual stages in order.", "Oral from birth to one. Anal from one to three. Phallic from three to six. Latency from six to puberty. And genital from puberty onwards. Fixation at any stage can affect adult personality."),
    ("What is transference in psychoanalysis?", "When a client redirects feelings about significant people, usually parents, onto the therapist. This reveals unconscious patterns in relationships."),
    ("How did Erik Erikson extend Freud's theory?", "Erikson proposed eight psychosocial stages across the entire lifespan, not just childhood, focusing on social and cultural influences rather than just sexual drives."),
    ("What is the difference between individualist and collectivist cultures?", "Individualist cultures like New Zealand and the USA prioritise personal goals and independence. Collectivist cultures like Japan and China prioritise group harmony and interdependence."),
    ("What is Vygotsky's Zone of Proximal Development?", "The gap between what a learner can do alone and what they can achieve with guidance. Learning occurs best within this zone with appropriate scaffolding."),
    ("What did Milgram's obedience study demonstrate?", "65 percent of participants administered maximum shocks when instructed by an authority figure. This shows the powerful influence of authority on behaviour."),
    ("What is the difference between emic and etic approaches?", "Emic studies behaviour from within a culture — it's culture-specific. Etic studies behaviour from outside, looking for universal patterns across cultures."),
]


def generate_split_audio():
    """Generate separate Q and A MP3 files for all flashcards."""
    client = ElevenLabs(api_key=API_KEY)
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Count total files to generate
    total = (len(LEVEL2) + len(LEVEL3)) * 2
    done = 0

    for level, cards in [("2", LEVEL2), ("3", LEVEL3)]:
        for i, (question, answer) in enumerate(cards):
            for suffix, text in [("q", question), ("a", answer)]:
                filename = f"fc_l{level}_{i:02d}_{suffix}.mp3"
                output_path = os.path.join(OUTPUT_DIR, filename)

                if os.path.exists(output_path):
                    done += 1
                    print(f"  Skipping {filename} (exists)")
                    continue

                print(f"  [{done + 1}/{total}] {filename}...")
                audio = client.text_to_speech.convert(
                    voice_id=VOICE_ID,
                    text=text,
                    model_id=MODEL_ID,
                )

                with open(output_path, "wb") as f:
                    for chunk in audio:
                        f.write(chunk)

                done += 1
                print(f"  ✓ {filename}")
                time.sleep(0.5)

    print(f"\nDone! Generated {total} split flashcard audio files.")


if __name__ == "__main__":
    generate_split_audio()
