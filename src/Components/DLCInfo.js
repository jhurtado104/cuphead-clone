import './CupheadSyleSheet.css';
import DLCHeroes from './Images/dlc_heroes_cropped_web.png';
import CupheadJump from './Images/cuphead_jump.gif';

function DLCInfo() {
    return (
        <div className='dlc-info-background'>
            <div className='section-wrapper'>
                <div className='flexrow DLC-area'>
                    <div className='DLC-picture-section'>
                        <img className='DLC-image' src={DLCHeroes} alt='Cuphead Trio Heroes' />
                    </div>
                    <div className='DLC-description-section'>
                        <h2 className='DLC-header'>
                            It's here...
                            <br />
                            The Delicious Last Course!
                        </h2>
                        <div>
                            <p className='DLC-text'>
                                It's surreal to be able to say this, but the time is here at last...
                                <strong className='DLC-text'>The Delicious Last Course</strong> expansion 
                                is available now on all platforms! We cannot wait for the wonderful 
                                Cuphead community to set sail for this new adventure, experience the 
                                story of brand new playable character Ms. Chalice, and take on some 
                                of the biggest and wildest boss battles we've ever created! As of right 
                                this moment, you can tuck in to this second helping of Cuphead action on <strong><a className='DLC-text' href='https://www.xbox.com/en-US/games/store/cuphead-the-delicious-last-course/9pn2schcv9q0' target='_blank'>Xbox One</a></strong>
                                , <strong><a className='DLC-text' href='https://www.nintendo.com/store/products/cuphead-the-delicious-last-course-switch/' target='_blank'>Nintendo Switch</a></strong>
                                , <strong><a className='DLC-text' href='https://store.playstation.com/en-us/product/UP8062-CUSA20499_00-CUPHEADDLC000000' target='_blank'>Playstation 4</a></strong>
                                , <strong><a className='DLC-text' href='https://store.steampowered.com/app/1117850/Cuphead__The_Delicious_Last_Course/' target='_blank'>Steam</a></strong>
                                , <strong><a className='DLC-text' href='https://www.gog.com/en/game/cuphead_the_delicious_last_course' target='_blank'>GOG</a></strong>.
                            </p>
                            <p className='DLC-text'>
                                We're especially thrilled to say that the game is avaliable at the tasty price 
                                of $7.99 USD / $9.99 CAD / €7.99 / £6.79.
                            </p>
                            <div className='cuphead-gif-and-button'>
                                <img className='cuphead-gif' src={CupheadJump} alt='Cuphead Jump Gif' />
                                <a className='dlc-button bold-800' href='https://cupheadgame.com/dlc.html' target='_blank'>Read More...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DLCInfo