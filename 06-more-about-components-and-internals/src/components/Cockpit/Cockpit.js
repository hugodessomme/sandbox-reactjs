import React, { useEffect, useRef, useContext } from 'react';
import css from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnref = useRef(null);
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        
        // setTimeout(() => {
        //     alert('Saved to the cloud');
        // }, 1000);
        toggleBtnref.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);
    
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });


    const classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = css.red;
    }
    if (props.personsLength <= 2) {
        classes.push(css.red);
    }
    if (props.personsLength <= 1) {
        classes.push(css.bold);
    }
 
    return (
        <div className={css.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>It works!</p>

            <button 
                ref={toggleBtnref}
                className={btnClass} 
                onClick={props.clicked}>
                Toggle Persons
            </button>

           <button onClick={authContext.login}>Log In</button>    
        </div>
    );
}

export default React.memo(Cockpit);