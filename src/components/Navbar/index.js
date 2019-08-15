import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Instructions from '../Instructions';

function Navbar(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <nav className='navbar navbar-dark bg-dark mx-auto my-auto'>
            <a className='navbar-brand' href='/'>
                <p className='h2 text-light pl-2 my-3'>Clicky Game</p>
            </a>
            <Button variant="info" onClick={() => setModalShow(true)}>
                How to Play
            </Button>
            <Instructions
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ul className='navbar-nav'>
                <li className='navbar-item'>
                    <p className='h5 my-auto text-info pr-3'>
                    &loz;\&loz; Score: {props.score} &loz;|&loz; High Score: {props.totalScore} &loz;/&loz;
                    </p>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;