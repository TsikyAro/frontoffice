import React from 'react';
import Tableau from './Tableau';
import Menu from '../component/Menu';

export default function NouveauVoiture() {
    return (
        <div className="card">
             <div className='menuse'>
                <Menu></Menu>
            </div>
            <div className='tableau'>
                <Tableau/>
            </div>
        </div>
    )
}
        