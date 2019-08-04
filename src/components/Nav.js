import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Bemutatkozás</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Szobáink</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Szolgáltatások</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="velemenyek">
                    <a href="#">Vélemények</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="foglalas">
                    <a href="#">Foglalás</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav