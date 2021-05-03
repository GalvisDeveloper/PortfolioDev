// Change this file to get your personal Portfolio
/*eslint unicode-bom: ["error", "always"]*/
// Summary And Greeting Section

import emoji from "react-easy-emoji";
import ufpsLogo from "./assets/images/education/ufpslogo.png";
import iGerenciaLogo from "./assets/images/jobs/iGerencia_logo.png";
// import escrutinioLogo from "./assets/images/jobs/logo_elecciones.png";
import certifiedXResearch from "./assets/images/certifieds/certifiedXResearch.png";
import certifiedEnglish from "./assets/images/certifieds/certifiedEnglish.png";
import certifiedDigitalT from "./assets/images/certifieds/certifiedDigitalT.png";
import certifiedHtml from "./assets/images/certifieds/certifiedHTML.png";
import certifiedSql from "./assets/images/certifieds/certifiedSQL.png";
import certifiedJava from "./assets/images/certifieds/certifiedJava.png";
import certifiedJs from "./assets/images/certifieds/certifiedJS.png";
import gifGenerator from "./assets/images/projects/gifGenerator.png";
import whatsappClone from "./assets/images/projects/whatsappClone.png";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "GalvisDeveloper",
  title: "Hey, I'm Cristian Bustos",
  subTitle: emoji(
    "A passionate Front End Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1X9_O9csVOC9csdUYQpBEPhSdxOfAZzlA/view",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GalvisDeveloper",
  linkedin: "https://www.linkedin.com/in/cristianbg97",
  gmail: "galvisdeveloper@gmail.com",
  // gitlab: "",
  facebook: "https://www.facebook.com/cristianicbf",
  // medium: ",
  // stackoverflow: "",
  instagram: "https://www.instagram.com/cristian.bg97/",
  twitter: "https://twitter.com/bustos_galvis",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase"),
    emoji("⚡ Knowledge in libraries like 'rebass' or 'styled-components'"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    // {
    //   skillName: "spring-boot",
    //   fontAwesomeClassname: "fab fa-java"
    // },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github",
    },
    { skillName: "", fontAwesomeClassname: "" },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Francisco de Paula Santander",
      logo: ufpsLogo,
      subHeader: "System Engineering in formation",
      duration: "September 2014 - Still",
      desc:
        "Participated in the X Research Hotbed n' Data Analysis with Python",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "20%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Developer",
      company: "iGerencia",
      companylogo: iGerenciaLogo,
      date: "November 2020 – January 2021",
      // desc:
      //   "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building project -> 'Átomo'",
        "Creating reusables UI Components",
      ],
    },
    // {
    //   role: "Support tech",
    //   company: "Escrutinio 2019",
    //   companylogo: escrutinioLogo,
    //   date: "October 2019 – November 2019",
    //   desc:
    //     "I did technical support in the Colombian electoral systems of the year 2019",
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "GalvisDeveloper", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: "",
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "fa",
//         },
//         //  you can add extra buttons here.
//       ],
//     },
//     {
//       image: "",
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "",
//         },
//       ],
//     },
//   ],
//   display: false, // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gif Generator",
      subtitle:
        "Website of diverses gifs that you want to search, developed on ReactJs",
      image: gifGenerator,
      footerLink: [
        {
          name: "WebSite",
          url: "https://gdev-gifgenerator.netlify.app",
        },
        {
          name: "Personal Project",
          url: "https://gdev-gifgenerator.netlify.app",
        },
      ],
    },
    {
      title: "WhatsApp Web Clone",
      subtitle: "Website clone of whatsapp developed on ReactJs",
      image: whatsappClone,
      footerLink: [
        {
          name: "WebSite",
          url: "https://whatsappclone-rjs.web.app",
        },
        {
          name: "Personal Project",
          url: "https://whatsappclone-rjs.web.app",
        },
      ],
    },
    {
      title: "X Research Hotbeds Meeting",
      subtitle: "Virtual classroom project fair",
      image: certifiedXResearch,
      footerLink: [
        {
          name: "Certification",
          url: "static/media/certifiedXResearch.83a7c1d0.png",
        },
      ],
    },
    {
      title: "EF SET",
      subtitle: "The EF Standard English Test",
      image: certifiedEnglish,
      footerLink: [
        {
          name: "Certification",
          url: "static/media/certifiedEnglish.753fc7a6.png",
        },
      ],
    },
    {
      title: "Digital Transformation",
      subtitle: "Completed Certifcation from Coursera",
      image: certifiedDigitalT,
      footerLink: [
        {
          name: "Certification",
          url: "static/media/certifiedDigitalT.41048037.png",
        },
      ],
    },
    {
      title: "HTML",
      subtitle: "Completed Certifcation from SoloLearning",
      image: certifiedHtml,
      footerLink: [
        {
          name: "Certification",
          url: "static/media/certifiedHTML.f344e901.png",
        },
      ],
    },
    {
      title: "Java",
      subtitle: "Completed Certifcation from SoloLearning",
      image: certifiedJava,
      footerLink: [
        {
          name: "Certification",
          url: "static/media/certifiedJava.8ce2b12e.png",
        },
      ],
    },
    {
      title: "SQL",
      subtitle: "Completed Certifcation from SoloLearning",
      image: certifiedSql,
      footerLink: [
        {
          name: "Certification",
          url: "static/media/certifiedSQL.5c388b5d.png",
        },
      ],
    },
    {
      title: "JavaScript",
      subtitle: "Completed Certifcation from SoloLearning",
      image: certifiedJs,
      footerLink: [
        { name: "Certification", url: "static/media/certifiedJS.c84488dd.png" },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url:
//         "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
//     },
//   ],
//   display: false, // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+57 317 806 4320",
  email_address: "galvisdeveloper@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "bustos_galvis", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  // bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
