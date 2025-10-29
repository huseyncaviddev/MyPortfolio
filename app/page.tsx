"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Zap } from "lucide-react"
import { CursorGlow } from "@/components/cursor-glow"
import { InteractiveCard } from "@/components/interactive-card"
import { HexagonGrid } from "@/components/hexagon-grid"
import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { InteractiveSteps } from "@/components/interactive-steps"
import { useApp } from "@/contexts/app-context"

export default function PortfolioPage() {
  const { t } = useApp()

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0e1a] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <AnimatedBackground />
        <HexagonGrid />
        <CursorGlow />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-12">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">{t.hero.subtitle}</span>
            </h1>
            <Button
              size="lg"
              className="mb-6 sm:mb-8 w-full sm:w-fit relative overflow-hidden text-white font-semibold px-8 py-6 rounded-xl shadow-2xl border-2 border-black dark:border-black group animate-gradient-shift bg-gradient-to-r from-purple-600 via-blue-500 to-pink-400 bg-[length:200%_100%] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/40 before:to-transparent before:rounded-xl before:opacity-50"
            >
              <span className="relative z-10 text-lg">{t.hero.startBuilding}</span>
            </Button>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600 dark:text-gray-400 text-pretty max-w-2xl">
              {t.hero.tagline.split("with your personal AI engineering team.")[0]}
              <span className="text-gray-900 dark:text-white">with your personal AI engineering team.</span>
            </p>
          </div>

          <InteractiveSteps />
        </div>
      </section>

      {/* Learn & Work Together Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="mb-3 sm:mb-4 text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-balance text-gray-900 dark:text-white">
                {t.learnSection.title}
                <span className="text-blue-400">{t.learnSection.titleHighlight}</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-pretty">
                {t.learnSection.description}
              </p>
            </div>

            <InteractiveCard className="border-cyan-500/30 bg-gray-50 dark:bg-[#1a1f2e]">
              <div className="relative aspect-video overflow-hidden">
                <div className="flex h-full items-center justify-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-500" />
                </div>
              </div>
            </InteractiveCard>
          </div>

          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
            <InteractiveCard className="border-white/10 bg-gray-50 dark:bg-[#1a1f2e]">
              <div className="p-8">
                <div className="mb-4 flex items-start gap-3">
                  <h3 className="text-2xl font-normal text-gray-900 dark:text-white">{t.learnSection.learningCard}</h3>
                  <ExternalLink className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              </div>
            </InteractiveCard>

            <InteractiveCard className="border-white/10 bg-gray-50 dark:bg-[#1a1f2e]">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="mb-3 text-2xl font-normal text-gray-900 dark:text-white">{t.learnSection.codeOnGo}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t.learnSection.codeOnGoDesc}</p>
                </div>

                {/* Mobile Mockup */}
                <div className="relative mx-auto w-64">
                  <div className="overflow-hidden rounded-3xl border-4 border-gray-700 bg-[#2a3447] shadow-2xl">
                    <div className="flex items-center justify-between bg-[#2a3447] px-6 py-2 text-xs text-gray-400">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-gray-600" />
                        <div className="h-2 w-4 rounded-sm bg-gray-600" />
                        <div className="h-2 w-2 rounded-sm bg-gray-600" />
                      </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#2a3447] to-[#1e2836] p-6 pb-8">
                      <div className="mb-4 rounded-2xl bg-[#3a4557] p-4">
                        <p className="mb-1 text-sm text-gray-300">
                          Hey there! I'm <span className="text-blue-400">Devin</span>
                        </p>
                        <p className="text-sm text-gray-300">and I'm a software engineer.</p>
                      </div>

                      <div className="rounded-2xl bg-[#1a2332] p-4">
                        <p className="text-xs text-gray-500">Enter a coding task below to get started.</p>
                      </div>

                      <div className="mt-4 rounded-2xl bg-[#0f1621] p-3">
                        <p className="text-xs text-cyan-400">Give Devin a task to work on...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-4 sm:px-6 py-12 sm:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-normal text-blue-400">{t.about.title}</h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 text-pretty px-4">
              {t.about.description}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <InteractiveCard className="border-white/10 bg-gray-50 dark:bg-[#1a1f2e]">
              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400/20">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{t.about.fastPerformance}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t.about.fastPerformanceDesc}</p>
              </div>
            </InteractiveCard>

            <InteractiveCard className="border-white/10 bg-gray-50 dark:bg-[#1a1f2e]">
              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400/20">
                  <Code2 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{t.about.cleanCode}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t.about.cleanCodeDesc}</p>
              </div>
            </InteractiveCard>

            <InteractiveCard className="border-white/10 bg-gray-50 dark:bg-[#1a1f2e]">
              <div className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400/20">
                  <Palette className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{t.about.modernDesign}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t.about.modernDesignDesc}</p>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="relative px-4 sm:px-6 py-12 sm:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-normal text-blue-400">{t.work.title}</h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 text-pretty px-4">
              {t.work.description}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {[
              { title: "E-Commerce Platform", tags: ["React", "Node.js", "PostgreSQL"] },
              { title: "SaaS Dashboard", tags: ["Next.js", "TypeScript", "Tailwind"] },
              { title: "Mobile App", tags: ["React Native", "Firebase", "Redux"] },
              { title: "AI Chat Interface", tags: ["Next.js", "OpenAI", "Vercel"] },
            ].map((project, idx) => (
              <InteractiveCard
                key={idx}
                className="group overflow-hidden border-white/10 bg-gray-50 dark:bg-[#1a1f2e] transition-all hover:border-blue-400/50"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-400/20 backdrop-blur-sm">
                        <Code2 className="h-8 w-8 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{t.work.projectDesc}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-500 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t.work.viewProject}
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <Github className="h-4 w-4" />
                      {t.work.source}
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-4 sm:px-6 py-12 sm:py-20">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-white/10 bg-gray-50 dark:bg-[#1a1f2e] p-6 sm:p-12">
            <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-normal text-blue-400">
              {t.contact.title}
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600 dark:text-gray-400 text-pretty">
              {t.contact.description}
            </p>
            <div className="mb-6 sm:mb-8 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto relative overflow-hidden text-white font-semibold px-8 py-6 rounded-xl shadow-2xl border-2 border-black dark:border-black group animate-gradient-shift bg-gradient-to-r from-purple-600 via-blue-500 to-pink-400 bg-[length:200%_100%] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/40 before:to-transparent before:rounded-xl before:opacity-50"
              >
                <Mail className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">{t.contact.getInTouch}</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto relative overflow-hidden font-semibold px-8 py-6 rounded-xl shadow-xl border-2 group hover:scale-105 transition-all duration-500 bg-white dark:bg-[#0a0e1a] text-gray-900 dark:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-gradient-shift before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:rounded-xl before:opacity-30"
                style={{
                  borderImage: "linear-gradient(to right, rgb(147 51 234), rgb(59 130 246), rgb(244 114 182)) 1",
                }}
              >
                <span className="relative z-10">{t.contact.downloadResume}</span>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 sm:px-6 py-6 sm:py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
            © 2025 {t.hero.title}. {t.footer.rights}
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
