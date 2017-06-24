import React from 'react';

class MaterialList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let materials = this.props.materials.map((material, index, key)=> {
            // let key = {index}
            return (
                <div className="row">
                    <div className="col-md-2">{material.vendor}</div>
                    <div className="col-md-2">{material.quantity}</div>
                    <div className="col-md-2">{material.productName}</div>
                    <div className="col-md-2">{material.catalogNumber}</div>
                    <div className="col-md-2">{material.units}</div>
                </div>)
        });
        return(
            <div id="newMaterial">
                {materials}
            </div>
        )
    }
}

MaterialList.defaultProps = {
    title: 'Order For Later'
};

const mapStateToProps = state => ({
    materials: state.materials
});

export default connect(mapStateToProps)(MaterialList);


//material state vs redux store material state 0 urgent, on back order
// put a button on the line that when you click it, it becomes a drop
//down that has those state selectable and it changes to those other states.
//changes the state of that particular material.





