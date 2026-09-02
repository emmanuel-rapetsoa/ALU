import React, { useState } from "react";
import "./ProfileSelector.css";

const profiles = [
  {
    name: "STUDENT",
    role: "LEARNER",
    number: "01",
  },
  {
    name: "ALUMNI",
    role: "GRADUATE",
    number: "02",
  },
  {
    name: "EMPLOYER",
    role: "RECRUITER",
    number: "03",
  },
];

export default function ProfileSelector() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <main className="profile-page">
      <section className="profile-container">

        <div className="header">
          <div className="logo-mark">&gt;_</div>
          <span>PROFILE SELECT</span>
        </div>

        <div className="content">
          <div className="system-status">
            <span />
            SYSTEM ONLINE
          </div>

          <h1>WHO ARE YOU?</h1>

          <p className="subtitle">
            Select an account to continue
          </p>

          <div className="profiles">
            {profiles.map((profile) => (
              <button
                key={profile.name}
                className={`profile-card ${
                  selectedProfile === profile.name ? "selected" : ""
                }`}
                onClick={() => setSelectedProfile(profile.name)}
              >
                <div className="avatar">
                  <span>{profile.number}</span>
                </div>

                <h2>{profile.name}</h2>

                <p>{profile.role}</p>

                <div className="card-line" />
              </button>
            ))}
          </div>

          <div className="status">
            {selectedProfile
              ? `ACCESSING // ${selectedProfile}`
              : "SELECT A PROFILE TO CONTINUE"}
          </div>
        </div>

        <footer>
          <span>SECURE CONNECTION</span>
          <span>•</span>
          <span>2026</span>
        </footer>

      </section>
    </main>
  );
}