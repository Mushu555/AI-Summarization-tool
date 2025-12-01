const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#0F172A',
    color: '#E2E8F0'
  },
  
  // Loading
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#0F172A'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid #1E293B',
    borderTop: '4px solid #00D9FF',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  loadingText: {
    marginTop: '20px',
    color: '#94A3B8',
    fontSize: '16px'
  },

  // Navigation
  navbar: {
    backgroundColor: '#1E293B',
    borderBottom: '1px solid #334155',
    padding: '16px 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer'
  },
  logoIcon: {
    display: 'flex',
    alignItems: 'center'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #00D9FF 0%, #9D4EDD 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  navLink: {
    backgroundColor: 'transparent',
    color: '#94A3B8',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '15px',
    borderRadius: '6px',
    transition: 'all 0.2s',
    fontWeight: '500'
  },
  getStartedBtn: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '10px 24px',
    cursor: 'pointer',
    fontSize: '15px',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'all 0.2s'
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginLeft: '8px'
  },
  userName: {
    color: '#E2E8F0',
    fontSize: '14px',
    fontWeight: '500'
  },
  logoutBtn: {
    backgroundColor: '#334155',
    color: '#E2E8F0',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '6px',
    fontWeight: '500',
    transition: 'all 0.2s'
  },

  // Main
  main: {
    minHeight: 'calc(100vh - 73px)'
  },

  // Landing Page
  landingContainer: {
    width: '100%'
  },
  heroSection: {
    padding: '120px 24px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)'
  },
  heroContent: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  heroIcon: {
    marginBottom: '32px',
    display: 'flex',
    justifyContent: 'center'
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: 'bold',
    marginBottom: '24px',
    background: 'linear-gradient(135deg, #00D9FF 0%, #9D4EDD 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1.2'
  },
  heroSubtitle: {
    fontSize: '20px',
    color: '#94A3B8',
    marginBottom: '48px',
    lineHeight: '1.6',
    maxWidth: '700px',
    margin: '0 auto 48px'
  },
  heroCTA: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s'
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#E2E8F0',
    border: '2px solid #334155',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },

  // Features Section
  featuresSection: {
    padding: '80px 24px',
    backgroundColor: '#1E293B'
  },
  featuresGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px'
  },
  featureCard: {
    backgroundColor: '#0F172A',
    padding: '32px',
    borderRadius: '16px',
    textAlign: 'center',
    border: '1px solid #334155',
    transition: 'all 0.3s'
  },
  featureIcon: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#E2E8F0',
    marginBottom: '12px'
  },
  featureDescription: {
    fontSize: '15px',
    color: '#94A3B8',
    lineHeight: '1.6'
  },

  // CTA Section
  ctaSection: {
    padding: '80px 24px',
    backgroundColor: '#0F172A'
  },
  ctaBox: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '60px 40px',
    background: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
    borderRadius: '24px',
    textAlign: 'center'
  },
  ctaTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '16px'
  },
  ctaSubtitle: {
    fontSize: '18px',
    color: '#E0E7FF',
    marginBottom: '32px',
    lineHeight: '1.6'
  },
  ctaButton: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '16px 48px',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },

  // Auth Page
  authContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 73px)',
    padding: '40px 24px',
    background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)'
  },
  authBox: {
    backgroundColor: '#1E293B',
    padding: '48px',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '480px',
    border: '1px solid #334155'
  },
  authHeader: {
    textAlign: 'center',
    marginBottom: '32px'
  },
  authLogo: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px'
  },
  authBrand: {
    fontSize: '32px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #00D9FF 0%, #9D4EDD 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '8px'
  },
  authTagline: {
    fontSize: '14px',
    color: '#94A3B8'
  },
  authTabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '32px',
    backgroundColor: '#0F172A',
    padding: '4px',
    borderRadius: '10px'
  },
  authTab: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#94A3B8',
    border: 'none',
    padding: '12px',
    cursor: 'pointer',
    fontSize: '15px',
    borderRadius: '8px',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  authTabActive: {
    flex: 1,
    backgroundColor: '#1E293B',
    color: '#00D9FF',
    border: 'none',
    padding: '12px',
    cursor: 'pointer',
    fontSize: '15px',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'all 0.2s'
  },
  authWelcome: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: '8px'
  },
  authSubtitle: {
    fontSize: '14px',
    color: '#94A3B8',
    marginBottom: '24px'
  },
  authForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#E2E8F0'
  },
  authInput: {
    backgroundColor: '#0F172A',
    color: '#E2E8F0',
    border: '1px solid #334155',
    padding: '12px 16px',
    fontSize: '15px',
    borderRadius: '8px',
    outline: 'none',
    transition: 'all 0.2s'
  },
  authError: {
    color: '#F87171',
    fontSize: '14px',
    margin: '0'
  },
  authSubmitBtn: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'all 0.2s'
  },

  // Dashboard
  dashboardContainer: {
    padding: '40px 24px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  dashboardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  },
  dashboardTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#E2E8F0'
  },
  uploadBtnHeader: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  emptyState: {
    textAlign: 'center',
    padding: '80px 24px',
    backgroundColor: '#1E293B',
    borderRadius: '16px',
    border: '1px solid #334155'
  },
  emptyTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#E2E8F0',
    marginBottom: '12px'
  },
  emptyText: {
    fontSize: '16px',
    color: '#94A3B8',
    marginBottom: '32px'
  },
  emptyButton: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  videosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px'
  },
  videoCard: {
    backgroundColor: '#1E293B',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: '1px solid #334155'
  },
  videoCardThumb: {
    backgroundColor: '#0F172A',
    height: '180px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  playOverlay: {
    transition: 'all 0.3s'
  },
  videoCardContent: {
    padding: '20px'
  },
  videoCardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#E2E8F0',
    marginBottom: '12px',
    lineHeight: '1.4'
  },
  videoCardMeta: {
    display: 'flex',
    gap: '16px',
    fontSize: '14px',
    color: '#94A3B8',
    marginBottom: '12px'
  },
  videoCardDuration: {},
  videoCardDate: {},
  videoCardFooter: {
    paddingTop: '12px',
    borderTop: '1px solid #334155'
  },
  statusSuccess: {
    color: '#34D399',
    fontSize: '13px',
    fontWeight: '500'
  },
  statusProcessing: {
    color: '#FBBF24',
    fontSize: '13px',
    fontWeight: '500'
  },

  // Upload Page
  uploadContainer: {
    padding: '40px 24px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  backButton: {
    backgroundColor: '#334155',
    color: '#E2E8F0',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '24px',
    transition: 'all 0.2s'
  },
  uploadBox: {
    backgroundColor: '#1E293B',
    padding: '40px',
    borderRadius: '16px',
    border: '1px solid #334155'
  },
  uploadTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: '8px'
  },
  uploadSubtitle: {
    fontSize: '15px',
    color: '#94A3B8',
    marginBottom: '32px'
  },
  uploadFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  uploadInput: {
    backgroundColor: '#0F172A',
    color: '#E2E8F0',
    border: '1px solid #334155',
    padding: '12px 16px',
    fontSize: '15px',
    borderRadius: '8px',
    outline: 'none'
  },
  dropZone: {
    border: '2px dashed #334155',
    borderRadius: '12px',
    padding: '60px 24px',
    textAlign: 'center',
    backgroundColor: '#0F172A',
    transition: 'all 0.3s',
    cursor: 'pointer'
  },
  dropZoneActive: {
    borderColor: '#00D9FF',
    backgroundColor: '#1E293B'
  },
  dropZoneLabel: {
    cursor: 'pointer',
    display: 'block'
  },
  dropZoneText: {
    fontSize: '16px',
    color: '#E2E8F0',
    marginBottom: '8px',
    fontWeight: '500'
  },
  dropZoneHint: {
    fontSize: '14px',
    color: '#94A3B8'
  },
  fileInputHidden: {
    display: 'none'
  },
  fileSelected: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  },
  fileName: {
    fontSize: '16px',
    color: '#E2E8F0',
    fontWeight: '500'
  },
  fileSize: {
    fontSize: '14px',
    color: '#94A3B8'
  },
  removeFileBtn: {
    backgroundColor: '#EF4444',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '8px'
  },
  progressSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  progressBarContainer: {
    width: '100%',
    height: '8px',
    backgroundColor: '#334155',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00D9FF',
    transition: 'width 0.3s ease'
  },
  progressText: {
    fontSize: '14px',
    color: '#94A3B8',
    textAlign: 'center'
  },
  uploadBtn: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  uploadBtnDisabled: {
    backgroundColor: '#334155',
    color: '#64748B',
    border: 'none',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'not-allowed'
  },

  // Video View Page
  viewContainer: {
    padding: '40px 24px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  viewContent: {
    backgroundColor: '#1E293B',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid #334155'
  },
  viewTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: '24px'
  },
  videoPlayerContainer: {
    marginBottom: '32px'
  },
  videoPlayer: {
    backgroundColor: '#000000',
    borderRadius: '12px',
    aspectRatio: '16 / 9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  playButton: {
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  videoPlaceholder: {
    color: '#64748B',
    fontSize: '14px',
    marginTop: '16px'
  },
  tabsContainer: {
    marginTop: '32px'
  },
  tabsList: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    borderBottom: '1px solid #334155',
    paddingBottom: '0'
  },
  tabButton: {
    backgroundColor: 'transparent',
    color: '#94A3B8',
    border: 'none',
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s'
  },
  tabActive: {
    backgroundColor: 'transparent',
    color: '#00D9FF',
    border: 'none',
    padding: '12px 24px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    borderBottom: '2px solid #00D9FF',
    transition: 'all 0.2s'
  },
  tabContent: {
    minHeight: '300px'
  },
  contentSection: {
    padding: '8px 0'
  },
  contentTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#E2E8F0',
    marginBottom: '20px'
  },
  summaryText: {
    fontSize: '16px',
    color: '#CBD5E1',
    lineHeight: '1.8'
  },
  highlightsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  highlightItem: {
    backgroundColor: '#0F172A',
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    border: '1px solid #334155'
  },
  highlightTime: {
    fontWeight: '600',
    color: '#00D9FF',
    fontSize: '14px',
    minWidth: '60px'
  },
  highlightDesc: {
    color: '#CBD5E1',
    fontSize: '15px'
  },
  chaptersList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  chapterItem: {
    backgroundColor: '#0F172A',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    border: '1px solid #334155',
    borderLeft: '4px solid #00D9FF'
  },
  chapterNumber: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '18px'
  },
  chapterInfo: {
    flex: 1
  },
  chapterTitle: {
    fontSize: '17px',
    fontWeight: '600',
    color: '#E2E8F0',
    marginBottom: '4px'
  },
  chapterTime: {
    fontSize: '14px',
    color: '#94A3B8'
  },
  subtitlesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '12px'
  },
  subtitleItem: {
    backgroundColor: '#0F172A',
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #334155'
  },
  subtitleLang: {
    color: '#E2E8F0',
    fontSize: '15px',
    fontWeight: '500'
  },
  downloadButton: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '6px 12px',
    fontSize: '13px',
    fontWeight: '600',
    borderRadius: '6px',
    cursor: 'pointer'
  },

  // Quiz
  quizContainer: {
    padding: '8px 0'
  },
  quizHeader: {
    marginBottom: '24px'
  },
  quizProgress: {
    fontSize: '14px',
    color: '#94A3B8',
    marginBottom: '12px',
    display: 'block'
  },
  progressDots: {
    display: 'flex',
    gap: '8px'
  },
  progressDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#334155'
  },
  progressDotActive: {
    backgroundColor: '#00D9FF'
  },
  progressDotComplete: {
    backgroundColor: '#34D399'
  },
  quizQuestion: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#E2E8F0',
    marginBottom: '32px',
    lineHeight: '1.5'
  },
  quizOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  quizOption: {
    backgroundColor: '#0F172A',
    color: '#E2E8F0',
    border: '2px solid #334155',
    padding: '16px 20px',
    fontSize: '15px',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.2s'
  },
  quizOptionCorrect: {
    backgroundColor: '#064E3B',
    borderColor: '#34D399',
    color: '#D1FAE5'
  },
  quizOptionWrong: {
    backgroundColor: '#7F1D1D',
    borderColor: '#F87171',
    color: '#FEE2E2'
  },
  optionLetter: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: '#334155',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '14px',
    flexShrink: 0
  },
  optionText: {
    flex: 1
  },
  quizResult: {
    textAlign: 'center',
    padding: '60px 24px'
  },
  resultIcon: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center'
  },
  resultTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: '16px'
  },
  resultScore: {
    fontSize: '20px',
    color: '#94A3B8',
    marginBottom: '12px'
  },
  resultPercentage: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#00D9FF',
    marginBottom: '32px'
  },
  retakeButton: {
    backgroundColor: '#00D9FF',
    color: '#0F172A',
    border: 'none',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
};

export default styles;
