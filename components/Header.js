import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/people">
      <a style={linkStyle}>People</a>
    </Link>
    <Link href="/planets">
      <a style={linkStyle}>Planets</a>
    </Link>
  </div>
);

export default Header;
