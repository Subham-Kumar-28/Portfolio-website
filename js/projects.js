/**
 * Project Data Catalog for Subham Kumar
 * 
 * Authenticity Notice:
 * The following projects represent genuine academic and self-directed work under active
 * verification. Each entry clearly marks its status as "Draft / Verification in Progress"
 * to comply with the portfolio's authenticity rules.
 */

export const projects = [
  {
    id: "mcr-notes",
    title: "MCR Notes Website",
    category: "web-cloud",
    categoryLabel: "Web & Cloud Services",
    status: "Draft / Verification Pending",
    statusType: "verification-pending",
    summary: "Academic resource and notes platform explored for Marwari College students, investigating cloud hosting on Render and backend data storage with Supabase.",
    description: `The MCR Notes Website is an educational initiative conceptualized to help college peers access organized study materials, course notes, and reference guides.

Initial architectural exploration involved deploying web application components onto Render while connecting to a managed Supabase backend for structured document metadata and user authentication. Detailed verification of the active repository commits and production deployment is currently underway.`,
    technologies: ["Web Technologies", "Supabase", "Render", "JavaScript", "HTML/CSS"],
    highlights: [
      "Designed to centralize semester notes and syllabus references",
      "Explored Supabase for database schemas and secure data storage",
      "Evaluated cloud container deployment workflows using Render"
    ],
    verificationDetails: {
      statusNote: "Under review — repository, schema, and live deployment link require final confirmation before marking as completed.",
      repoLink: null, // Subham to supply repository URL
      demoLink: null,
      verificationChecklist: [
        "Verify public/private GitHub repository address",
        "Confirm Supabase database instance and active tables",
        "Check Render web service deployment health"
      ]
    }
  },
  {
    id: "retail-sales-dashboard",
    title: "Retail Sales Excel Dashboard",
    category: "data-analytics",
    categoryLabel: "Data Analytics",
    status: "Draft / Verification Pending",
    statusType: "verification-pending",
    summary: "Quantitative analysis of retail transactions utilizing Microsoft Excel pivot tables, date formatting hierarchies, monthly sales trends, and regional breakdown.",
    description: `A hands-on business intelligence exercise investigating retail point-of-sale datasets. The workbook applies structured Excel techniques including formula parsing, datetime normalization, multi-dimensional pivot tables, and comparative charts.

The objective is to reveal monthly revenue seasonality, identify top-performing product categories, and calculate regional sales contributions without relying on bloated software.`,
    technologies: ["Microsoft Excel", "Pivot Tables", "Date Formatting", "Trend Analysis", "Data Summarization"],
    highlights: [
      "Parsed date serials into normalized month/quarter fiscal timelines",
      "Created dynamic pivot tables to aggregate category transactions",
      "Constructed visual summaries showing regional distribution and month-over-month shifts"
    ],
    verificationDetails: {
      statusNote: "Under review — exact workbook metrics and sample raw dataset require final audit before publishing quantitative claims.",
      repoLink: null,
      demoLink: null,
      verificationChecklist: [
        "Audit source Excel spreadsheet workbook",
        "Validate pivot table calculations and summary formulas",
        "Export anonymized sample screenshots or downloadable template"
      ]
    }
  },
  {
    id: "arduino-clap-light",
    title: "Arduino Clap-Controlled Light",
    category: "hardware-iot",
    categoryLabel: "Hardware & IoT",
    status: "Draft / Verification Pending",
    statusType: "verification-pending",
    summary: "Embedded prototyping project using an Arduino Uno microcontroller, a digital sound detector sensor on Pin D2, and a 5V relay module on Pin D8 to switch lighting on acoustic impulses.",
    description: `A physical computing experiment focused on real-world automation and sensor signal acquisition. An Arduino Uno microcontroller interfaces with a high-sensitivity microphone sound sensor module to capture acoustic spikes (such as hands clapping).

When the signal threshold triggers on digital pin D2, the onboard C++ firmware executes a debounce time window to eliminate false triggers, then signals the relay module on digital pin D8 to toggle the electrical state.`,
    technologies: ["Arduino Uno", "C / C++ (Embedded)", "Sound Sensor (Pin D2)", "Relay Module (Pin D8)", "Circuit Prototyping"],
    highlights: [
      "Hardware pin assignment: Sound Sensor output wired to Digital Pin D2",
      "Relay trigger control wired to Digital Pin D8",
      "Firmware debounce delay algorithm to avoid multi-trigger switch bounce",
      "Hands-on electrical safety and relay isolation practice"
    ],
    verificationDetails: {
      statusNote: "Under review — hardware schematic, circuit photos, and firmware code verification currently in progress.",
      repoLink: null,
      demoLink: null,
      verificationChecklist: [
        "Verify firmware sketch repository and comments",
        "Review pinout diagram (D2 Sound, D8 Relay, VCC 5V, GND)",
        "Document breadboard prototype testing notes"
      ]
    }
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web-cloud", label: "Web & Cloud" },
  { id: "data-analytics", label: "Data Analytics" },
  { id: "hardware-iot", label: "Hardware & IoT" }
];
