import { useState, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import CertificationsPage from "@/components/pages/CertificationsPage";
import ContactPage from "@/components/pages/ContactPage";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const mainRef = useRef<HTMLElement>(null);

  const handleNavigate = (page: string) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "certifications":
        return <CertificationsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content with Page Transitions */}
      <main ref={mainRef} className="ml-16 h-screen overflow-y-auto custom-scrollbar">
        <PageTransition pageKey={currentPage}>
          {renderPage()}
        </PageTransition>
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop scrollContainerRef={mainRef} />
    </div>
  );
};

export default Index;
