import {connect} from "react-redux";
import React from "react";
import Aside from "./Aside";

const mapStateToProps = (state) => {
    return {
        src: state.Aside.Friends
    }
}

const AsideContainer = connect(mapStateToProps)(Aside);

export default AsideContainer;