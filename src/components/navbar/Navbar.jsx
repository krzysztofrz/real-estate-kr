import "./navbar.scss";
import { useState } from "react";
import CloseIconSVG from "./closeIcon";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	console.log(location);
	const [open, setOpen] = useState(false);
	const user = true;
	return (
		<nav>
			<div className="left">
				<a href="/" className="logo">
					<img src="/logo.png" alt="" />
					<span>Housing Agency</span>
				</a>
				<a href="/list">Properties</a>
				<a href="/profile">Agents</a>
				<a href="/1">About</a>
				<a href="/contact">Contact</a>
			</div>
			<div className="right">
				{user ? (
					location.pathname !== "/contact" ? (
						<div className="user">
							<img
								src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
							/>
							<span>Tomasz Nowakowski</span>
							<Link to="/profile" className="profile">
								<div className="notification">3</div>
								<span>Profile</span>
							</Link>
						</div>
					) : (
						<div className="rightContact"></div>
					)
				) : (
					<>
						{" "}
						<a href="/">Sign in</a>
						<a href="/" className="register">
							Sign up
						</a>
					</>
				)}
				<div className="menuIcon" onClick={() => setOpen(!open)}>
					{open ? <CloseIconSVG /> : <img src="/menu.png" alt="Menu" />}
				</div>
				<div className={open ? "menu active" : "menu"}>
					<a href="/">Home</a>
					<a href="/list">Properties</a>
					<a href="/profile">Agents</a>
					<a href="/1">About</a>
					<a href="/contact">Contact</a>
					<a href="/">Sign in</a>
					<a href="/">Sign up</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
