'use client'
import React, { useEffect, useState } from 'react'
import AnimatedCraze from '@/components/AnimationCraze';
import TheDrop from '@/components/AnimationCraze/TheDrop';
import WaterDrop from '@/components/WaterDrop';
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';

const Landing = () => {
    const [showLoadingSection, setShowLoadingSection] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoadingSection(false);
        }, 6000); // Start exit animation at 5 seconds
        return () => clearTimeout(timer);
    }, []);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleEnterClick = () => {
        if (password === process.env.NEXT_PUBLIC_APP_PASSWORD) {
            router.push('/'); // Change '/home' to the desired route
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className='w-full h-screen overflow-hidden p-40'>
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
            {!showLoadingSection && (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <motion.input
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        className='border px-4 py-2 border-r-2 rounded mb-4'
                        placeholder='Enter Password'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0, duration: 1 }}
                    />
                    <motion.button
                        className='border px-4 py-2 border-r-2 rounded hover:bg-white hover:text-black transition-all duration-300'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0, duration: 1 }}
                        onClick={handleEnterClick}
                    >
                        <h2>Enter</h2>
                    </motion.button>
                    {error && (
                        <motion.p
                            className='text-red-500 mt-4'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0, duration: 1 }}
                        >
                            {error}
                        </motion.p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Landing;