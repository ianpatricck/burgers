import { motion } from "framer-motion";
import Form from "../layouts/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Enter() {
  const navigate = useNavigate();

  function loginSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="enter"
    >
      <Form onSubmit={loginSubmit}>
        <Input
          type="text"
          placeholder="Email"
          autoComplete="off"
          style={{ marginTop: "1em" }}
        />
        <Input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          style={{ marginTop: "1em" }}
        />
        <Button type="submit" style={{ marginTop: "1.5em" }}>
          Entrar
        </Button>
      </Form>
    </motion.div>
  );
}
