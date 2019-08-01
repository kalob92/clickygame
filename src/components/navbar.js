import React from 'react';

function Navbar(props) {
    return (
        <nav className='navbar navbar-dark bg-dark mx-auto my-auto'>
            <a className='navbar-brand' href='/'>
                <p className='h2 text-light pl-2 my-3'>Clicky Game</p>
            </a>
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