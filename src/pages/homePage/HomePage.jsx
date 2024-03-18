import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

export const HomePage = () => {
	return (
		<div className="homePage">
			<div className="textContainer">
				<div className="wrapper">
					<h1 className="title">
						Discover Property &amp; Acquire Your Ideal Space Discover Property
						&amp; Get Your Ideal Space
					</h1>
					<p>
						Discover the perfect space to call your own with our extensive
						property listings. Whether you&apos;re searching for a cozy
						apartment or a sprawling estate, we connect you with ideal real
						estate options to suit your dreams and lifestyle. Our user-friendly
						platform makes it simple to find and acquire your desired home or
						office space.
					</p>
					<SearchBar />
					<div className="boxes">
						<div className="box">
							<h1>16+</h1>
							<h2>Years of Experience</h2>
						</div>
						<div className="box">
							<h1>200</h1>
							<h2>Awards Gained </h2>
						</div>
						<div className="box">
							<h1>1200+</h1>
							<h2>Property Ready</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imgContainer">
				<img src="bg4.png" alt="" />
			</div>
		</div>
	);
};

export default HomePage;
