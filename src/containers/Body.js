import React from 'react'
import Container from '@material-ui/core/Container'
import ItemList from "../components/ItemList";
import {connect} from "react-redux";

const Body = ({ items }) => {
    return (
        <Container maxWidth="lg">
            <ItemList items={items}/>
        </Container>
    )
}

export default connect(state => ({ items: state.items}))(Body)