import weather from "../projectsImages/weather.png";
import reactcrud from "../projectsImages/reactcrud.png";
import webscrap from "../projectsImages/webscraping.png";
import passwordreset from "../projectsImages/password-reset.png";
import jobportal from "../projectsImages/jobportal.png";
import referlink from "../projectsImages/referlink.png";
import contactManager from "../projectsImages/contacManager.png";

var projects_store = [
  {
    name: "Weather App",
    image: weather,
    url: "https://shashidhar-weather-api.netlify.app",
    github: "https://github.com/shashi089/weather-api",
    catagory: ["html", "css"],
  },
  {
    name: "User Management",
    image: reactcrud,
    url: "https://shashidhar-react-crud-ui.netlify.app",
    github: "https://github.com/shashi089/react-crud-ui",
    catagory: ["react.js"],
  },

  {
    name: "Job Portal",
    image: jobportal,
    url: "https://shashidhar-mern-job-portal.netlify.app/",
    github: "https://github.com/shashi089/job-portal-frontend",
    catagory: ["fullstack"],
  },
  {
    name: "Contact Manager",
    image: contactManager,
    url: "https://mern-contact-manager.netlify.app",
    github: "hhttps://github.com/shashi089/mern-contact-manager-frontend",
    catagory: ["fullstack"],
  },
  {
    name: "Referral link",
    image: referlink,
    url: "https://referlink-mern.netlify.app/",
    github: "https://github.com/shashi089/referrallink-frontend",
    catagory: ["fullstack"],
  },
  {
    name: "Web-Scraping",
    image: webscrap,
    url: "https://infallible-mccarthy-ed4e97.netlify.app",
    github: "https://github.com/shashi089/webscraping-frontend",
    catagory: ["fullstack"],
  },
  {
    name: "Password Reset",
    image: passwordreset,
    url: "https://shashidhar-password-reset.netlify.app/",
    github: "https://github.com/shashi089/password-reset-frontend",
    catagory: ["fullstack"],
  },
];
export default projects_store;
