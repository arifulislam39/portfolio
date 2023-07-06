import {Link} from "react-scroll"
import {BiHomeAlt,BiUser} from "react-icons/bi"
import {BsBriefcase, BsFillChatSquareTextFill, BsPatchCheckFill} from "react-icons/bs"

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ">
           
                <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] max-auto px-5 flex justify-between items-center text-2xl text-white/50 container mx-auto">
                    <Link 
                    to="home"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BiHomeAlt />
                    </Link>
                    <Link 
                    to="about"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BiUser />
                    </Link>
                    <Link 
                    to="skills"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BsPatchCheckFill />
                    </Link>
                    <Link 
                    to="projects"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BsBriefcase />
                    </Link>
                    <Link 
                    to="contact"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BsFillChatSquareTextFill />
                    </Link>

                </div>

         
        </nav>
    );
};

export default Nav;