"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { useApp } from "@/contexts/app-context"

export function InteractiveSteps() {
  const [activeStep, setActiveStep] = useState(0)
  const { t } = useApp()

  const steps = [
    {
      num: "1",
      title: t.steps.ticket.title,
      desc: t.steps.ticket.desc,
      content: {
        type: "integration",
        title: "Seamless Integration",
        description: "Connect your favorite tools and streamline your workflow",
        visual: (
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg bg-[#0a0e1a] dark:bg-[#0a0e1a] p-4">
              <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div className="flex-1">
                <div className="mb-2 h-3 w-24 rounded bg-purple-400/30" />
                <div className="h-2 w-32 rounded bg-gray-700" />
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-[#0a0e1a] dark:bg-[#0a0e1a] p-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div className="flex-1">
                <div className="mb-2 h-3 w-28 rounded bg-blue-400/30" />
                <div className="h-2 w-36 rounded bg-gray-700" />
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-[#0a0e1a] dark:bg-[#0a0e1a] p-4">
              <div className="h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="flex-1">
                <div className="mb-2 h-3 w-20 rounded bg-cyan-400/30" />
                <div className="h-2 w-40 rounded bg-gray-700" />
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      num: "2",
      title: t.steps.plan.title,
      desc: t.steps.plan.desc,
      content: {
        type: "planning",
        title: "Smart Planning",
        description: "AI-powered proposal review and optimization",
        visual: (
          <div className="space-y-4">
            <div className="rounded-lg bg-[#0a0e1a] dark:bg-[#0a0e1a] p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <div className="h-3 w-32 rounded bg-gray-700" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-gray-800" />
                <div className="h-2 w-5/6 rounded bg-gray-800" />
                <div className="h-2 w-4/6 rounded bg-gray-800" />
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4 border border-blue-400/30">
              <div className="mb-2 h-3 w-40 rounded bg-blue-400/50" />
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-blue-400/20" />
                <div className="h-2 w-4/5 rounded bg-blue-400/20" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 flex-1 rounded bg-green-400/20 flex items-center justify-center text-xs text-green-400">
                Approve
              </div>
              <div className="h-8 flex-1 rounded bg-gray-700/20 flex items-center justify-center text-xs text-gray-400">
                Revise
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      num: "3",
      title: t.steps.test.title,
      desc: t.steps.test.desc,
      content: {
        type: "testing",
        title: "Automated Testing",
        description: "Run comprehensive tests with one click",
        visual: (
          <div className="space-y-4">
            <div className="rounded-lg bg-[#0a0e1a] dark:bg-[#0a0e1a] p-4 font-mono text-xs">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400">Running tests...</span>
              </div>
              <div className="space-y-1 text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Unit tests passed (24/24)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Integration tests passed (12/12)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⟳</span>
                  <span className="text-yellow-400">E2E tests running (3/8)</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 border border-green-400/30">
              <div className="text-sm text-green-400 mb-1">Coverage: 94%</div>
              <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      num: "4",
      title: t.steps.pr.title,
      desc: t.steps.pr.desc,
      content: {
        type: "review",
        title: "Code Review",
        description: "Streamlined pull request workflow",
        visual: (
          <div className="space-y-4">
            <div className="rounded-lg bg-[#0a0e1a] dark:bg-[#0a0e1a] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />
                  <div>
                    <div className="h-3 w-24 rounded bg-gray-700 mb-1" />
                    <div className="h-2 w-32 rounded bg-gray-800" />
                  </div>
                </div>
                <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">Ready</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-green-400">
                  <span>+</span>
                  <div className="h-2 flex-1 rounded bg-green-400/20" />
                  <span>124</span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <span>-</span>
                  <div className="h-2 flex-1 rounded bg-red-400/20" />
                  <span>48</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-10 flex-1 rounded bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-medium">
                Merge Pull Request
              </div>
            </div>
          </div>
        ),
      },
    },
  ]

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left Content - Steps */}
      <div className="flex flex-col justify-center">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.num}
              onMouseEnter={() => setActiveStep(index)}
              className={`group flex items-start gap-4 cursor-pointer transition-all duration-300 ${
                activeStep === index ? "translate-x-2" : ""
              }`}
            >
              <div
                className={`relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border text-lg font-semibold transition-all duration-300 ${
                  activeStep === index
                    ? "scale-110 border-blue-400 bg-blue-400/20 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    : "border-blue-400/30 bg-blue-400/10 text-blue-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-400/20"
                }`}
              >
                <span className="relative z-10">{step.num}</span>
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br transition-opacity duration-300 ${
                    activeStep === index
                      ? "from-blue-400/30 to-cyan-400/30 opacity-100"
                      : "from-blue-400/0 to-cyan-400/0 opacity-0 group-hover:from-blue-400/30 group-hover:to-cyan-400/30 group-hover:opacity-100"
                  }`}
                />
              </div>
              <div className={`flex-1 transition-all duration-300 ${activeStep === index ? "translate-y-[-2px]" : ""}`}>
                <h3
                  className={`mb-1 font-semibold transition-colors duration-300 ${
                    activeStep === index ? "text-blue-300" : "text-gray-900 dark:text-white group-hover:text-blue-300"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    activeStep === index
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
              <div
                className={`transition-all duration-300 ${
                  activeStep === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                <ExternalLink className="h-5 w-5 text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Dynamic Preview */}
      <div className="relative">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-1 shadow-2xl overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeStep === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute inset-0 translate-x-8 pointer-events-none"
              }`}
            >
              <div className="rounded-xl bg-gray-50 dark:bg-[#1a1f2e] p-6">
                {/* Mock Browser Header */}
                <div className="mb-4 flex items-center gap-2 border-b border-gray-200 dark:border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/50" />
                    <div className="h-3 w-3 rounded-full bg-green-400/50" />
                  </div>
                  <div className="ml-4 flex-1 rounded bg-gray-100 dark:bg-[#0a0e1a] px-3 py-1 text-xs text-gray-500">
                    {step.content.type}.workspace.app
                  </div>
                </div>

                {/* Dynamic Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{step.content.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.content.description}</p>
                </div>

                {/* Visual Content */}
                {step.content.visual}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
    </div>
  )
}
