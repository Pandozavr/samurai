import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validation_form/validators";
import {ElementCreator} from "../common/FormControl/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormControl/FormControls.module.css"


const maxLengthLogin = maxLengthCreator(50);
const Input = ElementCreator("input");

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <ReduxFormLogin onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Input} validate={[required, maxLengthLogin]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type={"password"} validate={[required, maxLengthLogin]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            { props.error && <div className={styles.for_Error}> {props.error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const ReduxFormLogin = reduxForm({form: "login"})(LoginForm);

const mapStateToProps = (state) => ({
   isAuth: state.Auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);