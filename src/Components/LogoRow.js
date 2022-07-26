import './CupheadSyleSheet.css';
import LogoLine from './Images/logo_line_2020.png';

function LogoRow() {
    return (
        <div className='logo-row-background'>
            <div className='section-wrapper'>
                <div className='logo-line-area'>
                    <img className='logo-line' src={LogoLine} alt='Logo Banner' />
                </div>
            </div>
        </div>
    );
}

export default LogoRow