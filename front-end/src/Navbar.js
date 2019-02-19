import React from 'react'
export default()=>{
    return(
        <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper center container"><a id="logo-container" href="#" className="brand-logo">Todo React Express</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
                <ul id="nav-mobile" className="side-nav">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse left"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    )
}