import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/types/portfolio";

const data = portfolioData as PortfolioData;

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{data.personal.name} | {data.personal.title}</title>
        <meta name="description" content={`${data.personal.name} - ${data.personal.tagline} Based in ${data.personal.location}.`} />
        <meta name="keywords" content="React Developer, Next.js Developer, TypeScript, Frontend Developer, SaaS, Web Development, Bhavik Shah" />
        <meta property="og:title" content={`${data.personal.name} | ${data.personal.title}`} />
        <meta property="og:description" content={data.personal.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${data.personal.name} | ${data.personal.title}`} />
        <meta name="twitter:description" content={data.personal.tagline} />
        <link rel="canonical" href="https://bhavikshah.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar personal={data.personal} />
        
        <main>
          <HeroSection personal={data.personal} />
          <AboutSection about={data.about} />
          <SkillsSection categories={data.skills.categories} />
          <ExperienceSection experiences={data.experience} />
          <ProjectsSection projects={data.projects} />
          <EducationSection education={data.education} />
          <AchievementsSection achievements={data.achievements} />
          <ContactSection personal={data.personal} />
        </main>

        <Footer personal={data.personal} />
      </div>
    </>
  );
};

export default Index;
