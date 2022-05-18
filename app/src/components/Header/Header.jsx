import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from "jquery";

import { ReactComponent as IconList } from "./svg/list.svg";

import logo from "./img/logo3.png";

import "./Header.css";

$(document).ready(() => {
    $(window).scroll(() => {
        var scroll = $(window).scrollTop();

        if (scroll > $(".sidebar").height()) {
            $(".sidebar").addClass("sidebar-sticky");
        } else if (scroll < $(".sidebar").height()) {
            $(".sidebar").removeClass("sidebar-sticky");
        }
    });
});

function openMenu(){
    $(".menu").toggleClass("menu-in");
}

export default class Header extends Component {
    render() {
        return (
            <header className='sidebar'>
                <img src={logo} alt="Logo Salinas" />

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" className={({ isActive }) => isActive ? "active" : ""}>
                                Nosotros
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicios" className={({ isActive }) => isActive ? "active" : ""}>
                                Servicios
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <button type='button' onClick={openMenu}>
                    <IconList />
                </button>
            </header>
        )
    }
}