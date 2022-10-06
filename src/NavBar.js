import React from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
    render() {
        return(
            <>
                <div className="navigation">
                    <div className="navigation-sub">
                    <Link to="/home" className="item">Home</Link>
                    <Link to="/about" className="item">About</Link>
                    </div>
                </div>
            </>
        )
    }
}