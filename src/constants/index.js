import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "1",
    title: "Why Me",
    url: "#whyme",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Ui/Ux Design",
  "Development",
  "Regression Testing",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "JIRA Suite",
    text: collabText,
  },
  {
    id: "1",
    title: "Github",
  },
  {
    id: "2",
    title: "Trello",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Front End Development",
    text: "I have over a decade of experience in front end development, with a focus on React, Next.js, .Net, Angular, SCSS, HTML, CSS, and Tailwind CSS.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mobile Development",
    text: "I bring in 8 years of experience in mobile development, with a focus on React Native, Flutter and Swift.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Back End Development",
    text: "I have key experience in back end development, with a focus on Node.js, Nest.js, Express, MongoDB, Firebase, and Python.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "UI/UX Design",
    text: "I have over 10 years of experience in UI/UX design, with a focus on Figma, Adobe XD, and Sketch.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "SEO Optimization",
    text: "I have over 10 years of experience in SEO optimization, with a focus on Google Analytics, Google Search Console, and Google Ads.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Google Ads",
    text: "I have over 10 years of experience in Google Ads, with a focus on Google Analytics, Google Search Console, and Google Ads.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const projects = [
  {
    id: "0",
    title: "Concerige App",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imgCover: "./src/assets/benefits/mm.png",
    linkUrl: "https://madmobile.com/products/concierge/"
  },
  {
    id: "1",
    title: "UTAC App",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imgCover: "./src/assets/benefits/utac.png",
    linkUrl: "https://apps.apple.com/gb/app/utac-2024/id6689516349",
    light: true,
  },
  {
    id: "2",
    title: "Netflix Clone",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imgCover: "./src/assets/benefits/netflix.png",
    linkUrl: "https://basic-netflix-99d30.web.app/",
  },
  {
    id: "3",
    title: "Youtube Clone",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imgCover: "./src/assets/benefits/youtube.png",
    linkUrl: "https://clone-d8378.web.app/",
    light: true,
  },
  {
    id: "4",
    title: "Booking Clone",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imgCover: "./src/assets/benefits/book.png",
    linkUrl: "https://mihalmaruf.github.io/bookingapp/",
  },
  {
    id: "5",
    title: "Coinbase Clone",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imgCover: "./src/assets/benefits/coin.png",
    linkUrl: "https://cryptocoin-b5ab2.web.app/",
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: discordBlack,
    url: "https://www.linkedin.com/in/marruf-mihal-00b0a4127/"
  },
  {
    id: "1",
    title: "GitHub",
    iconUrl: twitter,
    url: "https://github.com/mihalmaruf",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/mihalmaruf/?hl=en"
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/mihal.maruf",
  },
];
