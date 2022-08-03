import React, {useState, Fragment} from 'react'

const H1 = () => {
    const [n, num] = useState(2)

    const aumentar = () => {
      num(n * 2)  
    }
    
    return(
        <Fragment>
        <h1>{n}</h1>
        <button class="btn btn-secondary btn-lg" onClick={aumentar}>¡Duplicaloo!</button>
        </Fragment>
    )
}

export default H1