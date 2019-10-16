import React from   'react';
import  './menu-item.styles.scss';
import {withRouter} from 'react-router-dom'


 const MenuItem = ({ name, imageUrl, size,desc,linkUrl,history }) => (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content' onClick={()=>  history.push(`${linkUrl}`)}>
        <h1 className='title'>{name.toUpperCase()}</h1>
        <span  className='subtitle'>{desc?"SHOP NOW":false}</span>
      </div>
    </div>
  );

  export default  withRouter(MenuItem);