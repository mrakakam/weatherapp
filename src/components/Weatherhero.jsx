


export const Weatherhero = () =>{

    return(
        <>

            <section className='flex flex-col items-center justify-center gap-[30px]'>

                <h1 className='text-[var(--Neutral-0)] text-5xl grotesque'>
                    How's the <br />
                    sky looking <br />
                    today.
                </h1>

                <input type="text" placeholder="Search for a place..." className='bg-[var(--Neutral-600)] py-[20px] px-[70px] rounded-[20px]'/>

                <p className='hidden'>
                    No search result found!
                </p>

                <button className='bg-[var(--Blue-700)] text-[var(--Neutral-0)] px-[130px] py-[20px] rounded-[20px] text-2xl font-bold'>Search</button>


            </section>
        
        </>
    )
}