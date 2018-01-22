const app = {
  title: 'Indecision App',
  subtitle: "Trust me, I'm a computer!",
  options: []
}

const onFormSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.optionInput.value;
  if(option) {
    app.options.push(option)
    event.target.elements.optionInput.value = "";
  }
  renderApp();
}

const resetOptions = () => {
  app.options = [];
  renderApp();
}

const numbers = [1,2,3];





const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h4>{app.subtitle}</h4>}
      <p> {app.options.length > 0 ? 'Here are your options: ' : 'No Options :('}</p>
      <p>{app.options.length}</p>
      <button onClick={resetOptions}>Reset Options</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="optionInput" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot)
}

renderApp();



