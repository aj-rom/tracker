import React, { Component, lazy, Suspense } from 'react'
import './App.css';
import { connect } from 'react-redux'
const Body = lazy(() => import('./containers/Body'))
const Header = lazy(() => import('./containers/Header'))

const fallBack = () => <p>Loading...</p>

class App extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.items !== this.props.items
    }

    render() {
        return (
            <Suspense fallback={fallBack}>
                <React.Fragment>
                    <Header/>
                    <Body items={this.props.items}/>
                </React.Fragment>
            </Suspense>
        )
    }
}

export default connect(state => ({ items: state.items}))(App)