import React from 'react'
import buyingLogo from '../../assets/images/Common/finance.png'
import serviceLogo from '../../assets/images/Common/car.png'
import insuranceLogo from '../../assets/images/Common/car-insurance.png'
import exchangeLogo from '../../assets/images/Common/web.png'

function OurService() {
    const services =[
        {img:buyingLogo , heading:'Buy a Car', para:'Find the perfect car with ease.' },
        {img:serviceLogo , heading:'Car Services', para:'Book professional repair and maintenance services.' },
        {img:insuranceLogo, heading:'Insurance', para:'Compare and select the best car insurance plans.' },
        {img:exchangeLogo , heading:'Exchange Offers', para:'Get the best deals by trading your old car.' },
    ]
  return (
    <div className='px-72  pb-8'>
        <h1 className='font-bold text-2xl py-8 mt-16 capitalize'>our services</h1>
        <div className='bg-amber-5 grid grid-cols-2 gap-8 px-24'>
            {services.map((service, index)=>(
                 <div 
                 key={index} 
                 className='bg-[#D9D9D9] flex flex-col items-center pt-8 pb-10 shadow-xl'>
                 <div className='bg-pink-300 w-20 h-[10vh]  ' style={{background:`url(${service.img})` ,
                 backgroundSize:'contain',
                 backgroundRepeat:'no-repeat',
                 backgroundPosition:'center'
                 }}></div>
                 <div className='bg-pink-5 py-8 text-center leading- capitalize' >
                     <h1 className='font-black text-xl text-[#593636] '>{service.heading} </h1>
                     <p className='mt-4'>{service.para} </p>
                 </div>
             </div>
            ) )}  
        </div>
    </div>
  )
}

export default OurService