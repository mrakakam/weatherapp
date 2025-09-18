
import dropdownimg from '../resources/images/icon-dropdown.svg'

import rainimg from '../resources/images/icon-rain.webp'
import drizzleimg from '../resources/images/icon-drizzle.webp'
import  sunnyimg from '../resources/images/icon-sunny.webp'
import  partlycloudimg from '../resources/images/icon-partly-cloudy.webp'
import stormimg from '../resources/images/icon-storm.webp'
import snowimg from '../resources/images/icon-snow.webp'
import fogimg from '../resources/images/icon-fog.webp'
import overcastimg from '../resources/images/icon-overcast.webp'

export const Hourlyforecast = () =>{

    

    return(


        <>
        
            <section className='flex flex-col items-start gap-[20px]  py-[40px] rounded-2xl bg-[var(--Neutral-800)]'>

                <div className='flex flex-row items-center pl-[10px]  gap-[30px]'>  

                    <h1 className='text-2xl font-bold'>Hourly forecast</h1>

                    <div className='flex flex-row items-center bg-[var(--Neutral-600)] rounded-2xl px-[20px] py-[15px] gap-[20px]'>

                        <h1>Tuesday</h1>

                        <img src={dropdownimg} alt="" />

                        <div className="hidden">

                            <label htmlFor="day">Tuesday</label>

                            <select name="day" id="">

                                <option value="">Tuesday</option>
                                <option value="">Wednesday</option>
                                <option value="">Thursday</option>
                                <option value="">Friday</option>
                                <option value="">Saturday</option>
                                <option value="">Sunday</option>
                                <option value="">Monday</option>

                            </select>


                        </div>

                    </div>

                   

                </div>

                <div className='flex flex-col items-start gap-[30px] '>

                    <div className='bg-gray-600 flex flex-row items-center-safe gap-[170px] rounded-2xl shadow-2xl w-[350px] h-[60px] ml-[6px]'>

                        <div className=' flex flex-row items-center '>

                            <img src={overcastimg} alt="" className='w-[50px] h-[50px]' />

                            <h1>3 PM</h1>

                        </div>

                        <h1>68°</h1>

                        
                        
                    </div>

                    <div  className='bg-gray-600 flex flex-row items-center-safe gap-[170px] rounded-2xl shadow-2xl w-[350px] h-[60px] ml-[6px]'>

                        <div className=' flex flex-row items-center '>

                            <img src={partlycloudimg} alt=""  className='w-[50px] h-[50px]' />

                            <h1>4 PM</h1>

                        </div>

                        <h1>68°</h1>

                    </div>

                    <div className='bg-gray-600 flex flex-row items-center-safe gap-[170px] rounded-2xl shadow-2xl w-[350px] h-[60px] ml-[6px]'>

                        <div  className=' flex flex-row items-center '>

                            <img src={sunnyimg} alt="" className='w-[50px] h-[50px]' />

                            <h1>5 PM</h1>

                        </div>

                        <h1>68°</h1>

                    </div>


                    <div className='bg-gray-600 flex flex-row items-center-safe gap-[170px] rounded-2xl shadow-2xl w-[350px] h-[60px] ml-[6px]'>

                        <div  className=' flex flex-row items-center '>

                            <img src={overcastimg} alt="" className='w-[50px] h-[50px]' />

                            <h1>6 PM</h1>

                        </div>

                        <h1>66°</h1>

                    </div>


                    <div className='bg-gray-600 flex flex-row items-center-safe gap-[170px] rounded-2xl shadow-2xl w-[350px] h-[60px] ml-[6px]'>

                        <div  className=' flex flex-row items-center '>

                            <img src={overcastimg} alt="" className='w-[50px] h-[50px]' />

                            <h1> 7 PM</h1>

                        </div>

                        <h1>66°</h1>

                    </div>


                    <div className='bg-gray-600 flex flex-row items-center-safe gap-[170px] rounded-2xl shadow-2xl w-[350px] h-[60px] ml-[6px]'>

                        <div  className=' flex flex-row items-center '>

                            <img src={fogimg} alt="" className='w-[50px] h-[50px]'  />

                            <h1>8 PM</h1>

                        </div>

                        <h1>64°</h1>

                    </div>


                    <div className='bg-gray-600 flex flex-row items-center-safe gap-[170px] rounded-2xl shadow-2xl w-[350px] h-[60px] ml-[6px]'>

                        <div   className=' flex flex-row items-center '>

                            <img src={snowimg} alt="" className='w-[50px] h-[50px]'  />

                            <h1>9 PM</h1>


                        </div>

                        <h1>63°</h1>

                    </div>


                    <div className='bg-gray-600 flex flex-row items-center-safe gap-[170px] rounded-2xl shadow-2xl w-[350px] h-[60px] ml-[6px]'>

                        <div  className=' flex flex-row items-center '>

                            <img src={overcastimg} alt="" className='w-[50px] h-[50px]'  />

                            <h1>10 PM</h1>

                        </div>

                        <h1>63°</h1>

                    </div>

                </div>

            </section>

        </>
    )
}