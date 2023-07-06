import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {HiOutlineMail} from "react-icons/hi"
import {BsMessenger} from "react-icons/bs"
import { useRef } from "react";
import emailjs from "emailjs-com"

const Contact = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_05fa801', 'template_jkm1jma', form.current, 'jMAS1UHhP1QwBaKVf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

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
              <div className="border-2 w-48 h-36 border-white/50 rounded-xl text-center p-6">
                <HiOutlineMail className="ml-6" />
                <h5 className="w-20">arifulislam204909@gmail.com</h5>
                <a href="mailto:arifulislam204909@gmail.com">Send a message</a>
               
              </div>
              <div className="border-2 w-36 h-36 border-white/50 rounded-xl text-center">
                <BsMessenger  className="ml-6"/>
                <a href="https://m.me/profile.php?id=100006664878560">Send a message</a>

              </div>
              <div className="border-2 w-36 h-36 border-white/50 rounded-xl">
                <h2 className="text-white">Whatsapp</h2>
                <a href="https://api.whatsapp.com/send?phone+8801845534039">send a message</a>
              </div>
            </motion.div>
          </div>
          {/* form */}

         
          
            <motion.form ref={form} onSubmit={sendEmail} variants={fadeIn('left', 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}} className="flex-1 border rounded-2xl flex flex-col gap-y-6 mt-10 p-6 items-start ">
                <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="text"
                name="name" 
                placeholder="Your Name"/>
                <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="gmail"
                name="email" 
                placeholder="Your Mail"/>
                <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-10" type="text" name="message" 
                placeholder="type here...."></textarea>
                <button type="submit" className="btn btn-lg">Send Message</button>
            </motion.form>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
