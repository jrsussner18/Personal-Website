import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Logo from './Logo';

function Header() {
    return (
      <div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-around items-center h-[17vh]">
          <Logo />
          <DesktopNav />
        </nav>
        {/* Mobile Navigation */}
        <nav className="flex justify-between md:hidden p-4">
          <Logo />
          <MobileNav />
        </nav>
      </div>
    );
}

export default Header;