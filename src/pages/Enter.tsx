import { motion } from "framer-motion";

export default function Enter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Entrar!</h1>
    </motion.div>
  );
}
