import { motion } from "framer-motion";
import Form from "../layouts/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  function contactSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact"
    >
      <Form onSubmit={contactSubmit}>
        <Input
          type="text"
          placeholder="Insira seu email para contato"
          autoComplete="off"
          style={{ marginTop: "1em" }}
        />

        <Button type="submit" style={{ marginTop: "1.5em" }}>
          Enviar
        </Button>
      </Form>
    </motion.div>
  );
}
