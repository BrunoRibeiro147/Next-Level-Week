import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu Marketplace de coleta de Resíduos</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente
          </p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de Coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
