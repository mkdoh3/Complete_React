
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = "Trust me, I'm a computer!";
    const options = ['test1', 'test2', 'test3', 'test4']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <BigButton />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}


//react enforces uppercase in class name, not optional!
class Header extends React.Component {
  //render must always be defined in a react component!
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>

    )
  }
}

class BigButton extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <div>
        <p>Add an option: </p>
      </div>
    )
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))