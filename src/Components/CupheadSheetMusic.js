import './CupheadSyleSheet.css';
import MarchingBand from './Images/marching-band.png';

function CupheadSheetMusic() {
    return (
        <div className='cuphead-sheet-music-background'>
            <div className='section-wrapper'>
                <h3 className='cuphead-sheet-music-header txt-center'>
                    <span className='bold-800'>CUPHEAD SHEET MUSIC</span>
                    <br />
                    AVAILABLE NOW
                    </h3>
                <img className='marchingband-picture' src={MarchingBand} alt='Marching Band Group' />
                <h3 className='cupheadsheetmusic-website txt-center'>
                    <a className='website-text' href='https://cupheadnotes.com/' target='_blank' rel='noreferrer'>cupheadnotes.com</a>
                </h3>
            </div>
        </div>
    );
}

export default CupheadSheetMusic