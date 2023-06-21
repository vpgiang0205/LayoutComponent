import React, { Component } from "react";
import Header from "./Header/Header"
import Body from "./Body/Body";
import Footer from "./Footer/Footer"
export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <BaiTapThucHanhLayout>
                <Header />
                <Body />
                <Footer />
            </BaiTapThucHanhLayout>
        )
    }
}