import React from 'react';
import io from 'socket.io-client';

class App extends React.Component {

    connectSocket(){
        io();
    }

    render() {
        return(
           <div>
               <button onClick={this.connectSocket.bind(this)}>
                   Connect
               </button>
           </div>
        )
    }
}

export default App