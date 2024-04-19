import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas"
import { Naves } from "../component/naves"
import { useContext } from "react";



export const Home = () => {
	const {store, action} = useContext(Context);

	return(
	<div className="text-center mt-5">
		{store.Personajes.map((personaje, index)=>{
			return <Personajes key={index} personaje={personaje}/>
		})}
		
		<Planetas/>
		<Naves/>
	</div>
	)
};
