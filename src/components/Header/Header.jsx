import "./Header.css";
import Logo from "./Logo/Logo";
import User from "./User/User";

const Header = () => {
  return (
    <header>
      <Logo />
      <User userName="John Doe" />
    </header>
  );
};

export default Header;
