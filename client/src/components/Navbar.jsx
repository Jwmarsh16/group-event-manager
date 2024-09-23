import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/groups">Groups</Link></li>
        <li><Link to="/events">Events</Link></li>
    </ul>
    
  )
}

export default Navbar