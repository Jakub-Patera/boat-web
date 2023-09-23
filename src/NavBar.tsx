import ArrowRight from "./ArrowRight";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animations";

function NavBar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: animationStart, duration: 1 }}
        className="w-full flex justify-around items-center h-80px fixed top-0 bg-white z-100"
      >
        <motion.div initial={{x:-100, opacity:0 }} animate={{x:0, opacity:1}} transition={{ delay: animationStart+1.9, duration: 1 }}>
          
        <Logo />
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{
            ease: "easeIn",
            type: "tween",
            duration: 0.5,
            staggerChildren: 0.1,
            delayChildren: animationStart + 0.5,
          }}
          className="flex gap-20px item-center <md:hidden"
        >
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: animationStart, duration: 1 }}
            className="cursor-pointer"
          >
            solutions.
          </motion.span>
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: animationStart+0.5, duration: 1 }}
            className="cursor-pointer"
          > courses.</motion.span>
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: animationStart+1, duration: 1 }}
            className="cursor-pointer"
          > resources.</motion.span>
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: animationStart+1.5, duration: 1 }}
            className="cursor-pointer"
          > about.</motion.span>
        </motion.div>
        <motion.div initial={{x:100, opacity:0 }} animate={{x:0, opacity:1}} transition={{ delay: animationStart+1.9, duration: 1 }} className="flex gap-5 items-center cursor-pointer">
          <span className=" mb-3px">login / sign in</span>
          <ArrowRight />
        </motion.div>
      </motion.div>
    </>
  );
}

export default NavBar;
