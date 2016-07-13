import styles from './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

const App = React.createClass({
  getInitialState: function () {
    return { text: '# Type your markup in here!' };
  },
  onInputChange: function (e) { 
    return this.setState({text: e.target.value});
  },
  mark: function () {
    return { __html: marked(this.state.text, {sanitize: true}) };
  },
  render: function () {
    return (
      <div className={styles.app}>
        <textarea className={styles.textBox} value={this.state.text} onChange={this.onInputChange}>
        </textarea>
        <div className={styles.textBox} dangerouslySetInnerHTML={this.mark()}  />
      </div>
    );
  }
});
  
ReactDOM.render(<App/>, document.getElementById('app'));
