import React from 'react';
import { connect } from 'react-redux';
import MaterialForm from './components/materialform';
import request from 'superagent';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
        render()
        {
            return(
                <div>
                <MaterialForm />
                <MaterialList />
                </div>
            )
    }
}



