// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#3376C1, #19C8B3, #9955B4, #9B081C",
  firstName: "Ben",
  middleName: "",
  lastName: "Wheeler",
  message: "An Adelaide based third year Computer Science student, majoring in Cybersecurity with Experience in C++, Python and Swift / Swift UI.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ben-wheeler",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ben-wheeler-220363223",
    },
    {
      image: "fa-discord",
      url: "https://discordapp.com/users/535041082304757770/",
    },
    {
      image: "fa-telegram-plane",
      url: "mailto:benjamindwheeler@gmail.com",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/benwheeler.png"),
  imageSize: 375,
  message:
  "Hello! I’m Ben, an aspiring Computer Science Student currently studying my third year of a Bachelor of Computer Science at the University of Adelaide, with a major in Cybersecurity. I am passionate about technology, and programming, and hope that I can make a difference in the real world through creating useful software.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ben-wheeler", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/benwheeler.png"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/benwheeler.png"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Details",
  message:
    "I'm currently looking for any Software Engineering opportunities! If you know of any positions available, or want to get in contact please feel free to contact me via: Discord: bhen#2171 or via email at",
  email: "benjamindwheeler@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    // {
    //   role: 'iOS Developer: BookEnd',
    //   companylogo: require('../assets/img/BookEndIcon.png'),
    //   date: 'March 2023 - Present'
    // },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/maptek.png'),
      date: 'Nov 2022 – March 2023',
    },
    {
      role: 'Computer Science Student',
      companylogo: require('../assets/img/uofa.png'),
      date: 'Mar 2020 – June 2023',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
