import { useNavigate } from "react-router-dom";

function NotImplemented() {
  const navigate = useNavigate();
  return (
    <main className="main">
      <div className="error">
        <div className="error__title">
          <h2 className="heading-secondary heading-secondary--error">
            Sorry Feature Under Development
          </h2>
        </div>
        <h2 className="error__emoji">🏗️ 🚧</h2>
        <button className="btn error__btn" onClick={() => navigate(-1)}>
          Go to App
        </button>
      </div>
    </main>
  );
}

export default NotImplemented;
