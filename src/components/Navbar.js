import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import Logo from "../assets/Logo.svg";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (size.width > 768 && menuOpen) {
        setMenuOpen(false);
      }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
      setMenuOpen((p) => !p);
    };

    return (
      <header className="header">
        <div className="header__content">

          <div className="nav__logo">
            <img src={Logo} alt="LOGO" className="header__content__icon"/>
            <Link Link to="/" className="header__content__logo">
              LOGO
            </Link>
          </div>

          <nav className={`${"header__content__nav"} ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} }`} >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Page1">Page 1</Link>
              </li>
              <li>
                <Link to="/Page2">Page 2</Link>
              </li>
            </ul>
          </nav>

          <div className="header__content__toggle">
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
    );
}

export default Navbar;
