import React from 'react';
import { connect } from 'react-redux';
import {delMaterial, fetchMaterials} from '../actions/index';
require('es6-promise').polyfill();
class MaterialList extends React.Component {
    constructor(props){
        super(props);
    }
    //
    // updateServerPlaceholder() {3l
    //     this.props.dispatch(updateServerPlaceholder)
    // }
    //

    //change it to a comp life cycle method instead?
    // componentWillMount(){
    //
    //     //where is the bind supposed to go? >> error is no bind available!
    // }

    //handles initial load
    componentDidMount() {
        this.props.dispatch(fetchMaterials());
    }

    delMaterial(id) {
        this.props.dispatch(delMaterial(id));
    }

    render() {
        console.log(typeof(this.props.materials));
        let materials = this.props.materials.map((material,index,key)=> {
            return (
                <div className="row newMaterial">
                    <div className="col-md-2">{material.vendor}</div>
                    <div className="col-md-2">{material.quantity}</div>
                    <div className="col-md-2">{material.productName}</div>
                    <div className="col-md-2">{material.catalogNumber}</div>
                    <div className="col-md-2">{material.units}</div>
                    <div className="col-md-2"><button type="button" onClick={this.delMaterial.bind(this, material.id)}>DEL</button></div>
                </div>)
        });
        return(
            <div>
                {materials}
            </div>
        );
    }
}

MaterialList.defaultProps = {
    title: 'Order For Later'
};

const mapStateToProps = state => ({
    materials: state.materials
});

export default connect(mapStateToProps)(MaterialList);
