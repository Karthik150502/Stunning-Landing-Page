import React from 'react'
import acmeLogo from "../assets/logo-acme.png"
import apexLogo from "../assets/logo-apex.png"
import celestialLogo from "../assets/logo-celestial.png"
import quantumLogo from "../assets/logo-quantum.png"
import pulseLogo from "../assets/logo-pulse.png"
import echoLogo from "../assets/logo-echo.png"
import Image from 'next/image'
import "./styles.css"

export default function LogoTicker() {
    return (
        <section className='py-20 md:py-24'>
            <div className="container">

                <div className='flex items-center gap-5'>
                    <div className="flex-1 md:flex-none">
                        <h2>
                            Trusted by various top innovative teams.
                        </h2>
                    </div>
                    <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] flex items-center">
                        <div className='flex-none flex items-start gap-14 w-[800px]'>
                            {
                                [pulseLogo, quantumLogo, echoLogo, apexLogo, acmeLogo, celestialLogo].map((logo) => {
                                    return <Image key={logo.src} src={logo} alt={logo.src} className='h-6 w-auto' />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
