import React from 'react';
import { connect } from 'react-redux';
import OflModal from './oflmodal';
import {addMaterial} from '../actions/index';
import request from 'superagent';

class MaterialForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { isOpen: false };
    }



    addMaterial() {
        var material = {
            vendor: this.refs.vendor.value,
            quantity: this.refs.quantity.value,
            productName: this.refs.productName.value,
            catalogNumber: this.refs.catalogNumber.value,
            units: this.refs.units.value,
        };
        this.props.dispatch(addMaterial(material));
        this.clearForm();
    }

    clearForm() {
        this.refs.vendor.value = "";
        this.refs.quantity.value = "";
        this.refs.productName.value = "";
        this.refs.catalogNumber.value = "";
        this.refs.units.value = "";

    }

    sendData() {
        request.get('/')
            .end(function (err, res){
                console.log("ajax yo pinga");  //oh snap it works..
            });
    }

    render() {
        var materials = this.props.materials.map((material, index, key)=> {
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
        //store this as state. make reducer that if its empty it popultes it, if its full it just uses it
        //singletons
        let unitTypes = [
            "grams",
            "kilograms",
            "milliliters",
            "misc"
        ];

        var unitOptions = unitTypes.map((unitType, index)=> {
                return (<option value={unitType}>{unitType}</option>
               )
        });

        return (
            <div id="ofl-header">
                <h1>Order For Later</h1>
                <div id="inputlist">
                    <input className="col-md-2" id="vendor" type="text" ref="vendor"  placeholder="Enter Vendor" />
                    <input  className="col-md-1" id="quantity" type="text" ref="quantity" placeholder="Enter Quantity" />
                    <input  className="col-md-2" id="productName" type="text" ref="productName" placeholder="Enter Product Name" />
                    <input  className="col-md-2" id="catalogNumber" type="text" ref="catalogNumber" placeholder="Enter Catalog Numnber" />
                    <input  className="col-md-1" id="units" type="text" ref="units" placeholder="Enter Units" />
                    <select className="col-md-2" id="unitTypes">
                        {unitOptions}
                    </select>
                    <button  className="col-md-1" type="button" onClick={this.addMaterial.bind(this)}>add</button>
                    <button  className="col-md-1" type="button" onClick={this.clearForm.bind(this)} >clear</button>
                </div>
                <div id="newMaterial">
                    {materials}
                </div>
                <div id="oflfooter">
                    <footer>footer placeholder</footer>
                </div>
            </div>
        );
    }
}
MaterialForm.defaultProps = {
    title: 'Order For Later'
};

const mapStateToProps = state => ({
    materials: state.materials
});

export default connect(mapStateToProps)(MaterialForm);

//unused ajax call
// $.ajax( {
// url: "http://localhost:8080/materials",
// dataType: "json",
// type: "GET",
// success: function (data) {
//         console.log(data);
//     }
// });





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>START NEW RE DO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// import React from 'react';
// import { connect } from 'react-redux';
// import OflModal from './oflmodal';
// import {addMaterial} from '../actions/index';
// import request from 'superagent';
//
// class MaterialForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { isOpen: false };
//     }
//
//     toggleModal() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }
//
//     addMaterial() {
//         let material = {
//             vendor: this.refs.vendor.value,
//             quantity: this.refs.quantity.value,
//             productName: this.refs.productName.value,
//             catalogNumber: this.refs.catalogNumber.value,
//             units: this.refs.units.value,
//         };
//         this.props.dispatch(addMaterial(material));
//         this.clearForm();
//     }
//
//     addDropDownUnits() {
//         let dropMaterial = {
//             grams: this.refs.grams.value,
//             kilograms: this.refs. kilograms.value,
//             milliliters: this.refs.milliliters.value,
//             misc: this.refs.misc.value
//         };
//         this.props.dispatch(addDropDownUnits(dropMaterial));
//     }
//
//     clearForm() {
//         // let val = 0;
//         // key = val;
//         this.refs.vendor.value = "";
//         this.refs.quantity.value = "";
//         this.refs.productName.value = "";
//         this.refs.catalogNumber.value = "";
//         this.refs.units.value = "";
//
//     }
//
//     sendData() {
//         request.get('/materials')
//             .end(function (err, res){
//                 console.log(res);  //oh snap it works..
//             });
//     }
//
//     render() {
//         let materials = this.props.materials.map((material, index, key)=> {
//             return (
//                 <div id="renderedMaterials">
//                     {material.vendor}
//                     {material.quantity}
//                     {material.productName}
//                     {material.catalogNumber}
//                     {material.units}
//                 </div>);
//
//         let dropMaterials = this.props.dropmaterials.map((dropmaterial, index, key)=> {
//             return (
//                 <div id="renderedMaterials">
//                     {dropmaterial.grams}
//                     {dropmaterial.kilograms}
//                     {dropmaterial.milliliters}
//                     {dropmaterial.misc}
//                 </div>)
//         });

//             return (
//                 <div>
//                     <header><h1>Order For Later</h1></header>
//                         <div id="inputlist">
//                             <input id="vendor" type="text" ref="vendor"  placeholder="Enter Vendor" />
//                             <input id="quantity" type="text" ref="quantity" placeholder="Enter Quantity" />
//                             <input id="productName" type="text" ref="productName" placeholder="Enter Product Name" />
//                             <input id="catalogNumber" type="text" ref="catalogNumber" placeholder="Enter Catalog Numnber" />
//                             <input id="units" type="text" ref="units" placeholder="Enter Units" />
//                             <button type="button" onClick={this.addMaterial.bind(this)}> add</button>
//                             <button type="button" onClick={this.addDropDownUnits.bind(this)}> add drop</button>
//                             <button type="button" onClick={this.clearForm.bind(this)}> clear</button>
//                             <button type="button" onClick={this.sendData.bind(this)}> Send data</button>
//                             <button onClick={this.toggleModal}> Open the modal </button>
//                             <OflModal show={this.state.isOpen} onClose={this.toggleModal}> </OflModal>
//                             <select>
//                                 <option value="grams">Grams</option>
//                                 <option value="kilograms">Kilograms</option>
//                                 <option value="milliliters">Milliliters</option>
//                                 <option value="misc">Misc</option>
//                             </select>
//                         </div>
//                     <div id="newMaterial">{dropMaterials}</div>
//                     <div id="newMaterial">{materials}</div>
//                     <div id="oflfooter">
//                         <footer>footer placeholder</footer>
//                     </div>
//
//
//             );
//     };
// }

 {/*MaterialForm.defaultProps = {*/}
     {/*title: 'Order For Later'*/}
 {/*};*/}

 {/*const mapStateToProps = state => ({*/}
    {/*materials: state.materials*/}
{/*});*/}

 // export default connect(mapStateToProps)(MaterialForm);

{/*//unused ajax call*/}
{/*// $.ajax( {*/}
{/*// url: "http://localhost:8080/materials",*/}
{/*// dataType: "json",*/}
{/*// type: "GET",*/}
{/*// success: function (data) {*/}
{/*//         console.log(data);*/}
{/*//     }*/}
{/*// });*/}


