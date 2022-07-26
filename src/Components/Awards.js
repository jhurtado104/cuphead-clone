import './CupheadSyleSheet.css';
import AwardsLaurel from './Images/Awards/awards-laurel.png';
import Annie from './Images/Awards/annie.png';
import GameAwards from './Images/Awards/game_awards.png';
import Bafta from './Images/Awards/bafta.png';
import DiceAwards from './Images/Awards/dice-awards.png';
import GDCA from './Images/Awards/gdca.png';
import SXSW from './Images/Awards/sxsw.png';
import Steam from './Images/Awards/steam.png';
import Webby from './Images/Awards/webby.png';

function Awards() {
    return (
        <div className='awards-background'>
            <div className='section-wrapper'>
                <div className='flexrow'>
                    <div className='game-header txt-center'>
                        <h2>The all-cartoon Magical Wonderland!</h2>
                    </div>
                </div>
                <div className='flexrow'>
                    <div className='game-video'>
                        <iframe src="https://www.youtube.com/embed/KAriv93tzI0?rel=0&amp;amp;showinfo=0" title='Cuphead Launch Trailer' 
                        frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" />
                    </div>
                    <div className='game-description'>
                        <p className='game-description-text'>
                            Cuphead is a classic run and gun action game heavily focused on boss battles. 
                            Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created 
                            with the same techniques of the era: traditional hand drawn cel animation, watercolor 
                            backgrounds, and original jazz recordings.
                        <br />
                        <br />
                            Play as Cuphead or Mugman (in single player or local co-op) as you traverse strange 
                            worlds, acquire new weapons, learn powerful super moves, and discover hidden secrets 
                            while you try to pay your debt back to the devil!
                        </p>
                    </div>
                </div>
                <div className='flexrow'>
                    <div className='flexrow'>
                        <div className='awards-heading heading-center'>
                            <div className='header-line' />
                            <div className='award-header-logo'>
                                <img className='award-image' src={AwardsLaurel} alt='Award Heading' />
                            </div>
                            <div className='header-line' />
                        </div>
                    </div>
                    <div className='flexrow award-row annie-row'>
                        <div className='txt-center responsive'>
                            <ul className='award-info'>
                                <li className='txt-right bold-500'>
                                    OUTSTANDING
                                    <br />
                                    ACHIEVEMENT FOR
                                    <br />
                                    <span className='bold-800'>
                                        CHARACTER ANIMATION
                                        <br />
                                        IN A VIDEO GAME
                                    </span>
                                </li>
                                <li className='annie-logo-area'>
                                    <img className='annie-logo' src={Annie} alt='Annie Award' />
                                </li>
                                <li className='txt-left bold-500'>
                                    SPECIAL
                                    <br />
                                    ACHIEVEMENT IN
                                    <br />
                                    <span className='bold-800'>
                                        ANIMATION
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flexrow award-row'>
                        <div className='award-sub-group txt-right'>
                            <ul className='award-info'>
                                <li className='txt-right'>
                                    <span className='bold-800'>
                                        BEST ART DIRECTION
                                        <br />
                                        <br />
                                        BEST DEBUT GAME
                                        <br />
                                        <br />
                                        BEST INDEPENDENT GAME
                                    </span>
                                </li>
                                <li>
                                    <img className='large-award' src={GameAwards} alt='Game Awards' />
                                </li>
                            </ul>
                        </div>
                        <div className='award-sub-group txt-left'>
                            <ul className='award-info'>
                                <li>
                                    <img className='large-award' src={Bafta} alt='BAFTA Award' />
                                </li>
                                <li className='txt-left'>
                                    <span className='bold-800'>
                                        MUSIC
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flexrow award-row'>
                        <div className='txt-center responsive'>
                            <ul className='award-info'>
                                <li className='dice-awards-area'>
                                    <img className='large-award' src={DiceAwards} alt='Dice Award' />
                                </li>
                                <li className='txt-left'>
                                    <span className='bold-500'>
                                        OUTSTANDING
                                        <br />
                                        ACHIEVEMENT IN
                                        <br />
                                    </span>
                                    <span className='bold-800'>
                                        ANIMATION
                                    </span>
                                </li>
                                <li className='txt-left'>
                                    <span className='bold-500'>
                                        OUTSTANDING
                                        <br />
                                        ACHIEVEMENT IN
                                        <br />
                                    </span>
                                    <span className='bold-800'>
                                        ART DIRECTION
                                    </span>
                                </li>
                                <li className='txt-left'>
                                    <span className='bold-500'>
                                        OUTSTANDING
                                        <br />
                                        ACHIEVEMENT IN
                                        <br />
                                    </span>
                                    <span className='bold-800'>
                                        ORIGINAL MUSIC
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flexrow award-row'>
                        <div className='award-sub-group txt-right'>
                            <ul className='award-info'>
                                <li className='txt-right'>
                                    <span className='bold-800'>
                                        BEST DEBUT
                                        <br />
                                        <br />
                                        BEST VISUAL ART
                                    </span>
                                </li>
                                <li>
                                    <img className='medium-size-award' src={GDCA} alt='Game Developers Choice Award' />
                                </li>
                            </ul>
                        </div>
                        <div className='award-sub-group txt-left'>
                            <ul className='award-info'>
                                <li>
                                    <img className='medium-size-award' src={SXSW} alt='SXSW Award' />
                                </li>
                                <li className='txt-left'>
                                    <span className='bold-800'>
                                        EXELLENCE IN ART
                                        <br />
                                        <br />
                                        EXCELLENCE IN ANIMATION
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flexrow award-row last-row'>
                        <div className='award-sub-group txt-right'>
                            <ul className='award-info'>
                                <li className='txt-right'>
                                    <span className='bold-800'>
                                        EVEN BETTER
                                        <br />
                                        THAN I EXPECTED
                                        <br />
                                        <br />
                                        BEST SOUNDTRACK
                                    </span>
                                </li>
                                <li>
                                    <img className='medium-size-award' src={Steam} alt='Steam Award' />
                                </li>
                            </ul>
                        </div>
                        <div className='award-sub-group txt-left'>
                            <ul className='award-info'>
                                <li>
                                    <img className='large-award' src={Webby} alt='Webby Award' />
                                </li>
                                <li className='txt-left'>
                                    <span className='bold-800'>
                                        BEST ART DIRECTION
                                        <br />
                                        <br />
                                    </span>
                                    <span className='bold-500'>
                                        PEOPLE'S CHOICE
                                        <br />
                                    </span>
                                    <span className='bold-800'>
                                        BEST VISUAL DESIGN
                                        <br />
                                        BEST ART DIRECTION
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    );
}

export default Awards