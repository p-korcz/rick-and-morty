import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { RouterPath } from '../../data-model/routerPath.enum';
import NavLink from './NavLink';

export default function AppNavbar(): JSX.Element {
    return (
        <Navbar variant='dark' className='characters__nav'>
            <Container>
                <Nav className='me-auto'>
                    <NavLink text='Rick and Morty' pathTo={RouterPath.HOME} />
                    <NavLink text='Favourites' pathTo={RouterPath.FAVOURITES} />
                </Nav>
            </Container>
        </Navbar>
    );
}
