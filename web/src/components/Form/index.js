import React, { useState } from 'react';

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from 'reactstrap';

export default function DataForm() {
  const [budget, setBudget] = useState({
    name: '',
    email: '',
    whatsApp: '',
    msg: '',
  });

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  });

  const onChangeInput = event => 
    setBudget(
      { ...budget, [event.target.name]: event.target.value }
  );

  const sendBudget = async event => {
    event.preventDefault();

    setResponse({ formSave: true });

    try {
      const result = await fetch('http://localhost:3333/budget', {
        method: 'POST',
        body: JSON.stringify(budget),
        headers: {'Content-Type': 'application/json'}
      });

      const resultEnv = await result.json();

      // console.log(resultEnv);

      if (resultEnv.error) {
        setResponse({
          formSave: false,
          type: 'error',
          message: resultEnv.message
        });
      } else {
        setResponse({
          formSave: false,
          type: 'success',
          message: resultEnv.message
        });
      }
    } catch (error) {
      setResponse({
        formSave: false,
        type: 'error',
        message: 'Erro: Solicitação de orçamento não enviada com sucesso, tente mais tarde!'
      });
    }
  };
  
  return (
    <div>
      {
        response.type === 'error' 
          ? <Alert color="danger">{response.message}</Alert> 
          : ""
      }
      {
        response.type === 'success' 
          ? <Alert color="success">{response.message}</Alert> 
          : ""
      }
      <Form onSubmit={sendBudget}>
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Preencha com o nome completo"
            onChange={onChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Preencha com seu email"
            onChange={onChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <Label for="phone">Telefone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="(XX) XXXXX-XXXX"
            onChange={onChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <Label for="whatsApp">WhatsApp</Label>
          <Input
            type="text"
            name="whatsApp"
            id="whatsApp"
            placeholder="(XX) XXXXX-XXXX"
            onChange={onChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <Label for="msg">Conteúdo</Label>
          <Input
            type="textarea"
            name="msg"
            id="msg"
            placeholder="Fale um pouco do seu projeto"
            onChange={onChangeInput}
          />
        </FormGroup>

        {
          /* 
            Se o formSave for true vai aparecer o button escrito enviando...
            e o butto vai estar desabilitado para o usuário não clicar nele
            novamente.
            Se o formSave for false vai aparecer o button para ele clicar
          */
        }

        {
          response.formSave 
            ? <Button 
                type="submit" 
                outline 
                color="info"
                disabled
              >
                Enviando...
              </Button>
            : <Button type="submit" outline color="info">Enviar</Button>
        }
      </Form>
    </div>
  );
};