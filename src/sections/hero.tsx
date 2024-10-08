'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from 'react'
import Button from '@/app/components/Button'
import starsbg from "@/assets/stars.png";
export default function Hero() {

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })


    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (


        <motion.section
            ref={sectionRef}
            animate={{
                backgroundPositionX: starsbg.width,
            }}
            transition={{
                duration: 120,
                repeat: Infinity,
                ease: "linear"
            }}
            className='h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]' style={{
                backgroundImage: `url(${starsbg.src})`,
                backgroundPositionY
            }}>

            <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

            {/* Start Planet */}
            <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,64))]
shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]
"></div>
            {/* End Planet */}

            {/* Start ring-1 */}
            <motion.div
                style={{
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    rotate: "1turn"
                }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear"
                }}
                className="reverse absolute w-[344px] h-[344px] md:w-[580px] md:h-[580px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                <div className="w-2 h-2 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
                <div className="w-2 h-2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
                <div className="w-5 h-5 absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border rounded-full border-white inline-flex items-center justify-center">
                    <div className='h-2 w-2 bg-white rounded-full'></div>
                </div>
            </motion.div>
            {/* End ring-1 */}

            {/* Start ring-2 */}
            <motion.div
                style={{
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    rotate: "-1turn"
                }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear"
                }}
                className='w-[444px] h-[444px] md:w-[780px] md:h-[780px] absolute rounded-full top-1/2 left-1/2 border -translate-x-1/2 -translate-y-1/2 border-white/20  border-dashed'>
            </motion.div>
            {/* End ring-2 */}

            {/* Start ring-3 */}
            <motion.div
                style={{
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    rotate: "1turn"
                }}
                transition={{
                    repeat: Infinity,
                    duration: 90,
                    ease: "linear"
                }}
                className="absolute h-[544px] w-[544px] md:w-[980px] md:h-[980px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                <div className="w-full h-full rounded-full animate-spin-ccw-30s">
                    <div className="w-2 h-2 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
                </div>
            </motion.div>
            {/* End ring-3 */}

            <div className='container relative mt-16'>
                <h1 className='text-8xl md:text-[168px] md:leading-none font-extrabold tracking-tighter
    bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]text-transparent bg-clip-text text-center'>DOCAI</h1>
                <p className='mt-5 text-white/70 text-lg md:text-xl text-center max-w-xl mx-auto'>Have you seen a book talk to you? Well you can make that happen with the new DocAI, document chatting tool.
                </p>

                <div className=" flex justify-center mt-5">
                    <Button>Join Waitlist</Button>
                </div>
            </div>
        </motion.section>
    )
}

