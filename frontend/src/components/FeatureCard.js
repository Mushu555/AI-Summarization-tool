import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/styles";

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div style={styles.featureCard}>
        <div style={styles.featureIcon}>{icon}</div>
        <h3 style={styles.featureTitle}>{title}</h3>
        <p style={styles.featureDescription}>{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
