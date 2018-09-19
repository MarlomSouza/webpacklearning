import React, { Component } from 'react';
import { MenuLateral } from './MenuLateral';

export class Cabecalho extends Component {
    render() {
        return (
            
                <header class="cabecalho-sistema cabecalho-sistema_fixo">
                    <div class="cabecalho-sistema__container-primario">

                        <button class="botao-hamburguer" aria-label="Menu principal">
                            <span class="botao-hamburguer__linha-1"></span>
                            <span class="botao-hamburguer__linha-2"></span>
                            <span class="botao-hamburguer__linha-3"></span>
                        </button>

                        <a href="/">
                            <img class="cabecalho-sistema__logo" src="./imagens/adidas-logo-png-black-0.png" alt="Logo do sistema" />
                        </a>
                        <nav class="cabecalho-sistema__menu">
                            <a class="cabecalho-sistema__item-de-menu cabecalho-sistema__item-de-menu_ativo" href="#">Exemplo 1</a>
                            <a class="cabecalho-sistema__item-de-menu" href="#">Exemplo 2</a>
                            <a class="cabecalho-sistema__item-de-menu" href="#">Exemplo 3</a>
                        </nav>
                    </div>
                    <div class="cabecalho-sistema__container-secundario">
                        <nav class="cabecalho-sistema__menu">
                            <a href="#" class="cabecalho-sistema__item-de-menu">Suporte</a>

                            <button id="botao-abrir-menu-administrativo" href="#" class="cabecalho-sistema__item-de-menu">
                                <span class="cabecalho-sistema__icone-do-usuario">
                                    <i class="fal fa-user"></i>
                                </span>
                                Administrador
                    </button>

                            <div class="menu-administrativo">
                                <div class="menu-administrativo__lista">
                                    <div class="menu-administrativo__cabecalho">
                                        <span class="menu-administrativo__icone-do-usuario">
                                            <i class="fal fa-user"></i>
                                        </span>
                                        Administrador
                            </div>
                                    <ul class="menu-administrativo__lista-de-itens">
                                        <li class="menu-administrativo__item">
                                            <a href="#" class="menu-administrativo__botao-item">
                                                <i class="fal fa-exchange menu-administrativo__icone" aria-hidden="true"></i>
                                                Trocar senha</a>
                                        </li>
                                        <li class="menu-administrativo__item">
                                            <a href="#" class="menu-administrativo__botao-item">
                                                <i class="fal fa-sign-out menu-administrativo__icone"></i>
                                                Sair</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
        );
    }
}

export default Cabecalho;