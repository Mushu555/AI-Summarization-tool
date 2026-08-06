import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

const UploadPage = () => {
  const [activeTab, setActiveTab] = useState("video");

  const [file, setFile] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [ytUrl, setYtUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // -----------------------------
  // 📌 VIDEO UPLOAD HANDLER
  // -----------------------------
  const handleVideoUpload = async () => {
    if (!file) return alert("Please choose a video file!");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/videos/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Video upload failed");

      const data = await res.json();

      navigate(`/video/${data.video_id}`, {
        state: {
          summary: data.result.summary,
          transcript: data.result.transcript,
          chapters: data.result.chapters,
        },
      });
    } catch (err) {
      console.error(err);
      alert("Upload Error");
    }
    setLoading(false);
  };

  // -----------------------------
  // 📌 TEXT / PARAGRAPH HANDLER
  // -----------------------------
  const handleTextUpload = async () => {
    if (!textInput.trim()) return alert("Please enter some text");

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/videos/text/summarize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textInput }),
      });

      if (!res.ok) throw new Error("Text summary failed");

      const data = await res.json();

      navigate(`/video/${data.video_id}`, {
        state: {
          summary: data.summary,
          transcript: textInput,
          chapters: data.chapters,
        },
      });
    } catch (err) {
      console.error(err);
      alert("Error processing text");
    }
    setLoading(false);
  };

  // -----------------------------
  // 📌 YOUTUBE URL HANDLER
  // -----------------------------
  const handleYoutubeUpload = async () => {
    if (!ytUrl.trim()) return alert("Please enter a YouTube URL");

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/videos/youtube/summarize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: ytUrl }),
      });

      if (!res.ok) throw new Error("YouTube summary failed");

      const data = await res.json();

      navigate(`/video/${data.video_id}`, {
        state: {
          summary: data.summary,
          transcript: data.transcript,
          chapters: data.chapters,
        },
      });
    } catch (err) {
      console.error(err);
      alert("Error processing YouTube link");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", color: "#fff" }}>
      <h1>Smart Upload</h1>

      {/* ---------------------- TABS UI ------------------------ */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setActiveTab("video")}
          style={{
            padding: "10px 20px",
            background: activeTab === "video" ? "#00D9FF" : "#1E293B",
            border: "none",
            color: activeTab === "video" ? "#000" : "#fff",
            cursor: "pointer",
          }}
        >
          Video Upload
        </button>

        <button
          onClick={() => setActiveTab("text")}
          style={{
            padding: "10px 20px",
            background: activeTab === "text" ? "#00D9FF" : "#1E293B",
            border: "none",
            color: activeTab === "text" ? "#000" : "#fff",
            cursor: "pointer",
          }}
        >
          Text / Paragraph
        </button>

        <button
          onClick={() => setActiveTab("youtube")}
          style={{
            padding: "10px 20px",
            background: activeTab === "youtube" ? "#00D9FF" : "#1E293B",
            border: "none",
            color: activeTab === "youtube" ? "#000" : "#fff",
            cursor: "pointer",
          }}
        >
          YouTube URL
        </button>
      </div>

      {/* ---------------------- CONTENT FOR TABS ---------------------- */}

      {activeTab === "video" && (
        <>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginTop: "20px" }}
          />

          <button
            onClick={handleVideoUpload}
            disabled={loading}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#00D9FF",
              border: "none",
              color: "#000",
              cursor: "pointer",
            }}
          >
            {loading ? "Processing..." : "Upload Video"}
          </button>
        </>
      )}

      {activeTab === "text" && (
        <>
          <textarea
            placeholder="Enter paragraph here..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            style={{
              width: "100%",
              height: "200px",
              marginTop: "20px",
              padding: "12px",
            }}
          ></textarea>

          <button
            onClick={handleTextUpload}
            disabled={loading}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#00D9FF",
              border: "none",
              color: "#000",
              cursor: "pointer",
            }}
          >
            {loading ? "Summarizing..." : "Summarize Text"}
          </button>
        </>
      )}

      {activeTab === "youtube" && (
        <>
          <input
            type="text"
            placeholder="Paste YouTube URL here..."
            value={ytUrl}
            onChange={(e) => setYtUrl(e.target.value)}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "12px",
            }}
          />

          <button
            onClick={handleYoutubeUpload}
            disabled={loading}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#00D9FF",
              border: "none",
              color: "#000",
              cursor: "pointer",
            }}
          >
            {loading ? "Processing..." : "Summarize YouTube Video"}
          </button>
        </>
      )}
    </div>
  );
};

export default UploadPage;
