import React, { Component } from 'react';
import { connect } from 'react-redux';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="custom-page-footer">
            </footer>
        );
    }
}

const mapStateToProps = (state)=> {
    return {

    };
}
export default connect(
    mapStateToProps,
)(FooterComponent);