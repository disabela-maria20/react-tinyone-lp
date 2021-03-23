import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.svg'
const Header = () => {
  return (
    <header>
		<div className="container">
			<div className="flex-menu-mobile">
				<div className="logo">
					<img src={logo} alt="Logo" className="img-response"/>
					<span>tinyone</span>
				</div>
				<div className="menu-burger above-overlay">
					<div className="bar"></div>
				</div>
			</div>
			<nav className="menu">
				<ul>
					<li><a className="active">Features</a></li>
					<li><a>Support</a></li>
					<li><a>Blog</a></li>
				</ul>
			</nav>
		</div>
	</header>
  );
};
export default Header