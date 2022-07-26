import './CupheadSyleSheet.css';
import PurchaseArea from './PurchaseArea';
import Trailer from './Trailer';
import DLCInfo from './DLCInfo';
import Awards from './Awards';
import CupheadSheetMusic from './CupheadSheetMusic';
import LogoRow from './LogoRow';
import CopyRightArea from './CopyRightArea';

function Cuphead() {
    return (
        <div>
            <PurchaseArea />
            <Trailer />
            <DLCInfo />
            <Awards />
            <CupheadSheetMusic />
            <LogoRow />
            <CopyRightArea />
        </div>
    );
}

export default Cuphead