import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Personajes = (props) => {
	const {store, action} = useContext(Context);
	return (
		<>
			<div>
				<h1>Personajes</h1>
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{Personajes.name}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to="/cartaIndivual" className="btn btn-primary">Go somewhere</Link>
					</div>
				</div>
			</div>
		</>
	);
};