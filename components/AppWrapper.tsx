"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from "react";
import LoadingScreen from "@/components/LoadingScreen";

const HERO_MEDIA_READY_EVENT = "portfolio-hero-media-ready";
const PAGE_VISIBLE_EVENT = "portfolio-page-visible";
const HERO_MEDIA_TIMEOUT_MS = 8000;

type AppWrapperProps = {
  children: ReactNode;
};

export default function AppWrapper({ children }: AppWrapperProps) {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [heroMediaReady, setHeroMediaReady] = useState(false);

  const isLoading = useMemo(
    () => !loaderFinished || !heroMediaReady,
    [heroMediaReady, loaderFinished]
  );

  useEffect(() => {
    const markHeroMediaReady = () => setHeroMediaReady(true);
    const fallbackTimer = window.setTimeout(
      markHeroMediaReady,
      HERO_MEDIA_TIMEOUT_MS
    );

    window.addEventListener(HERO_MEDIA_READY_EVENT, markHeroMediaReady, {
      once: true
    });

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener(HERO_MEDIA_READY_EVENT, markHeroMediaReady);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.requestAnimationFrame(() => {
        window.dispatchEvent(new Event(PAGE_VISIBLE_EVENT));
      });
    }
  }, [isLoading]);

  useLayoutEffect(() => {
    const { documentElement, body } = document;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    if (isLoading) {
      documentElement.dataset.loading = "true";
      documentElement.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      delete documentElement.dataset.loading;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    }

    return () => {
      delete documentElement.dataset.loading;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen onComplete={() => setLoaderFinished(true)} />
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-hidden={isLoading}
        className={isLoading ? "pointer-events-none" : ""}
      >
        {children}
      </motion.div>
    </>
  );
}
