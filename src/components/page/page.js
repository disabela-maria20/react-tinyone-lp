import React from 'react'
import './style.css'

import { FaTabletAlt } from "react-icons/fa";
import { FaRegLemon } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const Page = () => {
	return (
		<section className="page">
			<div className="container">
				<div className="title">
					<h2>Tinyone features</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
				</div>
				<div className="gridHome">
					<article className="item">
						<FaTabletAlt className="iconPage"/>
						<div className="flex-page">
							<h3>Fully Responsive</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
						</div>
					</article>
					<article className="item">
						<FaRegLemon className="iconPage"/>
						<div className="flex-page">
							<h3>Fully Layered PSD</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
						</div>
					</article>
					<article className="item">
						<FaRegFolder className="iconPage"/>	
						<div className="flex-page">
							<h3>Font Awesome Icons</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
						</div>
					</article>
					<article className="item">
						<FaCode className="iconPage"/>	
						<div className="flex-page">
							<h3>HTML3 & CSS3 </h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
						</div>
					</article>
					<article className="item">
						<FaRegEnvelope className="iconPage"/>
						<div className="flex-page">
							<h3>Email Template</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
						</div>
					</article>
					<article className="item">
						<FaRegBookmark className="iconPage"/>
						<div className="flex-page">
							<h3>Free to download</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
};
export default Page