import Link from 'next/link';

const Header = () => {
  return (
    <header>
      {/* Replace <a> with <Link> */}
      <Link href="/">
        Home
      </Link>
      <nav>
        <Link href="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
