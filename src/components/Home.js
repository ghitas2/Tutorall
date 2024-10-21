
import '../App.css';
import './Home.css';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
    <div className='main-content'>
        <div className = 'middle'>
            <div className='message child'>
            <h1>Better grades</h1>
            <h1>at no cost</h1>
            <h1>literally!</h1>
            </div>
            <img src='../students.jpg' className='child mainImage' />
            </div>
            <div className="buttons">
            <Link to="/signup">
                <div className='button-1'>Sign up</div>
            </Link>
            <Link to="/login">
                <div className='button-2'>Log in</div>
            </Link>
            </div>
    </div>
    );
};