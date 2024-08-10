import React from "react";

import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



//create your first component
const Home = () => {
	let titulos = [{ titulo: "Card title 1", descripcion: "Lorem1 ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam unde" }, { titulo: "Card title 2", descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam unde" }, { titulo: "Card title 3", descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam unde" }, { titulo: "Card title 4", descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam unde" }
	]

	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div className="row">
				{titulos.map((item, index) => (<Card key={index} titulo={item.titulo} descripcion={item.descripcion} />))}
				{/* <div className="col d-flex justify-content-center">
				<Card />
			</div>
			<div className="col d-flex justify-content-center">
				<Card />
			</div>
			<div className="col d-flex justify-content-center">
				<Card />
			</div> */}
			</div>

			<Footer />
		</div>
	);
};

export default Home;
