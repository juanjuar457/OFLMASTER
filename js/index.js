import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Container from './components/container';
import store from './store';

// shove me in a container comp
// toggleModal() {
//     this.setState({
//         isOpen: !this.state.isOpen
//     });
// }
// {/*<button onClick={this.toggleModal}>*/}
//     {/*Open the modal*/}
// {/*</button>*/}
// {/*<OflModal show={this.state.isOpen} onClose={this.toggleModal}> </OflModal>*/}

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('main')
);



//star with redux store then add the submit function
// main goal would be to record the input and change the redux state.
//once its connected then can move on to doing the modals.
//maybe move dir's to have containers + presentational ele- separate?
// from trello ex: the add-form only handles logic, no presentational component!
// Materialform >>> brings in the addmetrial comp >>> kip the prop for what we're adding
// in this case adding a matrial with the ( name)
//