import { useState, useMemo, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";
import ParallaxBackground from "@/components/ParallaxBackground";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ExperiencePage from "@/components/pages/ExperiencePage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import CertificationsPage from "@/components/pages/CertificationsPage";
import ContactPage from "@/components/pages/ContactPage";
import ScrollToTop from "@/components/ScrollToTop";
import { useSwipe } from "@/hooks/use-swipe";

const pageOrder = ["home", "about", "experience", "projects", "certifications", "contact"];

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = useCallback((page: string) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  const handleSwipeLeft = useCallback(() => {
    const currentIndex = pageOrder.indexOf(currentPage);
    if (currentIndex < pageOrder.length - 1) {
      handleNavigate(pageOrder[currentIndex + 1]);
    }
  }, [currentPage, handleNavigate]);

  const handleSwipeRight = useCallback(() => {
    const currentIndex = pageOrder.indexOf(currentPage);
    if (currentIndex > 0) {
      handleNavigate(pageOrder[currentIndex - 1]);
    }
  }, [currentPage, handleNavigate]);

  const swipeHandlers = useMemo(() => ({
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
  }), [handleSwipeLeft, handleSwipeRight]);

  useSwipe(swipeHandlers, 80);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "experience":
        return <ExperiencePage onNavigate={handleNavigate} />;
      case "projects":
        return <ProjectsPage onNavigate={handleNavigate} />;
      case "certifications":
        return <CertificationsPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Parallax Background Elements */}
      <ParallaxBackground />

      {/* Sidebar Navigation */}
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content with Page Transitions */}
      <main className="md:ml-16 pb-20 md:pb-0 min-h-screen relative z-10">
        <PageTransition pageKey={currentPage}>
          {renderPage()}
        </PageTransition>
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
