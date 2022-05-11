import React, { Component } from 'react';

import { ReactComponent as IconHeart } from "./svg/heart.svg";
import { ReactComponent as IconFacebook } from "./svg/facebook.svg";
import { ReactComponent as IconInstagram } from "./svg/instagram.svg";
import { ReactComponent as IconYoutube } from "./svg/youtube.svg";
import { ReactComponent as IconMail } from "./svg/mail.svg";
import { ReactComponent as IconPhone } from "./svg/phone.svg";
import { ReactComponent as IconGeo } from "./svg/geo.svg";

import logo from "./img/logo.png";

import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container-flex'>
                    <div className='box-3'>
                        <img src={logo} alt="" />
                        <p>
                            Rápidos, oportunos y atentos. Así
                            somos en <b>Salinas</b> y por eso
                            somos la sensación del momento.
                        </p>

                        <div className='container'>
                            <ul>
                                <li>
                                    <a href="/">
                                        <IconFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <IconInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <IconYoutube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='box-3'>
                        <h2>Servicios</h2>
                        <p>
                            Cuando no tienes tiempo, nuestros servicios siempre
                            estarán disponibles para ti.
                        </p>
                        <ul>
                            <li>
                                <a href="/">
                                    - Encomiendas
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    - Domicilios
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='box-3'>
                        <h2>Contacto</h2>
                        <p>
                            Para obtener más información sobre nuestros servicios,
                            no olvides en ponerte en contacto con nosotros.

                            <br />
                            <br />

                            <span><IconPhone /></span> (+57) 312226838
                            
                            <br />
                            <br />

                            <span><IconMail /></span> joseluissalinas2001@gmail.com

                            <br />
                            <br />

                            <span><IconGeo /></span> La Dorada, Caldas, Colombia
                        </p>
                    </div>
                </div>
                <p className='box'>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved |  Salinas {<IconHeart />}
                </p>
            </footer>
        )
    }
}