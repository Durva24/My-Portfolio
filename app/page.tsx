import React, { useEffect, useRef } from 'react';
import './Portfolio.css'; // Add your CSS here or inline

const Portfolio: React.FC = () => {
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    fadeRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      shapeRefs.current.forEach((shape, i) => {
        if (shape) {
          const speed = 0.5 + i * 0.1;
          shape.style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const assignFade = (el: HTMLElement | null, idx: number) => {
    fadeRefs.current[idx] = el;
  };

  const assignShape = (el: HTMLDivElement | null, idx: number) => {
    shapeRefs.current[idx] = el;
  };

  return (
    <>
      {/* Background Shapes */}
      <div className="bg-elements">
        <div ref={(el) => assignShape(el, 0)} className="floating-shape shape-1" />
        <div ref={(el) => assignShape(el, 1)} className="floating-shape shape-2" />
        <div ref={(el) => assignShape(el, 2)} className="floating-shape shape-3" />
      </div>

      <nav>
        <div className="container nav-container">
          <div className="logo">Can</div>
          <button className="nav-toggle" aria-label="Toggle navigation">
            ☰
          </button>
        </div>
      </nav>

      <main>
        <section className="hero" id="hero">
          <div className="container hero-content">
            <div className="hero-badge">FULL‑FEATURED WEB SERVICES</div>
            <h1>
              Hi, I’m <span className="hero-highlight">Can</span> 👋
              <br />
              I build <span className="hero-highlight">digital products</span>.
            </h1>
            <p>
              I’m an engineer focusing on web development and e‑commerce. I provide freelance
              web development solutions to my clients as a 1v1 expert and Shopify partner.
            </p>
            <a href="#contact" className="cta-button">
              Contact
            </a>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <h2 ref={(el) => assignFade(el, 0)} className="fade-in">
              I build websites, ecommerce stores, and web apps.
            </h2>
            <p
              ref={(el) => assignFade(el, 1)}
              className="fade-in"
              style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '1.125rem' }}
            >
              I provide full‑featured web services including design, development & SEO. I also
              work with Django, Atomic.js, Next.js, React, Svelte & SolidJS.
            </p>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">E‑COMMERCE SOLUTIONS</div>
              <h2 ref={(el) => assignFade(el, 2)} className="fade-in">
                E‑COMMERCE
              </h2>
              <p
                ref={(el) => assignFade(el, 3)}
                className="fade-in"
                style={{ color: 'var(--muted)', fontSize: '1.125rem' }}
              >
                I provide web solutions on Shopify & Wix as a specialist developer.
              </p>
            </div>

            <div ref={(el) => assignFade(el, 4)} className="platform-logos fade-in">
              <div className="platform-logo">Shopify</div>
              <div className="platform-logo">Wix</div>
              <div className="platform-logo">Webflow</div>
            </div>
          </div>
        </section>

        <section id="contact" className="container fade-in" ref={(el) => assignFade(el, 5)}>
          <h2>Contact Me</h2>
          <p>
            Fill in the form, drop an email at{' '}
            <a href="mailto:you@example.com">you@example.com</a>, or connect on LinkedIn.
          </p>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>
            Crafted with <span className="footer-heart">♥</span> by Can • Portfolio 2025
          </p>
          <p>Building digital experiences that matter</p>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
