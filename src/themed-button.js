import React from 'react';
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background, marginLeft: '40px', marginTop: '40px', width: '200px', height: '50px'}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
