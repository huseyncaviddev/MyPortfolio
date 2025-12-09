import type { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  FileText,
  Database,
  Shield,
  Code,
  BarChart3,
  Building2,
  GraduationCap,
  Languages,
  ChevronRight,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  website?: string;
  highlights: string[];
};

type SkillCategory = {
  name: string;
  items: string[];
};

type EducationItem = {
  degree: string;
  field: string;
  institution: string;
  period: string;
};

type SpokenLanguage = {
  name: string;
  level: string;
};

type HeroContent = {
  availability: string;
  name: string;
  tagline: string;
  role: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  ctaDownload: string;
  ctaLinkedin: string;
  ctaMessage: string;
  ctaContact: string;
  ctaLinkedinSecondary: string;
};

type AboutContent = {
  title: string;
  body: string;
};

type ContactContent = {
  title: string;
  description: string;
  emailLabel: string;
  phoneLabel: string;
  linkedin: string;
};

const languageOptions = [
  { code: "az", label: "AZ", flag: "🇦🇿" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

function LanguageSwitcher({
  current,
  onChange,
}: {
  current: string;
  onChange: (code: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        listRef.current &&
        !listRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const active = languageOptions.find((lang) => lang.code === current) || languageOptions[0];

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
            const first = listRef.current?.querySelector("button");
            first?.focus();
          }
        }}
        className="flex items-center justify-center w-10 h-10 rounded-full border bg-muted/60 text-lg shadow-sm hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        {active.flag}
      </button>
      {open && (
        <div
          ref={listRef}
          className="absolute right-0 mt-2 w-32 rounded-lg border bg-card shadow-lg p-1 z-50"
          role="listbox"
        >
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onChange(lang.code);
                setOpen(false);
                buttonRef.current?.focus();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onChange(lang.code);
                  setOpen(false);
                  buttonRef.current?.focus();
                }
              }}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                current === lang.code
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
              role="option"
              aria-selected={current === lang.code}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-semibold">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Experience Card Component with Gradient
function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  return (
    <div className="relative rounded-lg overflow-hidden transition-transform duration-200 ease-out hover:scale-[1.02]">
      <Card className="overflow-hidden border-l-4 border-l-primary transition-transform transition-shadow duration-200 ease-out hover:shadow-xl hover:-translate-y-0.5">
        <CardContent className="p-6 md:p-8 h-full">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                <span className="font-semibold text-foreground">{exp.company}</span>
                <span>•</span>
                <span>{exp.location}</span>
                {exp.website && (
                  <>
                    <span>•</span>
                    <a href={`https://${exp.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {exp.website}
                    </a>
                  </>
                )}
              </div>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
              {exp.period}
            </span>
          </div>
          
          <ul className="space-y-3">
            {exp.highlights.map((highlight, hIndex) => (
              <li key={hIndex} className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Skill Card Component with Gradient
function SkillCard({ category, items, index }: { category: string; items: string[]; index: number }) {
  const icons = [FileText, Database, Code, Shield, BarChart3];
  const Icon = icons[index % icons.length];
  
  return (
    <div className="relative rounded-lg overflow-hidden h-full">
      <Card className="h-full transition-shadow duration-200 ease-out hover:shadow-lg">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">{category}</h3>
          </div>
          <ul className="space-y-2">
            {items.map((skill, sIndex) => (
              <li key={sIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Education Card Component with Gradient
function EducationCard({ edu, index }: { edu: EducationItem; index: number }) {
  return (
    <div className="relative rounded-lg overflow-hidden h-full">
      <Card className="h-full transition-shadow duration-200 ease-out hover:shadow-lg">
        <CardContent className="p-6 h-full">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium mb-2">{edu.field}</p>
              <p className="text-muted-foreground">{edu.institution}</p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium whitespace-nowrap">
              {edu.period}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Home() {
  const navbarVisible = useScrollDirection();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(['about', 'experience', 'skills', 'education', 'contact']);
  const scrollToSection = useSmoothScroll();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const hero = t("hero", { returnObjects: true }) as HeroContent;
  const about = t("about", { returnObjects: true }) as AboutContent;
  const contact = t("contact", { returnObjects: true }) as ContactContent;
  const experiences = t("experience.items", {
    returnObjects: true,
  }) as ExperienceItem[];
  const skillCategories = t("skills.categories", {
    returnObjects: true,
  }) as SkillCategory[];
  const education = t("education.items", {
    returnObjects: true,
  }) as EducationItem[];
  const spokenLanguages = t("languages.items", {
    returnObjects: true,
  }) as SpokenLanguage[];

  const currentLanguage = (i18n.language || "az").split("-")[0];
  const mailHref = `mailto:${hero.email}`;
  const phoneHref = `tel:${hero.phone.replace(/\s+/g, "")}`;

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const navLinks = [
    { id: "about", label: t("nav.about") },
    { id: "experience", label: t("nav.experience") },
    { id: "skills", label: t("nav.skills") },
    { id: "education", label: t("nav.education") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 ease-out ${
          navbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <img 
            src="/avatar.png" 
            alt="Huseyn Cavid" 
            className="w-10 h-10 rounded-full object-cover border border-primary/20 shadow-sm"
          />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-colors relative cursor-pointer ${
                  activeSection === link.id
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher current={currentLanguage} onChange={handleLanguageChange} />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {hero.availability}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-2 leading-[1.1]">
              {hero.name}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6 italic">
              {hero.tagline}
            </p>
            
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              {hero.role}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {hero.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={mailHref} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span>{hero.email}</span>
              </a>
              <a href={phoneHref} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5" />
                <span>{hero.phone}</span>
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{hero.location}</span>
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="/Huseyn-Cavid-Resume.docx" download onClick={(e) => e.stopPropagation()}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                  <FileText className="h-5 w-5" />
                  {hero.ctaDownload}
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/huseyncavid" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <Linkedin className="h-5 w-5" />
                  {hero.ctaLinkedin}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="h-5 w-5" />
                  {hero.ctaMessage}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{about.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.body}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <Building2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">{t("experience.title")}</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">{t("skills.title")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.name} category={category.name} items={category.items} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">{t("education.title")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-stretch">
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>
          
          {/* Languages */}
          <div className="flex items-center gap-3 mb-6">
            <Languages className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">{t("languages.title")}</h3>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {spokenLanguages.map((lang, index) => (
              <div key={index} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{contact.title}</h2>
            <p className="text-lg opacity-90 mb-8">
              {contact.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href={mailHref}>
                <Button size="lg" variant="secondary" className="gap-2">
                  <Mail className="h-5 w-5" />
                  {hero.email}
                </Button>
              </a>
              <a href={phoneHref}>
                <Button size="lg" variant="secondary" className="gap-2">
                  <Phone className="h-5 w-5" />
                  {hero.phone}
                </Button>
              </a>
            </div>
            
            <a href="https://www.linkedin.com/in/huseyncavid" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
                {contact.linkedin}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
            <span>{t("footer.location")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
