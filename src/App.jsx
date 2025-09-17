
import './App.css'
import {Weathernav} from './components/Weathernav'
import {Weatherhero} from './components/Weatherhero'
import { SecondSection } from './components/Secondsection'


function App() {
  

  return (
    <>

      <div className="space-y-9">
           <Weathernav/>
            <Weatherhero/>
            <SecondSection/>
      </div>
     
    
    </>

    
  )
}

export default App
