import React from 'react';

import AddOption from '../AddOption/AddOption';
import Options from '../Options/Options';
import Header from '../Header/Header';
import Action from '../Action/Action';
import OptionModal from '../OptionModal/OptionModal';

export default class IndecisionApp extends React.Component {

  state = {
    options : [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(()=> ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState(()=> ({
      selectedOption
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter Valid Option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exists'
    }
    this.setState(prevState => ({ options : prevState.options.concat(option)}))
  }

  handleClearOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json);
      if(options) {
        this.setState(() => ({options}))
      }
    } catch (e) {
      //do nothing if json data is invalid
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      console.log('saving data');
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('cwu');
  }

  render() {
    const subtitle = "Trust me, I'm a computer!";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0} 
          handlePickOption={this.handlePickOption}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption} 
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearOption ={this.handleClearOption} 
        />
      </div>
    );
  }
};