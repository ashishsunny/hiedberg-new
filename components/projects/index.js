import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Cards from '../../data/data.projects'
import VideoPlayer from '../../components/video-player'

const Projects = () => {
  return (
    <div className="bg-[#1F3E76]">
      <div className="flex h-48 items-center justify-center">
        <span className="font-normal text-5xl" style={{color: "#f8f9fa"}}>
          Our Projects
        </span>
      </div>
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {Cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(/assets/images/${card.url}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-normal font-black  backdrop-blur-xl" style={{color: card.style === "dark" ? "#353535" : "#f8f9fa"}}>
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Projects;

