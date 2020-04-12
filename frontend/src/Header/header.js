import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-blue navbar-fixed bg-dark">
                {/*<a className="navbar-brand">Home</a>*/}
                <Link className="nav-link" to={"/"} style={{fontSize:20}}>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {/*<a className="nav-link">Cars</a>*/}
                            <Link className="nav-link" to={"/cars"} style={{fontSize:20}}>Cars</Link>
                        </li>
                        <li className="nav-item ">
                            {/*<a className="nav-link">Cities</a>*/}
                            <Link className="nav-link" to={"/cities"} style={{fontSize:20}}>Cities</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        {/*<a className="btn btn-outline-info my-2 my-sm-0" href="#">Login</a>*/}
                    </form>
                </div>
            </nav>
        </header>
    )
}
export default Header;