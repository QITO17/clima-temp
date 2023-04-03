import React, { useState } from 'react'

const Weather = ({weather, temp}) => {
    
    const [isCelcius, setIsCelcius] = useState(true)
    const changeUniTemp = () => {
        setIsCelcius(!isCelcius)
    }

    const remove = () => {
        const banner = document.querySelector('.banner');
        if(banner.classList.contains('banner--visivility')){
            banner.classList.remove('banner--visivility')
        }
    }

    const add = () => {
        const banner = document.querySelector('.banner')
        banner.classList.add('banner--visivility')
    }
  return (
    <>
        <i className="gg-sun" id='radio' onClick={add}></i>

        <div className="banner">
            <div className="Informacion">
                <h2></h2>
                
                <ul className='flex flex-col'>
                    <li>Acundancia de nubes<br/> {weather.clouds.all}</li>
                    <li>Temperatura Maxima {weather.main.temp_max}</li>
                    <li>Temperatura Minima {weather.main.temp_min}</li>
                </ul>
               
                <i className="gg-close close" onClick={remove}></i>
                
                <button className='button1' onClick={remove}>Cerrar</button>
            </div>
        </div>
        <section className='text-xl conteiner'>
            <h2 className='text-center mb-4 tracking-wider font-bold text-2xl'>{weather.name}, {weather.sys.country}</h2>
            
            <section className='grid gap-4 sm:grid-cols-two'>

                <article className='article--item bg-slate-300/70  rounded-3xl grid grid-cols-2 justify-items-center sm:px-2 items-center py-2'>
                    <h3 className='capitalize col-start-1 col-end-3'>{weather.weather[0].description}</h3>
                    
                        <h2 className='text-[43px] font-light sm:text-6xl'>{isCelcius ? `${temp.celcius}   °C` : `${temp.farenheit} °F`}</h2>
                        <div className="img">
                            <img className='icon--item' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                        </div>

                    

                </article>

                <article className='article--item bg-slate-300/70  rounded-3xl grid grid-cols-3 justify-center py-2 sm:grid-cols-1 sm:px-2 sm:py-0'>

                    <div className='flex gap-3 text-sn justify-center items-center '>
                        <div>
                            <i className="gg-code-climate width-[100px]"></i>
                        </div>
                        <h5>{weather.wind.speed}</h5>
                    </div>

                    <div  className='flex gap-3 text-sn justify-center items-center '>
                        <div>
                            <i className="gg-sun"></i>
                        </div>
                        <h5>{weather.main.humidity}</h5>
                    </div>
                    
                    <div  className='flex gap-3 text-sn justify-center items-center '>
                        <div>
                        <i className="gg-cloud"></i>
                        </div>
                        <h5>{weather.main.pressure}</h5>
                    </div>
                    
                </article>

                
            </section>

            <button onClick={changeUniTemp} className='bg-blue-500 py-2 px-6 text-white font-bold rounded-full hover:bg-blue-800 text-sm block mx-auto mt-4
            duration-200'>Change °C/°F</button>
        </section>

    <div className="contenedor--logos">
        <ul>
        <li>
            <a href="https://web.facebook.com/arley.hurtado.5667" target="_blank">
            <i className="fab fa-facebook-f icon"></i>    </a>
        </li>
        <li>
            <a href="#" target="_blank"><i className="fab fa-twitter icon"></i></a>
        </li>
        <li>
            <a href="www.linkedin.com/in/jostin-arley-hurtado-hinestroza-57ab49255
" target='_blank'><i className="fab fa-linkedin-in icon"></i></a></li>
        <li>
            <a href="#" target="_blank"><i className="fab fa-google-plus-g icon"></i></a></li>
        </ul>
    </div>
    <img className='dance' src="https://2.bp.blogspot.com/-042SE40FwWo/Whc1h93exGI/AAAAAAAHKsg/lJBN_LI_Rcs9ayuE0DznPiyeIoGMNOV5ACLcBGAs/s1600/BAILE%2B%252830%2529.gif" alt="" />
    </>
  )
}

export default Weather