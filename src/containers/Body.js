import React, { lazy, Suspense } from 'react'
import Container from '@material-ui/core/Container'
import {connect} from "react-redux";

const ItemList = lazy(() => import("../components/ItemList"))

const fallback = () => <p>Loading...</p>
const Body = ({ items }) => {
    return (
        <Container maxWidth="lg">
            <Suspense fallback={fallback}>
                <ItemList items={items}/>
            </Suspense>
        </Container>
    )
}

export default connect(state => ({ items: state.items}))(Body)