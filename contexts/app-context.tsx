"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Translation types
type Language = "en" | "az" | "ru"
type Theme = "light" | "dark"

interface Translations {
  nav: {
    home: string
    work: string
    about: string
    contact: string
    getStarted: string
  }
  hero: {
    title: string
    subtitle: string
    startBuilding: string
    tagline: string
  }
  steps: {
    title: string
    ticket: { title: string; desc: string }
    plan: { title: string; desc: string }
    test: { title: string; desc: string }
    pr: { title: string; desc: string }
  }
  learnSection: {
    title: string
    titleHighlight: string
    description: string
    learningCard: string
    codeOnGo: string
    codeOnGoDesc: string
  }
  about: {
    title: string
    description: string
    fastPerformance: string
    fastPerformanceDesc: string
    cleanCode: string
    cleanCodeDesc: string
    modernDesign: string
    modernDesignDesc: string
  }
  work: {
    title: string
    description: string
    viewProject: string
    source: string
    projectDesc: string
  }
  contact: {
    title: string
    description: string
    getInTouch: string
    downloadResume: string
  }
  footer: {
    rights: string
    privacy: string
    terms: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      contact: "Contact",
      getStarted: "Get started",
    },
    hero: {
      title: "Huseyn Cavid",
      subtitle: ", the AI software engineer",
      startBuilding: "Start building",
      tagline: "Crush your backlog with your personal AI engineering team.",
    },
    steps: {
      title: "How it works",
      ticket: { title: "Ticket", desc: "Integrate Slack, Linear, and Jira" },
      plan: { title: "Plan", desc: "Quickly review your proposal" },
      test: { title: "Test", desc: "Test changes by yourself" },
      pr: { title: "PR", desc: "Review changes natively" },
    },
    learnSection: {
      title: "Learn & work ",
      titleHighlight: "together",
      description: "Built for collaboration and can learn to fit into your unique workflow.",
      learningCard: "Learns your codebase & picks up tribal knowledge",
      codeOnGo: "Code on the go",
      codeOnGoDesc: "Write code using natural language instructions with AI on mobile.",
    },
    about: {
      title: "About Me",
      description: "Passionate about creating beautiful, functional, and user-centered digital experiences",
      fastPerformance: "Fast Performance",
      fastPerformanceDesc: "Optimized code and best practices for lightning-fast load times",
      cleanCode: "Clean Code",
      cleanCodeDesc: "Maintainable, scalable, and well-documented codebases",
      modernDesign: "Modern Design",
      modernDesignDesc: "Clean, contemporary aesthetics that stand out from the crowd",
    },
    work: {
      title: "Featured Work",
      description: "A selection of my recent projects and case studies",
      viewProject: "View Project",
      source: "Source",
      projectDesc: "A comprehensive solution built with modern technologies and best practices.",
    },
    contact: {
      title: "Let's Work Together",
      description: "Have a project in mind? Let's create something amazing together.",
      getInTouch: "Get In Touch",
      downloadResume: "Download Resume",
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
  az: {
    nav: {
      home: "Ana səhifə",
      work: "İşlər",
      about: "Haqqında",
      contact: "Əlaqə",
      getStarted: "Başla",
    },
    hero: {
      title: "Hüseyn Cavid",
      subtitle: ", süni intellekt proqram mühəndisi",
      startBuilding: "Qurmağa başla",
      tagline: "Şəxsi süni intellekt mühəndislik komandanızla işlərinizi həll edin.",
    },
    steps: {
      title: "Necə işləyir",
      ticket: { title: "Bilet", desc: "Slack, Linear və Jira inteqrasiyası" },
      plan: { title: "Plan", desc: "Təklifinizi tez nəzərdən keçirin" },
      test: { title: "Test", desc: "Dəyişiklikləri özünüz test edin" },
      pr: { title: "PR", desc: "Dəyişiklikləri yerli olaraq nəzərdən keçirin" },
    },
    learnSection: {
      title: "Öyrən və işlə ",
      titleHighlight: "birlikdə",
      description: "Əməkdaşlıq üçün qurulub və sizin unikal iş axınınıza uyğunlaşa bilər.",
      learningCard: "Kod bazanızı öyrənir və qrup biliklərini əldə edir",
      codeOnGo: "Hər yerdə kod yaz",
      codeOnGoDesc: "Mobil cihazda süni intellektlə təbii dil təlimatları ilə kod yazın.",
    },
    about: {
      title: "Haqqımda",
      description: "Gözəl, funksional və istifadəçi mərkəzli rəqəmsal təcrübələr yaratmağa həvəsliyəm",
      fastPerformance: "Sürətli Performans",
      fastPerformanceDesc: "Yüksək sürətli yükləmə üçün optimallaşdırılmış kod və ən yaxşı təcrübələr",
      cleanCode: "Təmiz Kod",
      cleanCodeDesc: "Saxlanıla bilən, miqyaslana bilən və yaxşı sənədləşdirilmiş kod bazaları",
      modernDesign: "Müasir Dizayn",
      modernDesignDesc: "Fərqlənən təmiz, müasir estetika",
    },
    work: {
      title: "Seçilmiş İşlər",
      description: "Son layihələrim və tədqiqat işlərim",
      viewProject: "Layihəyə bax",
      source: "Mənbə",
      projectDesc: "Müasir texnologiyalar və ən yaxşı təcrübələrlə qurulmuş hərtərəfli həll.",
    },
    contact: {
      title: "Gəlin Birlikdə İşləyək",
      description: "Ağlınızda bir layihə var? Gəlin birlikdə heyrətamiz bir şey yaradaq.",
      getInTouch: "Əlaqə saxla",
      downloadResume: "CV yüklə",
    },
    footer: {
      rights: "Bütün hüquqlar qorunur.",
      privacy: "Məxfilik",
      terms: "Şərtlər",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      work: "Работы",
      about: "О себе",
      contact: "Контакты",
      getStarted: "Начать",
    },
    hero: {
      title: "Гусейн Джавид",
      subtitle: ", инженер-программист ИИ",
      startBuilding: "Начать создание",
      tagline: "Решите свои задачи с личной командой инженеров ИИ.",
    },
    steps: {
      title: "Как это работает",
      ticket: { title: "Тикет", desc: "Интеграция Slack, Linear и Jira" },
      plan: { title: "План", desc: "Быстро проверьте ваше предложение" },
      test: { title: "Тест", desc: "Протестируйте изменения самостоятельно" },
      pr: { title: "PR", desc: "Проверьте изменения нативно" },
    },
    learnSection: {
      title: "Учитесь и работайте ",
      titleHighlight: "вместе",
      description: "Создан для совместной работы и может адаптироваться к вашему уникальному рабочему процессу.",
      learningCard: "Изучает вашу кодовую базу и получает знания команды",
      codeOnGo: "Код на ходу",
      codeOnGoDesc: "Пишите код, используя инструкции на естественном языке с ИИ на мобильном устройстве.",
    },
    about: {
      title: "Обо мне",
      description: "Увлечен созданием красивых, функциональных и ориентированных на пользователя цифровых решений",
      fastPerformance: "Быстрая производительность",
      fastPerformanceDesc: "Оптимизированный код и лучшие практики для молниеносной загрузки",
      cleanCode: "Чистый код",
      cleanCodeDesc: "Поддерживаемые, масштабируемые и хорошо документированные кодовые базы",
      modernDesign: "Современный дизайн",
      modernDesignDesc: "Чистая, современная эстетика, которая выделяется из толпы",
    },
    work: {
      title: "Избранные работы",
      description: "Подборка моих последних проектов и кейсов",
      viewProject: "Посмотреть проект",
      source: "Исходник",
      projectDesc: "Комплексное решение, созданное с использованием современных технологий и лучших практик.",
    },
    contact: {
      title: "Давайте работать вместе",
      description: "Есть проект в голове? Давайте создадим что-то удивительное вместе.",
      getInTouch: "Связаться",
      downloadResume: "Скачать резюме",
    },
    footer: {
      rights: "Все права защищены.",
      privacy: "Конфиденциальность",
      terms: "Условия",
    },
  },
}

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  toggleTheme: () => void
  t: Translations
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [theme, setThemeState] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  // Initialize from localStorage and system preferences
  useEffect(() => {
    setMounted(true)

    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && ["en", "az", "ru"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }

    // Load theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setThemeState(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const systemTheme = prefersDark ? "dark" : "light"
      setThemeState(systemTheme)
      document.documentElement.classList.toggle("dark", systemTheme === "dark")
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  // Prevent flash of unstyled content
  if (!mounted) {
    return null
  }

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        toggleTheme,
        t: translations[language],
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
