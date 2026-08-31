import TreatmentPage, { TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "addiction",
  title: "Addiction Recovery",
  heroTagline:
    "A compassionate, non-judgmental recovery program combining energy healing, body talk, crystal healing and counselling — designed to heal the root causes of dependency, not just the symptoms.",
  overview: [
    "Addiction is rarely just a physical habit — it is woven into stress, trauma, and depleted emotional energy. At Laso Wellness, our recovery program treats the whole person: body, mind, and energy system.",
    "Under the care of Dr. Yashwant Kanade, MD (Alternative Medicine), each recovery plan is customized after a detailed intake assessment, combining energy healing, body talk, crystal healing and counselling.",
  ],
  overviewPoints: [
    "Personalized 90-day energy healing recovery plan",
    "Energy healing to calm cravings and rebalance the nervous system",
    "Counselling for stress, burnout and relapse triggers",
    "Body talk and crystal healing to support the whole system",
  ],
  caseStudy: {
    condition: "Severe Alcohol & Nicotine Dependency",
    duration: "90 Days",
    approach: "Energy Healing, Body Talk & Counselling",
    patientBackground:
      "A 42-year-old working professional caught in a cycle of chronic relapse and burnout — high-pressure workdays ending in alcohol, mornings beginning with nicotine, and a family slowly drifting away.",
    story: [
      {
        heading: "The First Step — An Honest Intake",
        text: "He arrived exhausted and sceptical, having tried to quit multiple times on his own. Instead of judgement, he found a listening ear. Dr. Kanade conducted a detailed assessment of his physical health, stress patterns, and energy imbalances — and explained that dependency was a symptom of a deeper depletion, not a character flaw.",
      },
      {
        heading: "A Plan Built Around His Life",
        text: "A customized 90-day recovery plan was designed: regular energy healing sessions to ease withdrawal anxiety and cravings, body talk and crystal healing to steady his system, and counselling to work through the stress and triggers driving the habit.",
      },
      {
        heading: "The Breakthrough",
        text: "Around week six, something shifted. The compulsive evening urge — the one that had defeated every previous attempt — began to quieten. He slept through the night for the first time in years. His energy returned, and with it, his confidence that this time would be different.",
      },
      {
        heading: "Life Restored",
        text: "By the end of the program he was fully free of both dependencies — and, more importantly, rebuilt what addiction had eroded. He was present at family dinners again. His work performance sharpened. One year on, he remains sober, describing the program as 'the turning point of my life.'",
      },
    ],
    results: [
      "Complete freedom from alcohol and nicotine within 90 days",
      "1+ year of sustained sobriety — no relapse",
      "Restored family relationships and professional performance",
    ],
  },
  testimonial: {
    quote:
      "I had given up on myself long before I walked into Laso Wellness. Dr. Kanade never judged me — he simply helped me heal. Today I am sober, present for my family, and finally at peace.",
    initials: "R. S.",
    city: "Pune",
    rating: 5,
  },
  seoTitle: "Addiction Recovery in Pune | Holistic Detox & Rehabilitation — Laso Wellness",
  seoDescription:
    "Compassionate addiction recovery in Pune with Dr. Yashwant Kanade. 90-day energy healing, body talk, crystal healing and counselling program for alcohol and nicotine dependency. Real case study: 1+ year sobriety. By appointment: 9890038839.",
};

const AddictionCare = () => <TreatmentPage data={data} />;
export default AddictionCare;
