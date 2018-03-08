
class IndecisionApp extends React.Component {
  constructor(props){
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: []
    }
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
    console.log('cwu')
  }

  handleDeleteOptions() {
    this.setState(()=> ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
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
    this.setState(prevState => ({ options : prevState.options.concat(option)}))
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
        <Counter count={42} />
      </div>
    )
  }
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );  
}

Header.defaultProps = {
  title: 'Indecision App'
}

const Action = (props) => {
    return (
      <div>
        <button 
          disabled={!props.hasOptions}
          onClick={props.handlePickOption}>
          What should I do?
        </button>
      </div>
    );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>
        Remove All
      </button>
      {props.options.length === 0 && <p>please add an option to get started</p>}
      {props.options.map(option => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption} />
      ))}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
        {props.optionText}
        <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)}
        }>
          remove
        </button>
    </div>
  )
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
    this.setState(() => ({ error }));
    if(!error) {
      e.target.elements.option.value = '';
    }
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
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    if(!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
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