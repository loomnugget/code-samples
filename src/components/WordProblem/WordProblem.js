import React, { Component } from 'react';
import { findMostCommonPhrases } from '../../services/wordProblem';
import PrimaryButton from '../PrimaryButton';
import css from './WordProblem.scss';

class WordProblem extends Component {
  state = {
    text: '',
    result: ''
  }

  handleChange = e => this.setState({ text: e.target.value });

  handleGetPhrases = () => {
    const { text } = this.state;
    const result = findMostCommonPhrases(text);
    console.log('text', text);
    console.log('result', result);
    return result;
  }

  render () {
    const { result } = this.state;

    return (
      <div className={css.wordProblem}>
        <h3>WordProblem</h3>
        <textarea
          className={css.textBox}
          value={this.state.text}
          onChange={this.handleChange}
          resize
        />

        <div className={css.btn}>
          <PrimaryButton text="Submit" color="blue" onClick={this.handleGetPhrases}/>
        </div>

        {result &&
          <div className={css.result}>
            {this.state.result}
          </div>
        }
      </div>
    );
  }
}

export default WordProblem;
