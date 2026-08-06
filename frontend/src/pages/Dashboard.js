import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/styles";
import { API_BASE_URL } from "../services/api";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  // Fetch videos on page load
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/videos/list`)
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  // Handle clicking on a video card
  const handleVideoClick = (video) => {
    navigate(`/video/${video._id}`, {
      state: {
        summary: video.summary,
        transcript: video.transcript,
      },
    });
  };

  // Delete video
  const deleteVideo = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    const res = await fetch(`${API_BASE_URL}/api/videos/delete/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setVideos((prev) => prev.filter((v) => v._id !== id));
    } else {
      alert("Failed to delete video");
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.dashboardHeader}>
        <h2 style={styles.dashboardTitle}>My Videos</h2>
        <button
          onClick={() => navigate("/upload")}
          style={styles.uploadBtnHeader}
        >
          + Upload Video
        </button>
      </div>

      {videos.length === 0 ? (
        <div style={styles.emptyState}>No videos yet</div>
      ) : (
        <div style={styles.videosGrid}>
          {videos.map((video) => (
            <div key={video._id} style={styles.videoCard}>
              {/* CLICKABLE PART */}
              <div onClick={() => handleVideoClick(video)}>
                <div style={styles.videoCardThumb}>
                  <div style={styles.playOverlay}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="rgba(0, 217, 255, 0.2)"
                      />
                      <path
                        d="M10 8l6 4-6 4V8z"
                        fill="#00D9FF"
                      />
                    </svg>
                  </div>
                </div>

                <div style={styles.videoCardContent}>
                  <h3 style={styles.videoCardTitle}>
                    {video.title || "Video Summary"}
                  </h3>

                  <div style={styles.videoCardMeta}>
                    <span>⏱ 5:00</span>
                    <span>
                      📅 {video.created_at?.slice(0, 10) || "Unknown"}
                    </span>
                  </div>

                  <div style={styles.videoCardFooter}>
                    <span style={styles.statusSuccess}>✓ Processed</span>
                  </div>
                </div>
              </div>

              {/* GENERATE QUIZ BUTTON */}
              <button
                style={{
                  marginTop: "10px",
                  background: "#00D9FF",
                  color: "#000",
                  border: "none",
                  padding: "8px 12px",
                  width: "100%",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
                onClick={(e) => {
                  e.stopPropagation();   // IMPORTANT (avoid clicking card)
                  navigate(`/quiz/${video._id}`);
                }}
              >
                Generate Quiz
              </button>

              {/* DELETE BUTTON */}
              <button
                style={{
                  marginTop: "10px",
                  background: "#EF4444",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  width: "100%",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => deleteVideo(video._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
