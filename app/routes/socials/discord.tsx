import { useEffect } from "react";
import { redirect } from "remix";
import GeneralCSS from "../../styles/general.css"
import Root from "../../styles/_abstract/root.css"
import PendingCSS from "../../styles/_pages/pending.css"
import AOS from "aos"
export default function Discord() {
  useEffect(() => {
     AOS.init()
  //   window.location.replace("https://discord.gg/eGKmuzekmZ");
   });
  return (
    <>
      <div className="main" data-aos="fade-up" >
        <h1 className="header">Coming Soon</h1>
      </div>
    </>
  );

  //  <h1 className="header">Redirecting you...</h1>
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
    },
    { rel: "stylesheet", href: GeneralCSS },
    { rel: "stylesheet", href: Root },
    { rel: "stylesheet", href: PendingCSS },
    { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
  ];
}