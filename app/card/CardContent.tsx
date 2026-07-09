"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import {
  Github,
  Globe2,
  Linkedin,
  Mail,
  Phone,
  QrCode,
  X
} from "lucide-react";

type CardContentProps = {
  lastUpdated: string;
  cardUrl: string;
  siteUrl: string;
  email: string;
};

export default function CardContent({
  lastUpdated,
  cardUrl,
  siteUrl,
  email
}: CardContentProps) {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const cardUrlLabel = cardUrl.replace(/^https?:\/\//, "");
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=480x480&data=${encodeURIComponent(
    cardUrl
  )}`;

  const openModal = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = event.currentTarget;
    setIsQrOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsQrOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isQrOpen) {
      return;
    }

    const dialog = dialogRef.current;
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === lastElement ||
          !dialog.contains(document.activeElement))
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, isQrOpen]);

  return (
    <>
      <main className="flex min-h-screen items-center justify-center p-4">
        <section className="w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black shadow-2xl">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative p-6 sm:p-10">
              <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Bence Szilágyi
                  </h1>
                  <p className="mt-1 text-sm text-gray-400 sm:text-base">
                    Software Engineer • Product Builder
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openModal}
                  className="group hidden items-center gap-3 text-blue-400/90 transition hover:text-blue-300 sm:flex"
                  aria-label="Show QR code"
                >
                  <QrCode className="h-9 w-9 sm:h-10 sm:w-10" aria-hidden="true" />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 sm:text-sm">
                    {cardUrlLabel}
                  </span>
                </button>
              </header>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2">
                <a
                  href="tel:+36202670538"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-blue-500/40 hover:bg-blue-500/10"
                  aria-label="Call"
                >
                  <Phone
                    className="h-5 w-5 text-blue-400 group-hover:text-blue-300"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-400">
                      Phone
                    </div>
                    <div className="text-sm sm:text-base">+36 20 267 0538</div>
                  </div>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-blue-500/40 hover:bg-blue-500/10"
                  aria-label="Email"
                >
                  <Mail
                    className="h-5 w-5 text-blue-400 group-hover:text-blue-300"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-400">
                      Email
                    </div>
                    <div className="text-sm sm:text-base">{email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-4">
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20"
                >
                  <Globe2
                    className="h-5 w-5 text-gray-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="text-sm">Website</span>
                </a>
                <a
                  href="https://x.com/31b4_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20"
                >
                  <span
                    className="grid h-5 w-5 place-items-center text-xl leading-none text-gray-300 group-hover:text-white"
                    aria-hidden="true"
                  >
                    X
                  </span>
                  <span className="text-sm">X</span>
                </a>
                <a
                  href="https://github.com/31b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20"
                >
                  <Github
                    className="h-5 w-5 text-gray-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/benszilagyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20"
                >
                  <Linkedin
                    className="h-5 w-5 text-gray-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>

              <div className="mt-3 sm:hidden">
                <button
                  type="button"
                  onClick={openModal}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-blue-500/40 hover:bg-blue-500/10"
                  aria-label="Show QR code"
                >
                  <QrCode className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  <span className="text-sm">Show QR code</span>
                </button>
              </div>

              <footer className="mt-6 flex flex-col justify-between gap-4 text-xs text-gray-500 sm:mt-8 sm:flex-row sm:items-center">
                <span>Last updated: {lastUpdated}</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-500/80" />
                  <span>Available for remote roles in CET / CST</span>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </main>

      {isQrOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
            aria-label="Close QR code"
          />
          <div className="relative z-10 flex min-h-full w-full items-center justify-center p-6">
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="qr-dialog-title"
              tabIndex={-1}
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/90 p-6 shadow-2xl"
            >
              <h2 id="qr-dialog-title" className="sr-only">
                QR code for this digital business card
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex flex-col items-center gap-4">
                {/* The QR service returns a plain image URL, matching the original card page. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrCodeUrl}
                  alt={`QR code to ${cardUrlLabel}`}
                  className="h-64 w-64 rounded-md border border-white/10 bg-white p-2 sm:h-80 sm:w-80"
                  loading="eager"
                  decoding="async"
                />
                <a
                  href={cardUrl}
                  className="text-sm text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardUrlLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
