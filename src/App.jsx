import About from './Components/About'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {

  return (
  <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Nav></Nav>
    <Header></Header>
    <Banner></Banner>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <div className='h-[1000px]'>

    </div>
  </div>
  )
}

export default App
