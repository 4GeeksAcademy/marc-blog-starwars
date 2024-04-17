import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Naves = () => {
    return(
        <div>
            <h1>Naves</h1>
                <div class="card" style={{width: "18rem"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/cartaindividual" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
        </div>
    )
}