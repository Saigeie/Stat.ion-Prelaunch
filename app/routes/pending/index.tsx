import ComingSoonCSS from "../../styles/_pages/pending.css"
import Root from "../../styles/_abstract/root.css"
import Buttons from "../../styles/_abstract/buttons.css"

import AOS from "aos";
import { useEffect } from "react";

export default function Pending() {
    useEffect(() => { AOS.init(); })
    return (
      <>
        <div className="main" data-aos="fade-up">
          <h1 className="header">This is coming soon...</h1>
          <a href="/" className="btn primary">Return Home</a>
        </div>
      </>
    );
}

export function links() {
    return [
      { rel: "stylesheet", href: Root },
      { rel: "stylesheet", href: Buttons },
      { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
      { rel: "stylesheet", href: ComingSoonCSS },
    ];
}