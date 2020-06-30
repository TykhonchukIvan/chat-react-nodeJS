import React from 'react';
import './Layout.less';

class Layout extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className='Layout'>
                {this.props.children}
            </div>
        )

    }

}

export default Layout