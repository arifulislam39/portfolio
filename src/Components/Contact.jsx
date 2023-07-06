import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <section className="lg:section my-36" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1">
            <motion.div  variants={fadeIn('right', 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}>
              {" "}
              <h4 className="text-4xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Lets Work <br />
                together!
              </h2>
            </motion.div>
            <motion.div  variants={fadeIn('up', 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="flex gap-4  lg:mt-24">
              <div className="border-2 w-36 h-36 border-white/50 rounded-xl">
                <h2 className="text-white">Email</h2>
              </div>
              <div className="border-2 w-36 h-36 border-white/50 rounded-xl">
                <h2 className="text-white">Email</h2>
              </div>
              <div className="border-2 w-36 h-36 border-white/50 rounded-xl">
                <h2 className="text-white">Email</h2>
              </div>
            </motion.div>
          </div>
          {/* form */}

         
          
            <motion.form  variants={fadeIn('left', 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="flex-1 border rounded-2xl flex flex-col gap-y-6 mt-10 p-6 items-start ">
                <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="text" 
                placeholder="Your Name"/>
                <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="gmail" 
                placeholder="Your Mail"/>
                <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-10" type="text" 
                placeholder="type here...."></textarea>
                <button className="btn btn-lg">Send Message</button>
            </motion.form>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
