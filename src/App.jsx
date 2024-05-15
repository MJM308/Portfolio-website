import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Photo from "./components/Photo/Photo";
import Skill from "./components/Skill/Skill";
import SkillLevel from "./components/SkillLevel/SkillLevel";
import Work from "./components/Work/Work";
// import { logo } from "../public/images/logo2.jpg";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skill></Skill>
      <Work></Work>
      <SkillLevel></SkillLevel>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
