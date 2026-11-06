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
  message: "A Software Engineer, from Adelaide Australia",
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
      image: "fa-app-store-ios",
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
  imageSize: 175,
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
  heading: "Projects",
  gitHubUsername: "ben-wheeler", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: [],
  bookEndUrl: "https://apps.apple.com/au/app/book-end-reading-tracker/id6447303933",
  bookEndId: "6447303933",
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
  heading: "Experiences",
  data: [
        {
      role: 'Software Engineer',
      company: "Qantas",
      companylogo: require('../assets/img/qantas.png'),
      date: 'October 2026 - Present'
    },
    {
      role: 'Software Engineer',
      company: "Fivecast",
      companylogo: require('../assets/img/fivecast.png'),
      date: 'July 2023 - October 2026'
    },
    {
      role: 'Software Engineer Intern',
      company: "Maptek",
      companylogo: require('../assets/img/maptek.png'),
      date: 'Summer 2022-23',
    },
    {
      role: 'Bachelor of Computer Science',
      company: "University of Adelaide",
      companylogo: require('../assets/img/uofa.png'),
      date: '2020 – 2023',
    },
  ]
}

export { navBar, mainBody, about, repos, getInTouch, experiences };
