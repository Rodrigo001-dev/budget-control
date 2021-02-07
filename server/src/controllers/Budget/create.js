const mongoose = require('mongoose');

require('../../models/Budget');
const Budget = mongoose.model('Budget');

const nodemailer = require('nodemailer');

async function create(request, response) {
  const email = request.body.email;
  const budgetExists = await Budget.findOne({ email });
  
  await Budget.create(request.body, (error) => {
    if (budgetExists) {
      return response.status(409).json({ message: 'O orçamento já existe' });
    };
    if (error) return response.status(400).json({ 
      message: 'Erro: solicitação de orçamento não enviado' 
    })
  });

  let transport = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD
    },
  });

  let emailHtml = 'Prezado(a) cliente<br><br>, Recebi a solicitação de orçamento.<br><br>Em breve será encaminhado o orçamento<br><br>';

  let emailText = 'Prezado(a) cliente,\n\nRecebi a solicitação de orçamento.\n\nEm breve será encaminhado o orçamento\n\n';

  let emailSendInfo = {
    from: process.env.MAILTRAP_FROM,
    to: request.body.email,
    subject: "Recebi a solicitação de orçamento",
    text: emailText,
    html: emailHtml,
  };

  await transport.sendMail(emailSendInfo, function(error) {
    if (error) return response.status(400).json({
      message: 'Erro: solicitação de orçamento não enviado'
    });

    return response.status(200).json({ data: request.body, message: 'Sucesso' });
  });
};

module.exports = create;