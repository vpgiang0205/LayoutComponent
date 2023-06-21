import React, { Component } from "react";
import Item from "./Item/Item";
import Banner from "./Banner/Banner";

export default class Body extends Component {
    render() {
        return (
            <body>
                <Banner />
                <Item />
            </body>
        )
    }
}