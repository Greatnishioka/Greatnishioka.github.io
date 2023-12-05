import React from 'react';
import '../components/toppage.css'
import Articlecomponents from './articlecomponents'; 

function toppage(){
    const article={h3:"oppai",fl:"ippai",sl:"timpo",tl:"manpo"};
return(
    <div>
        <section id="Top">
            <div class="page-top">
                <img src ="Logo.png" alt ="logo" class="logo"></img>
                <img src ="mock_illust.jpg" alt="top-illust" class="top-illust"></img>
            </div>
        </section>
        <section id="Blog">
            <h1>BLOG</h1>
            <div class="page-blog">
                <Articlecomponents  {...article} />
                <Articlecomponents  {...article} />
                <Articlecomponents  {...article} />
            </div>
        </section>
    </div>
);
}

export default toppage;