import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeItem, increaseCount, decreaseCount } from "../actions/item";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import '../style/item.css'

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


    render() {
        return (
            <Card className='item-card' id={this.props.id}>
                <Typography variant='' className='item-title'>{this.props.item}</Typography>
                <Typography variant='subtitle1' className='clicker'>{this.props.count} times</Typography>
                <ButtonGroup className='action-row'>
                    <Button onClick={this.handleIncrease} className='item-button'>+</Button>
                    <Button onClick={this.handleDecrease} className='item-button'>-</Button>
                    <Button onClick={this.handleRemove} className='item-button'>Remove</Button>
                </ButtonGroup>
            </Card>
        )
    }
}

export default connect(props => ({ ...props }),
    { removeItem, increaseCount, decreaseCount })(Item)