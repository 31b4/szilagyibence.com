"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["Design", "Create", "Inspire"];
const LOAD_DURATION = 2700;

type LoadingScreenProps = {
  onComplete: () => void;
};

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % WORDS.length);
    }, 900);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let frameId = 0;
    let completionTimer = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / LOAD_DURATION, 1);
      setCounter(Math.round(progress * 100));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setCounter(100);
        completionTimer = window.setTimeout(onComplete, 400);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      data-loading-screen
      className="fixed inset-0 z-[9999] overflow-hidden bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={WORDS[wordIndex]}
            className="font-display text-4xl italic text-text/80 md:text-6xl lg:text-7xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {WORDS[wordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 font-display text-6xl text-text tabular-nums md:bottom-12 md:right-12 md:text-8xl lg:text-9xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        {counter.toString().padStart(3, "0")}
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-stroke/50">
        <motion.div
          className="h-full origin-left"
          style={{
            background: "var(--accent-gradient)",
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)"
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: LOAD_DURATION / 1000, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
