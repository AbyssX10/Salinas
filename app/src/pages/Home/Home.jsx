import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container banner">
                    <div className='box-5' style={{ paddingTop: "10%" }}>
                        <span>Expertos en Servicios de Entrega</span>
                        <h1>Nuestro Destino es tu Confianza</h1>
                        <p>
                            Construimos estrategias efectivas para ayudarte
                            con todo tipo de entrega.
                        </p>
                        <NavLink to="/servicios">
                            Explorar Servicios
                        </NavLink>
                    </div>
                </div>
                <div className='container'>
                    <h2>Nuestros Servicios</h2>
                    <div className='container-grid-3'>
                        <div className='box'>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}