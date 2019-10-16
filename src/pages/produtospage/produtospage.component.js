import React from   'react';
import Directory from '../../components/directory/directory.component';

export const  ProdutosPage = ()=>(
    <div className="produtospage">
        <h1>Produtos</h1>
        <Directory prop_page={'https://api.myjson.com/bins/dbycd'}  desc={false}/>
    </div>
);
