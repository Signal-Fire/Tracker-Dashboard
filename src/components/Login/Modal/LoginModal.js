import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import TemplateModal from './Template';
import { LoginForm } from './LoginForm';

const LoginModal = ({
    token
}) => {
    return (
        <TemplateModal
            size = 'tiny'
            open = {token === null}>
            <Modal.Header>
                Login
            </Modal.Header>
            <Modal.Content>
                <LoginForm />
            </Modal.Content>
        </TemplateModal>
    );
}

const mapStateToProps = state => ({
    token : state.users.token
})


export default connect(mapStateToProps, null)(LoginModal);