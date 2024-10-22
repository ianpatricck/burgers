import { motion } from "framer-motion";

export default function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Menu!</h1>
    </motion.div>
  );
}
