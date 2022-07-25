import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import MyInfo from "./pages/MyInfo";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getScrollY } from "./store";
import Skills from "./pages/Skills";
function App({ getScroll }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const skillRef = useRef(null)
  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onProjectClick = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onSkillClick = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleFollow = () => {
    getScroll(window.pageYOffset);
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  return (
    <>
      <Header
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onSkillClick={onSkillClick}
        onProjectClick={onProjectClick}
        onContactClick={onContactClick}
      />
      <Main ref={homeRef} onAboutClick={onAboutClick}/>
      <MyInfo ref={aboutRef} onAboutClick={onAboutClick} />
      <Skills ref={skillRef} onSkillClick={onSkillClick} />
      <Projects ref={projectRef} onProjectClick={onProjectClick} />
      <Contact ref={contactRef} onContactClick={onContactClick} />
      <Footer />
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getScroll: (data) => {
      dispatch(getScrollY(data));
    },
  };
}
export default connect(null, mapDispatchToProps)(App);
