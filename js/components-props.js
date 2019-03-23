/**
 * Functions and Class components
 */
// function Welcome(props) {
//     return <h1>Hello {props.name}</h1>
// }

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello {this.props.name}</h1>;
//     }
// }

/**
 * Render a component
 */
// const element = <Welcome name="Sara"/>;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

/**
 * Composing components
 */
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara"/>
//             <Welcome name="Cahel"/>
//             <Welcome name="Edit"/>
//         </div>
//     );
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

/**
 * Extracting components
 */
// Don't do
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     src={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

// Do
function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img 
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I am the comment text',
    author: {
        name: 'Hugo',
        avatarUrl: 'https://picsum.photos/150/100'
    }
};

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);

/**
 * /!\ Props are read-only /!\
 * 
 * Whether we declare a component as a function or a class, it must never modify its own props 
 * All React components must act like pure functions with respect to their props
 * 
 * @link https://reactjs.org/docs/components-and-props.html#props-are-read-only
 */
