import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OnboardingDeck from '../onboarding_deck_v2';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OnboardingDeck />
  </React.StrictMode>
);
