"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
    >
      <TypingText title="| About Section |" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, reiciendis deserunt! Accusamus iure rerum enim vitae odio obcaecati facilis possimus expedita libero illo consequatur beatae, officiis amet veritatis nesciunt vel.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis, quod veritatis incidunt officiis, excepturi ab optio qui tempore assumenda voluptatibus inventore dignissimos dolor hic aliquid quos, sapiente perferendis dolorum!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
