import React from "react";

import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="container">
				<div className="row my-5 p-0">
					<div className="col pr-0">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>

			</div>

			<Footer />
		</div>
	);
};

export default Home;
