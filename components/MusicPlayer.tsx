'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SONG_SRC = '/paulyudin-wedding-485932.mp3';

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
                        removeListeners();
                    };

                    const removeListeners = () => {
                        ['click', 'touchstart', 'scroll'].forEach((evt) =>
                            document.removeEventListener(evt, startOnInteraction)
                        );
                    };

                    ['click', 'touchstart', 'scroll'].forEach((evt) =>
                        document.addEventListener(evt, startOnInteraction, { once: true, passive: true })
                    );
                });
        };

        playAudio();

        return () => {
            audio.pause();
            audio.src = '';
        };
    }, []);

    const toggle = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => setIsPlaying(true)).catch(() => { });
            setShowHint(false);
        }
    }, [isPlaying]);

    if (!mounted) return null;

    return null;
}
