import nodemailer from 'nodemailer';

export const enviarEmailRecuperacao = async (email) => {
  // Configure o transporte de email usando nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Recuperação de Senha',
    text: 'Aqui estão as instruções para recuperação de senha...'
  };

  await transporter.sendMail(mailOptions);
};
