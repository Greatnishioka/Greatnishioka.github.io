import React from "react";
import './articlecomponents.css';


function articlecomponents(props){
    return(
                <article class="kiji articles">
                    <div class="aaa">
                        <div class="blogtag">
                            <img src ="laggagetag.jpg" alt="LaggageTag" class="laggagetag"></img>
                        </div>
                        <h3>{props.h3}</h3>
                            <div class="ccc">
                                <ul class="ArticleText">
                                    <li class="list">{props.fl}</li>
                                    <li class="list">{props.sl}</li>
                                    <li class="list">{props.tl}</li>
                                    </ul>
                            </div>
                        </div>                 
                </article>
    );
}
export default articlecomponents;