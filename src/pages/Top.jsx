import React from 'react';
import Toppage from '../components/toppage';
import Menu from '../components/menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function toppage(){
    return(
        <div>
            <Router>
                <Menu />
                <Toppage />
            </Router>
        </div>
    );
}
export default toppage;