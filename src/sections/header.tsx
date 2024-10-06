import React from 'react'
import LogoIcon from "@/assets/logo.svg";
import { Menu } from 'lucide-react';
import Button from '@/app/components/Button';
export default function Header() {
    return (
        <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10'>
            <div className="container">
                <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur'>
                    <div>
                        <div className='w-10 h-10 rounded-lg inline-flex justify-center border items-center border-white/15'>
                            <LogoIcon className="h-[32px] w-[32px]" />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <nav className='flex gap-8 text-xs'>
                            <a href="#" className='text-white/70 hover:text-white transition-colors'>Features</a>
                            <a href="#" className='text-white/70 hover:text-white transition-colors'>Developers</a>
                            <a href="#" className='text-white/70 hover:text-white transition-colors'>Pricing</a>
                            <a href="#" className='text-white/70 hover:text-white transition-colors'>Change Log</a>
                        </nav>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Button >Join Waitlist</Button>
                        <Menu className='md:hidden' />
                    </div>
                </div>
            </div>
        </header>
    )
}
