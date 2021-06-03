import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from "../actions/item";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import '../style/form.css'

class AddBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            count: 0
        }
    }

    handleChange = e => {
        if (this.state.item.length > 25 && e.target.value.length > 25) return
        this.setState({ item: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state)
        this.setState({ item: '' })
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.handleSubmit}>
                <TextField type='text' id='item' required='true'
                           label='Item Name' value={this.state.item}
                           placeholder='Add Your Item Here' onChange={this.handleChange}
                />
                <Button type='Submit'>Submit</Button>
            </form>
        )
    }
}

export default connect(props => ({ item: props.item }), { addItem })(AddBar)