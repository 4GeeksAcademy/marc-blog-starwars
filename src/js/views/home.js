import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Personajes } from "../component/personajes.js";
import { Planetas } from "../component/planetas.js";
import { Naves } from "../component/naves.js";

export const Home = () => (
	<div className="text-center mt-5">
		<Personajes />
		<Planetas />
		<Naves />
	</div>
);
