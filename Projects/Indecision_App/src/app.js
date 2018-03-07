
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePickOption = this.handlePickOption.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)

    this.state = { options: [] }
  }

  handleDeleteOptions() {
    this.setState(()=>{
      return { options: [] }
    });
  }

  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter Valid Option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'this option already exists'
    }
    this.setState(prevState => {
      return { options :prevState.options.concat(option)}
    })
  }

  render() {
    const title = 'Indecision App';
    const subtitle = "Trust me, I'm a computer!";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0} 
          handlePickOption={this.handlePickOption}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption} 
        />
        <Counter />
      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>

    )
  }
}


class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePickOption}
        >
        What should I do?</button>
      </div>
    );
  }
}


class Options extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map(option => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
         {this.props.optionText}
      </div>
    )
  }
}


class AddOption extends React.Component {
  constructor(props){
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {error: undefined}
  }

  handleSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error }
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {count: 0}
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }
  handleAddOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  handleMinusOne() {
    this.setState(prevState => {
      return { count: prevState.count -1 }
    })
  }
  handleReset() {
    this.setState(() => {
     return { count: 0 }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))