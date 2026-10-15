import Home from "./pages/home.jsx";

async function testBackend() {
  try {
    const response = await fetch("http://127.0.0.1:8000/");
    const data = await response.json();
    console.log("TripMate backend:", data.message);
  } catch (error) {
    console.error("Backend connection failed:", error);
  }
}

function App() {
  return (
    <>
      <Home />

      <button
        onClick={testBackend}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 18px",
          background: "#172033",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        Test Backend
      </button>
    </>
  );
}

export default App;