import TreatmentPage, { TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "knee-pain",
  title: "Knee Pain Management",
  heroTagline:
    "Joint healing and mobility restoration through energy healing, body talk, crystal healing and counselling — reducing arthritis pain and helping you walk, climb, and move freely again.",
  overview: [
    "Chronic knee pain steals independence quietly — first the stairs, then the morning walks, then the simple joy of moving without fear. Our joint rehabilitation program works to reduce inflammation, support cartilage health, and restore confident movement.",
    "Dr. Yashwant Kanade combines energy healing with body talk, crystal healing and counselling, offering a gentle yet effective alternative for patients who wish to avoid or delay joint replacement surgery.",
  ],
  overviewPoints: [
    "Energy healing focused on the affected joints",
    "Body talk to release long-held movement patterns",
    "Crystal healing to support inflammation relief",
    "Counselling to rebuild confidence in movement",
  ],
  caseStudy: {
    condition: "Stage 3 Osteoarthritis (Bilateral Knee Stiffness)",
    duration: "8 Weeks",
    approach: "Energy Healing, Body Talk & Crystal Healing",
    patientBackground:
      "A 61-year-old retired teacher who could no longer climb her building stairs without gripping the railing — and had quietly given up the daily park walks that once defined her mornings.",
    story: [
      {
        heading: "The Independence She Had Lost",
        text: "For someone who had spent decades on her feet in a classroom, being dependent was the hardest part. Stairs required planning. Walks required company. At 8 out of 10, the pain dictated her schedule, her sleep, and slowly, her spirit.",
      },
      {
        heading: "A Gentle, Step-by-Step Journey",
        text: "Dr. Kanade began with energy healing sessions to reduce the deep inflammation in both knees, paired with body talk to release the guarding her body had learned, crystal healing to support the joints, and counselling to rebuild her confidence in moving. Every week had one clear, achievable milestone.",
      },
      {
        heading: "Small Wins Became Big Ones",
        text: "Week three: she climbed five steps without stopping. Week five: a full flight of stairs, one hand free of the railing. Week seven: a slow, steady lap around the building. Her pain score fell from 8 to 3, then lower still.",
      },
      {
        heading: "The Morning She Walked Alone Again",
        text: "At the end of week eight, she did something she hadn't done in two years — she walked to the park, unassisted, no cane, and completed her full morning round. Pain: 1 out of 10. Independence: fully restored.",
      },
    ],
    results: [
      "Pain levels dropped from 8/10 to 1/10",
      "Fully stair-confident without a cane",
      "Resumed independent daily park walks",
    ],
  },
  testimonial: {
    quote:
      "At 61, I thought my walking days were behind me. Dr. Kanade gave them back. I climb stairs without fear and walk in the park every morning — pain-free and on my own two feet.",
    initials: "S. D.",
    city: "Pune",
    rating: 5,
  },
  seoTitle: "Knee Pain Treatment in Pune | Osteoarthritis & Joint Rehabilitation — Laso Wellness",
  seoDescription:
    "Knee pain management in Pune with Dr. Yashwant Kanade. Energy healing, body talk, crystal healing and counselling for osteoarthritis. Case study: pain dropped from 8/10 to 1/10 in 8 weeks, stair-confident without a cane. By appointment: 9890038839.",
};

const KneePainManagement = () => <TreatmentPage data={data} />;
export default KneePainManagement;
