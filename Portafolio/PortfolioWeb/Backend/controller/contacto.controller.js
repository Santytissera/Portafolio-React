import nodemailer from 'nodemailer';

const EnviarMail = async (req, res) => {
  const { nombre, correo, asunto, mensaje } = req.body;

  try {
    // Configurar el transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: req.body.correo,
      to: process.env.EMAIL_USER,
      subject: req.body.asunto,
      text: req.body.mensaje + `  ${nombre} `,
    };

    // Enviar
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
};


export default {EnviarMail}