import rainimg from '../resources/images/icon-rain.webp'
import drizzleimg from '../resources/images/icon-drizzle.webp'
import  sunnyimg from '../resources/images/icon-sunny.webp'
import  partlycloudimg from '../resources/images/icon-partly-cloudy.webp'
import stormimg from '../resources/images/icon-storm.webp'
import snowimg from '../resources/images/icon-snow.webp'
import fogimg from '../resources/images/icon-fog.webp'





export const Dailyforecast = () =>{



    return(
        <>


            <section className='flex flex-col items-start gap-[20px]' >

                <h1 className='text-2xl font-bold'>Daily Forecast</h1>
                
                <div className='grid grid-cols-3 gap-[20px] ' >


                    <div className='bg-gray-600 p-[25px] rounded-2xl flex flex-col gap-[20px]'>

                        <div className='flex flex-col gap-[20px]'>

                            <h1>Tue</h1>

                            <img src={rainimg} alt="" />

                        </div>


                        <div className='flex flex-row gap-[20px]'>
                        
                            <h1>68°</h1>

                            <h1>57°</h1>

                        </div>


                    </div>

                    <div className='bg-gray-600 p-[25px] rounded-2xl flex flex-col gap-[20px]'>

                        <div className='flex flex-col gap-[20px]'>

                            <h1>Wed</h1>

                            <img src={drizzleimg} alt="" />

                        </div>


                        <div className='flex flex-row gap-[20px]'>
                        
                            <h1>70°</h1>

                            <h1>59°</h1>

                        </div>


                    </div>
                    

                    <div className='bg-gray-600 p-[25px] rounded-2xl flex flex-col gap-[20px]'>

                        <div className='flex flex-col gap-[20px]'>

                            <h1>Thu</h1>

                            <img src={sunnyimg} alt="" />

                        </div>


                        <div className='flex flex-row gap-[20px]'>
                        
                             <h1>75°</h1>

                            <h1>57°</h1>

                        </div>


                    </div>


                    <div className='bg-gray-600 p-[25px] rounded-2xl flex flex-col gap-[20px]'>

                        <div className='flex flex-col gap-[20px]'>

                            <h1>Fri</h1>

                            <img src={partlycloudimg} alt="" />

                        </div>


                        <div className='flex flex-row gap-[20px]'>
                        
                            <h1>77°</h1>

                            <h1>55°</h1>

                        </div>


                    </div>


                    <div className='bg-gray-600 p-[25px] rounded-2xl flex flex-col gap-[20px]'>

                        <div className='flex flex-col gap-[20px]'>

                            <h1>Sat</h1>

                            <img src={stormimg} alt="" />

                        </div>


                        <div className='flex flex-row gap-[20px]'>
                        
                            <h1>70°</h1>

                            <h1>59°</h1>

                        </div>


                    </div>


                    <div className='bg-gray-600 p-[25px] rounded-2xl flex flex-col gap-[20px]'>

                        <div className='flex flex-col gap-[20px]'>

                            <h1>Sun</h1>

                            <img src={snowimg} alt="" />

                        </div>


                        <div className='flex flex-row gap-[20px]'>
                        
                            <h1>77°</h1>

                            <h1>61°</h1>

                        </div>


                    </div>


                    <div className='bg-gray-600 p-[25px] rounded-2xl flex flex-col gap-[20px]'>

                        <div  className='flex flex-col gap-[20px]'>

                            <h1>Mon</h1>

                            <img src={fogimg} alt="" />

                        </div>


                        <div className='flex flex-row gap-[20px]'>
                        
                            <h1>75°</h1>

                            <h1>59°</h1>

                        </div>


                    </div>

                </div>

            </section>  
        
        
        
        </>
    )
}