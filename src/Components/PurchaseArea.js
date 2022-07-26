import './CupheadSyleSheet.css';
import Logo from './Images/logo.png';
import DLCStickerFinal from './Images/dlc-sticker-final.png';
import DDWTDLogo from './Images/ddwtd-logo.png';
import CupheadMugmanBothers from './Images/cuphead-mugman-bothers.png';
import DLCLogo from './Images/dlc-logo.png';
import CupheadMugmanMschaliceTrio from './Images/cuphead-mugman-mschalice-trio.png';
import Xbox from './Images/xbox.png';
import Switch from './Images/switch.png';
import PS4 from './Images/ps4.png';
import Windows from './Images/windows.png';
import Steam from './Images/steam.png';
import GOG from './Images/gog.png';
import Apple from './Images/apple.png';

function PurchaseArea() {

    function ddwtd_openNav() {
        document.getElementById("ddwtd-overlay").style.width = "100%";
        document.getElementById("ddwtd-overlay").style.visibility = "visible";
        document.getElementById("ddwtd-overlay").style['pointer-events'] = "all'";
        document.querySelector("body").style['overflow'] = "hidden";
    }
    
    function ddwtd_closeNav() {
        document.getElementById("ddwtd-overlay").style.width = "0%";
        document.getElementById("ddwtd-overlay").style.visibility = "hidden";
        document.getElementById("ddwtd-overlay").style['pointer-events'] = "none";
        document.querySelector("body").style['overflow'] = "auto";
        window.location.reload(false);
    }

    function dlc_openNav() {
        document.getElementById("dlc-overlay").style.width = "100%";
        document.getElementById("dlc-overlay").style.visibility = "visible";
        document.getElementById("dlc-overlay").style['pointer-events'] = "all'";
        document.querySelector("body").style['overflow'] = "hidden";
    }

    function dlc_closeNav() {
        document.getElementById("dlc-overlay").style.width = "0%";
        document.getElementById("dlc-overlay").style.visibility = "hidden";
        document.getElementById("dlc-overlay").style['pointer-events'] = "none";
        document.querySelector("body").style['overflow'] = "auto";
        window.location.reload(false);
    }

    return (
        <div className='main-site-background'>
            <div className='section-wrapper'>
                <div className='flexrow header'>
                    <div className='main-nav-wrapper'>
                        <div className='logo'>
                            <a href='Cuphead.js'>
                                <img src={Logo} alt='Cuphead Logo' />
                            </a>
                        </div>
                        <nav className='main-nav'>
                            <ul>
                                <li>
                                    <a href='https://cupheadgame.com/dlc.html'>
                                        <img className='pulse dlc-sticker-image' src={DLCStickerFinal} alt='DLC Sticker' />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='flexrow games-wrapper'>
                    <div className='game-cover half-scrn ddwtd-background'>
                        <div className='txt-center'>
                            <img className='game-logo' src={DDWTDLogo} alt="Don't Deal with The Devil Logo" />
                            <img className='game-image' src={CupheadMugmanBothers} alt='Cuphead Mugman Brothers' />
                            <button className='openbtn ddwtd-cover-button' onClick={ddwtd_openNav}>BUY NOW</button>
                        </div>
                    </div>
                    <div className='game-cover half-scrn dlc-background'>
                        <div className='txt-center'>
                            <img className='game-logo' src={DLCLogo} alt='The Delicious Last Course Logo' />
                            <img className='game-image' src={CupheadMugmanMschaliceTrio} alt='Cuphead Mugman Ms.Chalice Trio' />
                            <button className='openbtn dlc-cover-button' onClick={dlc_openNav}>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id='ddwtd-overlay' className='overlay'>
                <div className='close-button'>
                    <button className='closebtn' onClick={ddwtd_closeNav}>CLOSE ×</button>
                </div>
                <div className='overlay-wrapper'>
                    <div className='overlay-logo txt-center'>
                        <img src={DDWTDLogo} alt="Don't Deal with The Devil Logo" />
                    </div>
                    <div className='choose-wrapper txt-center'>
                        <h3 className='purple'>CHOOSE YOUR PLATFORM</h3>
                    </div>
                    <div className='platforms-list'>
                        <div className='platform-logo xbox-logo'>
                            <a href='https://www.xbox.com/en-us/games/store/cuphead/9njrx71m5x9p' target='_blank' rel='noreferrer'>
                                <img src={Xbox} alt='Xbox Logo' />
                            </a>
                        </div>
                        <div className='platform-logo switch-logo'>
                            <a href='https://www.nintendo.com/store/products/cuphead-switch/' target='_blank' rel='noreferrer'>
                                <img src={Switch} alt='Switch Logo' />
                            </a>
                        </div>
                        <div className='platform-logo ps-logo'>
                            <a href='https://store.playstation.com/en-us/product/UP8062-CUSA20499_00-CUPHEAD000000000' target='_blank' rel='noreferrer'>
                                <img src={PS4} alt='PS4 Logo'/>
                            </a>
                        </div>
                        <div className='platform-logo steam-logo'>
                            <a href='https://store.steampowered.com/app/268910/Cuphead/' target='_blank' rel='noreferrer'>
                                <img src={Steam} alt='Steam Logo' />
                            </a>
                        </div>
                        <div className='platform-logo gog-logo'>
                            <a href='https://www.gog.com/game/cuphead' target='_blank' rel='noreferrer'>
                                <img src={GOG} alt='GOG Logo' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='dlc-overlay' className='overlay'>
                <div className='close-button'>
                    <button className='closebtn' onClick={dlc_closeNav}>CLOSE ×</button>
                </div>
                <div className='overlay-wrapper'>
                    <div className='overlay-logo txt-center'>
                        <img src={DLCLogo} alt='The Delicious Last Course Logo' />
                    </div>
                    <div className='choose-wrapper txt-center'>
                        <h3 className='purple'>CHOOSE YOUR PLATFORM</h3>
                    </div>
                    <div className='platforms-list'>
                        <div className='platform-logo xbox-logo'>
                            <a href='https://www.xbox.com/en-us/games/store/cuphead/9njrx71m5x9p' target='_blank' rel='noreferrer'>
                                <img src={Xbox} alt='Xbox Logo' />
                            </a>
                        </div>
                        <div className='platform-logo switch-logo'>
                            <a href='https://www.nintendo.com/store/products/cuphead-switch/' target='_blank' rel='noreferrer'>
                                <img src={Switch} alt='Switch Logo' />
                            </a>
                        </div>
                        <div className='platform-logo ps-logo'>
                            <a href='https://store.playstation.com/en-us/product/UP8062-CUSA20499_00-CUPHEAD000000000' target='_blank' rel='noreferrer'>
                                <img src={PS4} alt='PS4 Logo' />
                            </a>
                        </div>
                        <div className='platform-logo steam-logo'>
                            <a href='https://store.steampowered.com/app/268910/Cuphead/' target='_blank' rel='noreferrer'>
                                <img src={Steam} alt='Steam Logo' />
                            </a>
                        </div>
                        <div className='platform-logo gog-logo'>
                            <a href='https://www.gog.com/game/cuphead' target='_blank' rel='noreferrer'>
                                <img src={GOG} alt='GOG Logo' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fullWidth platforms-row txt-center riseUp'>
                <h4>Available On:</h4>
                <div className='flexrow platforms-row-small'>
                    <img className='platform-row-small-logo' src={Xbox} alt='Xbox Logo' />
                    <img className='platform-row-small-logo' src={Switch} alt='Switch Logo' />
                    <img className='platform-row-small-logo' src={PS4} alt='PS4 Logo' />
                    <img className='platform-row-small-logo' src={Windows} alt='Windows Logo' />
                    <img className='platform-row-small-logo' src={Steam} alt='Steam Logo' />
                    <img className='platform-row-small-logo' src={GOG} alt='GOG Logo' />
                    <img className='platform-row-small-logo' src={Apple} alt='Apple Logo' />
                </div>
            </div>
        </div>
    );
}

export default PurchaseArea