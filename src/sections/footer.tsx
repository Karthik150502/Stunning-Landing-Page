import React from 'react'
import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg"
import Youtube from "@/assets/social-youtube.svg"
import Instagram from "@/assets/social-instagram.svg"

export default function Footer() {
    return (
        <footer className='py-5 border-t border-white/15'>
            <div className='container'>
                <div className='flex flex-col gap-8 lg:flex-row lg:items-center'>

                    <div className='flex gap-2 items-center'>
                        <Logo className="h-6 w-6 " />
                        <div className='font-medium'>DocAI - Turning Documents more exicted.</div>

                    </div>
                    <nav className='flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center'>
                        <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition-colors'>Features</a>
                        <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition-colors'>Developers</a>
                        <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition-colors'>Company</a>
                        <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition-colors'>Blog</a>
                        <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition-colors'>Change Log</a>
                    </nav>
                    <div className='flex gap-5 lg:flex-row lg:justify-end'>
                        <XSocial className="text-white/40 hover:text-white transition-colors cursor-pointer" />
                        <Instagram className="text-white/40 hover:text-white transition-colors cursor-pointer" />
                        <Youtube className="text-white/40 hover:text-white transition-colors cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
