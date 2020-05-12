import React from 'react';
import {Paper} from '@material-ui/core';
import LoginForm from '../loginComponents/LoginForm';
const styles = {
paper: {
minHeight: '100px',
padding: '40px'
}
};
export default class Login extends React.Component {
render() {
return(
<Paper style={styles.paper}>
<h2>Login</h2>
<LoginForm/>
</Paper>
);
}
}