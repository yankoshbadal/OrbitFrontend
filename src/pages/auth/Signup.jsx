import React from 'react'
import RadarBg from '../../components/auth/RadarBg'
import SignupForm from '../../components/auth/SignupForm'
import HeroContent from '../../components/auth/HeroContent'
import Stats from '../../components/auth/Stats'
import Logo from '../../components/common/Logo'

const Login = () => {
  return (
    <main className="min-h-screen bg-[#25231f] text-white">
      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* LEFT */}
        <section className="relative flex min-h-[650px] flex-1 flex-col overflow-hidden">

          {/* Logo */}
          <header className="absolute left-8 top-8 z-20 md:left-12 md:top-12">
            <Logo />
          </header>

          {/* HeroContent */}
          <div className="relative z-10 flex flex-1 items-center px-8 pt-24 md:px-12 lg:pt-0">
            <HeroContent />
          </div>

          {/* RadarBg */}
          <div
            className="
              pointer-events-none
              absolute
              right-[-160px]
              top-1/2
              hidden
              -translate-y-1/2
              xl:block
            "
          >
            <RadarBg />
          </div>

          {/* Stats */}
          <div className="relative z-10 px-8 pb-10 md:px-12">
            <Stats />
          </div>
        </section>

        {/* Form */}
        <aside
          className="
            flex
            min-h-[500px]
            w-full
            items-center
            justify-center
            bg-[#1d1c19]
            lg:min-h-screen
            lg:w-[420px]
            xl:w-[430px]
          "
        >
          <SignupForm />
        </aside>

      </div>
    </main>
  )
}

export default Login