import React from 'react';
import { connect } from 'react-redux';
// import OflModal from './oflmodal'; // not being imported atm
import {addMaterial} from '../actions/index';
import request from 'superagent';
import Select from 'react-select';

class MaterialForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { unitSize: ''};

    }

    addMaterial() {
        let material = {
            vendor: this.refs.vendor.value,
            quantity: this.refs.quantity.value,
            productName: this.refs.productName.value,
            catalogNumber: this.refs.catalogNumber.value,
            units: this.refs.units.value,
            unitType: unitOptions[0].props.value
        };
        // unitSize: this.state.unitOptions.value
        // console.log(unitSize);
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

    // sendData() {
    //     request.get('/')
    //         .end(function (err, res){
    //             console.log("ajax here");
    //         });
    // }

     handleChange(event)  {
        let unitUp = event.target.value;
        console.log(unitUp);
            return '<div>' + unitUp +'</div>'

        // console.log(e.target.value);


        // let value = unitTypes.filter((unit) => {
        //     return unity.key === e.target.value
        // });

    };

    render() {

        let unitTypes = [
            "grams",
            "kilograms",
            "milliliters",
            "misc"
        ];

        let unitOptions = unitTypes.map((unitType, index)=> {
                return (<option key ={index} value={unitType}>{unitType}</option>
               )
        });
        //this gets my value, but I need to be able to do it in the unitOptions return to change when it happens. BB can help here...
        //TODO: change color scheme as well, change over the webpack later, its a POS atm
        let getUnits = unitTypes.filter((unitType, index) => {
            return(<div>{getUnits}</div>)
        });

        console.log(getUnits[0]);
        console.log(unitOptions[0].props.value);
        // console.log(unitOptions.props)
        //try options a different way..

        return (
            <div id="inputlist" className="row">
                <input className="col-md-2" id="vendor" type="text" ref="vendor"  placeholder="Enter Vendor" />
                <input  className="col-md-1" id="quantity" type="text" ref="quantity" placeholder="Enter Quantity" />
                <input  className="col-md-2" id="productName" type="text" ref="productName" placeholder="Enter Product Name" />
                <input  className="col-md-2" id="catalogNumber" type="text" ref="catalogNumber" placeholder="Enter Catalog Numnber" />
                <input  className="col-md-1" id="units" type="text" ref="units" placeholder="Enter Units" />
                <select
                    onChange={this.handleChange}
                    className="col-md-2"
                    id="unitTypes">
                    {unitOptions}
                </select>
                <button  className="col-md-1" type="button" onClick={this.addMaterial.bind(this)}>add</button>
                <button  className="col-md-1" type="button" onClick={this.clearForm.bind(this)} >clear</button>
            </div>
        );
    }
}
MaterialForm.defaultProps = {
    title: 'Order For Later'
};

const mapStateToProps = state => {
    console.log(state);
    return {};
    materials: state.materials
};

export default connect()(MaterialForm);

//unused drop down code
// let options = [
//     // ...
//     { value: 'Stanford University', label: 'Stanford' },
//     // ...
// ];
//
// const field = ({ options }) => (
//     <Select
//         name="university"
//         value="one"
//         options={options}
//         onChange={val => console.log(val)}
//     />
// );

//unused ajax call
// $.ajax( {
// url: "http://localhost:8080/materials",
// dataType: "json",
// type: "GET",
// success: function (data) {
//         console.log(data);
//     }
// });


//
// <div>
//     <select defaultValue={this.state.selectValue}
//             onChange={this.handleChange}
//     >
//         <option value="Orange">Orange</option>
//         <option value="Radish">Radish</option>
//         <option value="Cherry">Cherry</option>
//     </select>
//     <p>{message}</p>
// </div>


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

// >>>>>>>>>>>>>>>>>>>>>>>
// DELETE DIV EX>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>

// class Example extends React.Component {
//     constructor(){
//         this.state = {
//             data: [
//                 {id:1, name: 'Hello'},
//                 {id:2, name: 'World'},
//                 {id:3, name: 'How'},
//                 {id:4, name: 'Are'},
//                 {id:5, name: 'You'},
//                 {id:6, name: '?'}
//             ]
//         }
//     }
//     delete(item){
//         const newState = this.state.data;
//         if (newState.indexOf(item) > -1) {
//             newState.splice(newState.indexOf(item), 1);
//             this.setState({data: newState})
//         }
//     }
//     render(){
//         const listItem = this.state.data.map((item)=>{
//             return <div key={item.id}>
//                 <span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete</button>
//             </div>
//         })
//         return <div>
//             {listItem}
//         </div>
//     }
// }
//
// React.render(<Example />, document.getElementById('container'));
