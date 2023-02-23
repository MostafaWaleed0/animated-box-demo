import { motion } from "framer-motion";

const boxVariants = {
  initial: { opacity: 0, y: "-100vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  tap: {
    scale: 0.8,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const Box = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
    </div>
  );
};

export default Box;
