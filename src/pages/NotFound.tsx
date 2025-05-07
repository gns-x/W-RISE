import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import Button from '../components/ui/Button';
import '../styles/NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="fun-404-container">
      <h1 className="fun-404-title">404</h1>
      <p className="fun-404-subtitle">Well, this is awkward...</p>
      <p className="fun-404-joke">
        You've officially reached the edge of the internet.<br />
        Either this page moved, got deleted, or you just typed like a cat 🐈‍⬛.
      </p>

      <div className="fun-404-buttons">
        <Link to="/">
          <Button variant="outline" leftIcon={<Home size={16} />}>
            Back to Safety
          </Button>
        </Link>
        <Button onClick={() => window.history.back()} leftIcon={<ArrowLeft size={16} />}>
          Panic & Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;