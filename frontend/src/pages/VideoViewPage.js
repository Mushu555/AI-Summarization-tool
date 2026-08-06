import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "../styles/styles";
import { API_BASE_URL } from "../services/api";

const VideoViewPage = () => {
  const { state } = useLocation();
  const { video_id } = useParams();

  // UI States
  const [language, setLanguage] = useState("hi"); // default Hindi
  const [translatedSummary, setTranslatedSummary] = useState("");
  const [loading, setLoading] = useState(false);

  if (!state) {
    return (
      <div style={{ color: "white", padding: 20 }}>
        <h2>Error</h2>
        <p>No video data received. Please upload a video again.</p>
      </div>
    );
  }

  const { summary, transcript } = state;

  // ----------------------------
  // 🔥 CALL BACKEND FOR TRANSLATION
  // ----------------------------
  const handleTranslate = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/videos/translate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: summary,
          target_lang: language, // <-- FIXED
        }),
      });

      const data = await res.json();

      setTranslatedSummary(data.translated_text); // <-- FIXED
    } catch (err) {
      console.error(err);
      alert("Translation failed");
    }

    setLoading(false);
  };

  return (
    <div style={styles.viewContainer}>
      <div style={styles.viewContent}>
        <h1 style={styles.viewTitle}>Video Summary</h1>

        <p><strong>Video ID:</strong> {video_id}</p>

        {/* ------------------ ORIGINAL SUMMARY ------------------ */}
        <div style={styles.contentSection}>
          <h2 style={styles.contentTitle}>Summary (English)</h2>
          <p style={styles.summaryText}>{summary}</p>
        </div>

        {/* ------------------ TRANSLATION DROPDOWN ------------------ */}
        <div style={{ marginTop: 20 }}>
          <h3 style={{ color: "#00D9FF" }}>Translate Summary</h3>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
            <option value="bn">Bengali</option>
            <option value="ur">Urdu</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
          </select>

          <button
            onClick={handleTranslate}
            style={{
              padding: "10px 20px",
              background: "#00D9FF",
              border: "none",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          >
            {loading ? "Translating..." : "Translate"}
          </button>
        </div>

        {/* ------------------ TRANSLATED SUMMARY ------------------ */}
        {translatedSummary && (
          <div style={styles.contentSection}>
            <h2 style={styles.contentTitle}>Translated Summary</h2>
            <p style={styles.summaryText}>{translatedSummary}</p>
          </div>
        )}

        {/* ------------------ TRANSCRIPT ------------------ */}
        <div style={styles.contentSection}>
          <h2 style={styles.contentTitle}>Transcript</h2>
          <p style={{ whiteSpace: "pre-wrap", color: "white" }}>
            {transcript}
          </p>
        </div>

        {/* ---------- SMART CHAPTERS ---------- */}
      {state.chapters && state.chapters.length > 0 && (
        <div style={styles.contentSection}>
          <h2 style={styles.contentTitle}>Smart Chapters</h2>

          {state.chapters.map((c, i) => (
            <div
              key={i}
              style={{
                background: "#1E293B",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <h3 style={{ color: "#00D9FF" }}>{c.title}</h3>
              <p style={{ color: "white" }}>{c.summary}</p>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default VideoViewPage;
