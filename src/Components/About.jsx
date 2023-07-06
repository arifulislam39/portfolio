import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CountUp from "react-countup";
import img from "../assets/1685371263626-removebg-preview.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section my-40" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0  h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 h-[640px] mix-blend-lighten bg-top"
          >
            <img src={img} alt="" />
            {/* img */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 mt-32"
          >
            {/* text */}
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">Web Developer</h3>
            <p className="mb-6">
              Hi there! <br /> I am <span className="text-accent text-2xl font-bold">Ariful Islam</span>.I am from Chittagong. I am pursuing
              Diploma in computer technology at Chittagong Polytechnic
              Institute. <br /> In terms of technical skills, I am proficient in HTML,
              CSS, and Tailwind,Bootstrap,JavaScript,ES6. As a MERN stack
              developer. I also proficient in React,Node.js, Express.js,MongoDb,
              user Authentication and Authorization system. Iam also comfortable
              with JWT, firebase,Figma. Recently, I start to learn Next.js.
              I have done some projects using above mentioned technologies.
              I am excited to embark on new projects and collaborate with like-minded individuals. Feel free to browse through my portfolio and get in touch with me if you have any inquiries or if you do like to discuss potential opportunities.
            </p>
            <div className="flex gap-x-6 lg:gap-x-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} />  : null} +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={30} duration={3} /> : null} +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
