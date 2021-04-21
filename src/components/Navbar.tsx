import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    
    return(
        
            <nav className="navbar navbar-expand-lg bg-warning">
                <Link className="navbar navbar-brand text-dark" to="/">Pokedex</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav">
                        <Link className="nav-link" to='/'>Pokedex</Link>
                        
                    </div>
                </div>
        
            </nav>
    );
};

export default NavBar;