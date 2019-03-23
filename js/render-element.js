/**
 * Render an element
 */
const element = <h1>Hello World!</h1>;
ReactDOM.render(element, document.getElementById('root'));

/**
 * Update a rendered element   
 * @note React compares element and its children to the previous one,
 *       and only updates what's necessary 
 */
function tick() {
    const element = (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);