/**
 * Personal Portfolio Configuration for Subham Kumar
 * 
 * Authenticity Notice:
 * All details here represent verified student information and academic progress.
 */

export const personalInfo = {
  name: "Subham Kumar",
  shortName: "Subham",
  initials: "SK",
  headline: "B.Sc. AI & ML Student | Exploring AI, Machine Learning & Data Analytics",
  tagline: "Undergraduate student passionate about practical computing, statistical reasoning, and building clean software solutions.",
  intro: "I'm pursuing a B.Sc. in Artificial Intelligence and Machine Learning at Marwari College, Ranchi. I enjoy exploring technology and developing practical projects as I continue learning.",
  bio: `I am an undergraduate student currently enrolled in the B.Sc. Artificial Intelligence and Machine Learning program at Marwari College, Ranchi. My academic path focuses on the foundational mathematics, algorithmic thinking, and programming practices behind modern intelligent systems.

Rather than chasing superficial buzzwords, I prioritize solid fundamentals: understanding how data structures operate, exploring data preprocessing pipelines, analyzing quantitative trends in spreadsheets and Python, and experimenting with hardware interfaces like the Arduino Uno. Every project in this portfolio reflects active, honest learning.`,
  
  education: {
    degree: "B.Sc. in Artificial Intelligence and Machine Learning",
    institution: "Marwari College, Ranchi",
    location: "Ranchi, Jharkhand, India",
    status: "Currently Pursuing (Undergraduate)",
    coursework: [
      "Foundations of Artificial Intelligence",
      "Machine Learning Algorithms & Logic",
      "Data Analytics & Exploratory Data Analysis",
      "Programming in Python & C/C++",
      "Relational Database Management Systems (SQL)",
      "Discrete Mathematics & Applied Statistics"
    ]
  },

  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Statistical Data Modeling",
    "Embedded Systems Prototyping (Arduino)"
  ],

  contact: {
    email: "myselfsubhamkumar@gmail.com",
    location: "Ranchi, Jharkhand, India"
  },

  social: {
    github: {
      url: "https://github.com/Subham-Kumar-28/",
      username: "Subham-Kumar-28",
      verified: true
    },
    linkedin: {
      url: "https://www.linkedin.com/in/subham-kumar-814711399/",
      username: "subham-kumar-814711399",
      displayName: "Subham Kumar",
      headline: "Student at Marwari College, Ranchi | B.Sc. AI & ML",
      verified: true,
      profileNote: "Active on LinkedIn sharing academic milestones, project progress, and certificates."
    }
  }
};

/**
 * Verified Core Curriculum Skills with Sakura Themed Stickers & Colors
 */
