export default function TwoColumnSample({ children }) {
  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr 200px" }}>
      <div style={{ color: "#333", backgroundColor: "white", padding: "40px" }}>
        {children}
      </div>
      <div style={{ color: "#333", backgroundColor: "pink", padding: "40px" }}>
        右のエリア
      </div>
    </div>
  );
}
