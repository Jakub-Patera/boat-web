import { motion } from "framer-motion";
import { animationStart } from "./utils/animations";
import LeftMap from "../public/assets/map_1.png";
import RightMap from "../public/assets/map_2.png";
function MapImages() {
  return (
    <div className="absolute w-full flex justify-between transform -translate-y-200px -z-1 overflow-hidden">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: animationStart + 1, duration: 1 }}
        src={LeftMap}
      />
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: animationStart + 1.5, duration: 1 }}
        src={RightMap} alt=""
      />
    </div>
  );
}

export default MapImages;
