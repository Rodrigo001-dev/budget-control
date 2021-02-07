import React from 'react';

import {
  Container,
  Jumbotron,
} from 'reactstrap';

import NavBar from '../components/NavBar';
import Form from '../components/Form';

export default function Home() {
  return (
    <div>
      <NavBar />

      <Jumbotron className="pg-budget">
        <style>
          {`.pg-budget{
            background-color: #F5FBFA;
            color: #17A2B8;
            padding-top: 50px;
            padding-bottom: 100px;
            margin-bottom: 0rem !important;
          }`}
        </style>
        <Container>
          <h1 className="display-4 text-center">
            Nossos consultores estão prontos para lhe ajudar!
          </h1>
          <p className="lead text-center mb-4">
            Deixe seus contatos abaixo que retornaremos com uma proposta específica para sua necessidade.
          </p>

          <Form />
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="footer bg-info">
        <style>
          {`.footer{
            color: #FFF;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-bottom: 0rem !important
          }`}
        </style>
        <Container>
          <h1 className="lead text-center">@RAEL - BUDGET</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};