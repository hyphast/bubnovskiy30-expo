import React from 'react';

export const ThemeContext = React.createContext({ //TODO redux
  theme: 'light',
  toggleTheme: () => {},
});