/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Myles Sartor",
  title: "Hi, I'm Myles",
  subTitle: emoji(
    "A Data Engineer who designs cloud-native ETL pipelines, geospatial analytics, and full-stack data applications 🚀. Currently pursuing a B.S. in Information Science (Data Specialization) with a Minor in Data Science at the University of Maryland, expected December 2026. I build scalable pipelines, optimize databases, and turn complex data into insights for stakeholders ranging from nonprofits to enterprise clients."
  ),
  resumeLink: "/MylesSartorResume.pdf", // see instructions below to set this correctly
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/my1e2",
  linkedin: "https://www.linkedin.com/in/myles-sartor-05a76b32a/",
  gmail: "msartor@terpmail.umd.edu",
  medium: "https://medium.com/@mylesgs03",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ENGINEERING | SPATIAL ANALYTICS | FULL-STACK DATA APPLICATIONS",
  skills: [
    emoji("⚡ Design and deploy serverless, event-driven ETL pipelines on AWS (S3, SQS, Lambda, RDS)"),
    emoji("⚡ Build spatial data analysis pipelines and interactive ArcGIS applications"),
    emoji("⚡ Design normalized relational databases (MySQL/PostgreSQL) and optimize query performance"),
    emoji("⚡ Build machine learning pipelines for classification and clustering tasks"),
    emoji("⚡ Develop full-stack web applications with React, Node/Express, and Supabase")
  ],

  /* Make sure to use valid Font Awesome classnames: https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Maryland, College Park",
      logo: require("./assets/images/umdLogo.png"), // placeholder logo — swap in your own image later
      subHeader: "B.S. in Information Science (Data Specialization), Minor in Data Science",
      duration: "Expected December 2026",
      desc: "Relevant coursework: Linear Algebra, Discrete Mathematics, Probability & Statistics.",
      descBullets: [
        "Awards: Princeton Book Award, Dean's List, Distinguished Dean's List",
        "Certification: Researcher, FIRE (First-Year Innovation and Research Experience)"
      ]
    }
  ]
};

// Top proficient stacks

const techStack = {
  viewSkillBars: false, // set true and fill in real percentages below if you want a proficiency bar section
  experience: [
    { Stack: "Data Engineering / ETL", progressPercentage: "85%" },
    { Stack: "Spatial & Statistical Analysis", progressPercentage: "80%" },
    { Stack: "Full-Stack Development", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer Intern",
      company: "CapTech — Airline Data & Analytics",
      companylogo: require("./assets/images/captechLogo.png"), // placeholder logo — swap in your own image later
      date: "June 2026 – August 2026",
      desc: "Richmond, VA",
      descBullets: [
        "Architected and deployed a serverless, event-driven ETL pipeline on AWS (S3 → SQS → Lambda → RDS) using Python and the CDK/CLI",
        "Developed EventBridge cron rules and a normalized PostgreSQL database for real-time analytics across 3 schemas, 20+ tables, and 30+ SQL views",
        "Ingested ~60 million rows of data while monitoring outputs via AWS CloudWatch and a Power BI dashboard",
        "Optimized query performance by 70% on multi-million-row tables using targeted indexing, precomputed lookup tables, and connection-pooled writes",
        "Designed backend API delivery layers for low-latency streaming of RDS analytics outputs to a frontend UI"
      ]
    },
    {
      role: "Consultant I — iConsultancy Capstone",
      company: "Southern Poverty Law Center (SPLC)",
      companylogo: require("./assets/images/splcLogo.png"), // placeholder logo — swap in your own image later
      date: "January 2026 – May 2026",
      desc: "College Park, MD",
      descBullets: [
        "Designed a multi-method spatial data analysis pipeline (Python, R, SQL) calculating polling place accessibility across 203 population centers, deployed into 3 interactive ArcGIS applications with directional routing, isochrone maps, and live indicators",
        "Presented findings to the SPLC client team alongside 10 peer consulting teams",
        "Co-presented final research findings to 240+ SPLC staff and stakeholders; work referred to SPLC HR for recruitment consideration"
      ]
    },
    {
      role: "Math Tutor",
      company: "Calvert Hall College High School — Community Service",
      companylogo: require("./assets/images/calvertHallLogo.png"), // placeholder logo — swap in your own image later
      date: "November 2019 – November 2021",
      desc: "Towson, MD",
      descBullets: [
        "Tutored immigrant students in math subjects ranging from Algebra to Calculus II; supported academic mentorship"
      ]
    }
  ]
};

/* Open Source Section — your GitHub username is read from GITHUB_USERNAME in your .env file, not from this file */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/blackMusicExplorer.png"), // placeholder image — swap in your own later
      projectName: "Black Music Explorer",
      projectDesc:
        "Full-stack music discovery platform highlighting Black artists, genres, and cultural movements. React frontend, Node/Express backend, Spotify + MusicBrainz API integration, Supabase for auth/persistence, deployed on Vercel.",
      footerLink: [{ name: "GitHub", url: "https://github.com/my1e2/black-music-explorer" }]
    },
    {
      image: require("./assets/images/musicGenrePrediction.png"),
      projectName: "Music Genre Prediction — Exploratory Data Analysis",
      projectDesc:
        "Supervised ML pipeline classifying songs into 7 genres using audio and lyrical/NLP features. Evaluated Random Forest and Gradient Boosting models; explored K-Means and PCA for unsupervised structure discovery.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/my1e2/Music_Genre_Prediction_Refined" },
        { name: "Article", url: "https://medium.com/@mylesgs03/a-refined-look-at-music-genres-with-supervised-learning-what-audio-and-lyrical-features-reveal-1a93e9778f25" }
      ]
    },
    {
      image: require("./assets/images/documentingHate.png"),
      projectName: "Documenting Hate — Database Design & Modeling",
      projectDesc:
        "Designed a 7-table relational MySQL database from a raw ProPublica dataset, normalized to 3NF. Built a complex ERD and 5 SQL views/CTEs to analyze patterns across 45+ articles from 35 locations.",
      footerLink: [{ name: "GitHub", url: "https://github.com/my1e2/Documenting_Hate" }]
    },
    {
      image: require("./assets/images/waisClimateAnalysis.png"),
      projectName: "West Antarctic Ice Sheet (WAIS) Climate Analysis",
      projectDesc:
        "Geospatial climate analysis assessing WAIS susceptibility to rising temperatures using the Cheyenne supercomputer, CESM2.1, and WRF. Co-authored a research paper identifying a correlation between COVID-19 emissions reductions and short-term ice mass stabilization.",
      footerLink: [{ name: "GitHub", url: "https://github.com/my1e2/WAIS/tree/main" }]
    },
    {
      image: require("./assets/images/alabamaVotingAccess.png"),
      projectName: "Alabama Voting Access Analysis (SPLC Capstone Deliverables)",
      projectDesc:
        "Geospatial analysis of polling place accessibility in Montgomery County, Alabama. Calculates walking distances from population centers to polling locations, integrates demographic vulnerability indicators, and analyzes voter turnout patterns using multiple routing engines and isochrone generation.",
      footerLink: [{ name: "GitHub", url: "https://github.com/MawaSC/Alabama-Voting-Access-Analysis-BBPAD" }]
    },
    {
      image: require("./assets/images/imdbFilmAnalysis.png"),
      projectName: "IMDb Film Analysis (2000–2022)",
      projectDesc:
        "Combines a large IMDb JSON dataset with supplemental metadata from the OMDb REST API to explore films released between 2000 and 2022. Uses pandas and matplotlib to investigate relationships between genre, runtime, box office revenue, release year, and IMDb rating/vote count.",
      footerLink: [{ name: "GitHub", url: "https://github.com/my1e2/IMDb-Film-Data-Analysis" }]
    },
    {
      image: require("./assets/images/textComplexityAnalysis.png"),
      projectName: "Educational Text Complexity Analysis",
      projectDesc:
        "Guided exploratory data analysis of a multi-annotator educational text complexity dataset (CZI Learning Commons Literacy Evaluators project), covering annotation consistency, predictive relationships, human-vs-LLM annotation comparison, and readability score discrepancies.",
      footerLink: [{ name: "GitHub", url: "https://github.com/my1e2/Text-Complexity-Analysis" }]
    },
    {
      image: require("./assets/images/citySimilarityAnalysis.png"),
      projectName: "City Cosine Similarity Analysis",
      projectDesc:
        "City similarity search engine using cosine similarity over normalized geographic coordinates and population size. Identifies the ten most similar cities within the same country for query cities including New York, Paris, Tokyo, Mumbai, and Sydney.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/my1e2/City-Similarity-Analysis" },
        { name: "Article", url: "https://medium.com/inst414-data-science-tech/a-tale-of-two-cities-using-cosine-similarity-to-identify-comparable-cities-worldwide-c322ced0169f" }
      ]
    },
    {
      image: require("./assets/images/facebookNetworkAnalysis.png"),
      projectName: "Facebook Social Network Analysis",
      projectDesc:
        "Exploratory analysis of the Facebook ego-network dataset (Stanford SNAP). Constructs an undirected graph, computes three centrality measures, examines network structure, and exports depth-2 ego networks to GraphML for Gephi visualization.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/my1e2/Facebook_Social_Network" },
        { name: "Article", url: "https://medium.com/inst414-data-science-tech/small-world-phenomenon-a-network-analysis-of-facebooks-social-architecture-9b94a0210b94" }
      ]
    },
    {
      image: require("./assets/images/twitterClustering.png"),
      projectName: "Twitter Social Network Clustering Analysis",
      projectDesc:
        "Applies unsupervised ML to a Twitter social network. Extracts degree and clustering coefficient features, applies K-Means with the elbow method, and profiles clusters across a 2x2 visualization dashboard.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/my1e2/Twitter-Network-Clustering" },
        { name: "Article", url: "https://medium.com/inst414-data-science-tech/twitters-elaborate-social-network-clustering-analysis-f577f6405ffa" }
      ]
    },
    {
      image: require("./assets/images/musicalRollercoaster.png"),
      projectName: "A Musical Rollercoaster: 70 Years of Lyrical and Thematic Excellence",
      projectDesc:
        "Analysis of 70 years of musical data investigating how lyrics and musical themes have transformed since the 1950s, culminating in the rise of hip-hop. Built using Pandas, Matplotlib, and Seaborn to tell a data-driven story.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/my1e2/Music_EDA" },
        { name: "Article", url: "https://medium.com/@mylesgs03/a-musical-rollercoaster-70-years-of-lyrical-and-thematic-excellence-c1d9aecb8af7" }
      ]
    },
    {
      image: require("./assets/images/censusVisualizationReport.png"),
      projectName: "Census Data Visualization Report",
      projectDesc:
        "Comprehensive analysis of U.S. Census data using R and Tidyverse to explore socioeconomic disparities across demographic and geographic dimensions. Includes 8 multivariate visualizations and data pipelines to clean and transform census datasets.",
      footerLink: [{ name: "GitHub", url: "https://github.com/my1e2/US_Census_Bureau_Report" }]
    },
    {
      image: require("./assets/images/caregiverSchedule.png"),
      projectName: "Caregiver Schedule",
      projectDesc:
        "GUI-based scheduling system in Python (Tkinter) with fully automated calendar/payroll generation, cutting manual scheduling work by several hours per week. Built on object-oriented principles, adaptable to organizations with up to 50+ employees.",
      footerLink: [{ name: "GitHub", url: "https://github.com/my1e2/INST326_Project03_56_Group" }]
    },
    {
      image: require("./assets/images/fitnessApp.png"),
      projectName: "Information Organization Fitness App",
      projectDesc:
        "Team-based information organization project researching user populations and data needs for a fitness app. Developed metadata schemas and UI design in Figma, and documented the implementation process in a finalized report.",
      footerLink: [{ name: "GitHub", url: "https://github.com/my1e2/Fitness-App" }]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Awards, certifications, and recognitions",
  achievementsCards: [
    {
      title: "Princeton Book Award",
      subtitle: "Awarded for academic excellence and leadership.",
      image: require("./assets/images/princetonBookAward.png"), // placeholder image — swap in your own later
      imageAlt: "Princeton Book Award",
      footerLink: []
    },
    {
      title: "Dean's List & Distinguished Dean's List",
      subtitle: "University of Maryland, College Park — recognition for academic performance.",
      image: require("./assets/images/deansListBadge.png"),
      imageAlt: "Dean's List",
      footerLink: []
    },
    {
      title: "Researcher — FIRE (First-Year Innovation and Research Experience)",
      subtitle: "Certification for research contributions to the WAIS climate computing project.",
      image: require("./assets/images/fireResearchBadge.png"),
      imageAlt: "FIRE Researcher Certification",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Writing on data, machine learning, and analysis",
  displayMediumBlogs: "true", // pulls live blogs from your Medium username configured in .env
  blogs: [
    {
      url: "https://medium.com/@mylesgs03/a-refined-look-at-music-genres-with-supervised-learning-what-audio-and-lyrical-features-reveal-1a93e9778f25?postPublishedType=repub",
      title: "A Refined Look at Music Genres with Supervised Learning",
      description: "What audio and lyrical features reveal about genre classification, using supervised and unsupervised ML techniques."
    },
    {
      url: "https://medium.com/inst414-data-science-tech/twitters-elaborate-social-network-clustering-analysis-f577f6405ffa",
      title: "Twitter's Elaborate Social Network Clustering Analysis",
      description: "Using K-Means clustering on degree and clustering-coefficient features to uncover structurally distinct user groups in a Twitter follower graph."
    },
    {
      url: "https://medium.com/inst414-data-science-tech/a-tale-of-two-cities-using-cosine-similarity-to-identify-comparable-cities-worldwide-c322ced0169f",
      title: "A Tale of Two Cities: Using Cosine Similarity to Identify Comparable Cities Worldwide",
      description: "Building a city similarity search engine with cosine similarity over geographic and population features."
    },
    {
      url: "https://medium.com/inst414-data-science-tech/small-world-phenomenon-a-network-analysis-of-facebooks-social-architecture-9b94a0210b94",
      title: "Small World Phenomenon: A Network Analysis of Facebook's Social Architecture",
      description: "Exploring centrality, structure, and ego networks in the Facebook SNAP dataset."
    },
    {
      url: "https://medium.com/@mylesgs03/a-musical-rollercoaster-70-years-of-lyrical-and-thematic-excellence-c1d9aecb8af7",
      title: "A Musical Rollercoaster: 70 Years of Lyrical and Thematic Excellence",
      description: "Investigating how lyrics and musical themes have transformed since the 1950s using Pandas, Matplotlib, and Seaborn."
    }
  ],
  display: true
};

// Talks Section (none provided — disabled)

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section (none provided — disabled)

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss data engineering, spatial analytics, or opportunities",
  number: "732-947-1044",
  email_address: "msartor@terpmail.umd.edu"
};

// Twitter Section (not provided — disabled)

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true; // set false if you are not currently looking for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};