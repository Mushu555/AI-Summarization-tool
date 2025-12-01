import React, { useState, useEffect } from 'react';
import FeatureCard from '../components/FeatureCard';
import styles from '../styles/styles';

const LandingPage = ({ setCurrentPage }) => {
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowFeatures(true), 300);
  }, []);

  return (
    <div style={styles.landingContainer}>

      {/* ---------------- HERO SECTION ---------------- */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          
          {/* Logo Icon */}
          <div style={styles.heroIcon}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="#00D9FF" />
              <circle cx="8" cy="12" r="2" fill="#9D4EDD" />
              <path d="M19 12l-2-2M19 12l-2 2" stroke="#9D4EDD" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Hero Heading */}
          <h1 style={styles.heroTitle}>AI-Powered Video Summarization</h1>

          {/* Hero Subtitle */}
          <p style={styles.heroSubtitle}>
            Transform your videos into actionable insights with AI. Get summaries,
            chapters, quizzes, and multi-language subtitles in minutes.
          </p>

          {/* CTA Buttons */}
          <div style={styles.heroCTA}>
            <button
              onClick={() => setCurrentPage('auth')}
              style={styles.primaryBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
              </svg>
              Get Started Free
            </button>

            <button style={styles.secondaryBtn}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section
        style={{
          ...styles.featuresSection,
          opacity: showFeatures ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      >
        <div style={styles.featuresGrid}>

          {/* ----------- AI Summaries ----------- */}
          <FeatureCard
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9.5 2A7.5 7.5 0 0 1 17 9.5c0 1.33-.35 2.58-.95 3.66l5.89 5.9-1.41 1.41-5.9-5.89A7.5 7.5 0 0 1 2 9.5 7.5 7.5 0 0 1 9.5 2z" fill="#00D9FF" />
                <circle cx="9.5" cy="9.5" r="3.5" fill="#1E293B" />
              </svg>
            }
            title="AI Summaries"
            description="Get concise AI-generated summaries of your videos"
            link="/upload"
          />

          {/* ----------- Smart Chapters ----------- */}
          <FeatureCard
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#00D9FF" strokeWidth="2" fill="none" />
                <line x1="3" y1="9" x2="21" y2="9" stroke="#00D9FF" strokeWidth="2" />
                <line x1="3" y1="15" x2="21" y2="15" stroke="#00D9FF" strokeWidth="2" />
              </svg>
            }
            title="Smart Chapters"
            description="Automatically organize content into topic-based chapters"
            link="/dashboard"
          />

          {/* ----------- Multi-Language ----------- */}
          <FeatureCard
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <text x="4" y="16" fontSize="14" fill="#9D4EDD" fontWeight="bold">A</text>
                <text x="14" y="16" fontSize="14" fill="#00D9FF" fontWeight="bold">字</text>
                <path d="M12 2L9 8h6l-3-6zM12 22l-3-6h6l-3 6z" fill="#00D9FF" opacity="0.3" />
              </svg>
            }
            title="Multi-Language"
            description="Generate subtitles in multiple languages automatically"
            link="/language"   // You will create LanguagePage.js
          />

          {/* ----------- Smart Quizzes ----------- */}
          <FeatureCard
            icon={
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15 8.5L22 9.3L17 14.2L18.5 21L12 17.5L5.5 21L7 14.2L2 9.3L9 8.5L12 2Z" fill="#FFD700" />
              </svg>
            }
            title="Smart Quizzes"
            description="Test knowledge with AI-generated quizzes"
            link="/dashboard"
          />

        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaBox}>
          <h2 style={styles.ctaTitle}>Ready to Transform Your Videos?</h2>
          <p style={styles.ctaSubtitle}>
            Join thousands of users leveraging AI to make their videos more accessible and engaging.
          </p>

          <button
            onClick={() => setCurrentPage('auth')}
            style={styles.ctaButton}
          >
            Start Processing Videos Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
