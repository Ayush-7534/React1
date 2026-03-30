import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav>
            <Link to="/Header"> Header </Link>
            <Link to="/About"> About </Link>
            <Link to="/Footer"> Footer </Link>
        </nav>
    )
}
export default Navbar;