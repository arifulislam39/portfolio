// import logo from '../assets/logo.svg'
const Header = () => {
    return (
        <header className="py-8" >
            <div className='container mx-auto flex justify-between items-center'>
              
                    {/* <a href="#"> <img src={logo} alt="" /></a> */}
                    <h2 className="text-4xl"><span className="text-gradient">ARIFUL</span><br /> <span className="font-bold tracking-[4px]">ISLAM</span></h2>
                    <a className='btn btn-sm' href="#contact">Work with me</a>
                    
             

            </div>
          
        </header>
    );
};

export default Header;