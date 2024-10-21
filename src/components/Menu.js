
import '../App.css';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
<div className='header'>
          <div className='logo'>
            <p>Tutorall</p>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/here">Here</Link></li>
            </ul>
          </nav>
        </div>
    );
};