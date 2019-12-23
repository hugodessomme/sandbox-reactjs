import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import css from './Layout.module.css';

const Layout = props => (
    <Auxiliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={css.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default Layout;