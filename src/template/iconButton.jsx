import React from 'react'
import { isNull } from 'util'

export default props => {
    if(props.hide){
        return null
    } else{
        return( 
            <button className={'btn btn-' + props.style} 
                onClick={props.click}>
                    <i className={'fa fa-' + props.icon}></i>
            </button>
        )
    }
}