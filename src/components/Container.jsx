import React, { Component } from 'react';

export class Container extends Component {
    render() {
        return (
            <div className="pagina__conteudo-container">
                <main className="pagina__conteudo-principal">
                    <div className="container"></div>
                </main>
            </div>
        );
    }
}

export default Container;