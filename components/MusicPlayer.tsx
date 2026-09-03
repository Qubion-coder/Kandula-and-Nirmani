'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const SONG_SRC = '/young-and-beautiful.mp3';

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        setMounted(true);
        const audio = new Audio(SONG_SRC);
        audio.loop = true;
        audio.volume = 0.4;
        audioRef.current = audio;

        // Attempt autoplay
        const playAudio = () => {
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                    setShowHint(false);
                })
                .catch(() => {
                    setShowHint(true);
                    // Add interaction listeners if autoplay is blocked
                    const startOnInteraction = () => {
                        audio.play()
                            .then(() => {
                                setIsPlaying(true);
                                setShowHint(false);
                            })
                            .catch(() => { });
                    };

                    const handleStartMusic = () => {
                        startOnInteraction();
                    };

                    // Listen for global custom event (which can be dispatched synchronously from click handlers)
                    window.addEventListener('start-music', handleStartMusic, { once: true });
                    
                    const removeListeners = () => {
                        ['click', 'touchstart', 'scroll'].forEach((evt) =>
                            document.removeEventListener(evt, startOnInteraction)
                        );
                    };

                    ['click', 'touchstart', 'scroll'].forEach((evt) =>
                        document.addEventListener(evt, startOnInteraction, { once: true, passive: true })
                    );
                    
                    // Cleanup function will be handled when component unmounts
                });
        };

        playAudio();

        return () => {
            audio.pause();
            audio.src = '';
        };
    }, []);

    if (!mounted) return null;

    return null;
}
