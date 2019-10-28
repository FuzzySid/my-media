import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar=(props)=> {
    // setTimeout(()=>{
    //     props.history.push('/comments');
    // },2000)
    return (
       
        <nav>
            <div className="nav-wrapper #82b1ff blue accent-1 row">
            <ul className="right hide-on-med-and-down container">
                <li><NavLink exact={true} to="/">Home</NavLink></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/comments">Comments</Link></li>
                <li><Link to="/photos">Photos</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
            </div>
     </nav>
        
    )
}

export default Navbar;