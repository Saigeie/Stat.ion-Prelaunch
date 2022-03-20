import { useRef } from "react";

export default function Navbar() {

  return (
    <>
      <div className="navbar">
        <div className="menu">
          <div className="burger" id="BurgerButton">
            <div className="burgerLine" id="LineOneBurger"></div>
            <div className="burgerLine" id="LineTwoBurger"></div>
          </div>
        </div>
      </div>
      <div className="navitems" id="navItems">
        <ul>
          <li className="navitem">
            <a href="/faq">FAQ</a>
          </li>
          <li className="navitem">
            <a href="/pending">Beta Testers</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export function links() {
  return [];
}
