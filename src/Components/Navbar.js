import Logo from '../Images/Logo.png'

function Navbar(){
  return(
    <div className="navbar">
      <img src={Logo} ></img>
      <span>my travel journal.</span>
    </div>
  );
}
export default Navbar;