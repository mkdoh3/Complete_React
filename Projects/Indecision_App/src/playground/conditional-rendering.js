const app = {
  title: 'This is a title!',
  // subtitle: 'This is a subtitle!',
  name: 'Michael',
  location: 'Chicago',
  // age: '30'
  options: []
}

const age = app.subtitle && <h3>{app.subtitle}</h3>

const template = (
  <div>
    <h1>{app.title
        ? app.title
        : 'No Title'}</h1>
    {app.subtitle && <h3>{app.subtitle}</h3>}
    {app.location
      ? "Location: " + app.location
      : "No Location"}
    {age && <p>Age: {age}</p>}
    <p>{app.options.length > 0
        ? "options exists"
        : "options don't exist"}</p>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>
  </div>
);

// && conditional can be user for conditional rendering. If the left side evals
// to true, the right side will be rendered. Else, nothing will be rendered

const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);