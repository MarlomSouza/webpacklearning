import React, { Component } from 'react';
import { Cabecalho } from './components/Cabecalho';
import { MenuLateral } from './components/MenuLateral';
import { Container } from './components/container';

export class Pagina extends Component {
    render() {
        return (
            <div className="pagina">
                <Cabecalho />
                <MenuLateral />
                <Container />
            </div>
        );
    }
}

export default Pagina;