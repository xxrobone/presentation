'use client'
import React, { useEffect, useState } from 'react'
import AnimatedCraze from '@/components/AnimationCraze';
import TheDrop from '@/components/AnimationCraze/TheDrop';
import WaterDrop from '@/components/WaterDrop';
import { motion, AnimatePresence } from 'framer-motion'

const SplashScreen = () => {
    const [showLoadingSection, setShowLoadingSection] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowLoadingSection(false);
        }, 6000); // Start exit animation at 5 seconds
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className='w-full h-screen overflow-hidden p-40 '>
            <AnimatePresence mode='wait'>
                {showLoadingSection && (
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} 
                    >
                        <TheDrop />
                        <AnimatedCraze />
                        <WaterDrop />
                    </motion.section>
                )}
            </AnimatePresence>
            <motion.button
                className='border px-4 py-2 border-r-2 rounded hover:bg-white hover:text-black transition-all duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay: 6, duration: 1}}
            >
                <h2>Enter</h2>
            </motion.button>
        </div>
    );
}

export default SplashScreen;
