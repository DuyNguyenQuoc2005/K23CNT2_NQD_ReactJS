import React, { Component } from 'react'
import NqdLoginComp from './NqdLoginComp';
import NqdLogoutComp from './NqdLogoutComp';

class NqdLoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
    // Hàm xử lý sự kiện Login
    nqdHandleLogin = (event) => {
        event.preventDefault();
        this.setState({
            isLoggedIn: true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let nqdElement = isLoggedIn?<NqdLoginComp /> : <NqdLogoutComp />
    return (
      <div className='alert arlet-danger'>
            {nqdElement}

            {
                isLoggedIn ?
                <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button>
                :<button onClick={this.nqdHandleLogin}>Login</button>
            }

      </div>
    )
  }
}

export default NqdLoginControl;