import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-56 text-center flex flex-col ">
      {/* <div className="container mx-auto  flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up,0.2")}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What cLients <span className="text-accent">say.</span>
        </motion.h2>
      </div> */}
      <motion.div
        variants={fadeIn("up,0.4")}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  );
};

export default Testimonials;
