/*
class H1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count * 2 })}>
        ¡Duplicaloo!
        </button>
      </div>
    );
  }
}
//export default H1
*/
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
