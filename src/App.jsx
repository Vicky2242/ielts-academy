import Courses from "./components/Courses"
import Enquiry from "./components/Enqjiry"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import WhatsApp from "./components/Whatsapp"
import WhyChooseUs from "./components/WhyChooseUs"

function App() {
  return (
    <>
     <Navbar />
     <Hero />
     <Courses />
     <WhyChooseUs />
     <Enquiry />
     <WhatsApp />
     <Footer />
    </>
   
  )
}

export default App