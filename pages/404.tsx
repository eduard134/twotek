import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Custom404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="astronaut">
          <img src="/images/astronaut.png" alt="Astronaut" />
        </div>
        <h1 className="font-semibold">404</h1>
        <p>A intervenit o dificultate. Te rugăm să mai încerci</p>
        <div className="back-to-earth">
          <Link href="/">
            Reveniți la <span className="font-semibold text-2xl">2Tek</span>{" "}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .error-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: radial-gradient(circle, #0c2f5e, transparent);
        }

        .error-content {
          text-align: center;
          color: #fff;
        }

        .astronaut {
          animation: float 4s infinite ease-in-out;
        }

        .astronaut img {
          width: 100px;
        }

        .animated-text {
          animation: bounce 2s infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(0, 10px);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .back-to-earth {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center; /* Center align the link */
          text-decoration: none;
          color: #64ffda;
          transition: color 0.3s;
        }

        .back-to-earth a {
          color: #64ffda; /* Change the link color */
        }

        .back-to-earth:hover {
          text-decoration: underline;
          color: #33ffaa;
        }
      `}</style>
    </div>
  );
};

export default Custom404;
