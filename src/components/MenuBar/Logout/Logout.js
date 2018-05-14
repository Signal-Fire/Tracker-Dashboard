import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import * as userActions from '../../../containers/Users/action';

const Logout = ({
    performLogout
}) => (
    <Menu.Item name = 'Logout' onClick = { () => performLogout()}/>
)

const mapDispatchToProps = dispatch => ({
    performLogout : () => { dispatch(userActions.Logout()); window.location.reload(); }
})

export default connect(null, mapDispatchToProps)(Logout)

