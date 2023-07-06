// import logo from '../assets/logo.svg'
const Header = () => {
    return (
        <header className="py-8" >
            <div className='container mx-auto flex justify-between items-center'>
              
                    {/* <a href="#"> <img src={logo} alt="" /></a> */}
                    <h2 className="text-4xl"><span className="text-gradient">ARIFUL</span><br /> <span className="font-bold tracking-[4px]">ISLAM</span></h2>
                    <button className='btn btn-sm'>Work with me</button>
             

            </div>
          
        </header>
    );
};

export default Header;