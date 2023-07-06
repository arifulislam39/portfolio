import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
const Projects = () => {
  return (
    <section className="section mb-20" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-20">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* 1 */}
            <motion.div variants={fadeIn('right', 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="border-2 border-white/50 rounded-xl">

             <div className="relative group  overflow-hidden">
             <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> Ui/UX design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Projects Title</span>
              </div>
             </div>

             <div className="text-center p-6">
                <button className="btn mr-16">github</button>
                <button className="btn">live demo</button>
              </div>

            </motion.div>

            {/* 2 */}
            <motion.div variants={fadeIn('right', 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="border-2 border-white/50 rounded-xl mt-14">
              <div className="relative group  overflow-hidden">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient"> Ui/UX design</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Projects Title</span>
                </div>
              </div>
              <div className="text-center p-6">
                <button className="btn mr-16">github</button>
                <button className="btn">live demo</button>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-y-10">
            {/* 3 */}

            <motion.div  variants={fadeIn('left', 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Projects
              </h2>
              <p className="max-w-sm mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur dolor maxime deserunt labore aperiam harum vel
                veritatis illo? Ut.
              </p>
            </motion.div>

            {/* 4 */}
            <motion.div  variants={fadeIn('left', 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className=" border-2 border-white/50 rounded-xl">
              <div className="relative group  overflow-hidden">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img3}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient"> Ui/UX design</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Projects Title</span>
                </div>
              </div>

              <div className="text-center p-6">
                <button className="btn mr-16">github</button>
                <button className="btn">live demo</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
