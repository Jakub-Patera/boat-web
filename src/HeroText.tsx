import Compas from "./Compas";
import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animations";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="text-3vw pt-30"
      >
        <h1 className=" tracking-wide leading-tight font-bold">
          Plujte virtuálním oceánem.
        </h1>
        <div className="flex justify-center ">
          
          <Compas />
        </div>
        <h3 className=" tracking-wide font-extralight mb-10 leading-tight">
          S VR headsetem <br /> ovládejte své lodě s jedinečnou přesností.
        </h3>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealVariant"
        transition={{ delay: animationStart + 1.5, duration: 0.5 }}
        className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/>2 text-14px leading-tight tracking-wide"
      >
        Naše VR služba revolučně změnila ovládání lodí na dálku. S VR headsetem
        můžete lodě ovládat intuitivními pohyby hlavy a gesty. Ideální pro
        výzkum, námořní dopravu a průmysl. Budoucnost námořního řízení je{" "}
        <span className="text-16px text-sky-600 justify-center mt-3px"></span>
        
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
