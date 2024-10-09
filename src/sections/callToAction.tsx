'use client'
import React, { RefObject, useEffect, useRef } from 'react';
import Button from '@/app/components/Button';
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, MotionValue, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';


type UseRelativeMousePositionFunctionType = (ref?: RefObject<HTMLElement>) => MotionValue<number>[] | string[];

const useRelativeMousePosition: UseRelativeMousePositionFunctionType = (ref?: RefObject<HTMLElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const updateMousePosition = (event: MouseEvent) => {
            if (!ref?.current) return;
            const { top, left } = ref.current.getBoundingClientRect();
            mouseX.set(event.x - left)
            mouseY.set(event.y - top)
        }
        window.addEventListener("mousemove", updateMousePosition)
        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }

    }, [])

    // return [mouseX.get().toFixed(), mouseY.get().toFixed()];
    return [mouseX, mouseY];
}


export default function CalltoAction() {


    const sectionRef = useRef<HTMLElement>(null);
    const borderedDiv = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const [mouseX, mouseY] = useRelativeMousePosition(borderedDiv);

    const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`



    return (
        <section className="py-20 md:py-24" ref={sectionRef}>
            <div className="container">
                <motion.div
                    ref={borderedDiv}
                    className='border border-white/15 py-24 rounded-xl overflow-hidden relative group'
                    animate={{
                        backgroundPositionX: starsBg.width,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: "linear"
                    }}
                    style={{
                        backgroundPositionY,
                        backgroundImage: `url(${starsBg.src})`
                    }}>


                    <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700" style={{
                        backgroundImage: `url(${gridLines.src})`
                    }}></div>


                    {/* The dynamically changing background */}
                    <motion.div className={`absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700`} style={{
                        maskImage,
                        backgroundImage: `url(${gridLines.src})`
                    }}></motion.div>


                    <div className="relative">
                        <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter max-w-xl mx-auto'>AI driven docuement scrutiny for Everyone.</h2>
                        <p className='text-white/70 text-center text-lg md:text-xl tracking-tight mt-3 max-w-xs mx-auto'>Achieve clear impactful results without complexity.</p>
                        <div className="flex justify-center mt-8">
                            <Button>Join Waitlist</Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
