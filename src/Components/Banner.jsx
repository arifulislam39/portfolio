import { TypeAnimation } from "react-type-animation";
import resume from "../assets/Resume (23).pdf"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image from "../assets/image-removebg-preview.png";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center section"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
           
            <motion.h1
             variants={fadeIn('up', 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
             className="text-[55px] lg:text-[90px] font-bold leading-[0.8]">
              ARIFUL <span>ISLAM</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "DEVELOPER",
                  2000,
                  "DESIGNER",
                  2000,
                  "FULL STACK",
                  2000,
                  "MERN STACK"
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p  variants={fadeIn('up', 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">
              I am a highly motivated MERN stack developer, With  solid JavaScript foundation and passion for building dynamic web applications. Proficient in React, MongoDB, Express.js, and Node.js, With an unwavering commitment to continuous improvement, collaborative problem-solving, and delivering exceptional results.

            </motion.p>
            <motion.div  variants={fadeIn('up', 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0">
              <a className="btn btn-lg" href="#contact">Lets talk</a>
             
              <a className="btn btn-lg" href={resume} download>Download Resume</a>
             
            </motion.div>
            <motion.div  variants={fadeIn('up', 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://www.linkedin.com/in/ariful-islam-93aa38278/">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="https://github.com/arifulislam39">
                <FaGithubSquare />
              </a>
            </motion.div>
          </div>
          <motion.div  variants={fadeIn('down', 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="hidden flex-1 lg:flex max-w-[320px] lg:max-w-[482px] mx-auto">
            {/* image */}
            <img className="pic border-2 border-accent rounded-2xl" src={image} alt="#" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
