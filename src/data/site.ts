export const site = {
  name: "The Global Estimating",
  tagline: "Building A Better Tomorrow",
  phone: "+1 (647) 427-4133",
  phoneHref: "tel:+16474274133",
  email: "info@theglobalestimating.com",
  addresses: [
    "30 N Gould ST STE R, Sheridan, WY, 82801 USA",
    "55 University Avenue, Toronto, ON M5J 2H7, Canada",
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  features: string[];
  benefits: string[];
  process: { step: string; text: string }[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const services: Service[] = [
  {
    slug: "cost-estimation",
    title: "Cost Estimation",
    short: "Detailed, division-by-division cost breakdowns you can bid with.",
    image: img("photo-1581094794329-c8112a89af12"),
    intro:
      "Precise conceptual and detailed cost estimates for residential, commercial and public projects, delivered in PDF and Excel with full material, labour and equipment breakdowns.",
    features: [
      "CSI division-by-division breakdown",
      "Material, labour, equipment and markup lines",
      "Local pricing databases and current market rates",
      "Excel and PDF deliverables with drawing references",
    ],
    benefits: [
      "Bid with confidence and protect your margin",
      "Fast turnaround, typically 24 to 48 hours",
      "Reduce costly scope gaps and omissions",
    ],
    process: [
      { step: "Send drawings", text: "Upload plans, specs and any addenda." },
      { step: "Scope review", text: "We confirm scope, trades and bid date." },
      { step: "Takeoff", text: "Quantities measured from your drawings." },
      { step: "Delivery", text: "Priced estimate returned in Excel and PDF." },
    ],
  },
  {
    slug: "architectural-service",
    title: "Architectural Service",
    short: "Drafting, permit sets and design support for build-ready documents.",
    image: img("photo-1503387762-592deb58ef4e"),
    intro:
      "Architectural drafting and documentation support, from concept sketches to coordinated permit sets that keep your project moving through approvals.",
    features: [
      "Concept and schematic drafting",
      "Permit and construction document sets",
      "As-built and redline conversions",
      "CAD and Revit deliverables",
    ],
    benefits: [
      "Clean, coordinated drawings that reduce RFIs",
      "Faster permit approvals",
      "Scales with your in-house team during peak load",
    ],
    process: [
      { step: "Brief", text: "Share sketches, survey and requirements." },
      { step: "Draft", text: "We produce the drawing set for review." },
      { step: "Revise", text: "Two rounds of markups included." },
      { step: "Issue", text: "Final files delivered in CAD, Revit and PDF." },
    ],
  },
  {
    slug: "3d-building-drawing",
    title: "3D Building Drawing",
    short: "Photoreal 3D models and renders that sell the project.",
    image: img("photo-1486406146926-c627a92ad1ab"),
    intro:
      "3D modelling, walkthroughs and rendered visuals that help owners, investors and buyers understand a project long before ground is broken.",
    features: [
      "Exterior and interior 3D renders",
      "BIM-ready models from 2D plans",
      "Animated walkthroughs",
      "Material and finish visualisation",
    ],
    benefits: [
      "Win approvals and buy-in faster",
      "Catch clashes before construction",
      "Strong marketing assets for listings and pitches",
    ],
    process: [
      { step: "Plans in", text: "Send 2D drawings and finish schedule." },
      { step: "Model", text: "Geometry built and reviewed with you." },
      { step: "Render", text: "Lighting, materials and camera set-up." },
      { step: "Deliver", text: "High-resolution stills and walkthrough." },
    ],
  },
  {
    slug: "estimates-for-contractor",
    title: "Estimates for Contractor",
    short: "Trade-specific takeoffs and bids for general and sub contractors.",
    image: img("photo-1600880292203-757bb62b4baf"),
    intro:
      "Bid-ready estimates built for contractors who need to price more work without adding office headcount. We work as an extension of your estimating department.",
    features: [
      "Trade-specific quantity takeoffs",
      "Subcontractor bid comparison sheets",
      "Change order and claim pricing",
      "Bid-day support and clarifications",
    ],
    benefits: [
      "Chase more bids each month",
      "Fixed cost per estimate, no overhead",
      "Documentation that stands up in negotiation",
    ],
    process: [
      { step: "Invitation", text: "Forward the bid invite and documents." },
      { step: "Quantities", text: "Trade takeoff completed and checked." },
      { step: "Pricing", text: "Rates applied and markups agreed." },
      { step: "Bid", text: "Submission-ready package before bid day." },
    ],
  },
  {
    slug: "interior-design-estimates",
    title: "Interior Design Estimates",
    short: "Finish, fixture and fit-out budgets down to the last item.",
    image: img("photo-1618221195710-dd6b41faaea6"),
    intro:
      "Detailed fit-out and finishes budgets for designers, developers and hospitality operators, covering everything from millwork to lighting and FF&E.",
    features: [
      "Finish schedule quantity takeoffs",
      "Millwork and joinery pricing",
      "FF&E budgets and allowances",
      "Value engineering options",
    ],
    benefits: [
      "Keep client budgets honest from concept stage",
      "Compare finish options side by side",
      "Avoid overruns on long-lead items",
    ],
    process: [
      { step: "Concept", text: "Share mood boards and finish schedules." },
      { step: "Takeoff", text: "Areas, units and fixtures measured." },
      { step: "Budget", text: "Priced with supplier-level detail." },
      { step: "Options", text: "Alternates provided where useful." },
    ],
  },
  {
    slug: "residential-bidding-estimates",
    title: "Residential Bidding Estimates",
    short: "Single family, custom home and multi-unit residential bids.",
    image: img("photo-1600585154340-be6161a56a0c"),
    intro:
      "Complete residential estimates for builders and remodellers, from single family homes to multi-family developments, priced to your local market.",
    features: [
      "Full house takeoff, foundation to roof",
      "Allowance schedules for owner selections",
      "Multi-family unit-type roll-ups",
      "Lender and owner-ready summaries",
    ],
    benefits: [
      "Present clear budgets homeowners understand",
      "Protect margin on fixed-price contracts",
      "Support financing and draw schedules",
    ],
    process: [
      { step: "Plans", text: "Send architectural and structural plans." },
      { step: "Scope", text: "Confirm inclusions and allowances." },
      { step: "Estimate", text: "Priced by trade and by unit type." },
      { step: "Review", text: "Walkthrough call to explain the numbers." },
    ],
  },
  {
    slug: "commercial-bidding-estimates",
    title: "Commercial Bidding Estimates",
    short: "Offices, retail, warehouses and mixed-use commercial bids.",
    image: img("photo-1541888946425-d81bb19240f5"),
    intro:
      "Commercial estimating for offices, retail, industrial and mixed-use projects, structured to the bid form so your submission is easy to review and hard to beat.",
    features: [
      "CSI MasterFormat structured estimates",
      "Site works, structure, envelope and interiors",
      "Schedule-linked general conditions",
      "Alternates and unit price schedules",
    ],
    benefits: [
      "Compliant, well-organised bid submissions",
      "Transparent general conditions pricing",
      "Support through addenda and revisions",
    ],
    process: [
      { step: "Documents", text: "Full drawing and spec set reviewed." },
      { step: "Takeoff", text: "Quantities by division and area." },
      { step: "Pricing", text: "Subs, suppliers and market rates applied." },
      { step: "Submit", text: "Final package matched to the bid form." },
    ],
  },
  {
    slug: "consulting-service",
    title: "Consulting Service",
    short: "Second opinions, bid reviews and cost control advice.",
    image: img("photo-1454165804606-c3d57bc86b40"),
    intro:
      "Independent construction cost consulting: bid reviews, budget validation, claims support and cost control for owners, lenders and contractors.",
    features: [
      "Independent estimate reviews",
      "Budget and contingency validation",
      "Change order and claim analysis",
      "Cost monitoring through construction",
    ],
    benefits: [
      "Catch pricing risk before you sign",
      "Objective numbers for negotiations",
      "Clear reporting for lenders and boards",
    ],
    process: [
      { step: "Intake", text: "Share the estimate, contract or claim." },
      { step: "Analysis", text: "Line-by-line review against the documents." },
      { step: "Report", text: "Findings, risks and recommendations." },
      { step: "Support", text: "We stay on call through negotiation." },
    ],
  },
  {
    slug: "public-bids-estimates",
    title: "Public Bids Estimates",
    short: "Government and institutional tenders, fully compliant.",
    image: img("photo-1450101499163-c8848c66ca85"),
    intro:
      "Estimates prepared for public tenders, schools, municipal and institutional work, respecting prevailing wage, bid forms and documentation requirements.",
    features: [
      "Prevailing wage and union rate pricing",
      "Bid form and unit price schedule compliance",
      "Bonding and insurance cost allowances",
      "Addenda tracking through the tender period",
    ],
    benefits: [
      "Avoid disqualification on technicalities",
      "Competitive numbers on tight public budgets",
      "Full audit trail for every line",
    ],
    process: [
      { step: "Tender", text: "Send the tender package and deadline." },
      { step: "Compliance", text: "Requirements mapped to the estimate." },
      { step: "Pricing", text: "Wage schedules and rates applied." },
      { step: "Delivery", text: "Complete package ahead of closing." },
    ],
  },
  {
    slug: "renovation-estimates",
    title: "Renovation Estimates",
    short: "Remodels, retrofits and adaptive reuse pricing.",
    image: img("photo-1581093458791-9f3c3900df4b"),
    intro:
      "Renovation and retrofit estimates that account for demolition, unknowns and phased work, so your remodel budget survives contact with the existing building.",
    features: [
      "Demolition and disposal quantities",
      "Phasing and occupied-site allowances",
      "Existing condition contingencies",
      "Trade-by-trade remodel pricing",
    ],
    benefits: [
      "Fewer surprises once walls open up",
      "Credible budgets for owners and lenders",
      "Options priced for scope decisions",
    ],
    process: [
      { step: "Site info", text: "Plans, photos or survey of existing." },
      { step: "Scope", text: "Demolition and new work defined." },
      { step: "Estimate", text: "Priced with contingency guidance." },
      { step: "Update", text: "Revised as scope firms up." },
    ],
  },
  {
    slug: "mep-estimates",
    title: "MEP Estimates",
    short: "Mechanical, electrical and plumbing takeoffs and pricing.",
    image: img("photo-1581092160562-40aa08e78837"),
    intro:
      "Specialist MEP estimating covering HVAC, electrical, plumbing and fire protection, with counts and lengths measured directly from your drawings.",
    features: [
      "Duct, pipe and conduit lengths by size",
      "Fixture, device and equipment counts",
      "Labour units by trade standard",
      "Equipment schedules and supplier quotes",
    ],
    benefits: [
      "Accurate numbers on the highest-risk trades",
      "Clear scope splits between trades",
      "Supports both design-bid and design-build",
    ],
    process: [
      { step: "Drawings", text: "MEP drawings and schedules received." },
      { step: "Takeoff", text: "Counts and lengths measured by system." },
      { step: "Pricing", text: "Material and labour units applied." },
      { step: "Deliver", text: "Excel workbook by system and area." },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const faqs = [
  {
    q: "What do your Material Takeoffs include?",
    a: "Material takeoffs are available in PDF and Excel formats. They contain a list of all the materials and tasks needed for the project. Each item is listed division by division and is referenced with the specific drawing from which the quantity is calculated.",
  },
  {
    q: "How long does an estimate take?",
    a: "Most residential estimates are returned within 24 to 48 hours. Larger commercial and public tender packages typically take three to five business days, and we always work backwards from your bid date.",
  },
  {
    q: "Which software do you use for takeoffs?",
    a: "We work in On-Screen Takeoff, Bluebeam Revu, Kubla Cubed and PlanSwift, and deliver in Excel and PDF so your team can work with the files directly.",
  },
  {
    q: "What do you need from me to start?",
    a: "Drawings and specifications in PDF or CAD, any addenda, your bid date and the trades you want included. If something is missing we will tell you before we start pricing.",
  },
  {
    q: "How is pricing calculated?",
    a: "We price per estimate based on project size, trade count and complexity. You receive a fixed quote before any work begins, with no subscription and no long-term commitment.",
  },
  {
    q: "Do you price work outside the USA and Canada?",
    a: "Yes. Our core markets are the United States and Canada, and we regularly support projects in other regions using local labour rates and supplier pricing.",
  },
];

export const softwareLogos = [
  "On-Screen Takeoff",
  "Bluebeam",
  "Kubla",
  "PlanSwift",
];

export const stats = [
  { value: "15 +", label: "Services Year" },
  { value: "8k +", label: "Happy Clients" },
  { value: "9k +", label: "Project Completed" },
  { value: "100 +", label: "Team Member" },
];

export const testimonials = [
  {
    quote:
      "The information they have provided always works for me. They got so much accuracy in their estimates.",
    name: "Savannah Nguyen",
    role: "Sub Contractor",
  },
  {
    quote:
      "Turnaround is quick and the breakdowns are clean. We have doubled the number of bids we submit each month.",
    name: "Marcus Hale",
    role: "General Contractor",
  },
  {
    quote:
      "Their renovation numbers held up on site with almost no change orders. That is rare.",
    name: "Elena Ortiz",
    role: "Developer",
  },
];
