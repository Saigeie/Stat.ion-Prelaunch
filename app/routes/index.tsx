import buttons from "../styles/_abstract/buttons.css";
import root from "../styles/_abstract/root.css";
import Navbar from "~/components/UI/Navbar";
import navbarCSS from "../styles/_components/navbar.css";
import GeneralCSS from "../styles/general.css";
import { useEffect, useRef } from "react";
import HeaderHome from "~/components/UI/Home.Header";
import HeaderCSS from "../styles/_components/home.header.css"
import AOS from "aos";

export default function Index() {
  useEffect(() => {
    
    AOS.init();
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      navbar?.classList.toggle("navbarScroll", window.scrollY > 10);
    });
    const Menu = document.getElementById("BurgerButton");
    const LineOne = document.getElementById("LineOneBurger");
    const LineTwo = document.getElementById("LineTwoBurger");
    const NavItems = document.getElementById("navItems");
    Menu?.addEventListener("click", (e) => {
      e.preventDefault();
      LineOne?.classList.toggle("burgerActiveTOP");
      LineTwo?.classList.toggle("burgerActiveBOTTOM");
      NavItems?.classList.toggle("navitemsActive");
    });
  });
  return (
    <>
      <Navbar/>
      <HeaderHome data-aos="fade-up"/>
    </>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
    },
    { rel: "stylesheet", href: GeneralCSS },
    { rel: "stylesheet", href: navbarCSS },
    { rel: "stylesheet", href: buttons },
    { rel: "stylesheet", href: root },
    { rel: "stylesheet", href: HeaderCSS },
    { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
  ];
}
