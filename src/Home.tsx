import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Play Tichu</h1>

      <button onClick={() => navigate("/single")}>싱글플레이</button>
    </div>
  );
}

export default Home;
