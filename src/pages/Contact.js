import React, { useContext } from "react";
import { MessageContext } from "../MessageContext";
import ContactForm from "./ContactForm";
import Card from "react-bootstrap/Card";
// import { Row, Col } from "react-bootstrap";

const Contact = () => {
  const { messages, addMessage } = useContext(MessageContext);

  const handleSendMessage = (message) => {
    addMessage(message);
  };

  return (
    <section className="content d-flex justify-content-center align-items-center">
      <div className="row mb-2">
        <div className="col-md-6">
          <Card body style={{ width: "20rem" }} className="mx-auto">
            <div>
              <h1>Kontak Kami</h1>
              <ContactForm onSendMessage={handleSendMessage} />
            </div>
          </Card>
        </div>
        <div className="col-md-6">
          <Card body style={{ width: "20rem" }} className="mx-auto">
            <div>
              <h3>Pesan yang Terkirim</h3>
              <ul>
                {messages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
