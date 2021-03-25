import React from 'react'
import Newsletter from '../newsletter/newsletter';

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import './style.css'


const Footer = () => {
	return (
		<footer>
			<Newsletter/>
			<section className="rodape">
				<div className="container">
					<ul className="redesSociais">
						<li> <FaFacebookSquare className="iconFooter"/></li>
						<li> <FaTwitterSquare className="iconFooter"/></li>
						<li> <FaGooglePlusSquare className="iconFooter"/></li>
						<li> <FaPinterestSquare className="iconFooter"/></li>
					</ul>
					<div className="gridFooter">
						<ul className="itemFooter">
							<li>HALOVIETNAM LTD</li>
							<li>66, Dang Van ngu, Dong Da <br/> Hanoi, Vietnam</li>
							<li><a href="mailto:contact@halovietnam.com">contact@halovietnam.com</a></li>
							<li><a href="tel:+844 35149182">+844 35149182</a></li>
						</ul>
						<ul className="itemFooter">
							<li>Examples</li>
							<li>Shop</li>
							<li>License</li>
						</ul>
						<ul className="itemFooter">
							<li>Contact</li>
							<li>About</li>
							<li>Privacy</li>
							<li>Terms</li>
						</ul>
						<ul className="itemFooter">
							<li>Download</li>
							<li>Support</li>
							<li>Documents</li>
						</ul>
						<ul className="itemFooter">
							<li>Media</li>
							<li>Blog</li>
							<li>Forums</li>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	)
};
export default Footer