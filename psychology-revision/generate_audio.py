"""Generate topic summary narration audio using ElevenLabs TTS."""

from elevenlabs import ElevenLabs
import os
import time

API_KEY = "28c9a007ab7691a53034447c954a6a68e59d887445cb5dfe02c0dcc92198edbc"
VOICE_ID = "tghQO4ccpTi1eriPYDPW"  # Eliot (professional)
MODEL_ID = "eleven_multilingual_v2"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "audio")

# --- Narration scripts: natural spoken versions of the topic summaries ---

NARRATIONS = {
    # ── Level 2 ──────────────────────────────────────────────────────────
    "level2_biological": """
The Biological Approach.

The key idea here is that behaviour and mental processes are shaped by our biology — our brain, nervous system, hormones, and genetics.

There are three main concepts to know. First, brain structure — different brain regions control different functions. The amygdala handles emotion, while the prefrontal cortex is involved in decision-making. Second, neurotransmitters — these are chemical messengers like serotonin for mood, dopamine for reward, and adrenaline for the fight-or-flight response. Third, genetics — inherited traits can influence behaviour and our predisposition to certain conditions.

The strengths of this approach are that it's scientific and objective — you can actually measure biological factors — and it's led to effective treatments, like medication for depression.

However, it has limitations. It's reductionist, meaning it reduces complex behaviour down to biology alone, and it tends to ignore environmental and social influences.

In terms of key debates, twin studies show high heritability for traits like schizophrenia, with around 48 percent concordance in identical twins, but the gap from 100 percent proves environment also matters. There's also the MAOA "warrior gene" controversy, which showed the dangers of reducing complex behaviour to a single gene. The diathesis-stress model offers an interactionist resolution — suggesting disorders need both a genetic vulnerability and an environmental trigger. And epigenetics shows us that the environment can actually switch genes on and off without changing the DNA itself, proving that nature and nurture constantly interact.
""",

    "level2_behaviourist": """
The Behaviourist Approach.

The key idea is that all behaviour is learned from the environment through conditioning. Behaviourists believe we're born as a blank slate — what's called tabula rasa.

The key concepts start with classical conditioning, from Pavlov — this is learning through association, where you pair a neutral stimulus with an unconditioned stimulus. Then there's operant conditioning, from Skinner — learning through consequences, using reinforcement and punishment. Positive reinforcement means adding something pleasant to increase a behaviour. Negative reinforcement means removing something unpleasant to increase a behaviour. And punishment involves either adding something unpleasant or removing something pleasant to decrease a behaviour.

The strengths are that it's a scientific approach based on controlled lab experiments, and it has very practical applications in therapy, education, and training.

The limitations are that it ignores internal mental processes like thoughts and feelings, animal research may not apply to humans, and it's environmentally deterministic.

For key debates, Skinner argued that free will is an illusion — that all behaviour is shaped by reinforcement history. Even our seemingly free choices can be traced back to environmental causes. Behaviourists take the extreme nurture position — Watson famously claimed he could train any infant to become any type of specialist, regardless of their ancestry. The approach is also criticised for environmental reductionism, reducing all behaviour to simple stimulus-response links while ignoring biology, cognition, and social context. On the positive side, techniques like systematic desensitisation, token economies, and A.B.A. therapy show how conditioning principles can treat real-world problems.
""",

    "level2_cognitive": """
The Cognitive Approach.

The key idea is that behaviour is influenced by internal mental processes — how we think, perceive, remember, and solve problems.

Key concepts include information processing — the idea that the mind works like a computer, with input, processing, and output. Then there are schemas, which are mental frameworks that help us organise and interpret information. Memory models explain how information is encoded, stored, and retrieved. And cognitive biases are systematic errors in our thinking.

The strengths of this approach are that it focuses on internal processes that behaviourism ignores, it uses scientific methods like experiments and brain imaging, and it has useful applications such as C.B.T. therapy and educational strategies.

The limitations are that the computer analogy may oversimplify the mind, it often ignores emotion and social factors, and it's difficult to directly observe mental processes.

In terms of key debates, this approach faces the criticism of machine reductionism — the computer analogy reduces the mind to information processing while ignoring emotion, motivation, and social context. Kahneman's work on System 1 and System 2 thinking showed that humans rely on fast, automatic thinking that is prone to biases like confirmation bias and the availability heuristic. Elizabeth Loftus demonstrated that memories can actually be implanted — in her "Lost in the Mall" study, 25 percent of participants came to believe a completely fabricated event was real. And the replication crisis is significant here — the Open Science Collaboration in 2015 found that only about 36 percent of psychology studies replicated successfully, raising serious questions about the reliability of cognitive research.
""",

    "level2_humanistic": """
The Humanistic Approach.

The key idea is that humans have free will and an innate drive toward personal growth and self-actualisation.

The key concepts start with self-actualisation — the idea of reaching your full potential. Then there's Maslow's Hierarchy of Needs, where basic needs must be met before higher needs — moving from physiological needs, to safety, to love and belonging, to esteem, and finally to self-actualisation. Free will is central — we choose our own behaviour, and it's not determined by biology or environment. And self-concept is about how you see yourself.

The strengths are its positive focus on growth and potential, the fact that it treats people as individuals rather than just data points, and its strong influence in counselling and therapy.

The limitations include the difficulty of testing it scientifically, the concepts being vague and subjective, and the possibility that it's culturally biased toward Western, individualistic values.

For key debates, this approach is the strongest advocate for free will among all six approaches — arguing that personal agency is essential for dignity and self-actualisation. It takes a holistic view, studying the whole person rather than breaking behaviour into parts, and rejects both biological and environmental reductionism. Deci and Ryan's Self-Determination Theory identified competence, autonomy, and relatedness as universal needs for well-being. And Rotter's concept of locus of control is relevant here — having an internal locus of control, meaning you believe you control your own fate, is linked to better achievement and coping.
""",

    "level2_psychodynamic": """
The Psychodynamic Approach.

The key idea is that behaviour is influenced by unconscious thoughts, feelings, and childhood experiences.

The key concepts begin with the unconscious mind — thoughts and memories we're not aware of that still influence our behaviour. Then there's the structure of personality: the id, which operates on the pleasure principle; the ego, which deals with reality; and the superego, which handles morality. Defence mechanisms are unconscious strategies to protect the ego, such as denial, repression, and projection. And childhood experiences are crucial — early relationships shape our adult personality.

The strengths are that this was the first approach to emphasise the importance of childhood and the unconscious, it led to the development of talking therapies, and it produced rich, detailed case studies.

The limitations are that it's difficult to test scientifically, it's based mainly on case studies which aren't easily generalisable, and there's an overemphasis on sexuality and childhood.

In terms of key debates, Freud argued for psychic determinism — the idea that no behaviour is accidental. Even slips of the tongue, known as Freudian slips, reveal unconscious causes. This is a hard determinist position. His dual instinct theory proposed two opposing biological drives: Eros, the life and libido instinct, and Thanatos, the death and aggression instinct, which together shape all behaviour. The approach also illustrates nature-nurture interaction, where innate biological instincts are shaped by psychosexual development and family relationships. Interestingly, it's seen as both reductionist and holistic — it reduces behaviour to unconscious drives, which is reductionist, but also explores the complex interactions between the id, ego, and superego, which is more holistic.
""",

    "level2_sociocultural": """
The Sociocultural Approach.

The key idea is that behaviour is shaped by social and cultural factors — the groups we belong to and the society we live in.

Key concepts include social influence — how others affect our thoughts, feelings, and behaviour. Conformity is about changing behaviour to fit in with a group. Culture refers to the shared beliefs, values, and practices of a group. And social identity is the part of our self-concept that's based on group membership.

The strengths are that it recognises the importance of social context, considers cultural diversity, and helps explain group behaviour.

The limitations are that it may underestimate individual differences, it's difficult to separate social from biological influences, and some concepts are difficult to measure.

For key debates, the WEIRD samples problem is significant — around 96 percent of psychology participants come from Western, Educated, Industrialised, Rich, Democratic countries, which seriously limits how generalisable the findings are. The culture of honour study by Cohen and colleagues in 1996 showed that cultural insults produced measurable cortisol and testosterone spikes, demonstrating that culture can literally shape our biology. Research by Milgram and the Stanford Prison Experiment showed situational determinism — that social situations can overpower individual personality and conscience. And ethnocentrism is a problem in psychology — tests like Ainsworth's Strange Situation impose Western norms on other cultures, which can produce misleading results.
""",

    # ── Section intros ─────────────────────────────────────────────────
    "level2_summaries_intro": """
Topic Summaries.

Psychology uses six major approaches to explain why people think, feel, and behave the way they do. Each approach offers a different lens — from biology and conditioning to culture and the unconscious mind. Click on each one below to explore its key ideas, strengths, limitations, and debates.

You'll notice coloured circles on each card — red, amber, and green. Use these to rate your own confidence in each approach. Red means you're not confident, amber means somewhat confident, and green means you feel confident. This helps you see at a glance which approaches need more work. Research by Dunlosky and colleagues in 2013 showed that identifying your weak spots and focusing your study time there — a skill called metacognition — is one of the most effective revision strategies you can use.
""",

    "level2_flashcards_intro": """
Flashcards — how to get the most from them.

Active recall means trying to answer in your head before flipping the card. Research by Karpicke and Blunt in 2011 found that retrieval practice produced 50 percent more learning than other study methods — even more than concept mapping. So the effort of trying to remember is the point.

Before each card, you'll rate how sure you are — not sure, think I know, or confident. This is called metacognitive monitoring — checking what you actually know versus what you think you know. Dunlosky and colleagues in 2013 identified self-testing and identifying weak spots as two of the most effective revision strategies.

After flipping, you'll sometimes see a "why" or "how" question. These aren't marked — just say your answer out loud or in your head. The act of explaining is what matters. This is called elaborative interrogation — asking yourself to explain deepens encoding and connects new knowledge to what you already know. Dunlosky and colleagues found this was another highly effective technique.

Then rate how well you knew it — hard, good, or easy. The app uses these ratings to schedule cards using spaced repetition, so the ones you find hardest come back sooner.
""",

    "level3_flashcards_intro": """
Flashcards — how to get the most from them.

Active recall means trying to answer in your head before flipping the card. Research by Karpicke and Blunt in 2011 found that retrieval practice produced 50 percent more learning than other study methods — even more than concept mapping. So the effort of trying to remember is the point.

Before each card, you'll rate how sure you are — not sure, think I know, or confident. This is called metacognitive monitoring — checking what you actually know versus what you think you know. Dunlosky and colleagues in 2013 identified self-testing and identifying weak spots as two of the most effective revision strategies.

After flipping, you'll sometimes see a "why" or "how" question. These aren't marked — just say your answer out loud or in your head. The act of explaining is what matters. This is called elaborative interrogation — asking yourself to explain deepens encoding and connects new knowledge to what you already know. Dunlosky and colleagues found this was another highly effective technique.

Then rate how well you knew it — hard, good, or easy. The app uses these ratings to schedule cards using spaced repetition, so the ones you find hardest come back sooner.
""",

    "level2_quiz_intro": """
Why quiz yourself?

You might think quizzes are just for checking what you know, but they actually do much more than that. Research by Roediger and Karpicke in 2006 showed that students who quizzed themselves remembered significantly more than those who just re-read the material — even when the total study time was the same. This is called the testing effect.

And here's the interesting part — getting a question wrong can actually be more useful than getting it right. When you make an error and then learn the correct answer, the contrast creates a stronger memory trace. Bjork and Bjork in 2011 called this a "desirable difficulty." The struggle is what makes it stick.

Now, the quizzes in this app are a solid starting point, but I'd encourage you not to rely on them alone. One of the best things you can do is write your own questions. It forces you to think about what's actually important in each topic. You could create your own flashcards on paper, or use a free tool like Anki to build a personal deck you can review on your phone or computer.
""",

    "level3_quiz_intro": """
Why quiz yourself?

You might think quizzes are just for checking what you know, but they actually do much more than that. Research by Roediger and Karpicke in 2006 showed that students who quizzed themselves remembered significantly more than those who just re-read the material — even when the total study time was the same. This is called the testing effect.

And here's the interesting part — getting a question wrong can actually be more useful than getting it right. When you make an error and then learn the correct answer, the contrast creates a stronger memory trace. Bjork and Bjork in 2011 called this a "desirable difficulty." The struggle is what makes it stick.

Now, the quizzes in this app are a solid starting point, but I'd encourage you not to rely on them alone. One of the best things you can do is write your own questions. It forces you to think about what's actually important in each topic. You could create your own flashcards on paper, or use a free tool like Anki to build a personal deck you can review on your phone or computer.
""",

    "level2_braindump_intro": """
Why Brain Dump works.

Brain dumping is one of the most effective study techniques known. Research by Roediger and Karpicke in 2006 showed that actively retrieving information from memory strengthens it far more than re-reading or highlighting. This is called the testing effect.

Here's how it works. Choose a topic below, then write down everything you can remember — don't peek! When you're done, reveal the actual summary and compare. Then focus your future study on the gaps you find.

Even if you get things wrong, the effort of trying to remember builds stronger memory traces than passive review. So the struggle is actually the point — that's where the learning happens.
""",

    "level3_braindump_intro": """
Why Brain Dump works.

Brain dumping is one of the most effective study techniques known. Research by Roediger and Karpicke in 2006 showed that actively retrieving information from memory strengthens it far more than re-reading or highlighting. This is called the testing effect.

Here's how it works. Choose a topic below, then write down everything you can remember — don't peek! When you're done, reveal the actual summary and compare. Then focus your future study on the gaps you find.

Even if you get things wrong, the effort of trying to remember builds stronger memory traces than passive review. So the struggle is actually the point — that's where the learning happens.
""",

    "level3_summaries_intro": """
Topic Summaries.

Psychology uses six major approaches to explain why people think, feel, and behave the way they do. Each approach offers a different lens — from biology and conditioning to culture and the unconscious mind. Click on each one below to explore its key ideas, strengths, limitations, and debates.

You'll notice coloured circles on each card — red, amber, and green. Use these to rate your own confidence in each approach. Red means you're not confident, amber means somewhat confident, and green means you feel confident. This helps you see at a glance which approaches need more work. Research by Dunlosky and colleagues in 2013 showed that identifying your weak spots and focusing your study time there — a skill called metacognition — is one of the most effective revision strategies you can use.
""",

    # ── Level 3 ──────────────────────────────────────────────────────────
    "level3_biological": """
The Biological Approach — Level 3.

At this level, the focus is on understanding how biological mechanisms interact with the environment to produce behaviour.

Key concepts include neuroplasticity — the brain's ability to reorganise and form new neural connections throughout life. Then there's epigenetics, which is how environmental factors can switch genes on and off without changing the DNA. Localisation of function means specific brain areas handle specific functions, like Broca's area for speech production and Wernicke's area for language comprehension. And split-brain research, particularly Sperry's studies, revealed fascinating insights about hemispheric specialisation.

Important case studies include Phineas Gage from 1848, whose brain damage dramatically affected his personality, and the case of H.M., which demonstrated the role of the hippocampus in memory formation.

For critical evaluation, you need to consider the nature versus nurture debate and the interaction between genes and environment. There are ethical issues with biological interventions. And there are deterministic implications — the question of whether we're ultimately controlled by our biology.
""",

    "level3_behaviourist": """
The Behaviourist Approach — Level 3.

At this level, we go deeper into learning theory and its applications, including social learning.

Key concepts include Bandura's Social Learning Theory — the idea that we learn through observation and imitation. Vicarious reinforcement is learning from observing others being rewarded or punished. Self-efficacy is our belief in our own ability to succeed. And schedules of reinforcement covers the difference between continuous and partial reinforcement.

Key studies include Pavlov's dogs as the classic demonstration of classical conditioning. Watson's Little Albert study showed how a fear response could be conditioned. Skinner's box experiments explored operant conditioning in detail. And Bandura's Bobo Doll experiment demonstrated that children learn aggression through observational learning.

For critical evaluation, consider the ethical concerns with conditioning experiments, the free will versus determinism debate, and how the behaviourist approach integrates with the cognitive approach in the form of cognitive-behavioural therapy.
""",

    "level3_cognitive": """
The Cognitive Approach — Level 3.

At this level, we look at advanced cognitive models and how they help us understand complex behaviour.

Key concepts include the multi-store memory model by Atkinson and Shiffrin, which describes how information moves from sensory memory to short-term memory to long-term memory. Baddeley's working memory model breaks this down further into the central executive, phonological loop, and visuospatial sketchpad. Bartlett's idea of reconstructive memory suggests that memory is actively rebuilt rather than passively replayed. And cognitive distortions are faulty thinking patterns like catastrophising and black-and-white thinking.

Key studies include Loftus and Palmer's work on eyewitness testimony and how leading questions can distort memory, and Bartlett's "War of the Ghosts" study which showed how schemas influence our memory.

For critical evaluation, think about the ecological validity of lab experiments, individual differences in cognitive processing, and how cognitive psychology integrates with neuroscience to form the field of cognitive neuroscience.
""",

    "level3_humanistic": """
The Humanistic Approach — Level 3.

At this level, we explore humanistic principles in depth and look at their therapeutic applications.

Key concepts include Rogers' Person-Centred Therapy, which is built on three core conditions: unconditional positive regard, empathy, and congruence. Conditions of worth occur when love or acceptance depends on meeting others' expectations. Congruence versus incongruence describes the match — or mismatch — between your ideal self and your actual self. And Maslow described peak experiences as moments of profound happiness and fulfilment.

The key theorists are Abraham Maslow, who developed the hierarchy of needs and the concept of self-actualisation, and Carl Rogers, who created client-centred therapy and emphasised the importance of self-concept.

For critical evaluation, consider the idiographic versus nomothetic approach debate, cultural variations in what self-actualisation looks like, and the fact that while empirical evidence is limited, the therapeutic impact has been strong.
""",

    "level3_psychodynamic": """
The Psychodynamic Approach — Level 3.

At this level, we dive deeper into psychodynamic theory and its modern developments.

Key concepts include Freud's psychosexual stages — oral, anal, phallic, latency, and genital — each representing a phase of development where the libido is focused on a different area. The Oedipus and Electra complexes describe a child's unconscious attraction to the opposite-sex parent. Bowlby's attachment theory shows how early attachment affects later relationships. And transference occurs when a patient redirects feelings about their parents onto the therapist.

Key theorists include Sigmund Freud, the founder of psychoanalysis; Anna Freud, who pioneered child psychoanalysis and expanded our understanding of defence mechanisms; and Erik Erikson, who proposed the psychosocial development stages.

For critical evaluation, note that many psychodynamic concepts are unfalsifiable — they can't be proven wrong, which is a problem for scientific credibility. There's also gender bias in the original theories. However, modern psychodynamic therapy is considerably more evidence-based than Freud's original approach.
""",

    "level3_sociocultural": """
The Sociocultural Approach — Level 3.

At this level, the focus is on critically analysing how culture and society shape our psychological understanding.

Key concepts include Hofstede's cultural dimensions, particularly the distinction between individualism and collectivism. Social constructionism is the idea that reality is shaped by social agreement. Vygotsky's sociocultural theory argues that cognitive development happens through social interaction. And the zone of proximal development describes a learner's potential when they have guidance from someone more knowledgeable.

Key studies include Asch's conformity experiments using the line judgment task, Milgram's famous obedience study looking at authority and obedience, and cross-cultural research examining how psychological phenomena vary across different cultures.

For critical evaluation, consider ethnocentrism in psychological research, the difference between emic and etic approaches to studying culture, and intersectionality — the idea that people hold multiple cultural identities that interact in complex ways.
""",
}


def generate_audio():
    """Generate MP3 files for all narration scripts."""
    client = ElevenLabs(api_key=API_KEY)
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    for name, text in NARRATIONS.items():
        output_path = os.path.join(OUTPUT_DIR, f"{name}.mp3")

        # Skip if already generated
        if os.path.exists(output_path):
            print(f"  Skipping {name} (already exists)")
            continue

        print(f"  Generating {name}...")
        audio = client.text_to_speech.convert(
            voice_id=VOICE_ID,
            text=text.strip(),
            model_id=MODEL_ID,
        )

        with open(output_path, "wb") as f:
            for chunk in audio:
                f.write(chunk)

        print(f"  ✓ Saved {output_path}")
        # Small delay to be nice to the API
        time.sleep(1)

    # Clean up test file
    test_file = os.path.join(OUTPUT_DIR, "test.mp3")
    if os.path.exists(test_file):
        os.remove(test_file)
        print("  Removed test.mp3")

    print("\nDone! All audio files generated.")


if __name__ == "__main__":
    generate_audio()
