import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import Body from './containers/Body'
import Header from "./containers/Header";

class App extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.items !== this.props.items
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Body items={this.props.items}/>
            </React.Fragment>
        )
    }
}

export default connect(state => ({ items: state.items}))(App)