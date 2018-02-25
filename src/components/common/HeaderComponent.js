import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderComponent extends Component {
    render() {
        return (
                <header className="custom-page-header">
                <div className="col-sm-12">
                    <div className="col-sm-4">
                        <span className="cs-brand-name">Let's Chat</span>
                    </div>
                    <div className="col-sm-4 col-sm-offset-4">
                        {this.props.isLoggedIn?(<span className="cs-user-welcome pull-right">Welcome Vivek Sinha</span>):''}
                    </div>
                </div>
                </header>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        ...state.login
    };
}
export default connect(
    mapStateToProps,
)(HeaderComponent);