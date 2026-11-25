export const site = {
  name: "Manat",
  fullName: "Manat Coaching Classes",
  tagline: "Don't just learn. Educate yourself.",
  location: "Chembur, Mumbai",
  phoneDisplay: "+91 91673 09982",
  phoneTel: "+919167309982",
  email: "manatgupta1157@gmail.com",
  whatsapp: "https://wa.me/919167309982",
  description:
    "Manat Coaching Classes in Chembur, Mumbai - school coaching up to Class 10 for SSC, CBSE, ICSE, HSC pathway & IB; junior college commerce; and commerce graduation courses.",
} as const;

export const boards = [
  "SSC",
  "CBSE",
  "ICSE",
  "HSC",
  "IB",
  "IGCSE",
] as const;

export const schoolSubjects = [
  "English",
  "Hindi",
  "Marathi",
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "EVS",
  "Social Studies",
  "History",
  "Geography",
  "Civics",
  "Economics (basics)",
  "Computer Studies",
  "Sanskrit",
] as const;

export const juniorSubjects = [
  "Book Keeping & Accountancy",
  "Economics",
  "Organisation of Commerce",
  "Secretarial Practice",
  "Mathematics / Statistics",
  "English",
  "Hindi / Marathi",
  "Information Technology",
] as const;

export const graduationSubjects = [
  "Financial Accounting",
  "Cost Accounting",
  "Management Accounting",
  "Business Economics",
  "Business Law",
  "Auditing",
  "Taxation basics",
  "Commerce & Management papers",
] as const;

export const programs = [
  {
    id: "school",
    title: "School Coaching",
    ages: "Up to Class 10",
    blurb:
      "Complete academic support through Class 10 for every major board - with structured teaching across languages, maths, science, and social subjects.",
    boards: ["SSC", "CBSE", "ICSE", "HSC pathway", "IB", "IGCSE"],
    subjects: schoolSubjects,
    cta: "Enquire for School",
  },
  {
    id: "junior",
    title: "Junior College · Commerce",
    ages: "FYJC & SYJC",
    blurb:
      "Full commerce-stream coaching for junior college. Every core subject covered with clarity, practice, and board-focused preparation.",
    boards: ["HSC Commerce"],
    subjects: juniorSubjects,
    cta: "Enquire for Junior College",
  },
  {
    id: "commerce",
    title: "Graduation · Commerce",
    ages: "Degree-level commerce",
    blurb:
      "Focused coaching for commerce graduation courses - strong concepts for college exams and a solid base for professional pathways.",
    boards: ["B.Com & commerce degrees"],
    subjects: graduationSubjects,
    cta: "Enquire for Graduation",
  },
] as const;

export const whyPoints = [
  {
    title: "Personal attention",
    body: "Teaching that notices where a student is stuck - and stays with the concept until it is clear.",
  },
  {
    title: "Multi-board school support",
    body: "SSC, CBSE, ICSE, HSC pathway, IB, IGCSE and more - teaching matched to how each board examines.",
  },
  {
    title: "Commerce strength",
    body: "Junior college and graduation commerce taught with CA Finalist depth and exam-ready precision.",
  },
  {
    title: "Clear fundamentals",
    body: "No rushing past the basics. Strong concepts first, then marks that follow naturally.",
  },
  {
    title: "Structured progress",
    body: "Organised coverage, regular practice, and feedback so students and parents know where they stand.",
  },
  {
    title: "Trusted mentorship",
    body: "Guided by a school topper and CA Finalist - academically sharp, approachable, and serious about outcomes.",
  },
] as const;

export const joinSteps = [
  {
    title: "Enquire",
    body: "Call, WhatsApp, or fill the enquiry form. Share the class, board or stream, and we will guide you.",
  },
  {
    title: "Discuss the right fit",
    body: "Talk through current academic level, subjects, and goals so the batch guidance is useful - not generic.",
  },
  {
    title: "Join the batch",
    body: "Confirm timing and start classes at Manat in Chembur with a clear plan for the term ahead.",
  },
] as const;

export const faqs = [
  {
    q: "Which courses does Manat offer?",
    a: "Manat offers school coaching up to Class 10 (SSC, CBSE, ICSE, HSC pathway, IB, IGCSE and related boards - all core subjects), junior college commerce (all subjects), and commerce graduation courses.",
  },
  {
    q: "Where is Manat located?",
    a: "Manat Coaching Classes is based in Chembur, Mumbai. Call or WhatsApp for directions and visiting guidance.",
  },
  {
    q: "Which school boards do you teach?",
    a: "We teach school students across major boards including SSC, CBSE, ICSE, HSC pathway, IB and IGCSE, covering the full range of core subjects.",
  },
  {
    q: "Is junior college only for commerce?",
    a: "Yes. Junior college coaching at Manat is focused on the commerce stream, covering all subjects in that stream.",
  },
  {
    q: "Who teaches at Manat?",
    a: "Classes are led by Manat - a school topper and CA Finalist - with academically rigorous, student-friendly teaching.",
  },
  {
    q: "How can I take admission?",
    a: "Enquire by phone, WhatsApp, email, or the form on this website. We will help you choose the right program and next steps.",
  },
  {
    q: "What are the fees and batch timings?",
    a: "Fees and timings depend on the program and batch. Please enquire and we will share the current details for your class.",
  },
] as const;
