import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Elérhetőségek</h2>
            <dl className="alt">
                <dt>Cím</dt>
                <dd>Esztergom, Erzsébet kiralyné út 2</dd>
                <dt>Telefonszám</dt>
                <dd>(06) 20 3914 407</dd>
                <dt>Email</dt>
                <dd><a href="#">szentannapanzio@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.facebook.com/Szent-Anna-Vend%C3%A9gh%C3%A1z-Panzi%C3%B3-Sz%C3%A1ll%C3%A1s-Esztergom-396067390527467/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
            </ul>
        </section>
    </footer>
)

export default Footer
