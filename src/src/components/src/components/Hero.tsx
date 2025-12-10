import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Calie Donnelly
        </h1>
        <p className="text-2xl md:text-4xl mt-6 text-gray-300">
          Senior UI/UX Designer & Frontend Engineer
        </p>
        <p className="text-xl mt-8 text-gray-400 max-w-2xl mx-auto">
          I design intuitive digital experiences that feel like magic — then build them with pixel-perfect code.
        </p>
      </motion.div>
    </section>
  );
}
