import React from 'react';
import { connect } from 'react-redux';


class DeleteBtn extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return <button>Hello from Del button</button>
    }
}

export default connect() (DeleteBtn);
