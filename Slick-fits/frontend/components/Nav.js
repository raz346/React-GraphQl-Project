import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/sell">
      <a>sell</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </NavStyles>
);

export default Nav;
