import { SvgLogo, SvgText, MainDiv } from "./Header.styled";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import Logo from "./Logo/Logo";


const Header = () => {
    return (<MainDiv><Logo/><HeaderNavigation/></MainDiv> );
}
 
export default Header;