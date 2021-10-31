import Feedster from "assets/icons/Feedster.png";
import ECommerceBackendApp from "assets/icons/ECommerceBackendApp.gif";
import EmployeeContentManagementSystem from "assets/icons/EmployeeContentManagementSystem.gif";
import TeamProfileGenerator from "assets/icons/TeamProfileGenerator.gif";
import Professional_README from "assets/icons/Professional_README.gif";
import HexColorExample from "assets/icons/HexColorExample.png";
import ImFeelingApp from "assets/icons/ImFeelingApp.png";
import WorkDayScheduler from "assets/icons/WorkDayScheduler.png";
import CodeQuiz from "assets/icons/CodeQuiz.png";
import NoteTaker from "assets/icons/NoteTaker.png";
import ProfileIDCard from "assets/icons/ProfileIDCard.png";
import SimpleInterestCalculator from "assets/icons/SimpleInterestCalculator.png";
import TributePage from "assets/icons/TributePage.png";
import WeatherDashboard from "assets/icons/WeatherDashboard.png";
import PasswordGenerator from "assets/icons/PasswordGenerator.png";
import FitnessTracker from "assets/icons/FitnessTracker.png";
import RegexGist from "assets/icons/RegexGist.png";

import UpdatedPortfolio from "assets/icons/UpdatedPortfolio.png";
import DevelopersLifeInGifs from "assets/icons/DevelopersLifeInGifs.png";
import CSSPortfolio from "assets/icons/CSSPortfolio.png";
import LandingPage from "assets/icons/LandingPage.png";
import CandyCrush from "assets/icons/CandyCrush.png";
import GameInstructions from "assets/icons/GameInstructions.png";
// reference: https://www.youtube.com/watch?v=rVaqJCYcr8E&list=PLQKg8mIgoxKop9l92Zjd-Pmxkf-HQmclQ&index=8

