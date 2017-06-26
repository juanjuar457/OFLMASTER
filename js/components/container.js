import React from 'react';
import { connect } from 'react-redux';
import MaterialForm from './materialform';
import request from 'superagent';
import MaterialList from './materiallist';

class Container extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { isOpen: false };
    // }
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

// const mapStateToProps = state => ({
//     materials: state.materials
// });

// export default connect(mapStateToProps)(Container);
export default Container;
