import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";

import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container" style={{paddingRight: "0"}}>
                    <img className='img1' src={img1} alt="" />
                    <div className='box-5' style={{ paddingTop: "10%" }}>
                        <span>Expertos en Tramites</span>
                        <h1>Nuestro Destino es tu Confianza</h1>
                        <p>
                            Construimos estrategias efectivas para ayudarte
                            con todo tipo de tramite.
                        </p>
                        <NavLink to="/servicios">
                            Explorar Servicios
                        </NavLink>
                    </div>
                </div>
                <div className='container'>
                    <h2>Nuestros Servicios</h2>
                    <div className='grid-col-3'>
                        <div className='box box-info'>
                            <h2>Descubre, explora todos nuestros planes</h2>
                        </div>
                    </div>
                </div>
                <div className='container banner2'>
                    <img className='img2' src={img2} alt="" />
                    <div className='box-5 box-right'>
                        <h3>Nosotros</h3>
                        <h2>Creamos Estrategias para Servicios de Trámites con EPS</h2>
                        <p>
                            Estamos dispuestos a crear espacios con propósitos que
                            equilibren la eficiencia y estrategia para que nuestros
                            clientes se sientan satisfechos con sus tramites, sin
                            de salir de casa.
                        </p>
                        <NavLink to="/nosotros">
                            Saber más
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }
}