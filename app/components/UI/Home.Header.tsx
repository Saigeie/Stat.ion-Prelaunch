import AnalyticImg from "../../assets/Illistration.png";
import AOS from "aos"
import { useEffect } from "react";

export default function HeaderHome() {
  useEffect(() => {AOS.init()})
  return (
    <>
      <div className="whole" data-aos="fade-up">
        <div className="main">
          <div className="text">
            <h1 className="header">
              Easy To Use Links Page,{" "}
              <span className="underline">Incredibly</span> Efficient
            </h1>
            <h3 className="about">
              Store all your links in one customable and accessable place, easly
              see statistics on everything.
            </h3>
          </div>
          <div className="cta">
            <a href="/socials/discord" className="btn primary">
              Join The Discord!
            </a>
          </div>
        </div>
        <div className="image">
          <img src={AnalyticImg} alt="Analytic Illistration" />
        </div>
      </div>
    </>
  );
}
