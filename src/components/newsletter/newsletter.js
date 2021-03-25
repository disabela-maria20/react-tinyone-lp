import React from 'react'
import './style.css'


const Newsletter = () => {
	return (
		<section className="newsletter">
			<div className="container">
				<div className="titleNewsletter">
					<h2>Keep in touch with us</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
				</div>
				<form>
					<input type="text" className="form" placeholder="Enter your email to update"/>
					<button type="submit">submit</button>
				</form>
			</div>
		</section>
	)
};
export default Newsletter