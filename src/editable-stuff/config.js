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
  message: "An Adelaide based Software Engineer",
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
      image: "fa-app-store",
      url: "https://apps.apple.com/au/app/book-end-reading-tracker/id6447303933"
    },
    {
      image: "fa-envelope",
      url: "mailto:benjamindwheeler@gmail.com",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/benwheeler.png"),
  imageSize: 375,
  message: `Hey! I'm Ben, an Adelaide based Software Engineer with a Bachelor of Computer Science Degree, with a major in Cybersecurity.

  I am passionate about technology, programming, and challenging myself. I hope that I can make a difference in the real world through creating useful software.

  I've got over three years of industry experience in Java, TypeScript, C++, and Python.

  In my spare time, I've also been working on my reading habit tracker app Book End — a reading tracker that I've published to the Apple App Store, that I continuously work towards improving and adding new features.`,
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent GitHub Activity",
  gitHubUsername: "ben-wheeler", //i.e."johnDoe12Gh"
  reposLength: 4,
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
    "I welcome any opportunities! If you wish to get in contact please feel free to contact me email at",
  email: "benjamindwheeler@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Graduate Software Engineer',
      company: "Fivecast",
      companylogo: require('../assets/img/current.png'),
      date: 'July 2023 - Present'
    },
    {
      role: 'Hobby iOS Developer: Book End',
      company: "BookEnd",
      companylogo: require('../assets/img/BookEndIcon.png'),
      date: 'March 2023 - Present'
    },
    {
      role: 'Software Engineer Intern',
      company: "Maptek",
      companylogo: require('../assets/img/maptek.png'),
      date: 'Nov 2022 – March 2023',
    },
    {
      role: 'Bachelor of Computer Science',
      company: "University of Adelaide",
      companylogo: require('../assets/img/uofa.png'),
      date: 'Mar 2020 – June 2023',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
