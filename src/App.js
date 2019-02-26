import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import ThemeTogglerButton from './theme-toggler-button';
import HooksExample from './hooks-example';
import HooksExample2 from './hooks-example2';
import HooksExampleClassBased from './hooks-example2-class-based';
import MediaApp from './media-example';

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
        <span style={{ marginLeft: '20px'}}>hooks example: counter from React Docs</span>
        <HooksExample />
        <span style={{ marginLeft: '20px'}}>hooks example: from Dan Abramov's talk (this one is the hooks)</span>
        <HooksExample2 />
        <span style={{ marginLeft: '20px'}}>hooks example from Dan Abramov's talk (this one is the class based example)</span>
        <HooksExampleClassBased />
        <MediaApp />
      </React.Fragment>

    );
  }
}

export default App;
