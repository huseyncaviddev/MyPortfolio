"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Code2, Sun, Moon } from "lucide-react"
import { useApp } from "@/contexts/app-context"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { language, setLanguage, theme, toggleTheme, t } = useApp()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 dark:border-white/5 bg-white/95 dark:bg-[#0a0e1a]/95 backdrop-blur-xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        {/* Logo section */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 sm:gap-3 group">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20 transition-all duration-300 group-hover:shadow-cyan-500/40 group-hover:scale-110">
            <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#0a0e1a]" strokeWidth={2.5} />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio</span>
        </a>

        {/* Center navigation links */}
        <nav className="hidden items-center gap-6 lg:gap-10 md:flex">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="relative text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t.nav.home}
          </a>
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, "#work")}
            className="relative text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t.nav.work}
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="relative text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t.nav.about}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="relative text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 rounded-lg bg-gray-100 dark:bg-white/5 p-1">
            <button
              onClick={() => setLanguage("az")}
              className={`w-10 h-8 flex items-center justify-center rounded transition-all ${
                language === "az" ? "bg-white dark:bg-white/10 shadow-sm" : "hover:bg-white/50 dark:hover:bg-white/5"
              }`}
              title="Azərbaycan"
              aria-label="Azərbaycan dili"
            >
              <span className="text-base">🇦🇿</span>
            </button>
            <button
              onClick={() => setLanguage("ru")}
              className={`w-10 h-8 flex items-center justify-center rounded transition-all ${
                language === "ru" ? "bg-white dark:bg-white/10 shadow-sm" : "hover:bg-white/50 dark:hover:bg-white/5"
              }`}
              title="Русский"
              aria-label="Русский язык"
            >
              <span className="text-base">🇷🇺</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`w-10 h-8 flex items-center justify-center rounded transition-all ${
                language === "en" ? "bg-white dark:bg-white/10 shadow-sm" : "hover:bg-white/50 dark:hover:bg-white/5"
              }`}
              title="English"
              aria-label="English language"
            >
              <span className="text-base">🇬🇧</span>
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 transition-all hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-105"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>

          <Button className="hidden sm:flex relative overflow-hidden text-white font-semibold px-6 py-3 rounded-xl shadow-xl border-2 border-black dark:border-black text-sm group animate-gradient-shift bg-gradient-to-r from-purple-600 via-blue-500 to-pink-400 bg-[length:200%_100%] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/40 before:to-transparent before:rounded-xl before:opacity-50">
            <span className="relative z-10">{t.nav.getStarted}</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
