// App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'; // Assuming you have your i18n configuration in i18n.js

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Use the changeLanguage function from the i18n instance
  };

  return (
    <div className="App">
      <h1>{t('Enquiry Form')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
      <button onClick={() => changeLanguage('ca')}>Ciao</button>
      <button onClick={() => changeLanguage('bb')}>Bubblegum</button>
      <button onClick={() => changeLanguage('hi')}>Hindi</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
    </div>
  );
}

export default App;
