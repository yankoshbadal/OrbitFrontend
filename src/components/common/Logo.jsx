import React from 'react'
import logosvg from '../../assets/icons/logo.svg'

const Logo = () => {
  return (

    <div className="inline-flex items-center gap-2">
        <img src={logosvg} alt="Orbit" className='h-[35px] w-[35px]' />
        <span className="font-['Jsans-serif'] font-bold text-white" > Orbit </span>
    </div>
  )
}

export default Logo;