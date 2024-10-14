import { motion } from 'framer-motion';

const Home = () => {
  const variants = {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const transition = {
    duration: 0.8,
    ease: [0.65, 0, 0.35, 1], // Custom easing for smoothness
  };

  return (
    <section className="flex items-center h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/1454183218/vector/dark-abstract-blue-light-background-gradient-shapes-navy-blue-hexagon-mesh-pattern-decoration.jpg?s=612x612&w=0&k=20&c=PlAwDLbaCMBnh9zL5RZvQiUlBcEU4OlaUZ02BikQRxM="
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-lg" />
      </div>
      <div className="relative z-10 text-white text-left p-28">
        <motion.h1
          className="text-8xl font-bold"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition} // Apply the transition here
        >
          ANJALI KUMARI
        </motion.h1>
        <motion.p
          className="mt-4 text-xl leading-relaxed max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ...transition, delay: 1 }} // Apply the transition with a delay for the paragraph
        >
          I’m a passionate frontend developer eager to create engaging, user-friendly websites. Proficient in HTML, CSS, JavaScript, React, and Redux. I focus on building responsive interfaces that enhance the user experience. Always excited to learn and explore new technologies, I’m ready to turn ideas into reality!
        </motion.p>
      </div>
    </section>
  );
};

export default Home;
