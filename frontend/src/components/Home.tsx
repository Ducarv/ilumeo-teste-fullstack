import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateUserCode } from "../services/GenerateUserCode";
import "./Home.css";

function Home() {
  const [userCode, setUserCode] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const code = generateUserCode();
    setUserCode(code);
  }, []);

  const handleConfirm = () => {
    nav("/points", { state: { userCode }})
  }

  return (
    <div className="home-container">
      <p>
        Ponto <strong>Ilumeo</strong>
      </p>
      <div>
        <div className="input-container">
          <label htmlFor="userCode">Código do usuário</label>
          <input type="text" id="userCode" value={userCode} placeholder="" />
        </div>
        <button onClick={handleConfirm}>Confirmar</button>
      </div>
    </div>
  );
}

export default Home;
