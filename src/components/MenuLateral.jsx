import React, { Component } from 'react';

export class MenuLateral extends Component {
    render() {
        return (

            <nav className="menu-lateral menu-lateral_fixo menu-lateral_minimizado">
                <ul className="menu-lateral__lista">

                    <li class="menu-lateral__item">
                        <a href="#" className="menu-lateral__link" title="Item 1">
                            <span class="fal fa-filter menu-lateral__icone"></span>
                            <span class="menu-lateral__texto">Item 1</span>
                        </a>
                    </li>

                    <li class="menu-lateral__item">
                        <a href="#" className="menu-lateral__link menu-lateral__link_ativo" title="Item 2">
                            <span className="fal fa-map menu-lateral__icone"></span>
                            <span className="menu-lateral__texto">Item 2</span>
                        </a>
                    </li>

                    <li class="menu-lateral__item">
                        <a href="#" className="menu-lateral__link" title="Item 3">
                            <span className="fal fa-eye menu-lateral__icone"></span>
                            <span className="menu-lateral__texto">Item 3</span>
                        </a>
                    </li>

                    <li class="menu-lateral__item">
                        <a href="#" className="menu-lateral__link" title="Item 4">
                            <span className="fal fa-gem menu-lateral__icone"></span>
                            <span className="menu-lateral__texto">Item 4</span>
                        </a>
                    </li>

                    <li class="menu-lateral__item">
                        <a href="#" className="menu-lateral__link" title="Item 5">
                            <span className="fal fa-hand-spock menu-lateral__icone"></span>
                            <span className="menu-lateral__texto">Remodelador de relatórios constitucionais especiais</span>
                        </a>
                    </li>

                    <li class="menu-lateral__item">
                        <a href="#" className="menu-lateral__link" title="Item 6">
                            <span className="fal fa-images menu-lateral__icone"></span>
                            <span className="menu-lateral__texto">Item 6</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MenuLateral;