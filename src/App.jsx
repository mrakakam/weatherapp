
import './App.css'
import {Weathernav} from './components/Weathernav'
import {Weatherhero} from './components/Weatherhero'
import { SecondSection } from './components/Secondsection'
import { Dailyforecast} from './components/Dailyforecast'
import { Hourlyforecast } from './components/Hourlyforecast'



function App() {
  

  return (
    <>

      <div className="space-y-9">
        <Weathernav/>
        <Weatherhero/>
        <SecondSection/>
        < Dailyforecast/>
        <Hourlyforecast/>


      </div>
     
    
    </>

    
  )
}

export default App
