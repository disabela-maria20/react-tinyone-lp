import React from 'react'
import './style.css'
import ipad from '../../assets/images/iPad-Mini.svg'
import { FaApple } from 'react-icons/fa'
import { DiAndroid } from "react-icons/di";
import { DiWindows } from 'react-icons/di'
const Home = () => {
	return (
		<section className="home">
			<div className="container">
				<div className="flex-home">
					<article>
						<img src={ipad} alt="ipad" className="img-response" />
					</article>
					<article>
						<h2>Inspire your inspiration</h2>
						<h4>Simple to use for your app, products <br/> showcase and your inspiration</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit </p>
						<ul>
							<li><FaApple className="icon"/></li>
							<li><DiAndroid className="icon"/></li>
							<li><DiWindows className="icon"/></li>
						</ul>
					</article>
				</div>
			</div>
		</section>
  	);
};
export default Home