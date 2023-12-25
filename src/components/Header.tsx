import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className='sticky top-0 z-[100] flex h-20 items-center border-b bg-white'>
      <div className='container flex items-center justify-between gap-5'>
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
