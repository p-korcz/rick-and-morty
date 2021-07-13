import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';

import { RouterPath } from '../../data-model/routerPath.enum';

export default function NavLink({
    text,
    pathTo,
}: {
    text: string;
    pathTo: RouterPath;
}): JSX.Element {
    return (
        <Link to={pathTo} className='characters__nav__navlink'>
            <Navbar.Brand>{text}</Navbar.Brand>
        </Link>
    );
}
