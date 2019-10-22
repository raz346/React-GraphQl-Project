import Nav from './Nav';

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Slick-Fits</a>
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