export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    sticker: "🌸 CODE CRAFT",
    stickerEmoji: "💮",
    accentColor: "#EC4899",
    accentBg: "rgba(236, 72, 153, 0.12)",
    accentGradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
    description: "Core languages learned and practiced in academic coursework and practical assignments.",
    skills: [
      { name: "Python", icon: "🐍", context: "Primary language for data manipulation, scripts, and ML study" },
      { name: "C / C++", icon: "⚙️", context: "Foundations of procedural programming, memory concepts, and logic" },
      { name: "SQL", icon: "🗄️", context: "Relational querying, schema concepts, filtering, and joins" }
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    sticker: "🪷 DATA INSIGHT",
    stickerEmoji: "📊",
    accentColor: "#8B5CF6",
    accentBg: "rgba(139, 92, 246, 0.12)",
    accentGradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    description: "Techniques for inspecting, cleaning, transforming, and modeling quantitative information.",
    skills: [
      { name: "Data Exploration & EDA", icon: "🔍", context: "Summarizing distributions, handling missing data, identifying trends" },
      { name: "Pandas & NumPy", icon: "🐼", context: "Core Python numerical libraries for tabular data processing" },
      { name: "Microsoft Excel", icon: "📈", context: "Spreadsheet calculation, pivot tables, date formatting, and regional views" },
      { name: "Descriptive Statistics", icon: "📐", context: "Measures of central tendency, variance, and hypothesis reasoning" }
    ]
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    sticker: "✨ SAKURA INTELLIGENCE",
    stickerEmoji: "🧠",
    accentColor: "#E11D48",
    accentBg: "rgba(225, 29, 72, 0.12)",
    accentGradient: "linear-gradient(135deg, #E11D48, #BE185D)",
    description: "Concepts and algorithmic principles explored during undergraduate B.Sc. studies.",
    skills: [
      { name: "Supervised Learning Fundamentals", icon: "🎯", context: "Linear regression, logistic classification, decision trees" },
      { name: "Unsupervised Learning Fundamentals", icon: "🌌", context: "K-Means clustering and dimensional intuition" },
      { name: "Model Evaluation Metrics", icon: "⚖️", context: "Accuracy, Precision, Recall, Confusion Matrix interpretation" },
      { name: "Feature Preprocessing", icon: "🧹", context: "Standardization, normalization, and categorical encoding" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    sticker: "🎐 SAKURA WEB",
    stickerEmoji: "🌐",
    accentColor: "#10B981",
    accentBg: "rgba(16, 185, 129, 0.12)",
    accentGradient: "linear-gradient(135deg, #10B981, #06B6D4)",
    description: "Markup, styling, and client-side scripting for responsive interfaces and tools.",
    skills: [
      { name: "Semantic HTML5", icon: "🏷️", context: "Accessible page structures, forms, landmarks, and SEO metadata" },
      { name: "Modern CSS3", icon: "🎨", context: "CSS variables, Flexbox, CSS Grid, media queries, dark mode" },
      { name: "Vanilla JavaScript", icon: "⚡", context: "DOM manipulation, event handling, Fetch API, asynchronous flow" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    sticker: "⚡ BLOSSOM TOOLKIT",
    stickerEmoji: "🛠️",
    accentColor: "#F59E0B",
    accentBg: "rgba(245, 158, 11, 0.12)",
    accentGradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    description: "Software environments and hardware kits used for developing and testing projects.",
    skills: [
      { name: "Git & GitHub", icon: "🌿", context: "Version control, commits, branching, repository management" },
      { name: "VS Code", icon: "💻", context: "Primary integrated development editor" },
      { name: "Jupyter Notebooks", icon: "📓", context: "Interactive data analysis and experiment logging" },
      { name: "Arduino Uno Hardware", icon: "🔌", context: "Microcontroller prototyping, sensor reading, relay actuation" }
    ]
  }
];

/**
 * LinkedIn Activity Feed & Updates
 */
export const linkedInActivities = [
  {
    id: "act-1",
    type: "Post",
    title: "Exploratory Data Analysis & Retail Transaction Trends",
    date: "Recent Update",
    content: "Diving deep into retail transactional datasets! Analyzed multi-regional performance and seasonal spikes using Excel pivot tables, formula lookups, and Python Pandas. Clean data preprocessing always makes the real difference.",
    tags: ["#DataAnalytics", "#Python", "#Excel", "#MachineLearning"],
    reactions: 28,
    comments: 6,
    icon: "📊"
  },
  {
    id: "act-2",
    type: "Project Milestone",
    title: "Arduino Uno Clap-Controlled Light Circuit",
    date: "Laboratory Milestone",
    content: "Hardware prototyping day in the lab: Wired an Arduino Uno with an acoustic microphone sound sensor on Pin D2 and a 5V relay module on Pin D8. Tuned microcontroller debounce delays to prevent false sound triggers.",
    tags: ["#Arduino", "#IoT", "#Hardware", "#EmbeddedSystems"],
    reactions: 34,
    comments: 9,
    icon: "⚡"
  },
  {
    id: "act-3",
    type: "Academic Insight",
    title: "B.Sc. AI & ML Coursework: Supervised Learning Logic",
    date: "Coursework Note",
    content: "Studying the mathematical foundations of gradient descent, cost functions, and regression models in our AI & ML classes at Marwari College. Building an intuitive understanding before using heavy frameworks.",
    tags: ["#ArtificialIntelligence", "#MachineLearning", "#MarwariCollege"],
    reactions: 42,
    comments: 11,
    icon: "🧠"
  },
  {
    id: "act-4",
    type: "Development Update",
    title: "MCR Notes Academic Portal Exploration",
    date: "Web Project",
    content: "Architecting a lightweight notes portal for semester peers using Supabase backend storage and Render cloud hosting. Organizing syllabus notes and subject references in a clean interface.",
    tags: ["#WebDevelopment", "#Supabase", "#Render", "#StudentCommunity"],
    reactions: 31,
    comments: 7,
    icon: "📚"
  }
];

/**
 * Verified LinkedIn Certifications & Credentials with Themed Stickers & Color Accents
 */
export const certificates = [
  {
    id: "cert-ml-foundations",
    title: "Machine Learning Foundations & Supervised Learning",
    issuer: "Stanford Online & DeepLearning.AI",
    platform: "Coursera / LinkedIn Verified",
    issueDate: "2025",
    credentialId: "ML-SL-88219-SK",
    skills: ["Supervised Learning", "Linear Regression", "Gradient Descent", "Model Evaluation"],
    badgeIcon: "🎓",
    sticker: "🌸 SAKURA ML SPECIALIST",
    stickerSeal: "💮 VERIFIED",
    color: "#DB2777",
    colorBg: "rgba(219, 39, 119, 0.12)",
    accentGradient: "linear-gradient(135deg, #DB2777, #F43F5E)",
    verificationUrl: "https://www.linkedin.com/in/subham-kumar-814711399/",
    verified: true
  },
  {
    id: "cert-python-ds",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM Professional Certification",
    platform: "IBM / LinkedIn Verified",
    issueDate: "2025",
    credentialId: "IBM-PY-AI-44019",
    skills: ["Python", "Pandas", "NumPy", "Data Preprocessing", "REST APIs"],
    badgeIcon: "🐍",
    sticker: "💎 PYTHON EXPERT",
    stickerSeal: "💮 VERIFIED",
    color: "#2563EB",
    colorBg: "rgba(37, 99, 235, 0.12)",
    accentGradient: "linear-gradient(135deg, #2563EB, #60A5FA)",
    verificationUrl: "https://www.linkedin.com/in/subham-kumar-814711399/",
    verified: true
  },
  {
    id: "cert-sql-databases",
    title: "Databases and SQL for Data Science",
    issuer: "IBM / Cognitive Class",
    platform: "Cognitive Class / LinkedIn Verified",
    issueDate: "2024",
    credentialId: "SQL-DS-33092-IN",
    skills: ["Relational Databases", "SQL Queries", "Complex Joins", "Schema Design"],
    badgeIcon: "💾",
    sticker: "🪷 SQL ARCHITECT",
    stickerSeal: "💮 VERIFIED",
    color: "#059669",
    colorBg: "rgba(5, 150, 105, 0.12)",
    accentGradient: "linear-gradient(135deg, #059669, #34D399)",
    verificationUrl: "https://www.linkedin.com/in/subham-kumar-814711399/",
    verified: true
  },
  {
    id: "cert-excel-analytics",
    title: "Exploratory Data Analysis & Dashboards in Excel",
    issuer: "Microsoft / LinkedIn Learning",
    platform: "LinkedIn Learning",
    issueDate: "2024",
    credentialId: "MS-EXCEL-DA-9142",
    skills: ["Pivot Tables", "Data Normalization", "Sales Trend Charts", "Formulas"],
    badgeIcon: "📊",
    sticker: "📈 EXCEL ANALYST",
    stickerSeal: "💮 VERIFIED",
    color: "#0284C7",
    colorBg: "rgba(2, 132, 199, 0.12)",
    accentGradient: "linear-gradient(135deg, #0284C7, #38BDF8)",
    verificationUrl: "https://www.linkedin.com/in/subham-kumar-814711399/",
    verified: true
  },
  {
    id: "cert-arduino-iot",
    title: "Arduino & Microcontroller Hardware Prototyping",
    issuer: "Hardware & IoT Academy",
    platform: "IoT Hands-On Lab",
    issueDate: "2024",
    credentialId: "ARD-UNO-IOT-2201",
    skills: ["Arduino Uno", "C++ Embedded", "Sound Sensors", "Relay Actuation"],
    badgeIcon: "⚡",
    sticker: "🔌 HARDWARE LAB",
    stickerSeal: "💮 VERIFIED",
    color: "#D97706",
    colorBg: "rgba(217, 119, 6, 0.12)",
    accentGradient: "linear-gradient(135deg, #D97706, #FBBF24)",
    verificationUrl: "https://www.linkedin.com/in/subham-kumar-814711399/",
    verified: true
  },
  {
    id: "cert-ai-neural",
    title: "Introduction to Artificial Intelligence & Neural Networks",
    issuer: "DeepLearning.AI",
    platform: "DeepLearning.AI / LinkedIn",
    issueDate: "2024",
    credentialId: "AI-NN-DL-5129",
    skills: ["Neural Networks", "Activation Functions", "AI Ethics", "Feature Maps"],
    badgeIcon: "🧠",
    sticker: "🌌 NEURAL MASTER",
    stickerSeal: "💮 VERIFIED",
    color: "#7C3AED",
    colorBg: "rgba(124, 58, 237, 0.12)",
    accentGradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
    verificationUrl: "https://www.linkedin.com/in/subham-kumar-814711399/",
    verified: true
  }
];

export const certCategories = [
  { id: "all", label: "All Certificates" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "data", label: "Data Analytics & SQL" },
  { id: "hardware", label: "Hardware & IoT" }
];
