import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import VideoGrid from '../components/VideoGrid';
import About from '../components/About';
import Location from '../components/Location';
import Dates from '../components/Dates';
import Schedule from '../components/Schedule';
import Pricing from '../components/Pricing';
import Expertise from '../components/Expertise';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    // Enhanced Intersection Observer for the intro block with better animation
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          
          // Add animated entrance effect
          setTimeout(() => {
            const textEl = entry.target.querySelector('p');
            if (textEl) {
              textEl.style.opacity = '1';
              textEl.style.transform = 'translateY(0)';
            }
          }, 300);
        } else {
          entry.target.classList.remove('opacity-100');
          
          // Reset animation
          const textEl = entry.target.querySelector('p');
          if (textEl) {
            textEl.style.opacity = '0';
            textEl.style.transform = 'translateY(10px)';
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.7,
    });

    const introBlock = document.getElementById('intro-block');
    if (introBlock) {
      observer.observe(introBlock);
      
      // Set initial state for the text element
      const textEl = introBlock.querySelector('p');
      if (textEl) {
        textEl.style.opacity = '0';
        textEl.style.transform = 'translateY(10px)';
        textEl.style.transition = 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s';
      }
    }

    return () => {
      if (introBlock) {
        observer.unobserve(introBlock);
      }
    };
  }, []);

  // Preload critical images for better user experience
  useEffect(() => {
    const preloadImages = [
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2852&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565073624497-7144b641779a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542683305-710078a12f73?q=80&w=2062&auto=format&fit=crop'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Concept />
      <VideoGrid />
      <About />
      <Location />
      <Dates />
      <Schedule />
      <Pricing />
      <Expertise />
      <Contact />
    </Layout>
  );
};

export default Index;
