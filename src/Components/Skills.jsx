import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Skills = () => {
  return (
    <section className="section my-32" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <motion.div  variants={fadeIn('right', 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}>
              <h2 className="h2 leading-tight text-4xl text-accent">
              What Skills I have
              </h2>
              <p className="max-w-sm ">
              My Experience
              </p>
            </motion.div>
            {/* 1 */}
            <motion.div  variants={fadeIn('right', 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="group relative overflow-hidden border-2 border-white/50 rounded-xl p-8">
              <h3 className="text-center mb-10 text-gradient text-3xl">
                Tools
              </h3>
              <div className="flex justify-between">
                <div className="">
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">FIREBASE</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Intermediate</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">GIT & GitHub</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Experienced</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">VS CODE</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Experienced</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">STRIPE</h4>
                    </div>
                    <small className="text-slate-400 ml-7">BASIC</small>
                  </article>
                </div>
                <div className="mr-10">
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">VERCEL</h4>
                    </div>
                    <small className="text-slate-400 ml-7">BASIC</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">NETLIFY</h4>
                    </div>
                    <small className="text-slate-400 ml-7">BASIC</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">JWT</h4>
                    </div>
                    <small className="text-slate-400 ml-7">INTERMEDIATE</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">CHROME DEV</h4>
                    </div>
                    <small className="text-slate-400 ml-7">INTERMEDIATE</small>
                  </article>
                </div>
              </div>
            </motion.div>
          </div>
          {/* flex */}
          <div className="flex-1 flex flex-col gap-y-10">
            {/* 2 */}
            <motion.div  variants={fadeIn('left', 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="group relative overflow-hidden border-2 border-white/50 rounded-xl p-8">
              <h3>Frontend Development</h3>
              <div className="flex justify-between">
                <div className="">
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">HTML</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Experienced</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">CSS</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Experienced</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">JAVASCRIPT</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Experienced</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">TAILWIND</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Experienced</small>
                  </article>
                </div>
                <div className="mr-10">
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">BOOTSTRAP</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Intermediate</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">DAISYUI</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Experienced</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">NEXT.JS</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Basic</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">ES6</h4>
                    </div>
                    <small className="text-slate-400 ml-7">INTERMEDIATE</small>
                  </article>
                </div>
              </div>
            </motion.div>
            {/* 3 */}
            <motion.div  variants={fadeIn('left', 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="group relative overflow-hidden border-2 border-white/50 rounded-xl p-8">
              <div className="">
                <h3>Backend Development</h3>
                <div className="flex justify-between">
                <div className="">
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">NODE.JS</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Intermediate</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">EXPRESS.JS</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Intermediate</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">MONGODB</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Intermediate</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">REST API</h4>
                    </div>
                    <small className="text-slate-400 ml-7">Intermediate</small>
                  </article>
                </div>
                <div className="mr-10">
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">AUTHENTICATION </h4>
                    </div>
                    <small className="text-slate-400 ml-7">Intermediate</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">AUTHORIZATION</h4>
                    </div>
                    <small className="text-slate-400 ml-7">BASIC</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">JWT</h4>
                    </div>
                    <small className="text-slate-400 ml-7">INTERMEDIATE</small>
                  </article>
                  <article className="">
                    <div className="flex items-center gap-3">
                      <BsPatchCheckFill />
                      <h4 className="font-bold">CHROME DEV</h4>
                    </div>
                    <small className="text-slate-400 ml-7">INTERMEDIATE</small>
                  </article>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Skills;
