import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import FacebookPixel from './FacebookPixel';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children,
  title,
  description,
  image,
  url,
  type
}) => {
  useEffect(() => {
    // Enhanced fade effect with Apple's smooth animations
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-in-section');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 50) && (elementBottom > 0);
        if (isVisible) {
          element.classList.add('is-visible');
        }
      });
    };

    // Initial check for elements already in view on load with a slight delay
    setTimeout(() => {
      handleScroll();
    }, 200);

    // Use requestAnimationFrame for smoother scroll handling
    let requestId: number;
    const onScroll = () => {
      requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white antialiased">
      <SEO 
        title={title}
        description={description}
        image={image}
        url={url}
        type={type}
      />
      <FacebookPixel />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
