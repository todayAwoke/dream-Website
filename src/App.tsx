import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
// import Programs from './components/Services/Services.jsx'
import Title from './components/title/Title.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Testimonail  from './components/Testimonials/Testimonail.jsx'
import Contact  from './components/Contacts/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

// import react from 'react-router-dom';
// import VideoPlayer  from './components/VideoPlayer/VideoPlayer.jsx'
function App() {
// const [playState,SetPlayState]=useState(false)
    return (
      
      <>
          <Navbar />
          <Hero />
          <div className="container">
              <About />
              <Title subTitle='Serviecs' title="What we provide" />
              <Services />   
              {/* <Title subTitle='Programs' title="Our Programs"/>
              <Services /> */}
             <Title subTitle='Testimonial' title="What Our Students Say about" />
              <Testimonail />
             <Title subTitle='Contact Us' title="Get In Touch With Us" />
              <Contact />
              <Footer />
              {/* <VideoPlayer playState={ playState} SetPlayState={SetPlayState} /> */}
    </div>
    </>
  )
}

export default App
