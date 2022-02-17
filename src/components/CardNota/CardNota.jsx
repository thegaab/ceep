import React, { Component } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg";
class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <p className="card-nota_texto">{this.props.texto}</p>
          <img src={deleteSVG} onClick={this.apagar.bind(this)} />
        </header>
        <h3 className="card-nota_titulo">{this.props.titulo} </h3>
      </section>
    );
  }
}

export default CardNota;
