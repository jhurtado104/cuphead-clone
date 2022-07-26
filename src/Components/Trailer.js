import './CupheadSyleSheet.css';

function Trailer() {
    return (
        <div className='trailer-background'>
            <div className='section-wrapper'>
                <div className='flexrow fadeIn'>
                    <div className='trailer-wrapper'>
                        <iframe src="https://www.youtube.com/embed/zEE0CvlSNZc?rel=0&amp;amp;showinfo=0" title='Cuphead DLC Trailer'
                        frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trailer