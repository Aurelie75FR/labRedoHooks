import React from 'react';

const Greetings = ({ children, lang }) => {
  const greet = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';

      case 'en':
        return 'Hello';

      case 'fr':
        return 'Bonjour';

      case 'es':
        return 'Hola';

      default:
        return;
    }
  };

  return (
    <div>
      {greet(lang)} {children}
    </div>
  );
};

export default Greetings;
