import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import TemplateModal from './Template';

import * as loginActions from '../../../containers/Users/action';

const LoginModal = ({
    token
}) => {
    return (
        <TemplateModal
            open = {token === null}>
            <Modal.Header>
                Hello
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    
                </Modal.Description>
            </Modal.Content>
        </TemplateModal>
    );
}

const mapStateToProps = state => ({
    token : state.users.token
})

const mapDispatchToProps = dispatch => ({
    loginUser : (email, password) => { dispatch(loginActions.loginUser(email, password)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);