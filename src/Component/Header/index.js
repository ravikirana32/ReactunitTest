import React from 'react';
import './Header.scss';
import Logo from '../../Assets/logo.svg';

const Header = (props) => {
    return (
        <header className="headerComponent" data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" src={Logo} alt="Logo" data-test="logoIMG"/>
                </div>
            </div>
        </header>
    )
};

export default Header;
