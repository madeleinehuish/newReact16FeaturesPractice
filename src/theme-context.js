import React from 'react';

export const themes = {
  light: {
    // foreground: '#000000',
    foreground: 'aqua',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    // background: '#222222',
    background: 'aqua'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const ThemeContext2 = React.createContext({
  background: '#d0add6',
  size: '250px',
  border: '1px solid silver',
  margin: '25px'
})
