import InfoHeader from "../components/InfoHeader";
import IntroduceMain from "../Introduce/IntroduceMain";
import Myself from "../Introduce/Myself";
import { connect } from "react-redux";
import { getScrollY } from "../store";
import { useEffect } from "react";
import Career from "../Introduce/Career";
import PairReview from "../Introduce/PairReview";
function Introduce({ getScroll }) {
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
      <InfoHeader />
      <IntroduceMain />
      <Myself />
      <Career />
      <PairReview />
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

export default connect(null, mapDispatchToProps)(Introduce);
