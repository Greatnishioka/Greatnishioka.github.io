import {Link} from "react-router-dom";
import React from 'react';
import './menu.css';
import '../pages/Blog';
import '../App'

function menu(){
    return(
    <nav>
        <ul class="navigate">
            <li class="menu"><Link to="/" class="top-page-link">TOP</Link></li>
            <li class="menu"><Link to="Blog" class="top-page-link">BLOG</Link></li>
            <li class="menu"><Link to="Product" class="top-page-link">PRODUCTS</Link></li>
            <li class="menu"><Link to="Contant" class="top-page-link">CONTACT</Link></li>
        </ul>
    </nav>
    );
}

export default menu;