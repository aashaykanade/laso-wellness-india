import TreatmentPage, { TreatmentPageData } from "@/components/TreatmentPage";

const data: TreatmentPageData = {
  slug: "sciatica",
  title: "Sciatica Relief",
  heroTagline:
    "Non-invasive nerve pain care combining energy healing, body talk, crystal healing and counselling — relieving radiating sciatic pain and restoring mobility, without surgery.",
  overview: [
    "Sciatica is more than back pain — it is nerve pain that radiates down the leg, disrupting sleep, work, and every moment of sitting or standing. Our protocols address the inflammation, muscular imbalance, and energy blockages that keep the nerve irritated.",
    "At Laso Wellness, Dr. Yashwant Kanade designs a personalized, non-surgical care plan for each patient — energy healing, body talk, crystal healing and counselling — so healing happens naturally and sustainably.",
  ],
  overviewPoints: [
    "Non-surgical, drug-free nerve pain protocols",
    "Body talk sessions to release held tension patterns",
    "Energy healing to calm inflammation and accelerate nerve recovery",
    "Counselling and crystal healing to sustain relief",
  ],
  caseStudy: {
    condition: "L4-L5 Lumbar Disc Herniation with Severe Sciatica",
    duration: "6 Weeks",
    approach: "Energy Healing, Body Talk & Crystal Healing",
    patientBackground:
      "A 38-year-old IT professional whose radiating leg pain had become so severe that he could not sit at his desk for more than 15 minutes — with surgery presented as the only option.",
    story: [
      {
        heading: "Pain That Ruled Every Day",
        text: "Every workday was measured in minutes — fifteen at a desk, then pacing the room to escape the electric pain shooting down his left leg. His MRI showed an L4-L5 disc herniation, and surgery was being discussed. He came to Laso Wellness hoping for any alternative.",
      },
      {
        heading: "Choosing the Non-Surgical Path",
        text: "After a thorough assessment, Dr. Kanade designed a 6-week plan: energy healing sessions to calm the inflamed sciatic nerve, body talk to release the tension patterns locking his lower back, crystal healing to support recovery, and counselling to ease the anxiety the pain had created. The goal was clear — heal without the knife.",
      },
      {
        heading: "Week by Week, Mobility Returned",
        text: "By week two, the night pain had eased enough for unbroken sleep. By week four, he sat through a full hour of work without a single flare. Each session built on the last — inflammation subsiding, the nerve releasing, calm returning to his body.",
      },
      {
        heading: "Back to Work — Surgery Avoided",
        text: "Six weeks after walking in with a surgery date looming, he walked out pain-free. He returned to full desk work, resumed his evening walks, and cancelled the surgical consultation he never needed.",
      },
    ],
    results: [
      "90% reduction in nerve pain within 6 weeks",
      "Full return to daily activities and desk work",
      "Surgery completely avoided through non-invasive care",
    ],
  },
  testimonial: {
    quote:
      "I was one signature away from spinal surgery. Laso Wellness gave me my life back without a single incision. The constant pain that ruled my days is simply gone.",
    initials: "A. K.",
    city: "Pune",
    rating: 5,
  },
  seoTitle: "Sciatica Treatment in Pune | Non-Surgical Nerve Pain Relief — Laso Wellness",
  seoDescription:
    "Non-invasive sciatica relief in Pune with Dr. Yashwant Kanade. Energy healing, body talk, crystal healing and counselling for L4-L5 disc herniation. Case study: 90% pain reduction in 6 weeks, surgery avoided. By appointment: 9890038839.",
};

const SciaticaRelief = () => <TreatmentPage data={data} />;
export default SciaticaRelief;
