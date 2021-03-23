import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.svg'

const Header = () => {
	const Features = null
	const Support = null
	const Blog = null

	const [abrir, setAbrir] = React.useState("false")
	function Abrir() {
		setAbrir(!abrir);
	}
	
	return (
    <header>
		<div className="container">
			<div className="header">
				<div className="flex-menu-mobile">
					<div className="logo">
						<img src={logo} alt="Logo" className="img-response"/>
						<span>tinyone</span>
					</div>
					<div className="menu-burger above-overlay" onClick={Abrir}>
						<div className={abrir ? "bar" : "bar animate"}></div>
					</div>
				</div>
				<nav className={abrir ? "menu" : "menu active"}>
					<ul>
						<li><a href={Features} className="active">Features</a></li>
						<li><a href={Support}>Support</a></li>
						<li><a href={Blog}>Blog</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
  );
};
export default Header