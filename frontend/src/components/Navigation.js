import React from 'react';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/styles';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.navLeft}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
                <path d="M9 17V7l7 5-7 5z" fill="#00FFFF" />
                <path d="M19 12l-1.5-1.5M19 12l-1.5 1.5M19 12h-6" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span style={styles.logoText}>VideoAI</span>
          </div>
        </div>
        
        <div style={styles.navRight}>
          {user ? (
            <>
              <button onClick={() => setCurrentPage('dashboard')} style={styles.navLink}>
                Dashboard
              </button>
              <button onClick={() => setCurrentPage('upload')} style={styles.navLink}>
                Upload Video
              </button>
              <div style={styles.userSection}>
                <span style={styles.userName}>{user.username}</span>
                <button onClick={logout} style={styles.logoutBtn}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <button onClick={() => setCurrentPage('home')} style={styles.navLink}>
                Home
              </button>
              <button onClick={() => setCurrentPage('auth')} style={styles.getStartedBtn}>
                Get Started Free
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
