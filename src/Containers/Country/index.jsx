import React from 'react'

import Countries from '../../Components/Countries';

const Country = ( props ) => {
    return(
        <>
            <Countries quality={props.quality} />
        </>
    )
}

export default Country;