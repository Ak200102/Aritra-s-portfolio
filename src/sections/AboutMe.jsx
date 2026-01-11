import React, { useRef, useEffect } from 'react'
import Button from '../components/Button.jsx'
import TitleHeader from '../components/TitleHeader.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      {
        y: 80,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 65%',
        },
      }
    )
  })

  return (
    <section id="about" className="w-full py-28 bg-black text-white">
      <div
        className="
          max-w-full
          sm:max-w-4xl
          md:max-w-6xl
          xl:max-w-7xl
          mx-auto
          px-6
        "
      >
        {/* HEADER */}
        <div className="text-center mb-20">
          <TitleHeader title="About me" sub="🆔 Let's know about me" />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Turning Ideas into Scalable Web Experiences
              </h2>

              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
                I’m <span className="text-white font-semibold">Aritra Karan</span>,a
                MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer who
                enjoys building clean, scalable, and user-focused web applications.
              </p>

              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-12">
                I focus on writing maintainable code, designing intuitive interfaces,
                and continuously improving performance and usability across devices.
              </p>
            </div>

            <Button
              text="DOWNLOAD RESUME"
              href="/Aritra_Karan_Resume(3).pdf"
              download
            />
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full content-between perspective-[1000px]">
            <Stat title="2+" label="Years Development" />
            <Stat title="5+" label="Projects Built" />
            <Stat title="MERN" label="Primary Stack" />
            <Stat title="Open" label="To Opportunities" />
          </div>
        </div>
      </div>
    </section>
  )
}

const Stat = ({ title, label }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current

    const hoverIn = () => {
      gsap.to(el, {
        y: -12,
        scale: 1.04,
        boxShadow: '0 25px 60px rgba(255,255,255,0.08)',
        duration: 0.4,
        ease: 'power3.out',
      })
    }

    const hoverOut = () => {
      gsap.to(el, {
        y: 0,
        scale: 1,
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        duration: 0.4,
        ease: 'power3.out',
      })
    }

    el.addEventListener('mouseenter', hoverIn)
    el.addEventListener('mouseleave', hoverOut)

    return () => {
      el.removeEventListener('mouseenter', hoverIn)
      el.removeEventListener('mouseleave', hoverOut)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="
        tech-card
        min-h-[180px]
        p-8
        rounded-2xl
        bg-white/5
        border border-white/10
        backdrop-blur
        flex
        flex-col
        justify-center
        cursor-pointer
        transform-gpu
        will-change-transform
      "
    >
      <h3 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h3>
      <p className="text-white/60 text-base sm:text-lg">{label}</p>
    </div>
  )
}

export default AboutMe