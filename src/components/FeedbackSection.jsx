import React from "react";

const feedbacks = [
  {
    client: "Jane Doe",
    feedback: "John delivered exceptional designs for our brand. Highly recommend!",
  },
  {
    client: "Mark Smith",
    feedback: "The UX/UI designs exceeded our expectations and improved our conversions.",
  },
  {
    client: "Lisa Wong",
    feedback: "Professional and creative! John is great to work with.",
  },
];

const FeedbackSection = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2 style={{ fontSize: "32px", color: "#333", textAlign: "center", marginBottom: "40px" }}>
        Clients Feedback
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            style={{
              maxWidth: "300px",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#ffffff",
            }}
          >
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "10px" }}>
              "{feedback.feedback}"
            </p>
            <h4 style={{ fontSize: "18px", color: "#333" }}>- {feedback.client}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
