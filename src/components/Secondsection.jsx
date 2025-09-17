import sunnyimg from '../resources/images/icon-sunny.webp'

import bgimg from '../assets/images/bg-today-small.svg'

export const SecondSection = () =>{

    return(

        <>
        
        
            <section className='flex flex-col items-center justify-center gap-[20px]'>
                

                <div style={{ backgroundImage: `url(${bgimg})` }} className='bg-no-repeat bg-center h-[300px]  w-full  bg-cover flex flex-col items-center justify-center gap-[20px]'>

                    <div className='flex flex-col items-center  '>
                        <h1 className="text-2xl font-bold grotesque ">Berlin, Germany</h1>

                        <p>Tuesday, Aug 5, 2025.</p>

                    </div>

                    <div className='flex flex-row- items-center justify-center  '>

                        <img src={sunnyimg} alt="" className="w-18 h-18"/>

                        <h1 className="text-4xl font-bold ml-2">68°</h1>


                    </div>

                </div>

                <div className='grid grid-cols-2 gap-[30px]'>

                    <div className='bg-gray-600 p-[25px] rounded-2xl'>

                        <h1>Feels Like</h1>

                        <h1>64°</h1>

                    </div>

                    <div  className='bg-gray-600 p-[25px] rounded-2xl '>

                        <h1>Humidity</h1>

                        <h1>46%</h1>

                    </div>

                    <div  className='bg-gray-600 p-[25px] rounded-2xl'>

                        <h1>Wind</h1>

                        <h1>9 mph</h1>

                    </div>

                    <div  className='bg-gray-600 p-[25px] rounded-2xl'>

                        <h1>Percipitation</h1>

                        <h1>0 in</h1>

                    </div>
 
                </div>

            </section> 
        
        </>
    )
}