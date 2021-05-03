import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Profile from "./profile/Profile";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
// import Talks from "./talks/Talks";
// import Projects from "./projects/Projects";
// import StartupProject from "./StartupProjects/StartupProject";
// import Blogs from "./blogs/Blogs";
// import Podcast from "./podcast/Podcast";
// import Twitter from "./twitter-embed/twitter";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };

    this.changeTheme = () => {
      this.setState({ isDark: !this.state.isDark }, () => {
        localStorage.setItem("isDark", this.state.isDark);
      });
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
  }

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <hr />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          {/* <Projects /> */}
          {/* <StartupProject /> */}
          <Achievement />
          {/* <Blogs /> */}
          {/* <Talks /> */}
          {/* <Twitter />
          <Podcast /> */}
          <Profile />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
