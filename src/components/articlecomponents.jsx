import React from "react";
import './articlecomponents.css';
import {Link} from "react-router-dom";


function articlecomponents(props){
    return(
                <Link to={props.h3}><article class="kiji articles">
                    <div class="aaa">
                        <div class="blogtag">
                            <img src ="laggagetag.jpg" alt="LaggageTag" class="laggagetag"></img>
                        </div>
                        <div class="Texts">
                        <h3>{props.h3}</h3>
                                <div class="ccc">
                                    <ul class="ArticleText">
                                        <li class="list">{props.fl}</li>
                                        <li class="list">{props.sl}</li>
                                        <li class="list">{props.tl}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                 
                </article></Link>
    );
}
export default articlecomponents;