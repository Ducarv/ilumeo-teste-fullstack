import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateUserCode } from "../services/GenerateUserCode";
import { createUser, findUserById } from "../services/api/userApi";
import "./Home.css";

function Home() {
  const [generatedCode, setGeneratedCode] = useState("");
  const [manualUserCode, setManualUserCode] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const code = generateUserCode();
    setGeneratedCode(code);
    setManualUserCode(code);
  }, []);

  const handleConfirm = async () => {
    try {
      let user;

      if (manualUserCode.trim() === generatedCode) {
        user = await createUser(manualUserCode);
      } else {
        user = await findUserById(manualUserCode);
      }

      nav("/points", { state: { userCode: user.id } });
    } catch (error) {
      console.error("Error handling confirmation:", error);
    }
  };

  return (
    <div className="home-container">
      <p>
        Ponto <strong>Ilumeo</strong>
      </p>
      <div>
        <div className="input-container">
          <label htmlFor="userCode">Código do usuário</label>
          <input
            type="text"
            id="userCode"
            value={manualUserCode}
            onChange={(e) => setManualUserCode(e.target.value)}
            placeholder=""
          />
        </div>
        <button onClick={handleConfirm}>Confirmar</button>
      </div>
    </div>
  );
}

export default Home;
