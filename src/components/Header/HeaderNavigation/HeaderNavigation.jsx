import { Button } from "react-scroll";
import {
  ButtonNavLeft,
  ButtonNavRight,
  ButtonsNav,
  ItemNav,
  LinkItemNav,
  ListNav,
  Navigation,
} from "./HeaderNavigation.styled";

const HeaderNavigation = () => {
  const navItems = [
    { href: "/", text: "ABOUT", to: "About", icon: null },
    { href: "/tv", text: "SERVICES", to: "Servises", icon: null },
    { href: "/movies", text: "TECHNOLOGIES", to: "Technologies", icon: null },
    { href: "/series", text: "HOW TO", to: "How-to", icon: null },
  ];

  return (
    <Navigation>
      <ListNav>
        {navItems.map(({ href, text, to }) => (
          <ItemNav key={href}>
            <LinkItemNav
              activeClass="any"
              to={to}
              title={text}
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              {text}
            </LinkItemNav>
          </ItemNav>
        ))}
      </ListNav>
      <ButtonsNav>
        <ButtonNavLeft>CONTACT US</ButtonNavLeft>
        <ButtonNavRight>JOIN HYDRA</ButtonNavRight>
      </ButtonsNav>
    </Navigation>
  );
};

export default HeaderNavigation;
