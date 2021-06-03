import React, { Component, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import '../style/item.css'
import { removeItem, increaseCount, decreaseCount } from '../actions/item'
const Card = lazy(() => import('@material-ui/core/Card'))
const Button = lazy(() => import('@material-ui/core/Button'))
const Typography = lazy(() => import('@material-ui/core/Typography'))
const ButtonGroup = lazy(() => import('@material-ui/core/ButtonGroup'))

class Item extends Component {

    handleRemove = e => {
        this.props.removeItem(this.props)
    }

    handleIncrease = e => {
        this.props.increaseCount(this.props)
    }

    handleDecrease = e => {
        this.props.decreaseCount(this.props)
    }

    fallback = () => <p>Loading...</p>


    render() {
        return (
            <Suspense fallback={this.fallback}>
                <Card className='item-card' id={this.props.id}>
                    <Typography variant='' className='item-title'>{this.props.item}</Typography>
                    <Typography variant='subtitle1' className='clicker'>{this.props.count} times</Typography>
                    <ButtonGroup className='action-row'>
                        <Button onClick={this.handleIncrease} className='item-button'>+</Button>
                        <Button onClick={this.handleDecrease} className='item-button'>-</Button>
                        <Button onClick={this.handleRemove} className='item-button'>Remove</Button>
                    </ButtonGroup>
                </Card>
            </Suspense>
        )
    }
}

export default connect(props => ({ ...props }),
    { removeItem, increaseCount, decreaseCount })(Item)