import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-8 bg-gradient-to-r from-purple-300 via-pink-200 to-blue-200">
      <motion.h1
        className="text-5xl md:text-5xl font-extrabold text-gray-900 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to React Stepwise Playground
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-800 max-w-2xl text-center leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Explore interactive stepper components with multiple styles and
        behaviors. Perfect for learning or testing stepper implementations in
        your React projects.
      </motion.p>

      <motion.button
        onClick={() => navigate("/usage")}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        className=" px-10 py-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg text-blue-800 font-semibold hover:bg-white/40 transition duration-300"
      >
        Documentation & Usage
      </motion.button>
    </div>
  );
}

export default Home;
