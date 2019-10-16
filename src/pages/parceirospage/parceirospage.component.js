import React from   'react';
import Directory from '../../components/directory/directory.component';

export const  ParceirosPage = ()=>(
    <div className="parceirospage">
        <h1>Parceiros</h1>
        <Directory prop_page={'https://api.myjson.com/bins/qfhnh'} desc={false}/>
    </div>
);