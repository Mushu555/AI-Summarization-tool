import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/styles';

const AuthPage = ({ setCurrentPage }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const { login, signup } = useAuth();

  const handleSubmit = async () => {
    setError("");

    try {
      if (isSignUp) {
        // VALIDATION
        if (!formData.username || !formData.email || !formData.password) {
          setError("Please fill all fields");
          return;
        }

        const res = await signup(formData.username, formData.email, formData.password);

        if (res.access_token) {
          setCurrentPage("dashboard");
        } else {
          setError("Signup failed");
        }

      } else {
        // LOGIN FLOW
        if (!formData.username || !formData.password) {
          setError("Please enter username and password");
          return;
        }

        const res = await login(formData.username, formData.password);

        if (res.access_token) {
          setCurrentPage("dashboard");
        } else {
          setError("Login failed");
        }
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div style={styles.authContainer}>
      <div style={styles.authBox}>
        <div style={styles.authHeader}>
          <div style={styles.authLogo}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="#00D9FF" />
              <circle cx="8" cy="12" r="1.5" fill="#9D4EDD" />
            </svg>
          </div>
          <h2 style={styles.authBrand}>VideoAI</h2>
          <p style={styles.authTagline}>AI-Powered Video Summarization</p>
        </div>

        {/* Tabs */}
        <div style={styles.authTabs}>
          <button onClick={() => setIsSignUp(false)} style={!isSignUp ? styles.authTabActive : styles.authTab}>
            Sign In
          </button>
          <button onClick={() => setIsSignUp(true)} style={isSignUp ? styles.authTabActive : styles.authTab}>
            Sign Up
          </button>
        </div>

        <div style={styles.authForm}>
          {/* Username */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={formData.username}
              placeholder="john"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              style={styles.authInput}
            />
          </div>

          {/* Password */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={formData.password}
              placeholder="••••••••"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={styles.authInput}
            />
          </div>

          {/* Email only in Sign-up */}
          {isSignUp && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={formData.email}
                placeholder="you@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={styles.authInput}
              />
            </div>
          )}

          {error && <p style={styles.authError}>{error}</p>}

          <button onClick={handleSubmit} style={styles.authSubmitBtn}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