// array of project specifics grouped as objects
const data_projects = [
  {
    name: "Squid Game",
    image: GameInstructions,
 
    deployed_url:
      "https://dionnenoellabarretto.github.io/SquidGame_3js/",
    github_url:
      "https://github.com/DionneNoellaBarretto/SquidGame_3js",
    // filtering logic
    category: ["three.js", "js", "html", "bootstrap", "css", "gsap", "game"],
  },
  {
    name: "Candy Crush",
    image: CandyCrush,
 
    deployed_url:
      "https://dionnenoellabarretto.github.io/CandyCrushGame/",
    github_url:
      "https://github.com/DionneNoellaBarretto/CandyCrushGame",
    // filtering logic
    category: ["react.js", "html", "bootstrap", "css", "game"],
  },
  {
    name: "React Portfolio",
    image: LandingPage,
 
    deployed_url:
      "https://dionnenoellabarretto.github.io/20_DNB_React_Portfolio/",
    github_url:
      "https://github.com/DionneNoellaBarretto/20_DNB_React_Portfolio",
    // filtering logic
    category: ["react.js", "html", "bootstrap", "css", "portfolio"],
  },
  {
    name: "Fitness Tracker",
    image: FitnessTracker,
    deployed_url: "https://calm-cove-09758.herokuapp.com/",
    github_url:
      "https://github.com/DionneNoellaBarretto/18-FitnessTracker_Mongo-NoSQL-_Mongoose_Express_FullStack",
    category: [
      "mongo",
      "fullstack",
      "heroku",
      "express.js",
      "mongoose",
      "nodemon",
    ],
  },

  {
    name: "Feedster -Project#2",
    image: Feedster,
    deployed_url: "https://feedster-twitter-feed.herokuapp.com/",
    github_url: "https://github.com/DionneNoellaBarretto/Feedster",
    category: [
      "fullstack",
      "project",
      "dotenv",
      "twitter",
      "http-errors",
      "node.js",
      "handlebar.js",
      "mysql2",
      "html",
      "css",
      "js",
      "bootstrap",
      "heroku",
      "npm",
      "express.js",
      "sequelize",
      "jest",
    ],
  },

  {
    name: "Regex Tutorial-Gist",
    image: RegexGist,
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["markdown"],
  },

  {
    name: "eCommerce App",
    image: ECommerceBackendApp,
    github_url:
      "https://github.com/DionneNoellaBarretto/13-ObjectRelationalMapping-eCommerceBackEnd_usingExpress.jsMySQLAndSequelize/blob/main/package.json",
    category: [
      "backend",
      "mysql2",
      "sequelize",
      "dotenv",
      "express.js",
      "node.js",
      "npm",
    ],
  },

  {
    name: "Employee CMS",
    image: EmployeeContentManagementSystem,
    github_url:
      "https://github.com/DionneNoellaBarretto/12-EmployeeContentManagementSystem_using_mysql-node.js",
    category: [
      "backend",
      "mysql2",
      "sequelize",
      "dotenv",
      "express.js",
      "node.js",
      "npm",
      "nodemon",
      "chalk.js",
      "console.table",
    ],
  },

  {
    name: "Profile Generator",
    image: TeamProfileGenerator,
    github_url:
      "https://github.com/DionneNoellaBarretto/10-ObjectOrientedProgramming_TeamProfileGenerator_Node.js_andJestUnitTests",
    category: ["backend", "jest", "node.js", "html", "css", "npm"],
  },

  {
    name: "Professional README",
    image: Professional_README,
    github_url:
      "https://github.com/DionneNoellaBarretto/09--Professional_ReadME_Node.Js",
    category: ["backend"],
  },
  {
    name: "Updated Portfolio",
    image: UpdatedPortfolio,

    deployed_url:
      "https://dionnenoellabarretto.github.io/DionneNoellaBarretto_Portfolio/",
    github_url:
      "https://github.com/DionneNoellaBarretto/DionneNoellaBarretto_Portfolio",
    category: ["php", "html", "bootstrap", "css", "js", "scss", "portfolio"],
  },

  {
    name: " Hex Code Generator",
    image: HexColorExample,
    deployed_url:
      "https://dionnenoellabarretto.github.io/RandomHexCodeColorGradientSelector/",
    github_url:
      "https://github.com/DionneNoellaBarretto/RandomHexCodeColorGradientSelector ",
    category: ["html", "css", "js"],
  },

  {
    name: "Note Taker",
    image: NoteTaker,
    deployed_url: "https://safe-brushlands-44448.herokuapp.com/",
    github_url:
      "https://github.com/DionneNoellaBarretto/11-NoteTaker_Heroku_Express.js-FrontEndandBackEndApp",
    category: ["fullstack", "html", "css", "express.js", "node.js", "heroku"],
  },
  {
    name: "Feeling App-Project#1",
    image: ImFeelingApp,
    deployed_url: "https://lbladma.github.io/Project1-Interactive-Web-APP/",
    github_url:
      "https://github.com/DionneNoellaBarretto/ImFeeling-Project1-Interactive-Web-APP",
    category: ["project", "html", "css", "js"],
  },
  {
    name: "Workday Scheduler",
    image: WorkDayScheduler,
    deployed_url:
      "https://dionnenoellabarretto.github.io/05-Hourly_Workday_Scheduler-using_jQuery/",
    github_url:
      "https://github.com/DionneNoellaBarretto/05-Hourly_Workday_Scheduler-using_jQuery",
    category: ["html", "css", "js", "jquery", "moment.js"],
  },
  {
    name: "Timed Code Quiz",
    image: CodeQuiz,
    deployed_url: "https://dionnenoellabarretto.github.io/04-CodeQuizApp_HW4/",
    github_url: "https://github.com/DionneNoellaBarretto/04-CodeQuizApp_HW4",
    category: ["html", "css", "js"],
  },
  {
    name: "Profile ID Card",
    image: ProfileIDCard,
    deployed_url: "https://dionnenoellabarretto.github.io/Profile_ID_Card/",
    github_url: "https://github.com/DionneNoellaBarretto/Profile_ID_Card",
    category: ["html", "css"],
  },
  {
    name: "Interest Calculator",
    image: SimpleInterestCalculator,
    deployed_url:
      "https://dionnenoellabarretto.github.io/Simple-Interest-Calculator/",
    github_url:
      "https://github.com/DionneNoellaBarretto/Simple-Interest-Calculator",
    category: ["html", "css", "js"],
  },
  {
    name: "CSS Portfolio",
    image: CSSPortfolio,
    deployed_url:
      "https://dionnenoellabarretto.github.io/02-Advanced-CSS-Portfolio/",
    github_url:
      "https://github.com/DionneNoellaBarretto/02-Advanced-CSS-Portfolio",
    category: ["html", "css", "js", "portfolio"],
  },
  {
    name: "Tribute Page",
    image: TributePage,
    deployed_url:
      "https://dionnenoellabarretto.github.io/FreeCodeCampTributePage_TimBernersLee/",
    github_url:
      "https://github.com/DionneNoellaBarretto/FreeCodeCampTributePage_TimBernersLee",
    category: ["html", "css"],
  },
  {
    name: "My Fav Gifs",
    image: DevelopersLifeInGifs,
    deployed_url:
      "https://dionnenoellabarretto.github.io/Developers-Life-Through-Gifs/",
    github_url:
      "https://github.com/DionneNoellaBarretto/Developers-Life-Through-Gifs",
    category: ["html", "css", "js"],
  },
  {
    name: "Weather Dashboard ",
    image: WeatherDashboard,
    deployed_url:
      "https://dionnenoellabarretto.github.io/06-Weather-Dashboard-API/",
    github_url:
      "https://github.com/DionneNoellaBarretto/06-Weather-Dashboard-API",
    category: ["html", "css", "js", "api"],
  },
  {
    name: "Password Generator",
    image: PasswordGenerator,
    deployed_url:
      "https://dionnenoellabarretto.github.io/03--PasswordGenerator_JavaScript/",
    github_url:
      "https://github.com/DionneNoellaBarretto/03--PasswordGenerator_JavaScript",
    category: ["html", "css", "js"],
  },
];

export default data_projects;
