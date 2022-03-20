import Root from "../../styles/_abstract/root.css";
import Buttons from "../../styles/_abstract/buttons.css";
import FAQCSS from "../../styles/_pages/faq.css";
import { useEffect } from "react";
import AOS from "aos";

export default function Faq() {
    useEffect(() => {
        AOS.init();
        const question = document.getElementById("question")
        //@ts-ignore
        for (let i = 0; i < question?.childNodes.length; i++) {
          //@ts-ignore
          const childId = question?.childNodes[i].id;
          const questionNum = document.getElementById(childId);
          questionNum?.addEventListener("click", (e) => {
            questionNum.classList.toggle("fullyExtended");
          });
         
        }
    })
  return (
    <>
      <div className="main" data-aos="fade-up">
        <div className="header">
          <h1 className="header">FAQ</h1>
        </div>
        <div className="questions" id="question">
          <div className="question" id="question1">
            <div className="questionHeader" id="questionHeader">
              <h1>When Will this be released?</h1>
              <i className="bx bxs-down-arrow" id="arrow-down1"></i>
            </div>
            <div className="questionAnwser">
              <p>
                As for now we do not have a desinated date for when we plan on
                releasing <span className="brand">stat.ion</span>.
              </p>
            </div>
          </div>

          <div className="question" id="question2">
            <div className="questionHeader">
              <h1>
                What exaclty is <span className="brand">stat.ion</span>?
              </h1>
              <i className="bx bxs-down-arrow" id="arrow-down2"></i>
            </div>
            <div className="questionAnwser">
              <p>
                <span className="brand">stat.ion</span> is a place for you to
                put all of your links, with the accessibility to see{" "}
                <span className="brand">stat</span>istics on each of these links
                aswell as profile views etc.
              </p>
            </div>
                  </div>
                  
          <div className="question" id="question3">
            <div className="questionHeader">
              <h1>
                How do i gain beta access?
              </h1>
              <i className="bx bxs-down-arrow" id="arrow-down2"></i>
            </div>
            <div className="questionAnwser">
              <p>
               To gain beta access to <span className="brand">stat.ion</span>, you must <a href="/socials/discord" className="link">join the discord</a>. Once there you can apply, and possibly get accepted. Other than that you can win giveaways to gain access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: Root },
    { rel: "stylesheet", href: Buttons },
    { rel: "stylesheet", href: FAQCSS },
    { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
    },
  ];
}
