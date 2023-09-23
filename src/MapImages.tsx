import { motion } from "framer-motion";
import { animationStart } from "./utils/animations";
function MapImages() {
  return (
    <div className="absolute w-full flex justify-between transform -translate-y-200px -z-1 overflow-hidden">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: animationStart + 1, duration: 1 }}
        src="../src/assets/map_1.png"
      />
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: animationStart + 1.5, duration: 1 }}
        src="../src/assets/map_2.png"
      />
    </div>
  );
}

export default MapImages;
