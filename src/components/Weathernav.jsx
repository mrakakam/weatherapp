
import weatherlogo from '../resources/images/logo.svg'
import settingsimg from '../resources/images/icon-units.svg'
import dropdownimg from '../resources/images/icon-dropdown.svg'

export const Weathernav = () => {
  return (
    <>
        <header>

              <nav className='flex flex-row  items-center justify-center gap-[50px]'>

                  <img src={weatherlogo} alt="" />

                  <div className='bg-[var(--Neutral-600)] px-[30px] py-[15px] flex flex-row items-center justify-center gap-[10px]  rounded-[20px]'>

                      <img src={settingsimg} alt="" />

                      <h5 className='text-[var(--Neutral-0)] text-[25px] font-bold '>Units</h5>

                      <img src={dropdownimg} alt="" />

                      {/* focus state for nav bar or unit */}

                      <div className='hidden'>

                        <div>
                          
                            <h5>Temperature</h5>

                             <button>Celsius(*C)</button>

                             <button>Fahrenheit(*F)</button>

                        </div>

                        <div>

                            <h5>Wind speed</h5>

                             <button>km/h</button>

                             <button>mph</button>

                        </div>

                        <div>

                            <h5>Percipitation</h5>

                             <button>Millimeters(mm)</button>

                             <button>Inches(in)</button>

                        </div>



                      </div>
                      
                  </div>


              </nav>

        </header>
    </>
  )
}