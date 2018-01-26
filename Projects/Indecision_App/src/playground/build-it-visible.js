const appRoot = document.getElementById('app');

let visibility = false;


const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
}

const details = <h3>Kepp it Secret, Keep it safe!</h3>

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && <div>Keep it Secret, Keep it safe</div>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp();

