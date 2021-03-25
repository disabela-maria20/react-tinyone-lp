import React from 'react'
import './style.css'


const Newsletter = () => {
	return (
		<section className="newsletter">
			<div className="container">
				<div className="centerNewsletter">
					<div className="titleNewsletter">
						<h2>Keep in touch with us</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
					</div>
					<form className="formNewsletter">
						<input type="text" className="formInput" placeholder="Enter your email to update"/>
						<button type="submit">submit</button>
					</form>
				</div>	
			</div>
		</section>
	)
};
export default Newsletter