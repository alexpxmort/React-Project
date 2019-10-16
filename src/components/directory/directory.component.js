import React from   'react';
import  './directory.styles.scss';
import  MenuItem  from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/selectors/directoty.selector'


const  Directory = ({sections})=>(
    <div className="directory-menu">
    {
        sections.map(({name,image_url,id,size,linkUrl}) =>(
            <MenuItem key={id} name={name} imageUrl={image_url} size={size} linkUrl={linkUrl} desc={true} />
        )
        )

        
    }
 </div>
)
    
const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})
export default connect(mapStateToProps,null)(Directory)