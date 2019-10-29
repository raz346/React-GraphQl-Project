import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.black};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
const Header = () => (
  <div>
    <div className="bar">
      <h1>
        <Logo>
          <Link href="/">
            <a>Slick Moda</a>
          </Link>
        </Logo>
      </h1>
      <nav>
        <Nav />
      </nav>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);
export default Header;