import "./contact.scss";

const Contact = () => {
	return (
		<>
			<div className="contact">
				<div className="left">
					<h2>Contact Us</h2>
					<p>
						If you have any questions or need assistance, please reach out to
						us:
					</p>
					<div className="contact-form">
						<input type="text" placeholder="Your Name" />
						<input type="email" placeholder="Your Email" />
						<textarea placeholder="Your Message"></textarea>
						<button type="submit">Send Message</button>
					</div>
				</div>
				<div className="right"></div>
			</div>
		</>
	);
};

export default Contact;
