import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin, FaPython, FaAndroid,FaGithub } from "react-icons/fa";
import { DiJavascript,DiSqllite } from "react-icons/di";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  {
    id: 1,
    icon: <FaGithub />,
    links: "https://github.com/adilmir21"
  },
  {
    id: 2,
    icon: <FaInstagram />,
    links: "https://www.instagram.com/adilmir_20/"
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    links: "https://www.linkedin.com/in/adil-mir-087251204/"
  }
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Adil Mir"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+923204883958"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "miradil16.75@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaAndroid />, <FaReact />, <FaNodeJs />, <DiSqllite />, <FaPython />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Chatify",
    company: "Web Based Chatting App - MERN "
  },
  {
    di: 2,
    year: "2022",
    position: "Vidify",
    company: "Calling Android App"
  },
  {
    id: 3,
    year: "2021",
    position: "VIM Text Editor",
    company: "Java/JavaFx Application "
  },
  {
    id: 4,
    year: "2022*",
    position: "Be My Voice",
    company: "PSL Sign Language Interpreter Android App"
  }
]
export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "999+",
    itemName: "Codes Developed"
  },
  {
    id: 3,
    number: "3+",
    itemName: "CGPA"
  },
  {
    id: 4,
    number: "7",
    itemName: "Semesters Cleared"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work3,
    name: "project 3",
    category: "design"
  },
  {
    id: 3,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 4,
    img: work5,
    name: "project 5",
    category: 'design'
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "DHA Phase 7, Lahore"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "miradil16.75@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+92 320 4883958"
  }
]
