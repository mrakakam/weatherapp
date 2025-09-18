
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

    
    const [day, setDay] = useState("Tuesday");

    const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    ];

    return(


        <>
        
            <section>

                <div>

                   

                    <h1>Hourly forecast</h1>

                    <div>
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

                <div>

                    <div>

                        <div>

                            <img src={overcastimg} alt="" />

                            <h1>3 PM</h1>

                        </div>

                        <h1>68°</h1>
                        
                    </div>

                    <div>

                        <div>

                            <img src={partlycloudimg} alt="" />

                            <h1>4 PM</h1>

                        </div>

                        <h1>68°</h1>

                    </div>

                    <div>

                        <div>

                            <img src={sunnyimg} alt="" />

                            <h1>5 PM</h1>

                        </div>

                        <h1>68°</h1>

                    </div>


                    <div>

                        <div>

                            <img src={overcastimg} alt="" />

                            <h1>6 PM</h1>

                        </div>

                        <h1>66°</h1>

                    </div>


                    <div>

                        <div>

                            <img src={overcastimg} alt="" />

                            <h1> 7 PM</h1>

                        </div>

                        <h1>66°</h1>

                    </div>


                    <div>

                        <div>

                            <img src={fogimg} alt="" />

                            <h1>8 PM</h1>

                        </div>

                        <h1>64°</h1>

                    </div>


                    <div>

                        <div>

                            <img src={snowimg} alt="" />

                            <h1>9 PM</h1>


                        </div>

                        <h1>63°</h1>

                    </div>


                    <div>

                        <div>

                            <img src={overcastimg} alt="" />

                            <h1>10 PM</h1>

                        </div>

                        <h1>63°</h1>

                    </div>

                </div>

            </section>

        </>
    )
}