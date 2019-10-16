import React from   'react';

export const Grid = ({ data_render,keys }) => {
    return(
        <div  className="col-sm-12">
            <table className="table table-bordered">       
                <thead>
                   {
                       keys.map((v) =>(
                           <th key={v}>{v}</th>
                       ))
                   }
                </thead>

                <tbody>
                    {
                    data_render.map(v =>(
                        <tr key={v.id}>
                            <td>{v.author}</td>
                            <td>{v.title}</td>
                            <td>{v.description}</td>
                            <td>{v.published_at}</td>
                            <td>{v.content}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>  
        </div>
    )
}
  
  