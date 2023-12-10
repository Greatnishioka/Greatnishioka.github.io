import React from 'react';
import Toppage from '../components/toppage';
import Contents from '../components/Contents';
import Contact from '../components/Contact';
import './Top.css';

function toppage(){
    return(
        <div>
                <Toppage />
                <Contents />
                <Contact />
        </div>
    );
}
export default toppage;