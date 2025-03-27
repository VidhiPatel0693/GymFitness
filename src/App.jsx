import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import FitnessGoal from './components/FitnessGoal';
import BestOffers from './components/BestOffers';
import Services from './components/Services';
import BestPlan from './components/BestPlan';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
     <FitnessGoal/>
     <BestOffers/>
     <Services/>
     <BestPlan/>
     <Testimonial/>
     <Footer/>
    </>
  )
}

export default App
