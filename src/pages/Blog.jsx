import React from 'react';
import BlogPage from '../components/BlogEntrance';
import Articlecomponents from '../components/articlecomponents';
import './Blog.css';


function Blog(){
const article={h3:"スパイダーマン",fl:"ippai",sl:"timpo",tl:"manpo"};
const article1={h3:"グリーンゴブリン",fl:"ippai",sl:"timpo",tl:"manpo"};
const article2={h3:"ドックオク",fl:"ippai",sl:"timpo",tl:"manpo"};
const article3={h3:"サンドマンサンドマン",fl:"ippai",sl:"timpo",tl:"manpo"};
const article4={h3:"ヴェノム",fl:"ippai",sl:"timpo",tl:"manpo"};
const article5={h3:"ヴァルチャー",fl:"ippai",sl:"timpo",tl:"manpo"};
const article6={h3:"ミステリオ",fl:"ippai",sl:"timpo",tl:"manpo"};
const article7={h3:"ヴィランズ",fl:"ippai",sl:"timpo",tl:"manpo"};
const article8={h3:"ドックオク",fl:"ippai",sl:"timpo",tl:"manpo"};
//const article9={h3:"ドックオク",fl:"ippai",sl:"timpo",tl:"manpo"};
    return(
        <div>
                <BlogPage />
                <div class="Peter-Parker">
                    <Articlecomponents {...article} />
                    <Articlecomponents {...article1} />
                    <Articlecomponents {...article2} />
                    <Articlecomponents {...article3} />
                    <Articlecomponents {...article4} />
                    <Articlecomponents {...article5} />
                    <Articlecomponents {...article6} />
                    <Articlecomponents {...article7} />
                    <Articlecomponents {...article8} />
                </div>
        </div>
    )
}
export default Blog;