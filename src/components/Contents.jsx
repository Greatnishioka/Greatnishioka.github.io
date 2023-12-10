import KadokuSvgTop from '../img/kadoku-svg-top.svg';
import KadokuSvgBottom from '../img/kadoku-svg-bottom.svg';
import './Contents.css';

function Contents(){
    return(
        <body>
            <div class="ContentsBg">
                <img src={KadokuSvgTop} alt="ContentsBgTop" class="ContentsBgTop" />
                <div class="ContentBgMiddle">
                    <div class="KARIOKIcircle">
                        <svg width="400" height="400" class="bg">
                            <circle cx="170" cy="170" r="170"  fill="#fff"></circle>
                        </svg>
                        <svg width="400" height="400" class="bg1">
                            <circle cx="190" cy="190" r="190"  fill="#fff"></circle>
                        </svg>
                        <svg width="200" height="200" class="bg2">
                            <circle cx="100" cy="100" r="100"  fill="#fff"></circle>
                        </svg>
                    </div>
                    <h4>PRODUCTS</h4>
                    <p id="TextInContent">準備中</p>
                </div>
            {/* <clipPath id="ContentsTopImage">
            <path style={{fill:"#67DED6;"}} d="M1931.859,510H1939V0H-6v423.767c-0.333,0.078-0.677,0.158-1,0.233l-7,499
                c10.024,0.777,25.458,0.879,43-4c31.559-8.778,51.187-28.461,55-32c59.745-55.448,302.101-153.559,475-189
                c36.112-7.402,82.005-14.685,84-15c48.144-7.603,94.383-14.772,150-17c37.568-1.505,53.029,0.302,90,1
                c93.729,1.77,159.157-6.728,197-10c59.145-5.114,197.762-14.734,356,22c15.347,3.563,146.142,34.722,212,89
                c34.541,28.467,67.577,55.695,85,81c2.423,3.519,8.256,12.392,19,21c12.186,9.763,19.922,10.559,41,20
                c30.244,13.546,26.909,17.548,42,21c23.766,5.437,43.961-1.761,50-4c0,0,17.995-6.672,33-21
                C1945.201,860.028,1958.611,652.032,1931.859,510z"/>
            </clipPath> */}
            </div>
            <img src={KadokuSvgBottom} alt="ContentsBgBottom" class="ContentsBgBottom" />
        </body>
    )
}
export default Contents;