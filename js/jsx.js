/**
 * Embedding expressions in JSX
 */
const name = 'Jose Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);  

/**
 * Embedding expressions in JSX using a function 
 */
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}</h1>;
    } else {
        return <h1>Hello, Stranger</h1>;
    }
}

const user = {
    firstName: 'Harper', 
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

const element2 = getGreeting(user);

ReactDOM.render(
    element2,
    document.getElementById('root')
);

/**
 * Specifying attributes with JSX
 * 
 * @note Since JSX is closer to JavaScript than to HTML,
 *       React DOM uses camelCase property naming convention 
 *       instead of HTML attributes names
 */
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}/>;

