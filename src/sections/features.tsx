'use client'
import React, { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'
import { DotLottieCommonPlayer, DotLottiePlayer } from '@dotlottie/react-player';
import productImage from "@/assets/product-image.png"
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from 'framer-motion';
const TABS = [
    {
        icon: "/assets/lottie/vroom.lottie",
        title: "User-friendly dashboard",
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 150,
    },
    {
        icon: "/assets/lottie/click.lottie",
        title: "One-click optimization",
        isNew: false,
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backgroundSizeX: 135,
    },
    {
        icon: "/assets/lottie/stars.lottie",
        title: "Smart keyword generator",
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
    },
];



const FeatureTab = ({ title, icon, isNew, onClick, selected }: { title: string, icon: string, isNew: boolean, selected: boolean } & ComponentPropsWithoutRef<'div'>) => {


    const tabRef = useRef<HTMLDivElement>(null);
    const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

    const xPerc = useMotionValue(0);
    const yPerc = useMotionValue(0);

    const maskedRadialGradient = useMotionTemplate`radial-gradient(80px 80px at ${xPerc}% ${yPerc}%,black,transparent)`;



    useEffect(() => {
        if (!tabRef.current || !selected) return;

        xPerc.set(0);
        yPerc.set(0);
        const { height, width } = tabRef.current.getBoundingClientRect();
        const perimeter = 2 * (height + width);

        const times = [0,
            width / perimeter,
            (width + height) / perimeter,
            (width * 2 + height) / perimeter, 1];

        const options: ValueAnimationTransition = {
            times, duration: 4, repeat: Infinity, ease: "linear", repeatType: "loop"
        }

        animate(xPerc, [0, 100, 100, 0, 0], options);
        animate(yPerc, [0, 0, 100, 100, 0], options);
    }, [selected])

    const handleTabHover = () => {
        if (!dotLottieRef.current) return;
        dotLottieRef.current.seek(0);
        dotLottieRef.current.play();
    }


    return <div onMouseEnter={handleTabHover} onClick={onClick} ref={tabRef} className='lg:flex-1 border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center relative cursor-pointer'>
        {selected && <motion.div
            style={{
                maskImage: maskedRadialGradient
            }}
            className='absolute inset-0 -m-px rounded-xl border border-[#A369FF] [mask-image:]'></motion.div>}
        <div className="border border-white/15 h-12 w-12 rounded-lg inline-flex items-center justify-center">
            <DotLottiePlayer ref={dotLottieRef} src={icon} className='h-5 w-5' autoplay />
        </div>
        <div className='font-medium'>{title}</div>
        {
            isNew && <div className='text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold hover:bg-[#9a5dfd] transition-colors'>new</div>
        }
    </div>
}



export default function Features() {

    const [selectedTab, setSelectedTab] = useState<number>(0)

    const backgroundPosX = useMotionValue(TABS[selectedTab].backgroundPositionX);
    const backgroundPosY = useMotionValue(TABS[selectedTab].backgroundPositionY);
    const backgroundSizeX = useMotionValue(TABS[selectedTab].backgroundSizeX);


    const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto `
    const backgroundPosition = useMotionTemplate`${backgroundPosX}% ${backgroundPosY}%`



    const handleSelect = (i: number) => {
        setSelectedTab(i);
        const options: ValueAnimationTransition = {
            duration: 1,
            ease: "easeInOut"
        }
        animate(backgroundSizeX, [backgroundSizeX.get(), 100, TABS[i].backgroundSizeX], options);

        animate(backgroundPosX, [backgroundPosX.get(), TABS[i].backgroundPositionX], options)
        animate(backgroundPosY, [backgroundPosY.get(), TABS[i].backgroundPositionY], options)
    }

    return (
        <section className='py-20 md:py-24'>
            <div className="container">
                <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>Notch up your document review game.</h2>
                <p className='text-white/70 text-center text-lg md:text-xl max-w-2xl mx-auto tracking-tight mt-3'>From small organizations, to large enterprises, our AI tool has been a complete game changer.</p>
                <div className='mt-10 flex lg:flex-row flex-col gap-3'>
                    {
                        TABS.map((tab, i) => {
                            return <FeatureTab
                                selected={selectedTab === i}
                                onClick={() => {
                                    handleSelect(i)
                                }} key={tab.title} {...tab} />
                        })
                    }
                </div>
                <div className='border border-white/20 p-2.5 rounded-xl mt-3'>
                    <motion.div className='aspect-video bg-cover border-white/20 rounded-lg' style={{
                        backgroundPosition,
                        backgroundSize,
                        backgroundImage: `url(${productImage.src})`
                    }}></motion.div>
                </div>
            </div>
        </section>
    )
}



// <section className='py-20 md:py-24'>
// <div className="container">
//     <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>Notch up your document review game.</h2>
//     <p className='text-white/70 text-center text-lg md:text-xl max-w-2xl mx-auto tracking-tight mt-3'>From small organizations, to large enterprises, our AI tool has been a complete game changer.</p>
//     <div className='mt-10 flex lg:flex-row flex-col gap-3'>
//         {
//             TABS.map((tab) => {
//                 return <div key={tab.title} className='lg:flex-1 border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center'>
//                     <div className="border border-white/15 h-12 w-12 rounded-lg inline-flex items-center justify-center">
//                         <DotLottiePlayer src={tab.icon} className='h-5 w-5' autoplay />
//                     </div>
//                     <div className='font-medium'>{tab.title}</div>
//                     {
//                         tab.isNew && <div className='text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold'>new</div>
//                     }
//                 </div>
//             })
//         }
//     </div>
//     <div className='border border-white/20 p-2.5 rounded-xl mt-3'>
//         <div className='aspect-video bg-cover border-white/20 rounded-lg' style={{
//             backgroundImage: `url(${productImage.src})`
//         }}></div>
//     </div>
// </div>
// </section>