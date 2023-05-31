import {FormEvent, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {useAlert} from "../../context/AlertContext";
import {useInput} from '../../hooks/useInput';

import getErrorsPopup from '../../utils/errors/generateErrorPopup';
import getIsFormValid from '../../utils/errors/getIsFormCorrect';

import {useActions} from '../../hooks/useAction';

import {selectAuthError, selectIsRegisterSuccess} from '../../store/user/user.selectors';
import {useAppSelector} from "../../hooks/redux";

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import {IRegisterCredentials} from '../../models/auth/register';

import '../../common/styles/inputError.css';
import '../../common/styles/form.css'
import './Registration.css';


function Registration() {

    const name = useInput('', { required: true });
    const email = useInput('', { required: true, email: true });
    const password = useInput('', { required: true });
    const [isShowPassword, setIsShowPassword] = useState(false);

    const {clearUserStateAction, clearUserErrorAction, registerUserThunkAction} = useActions();
    const navigate = useNavigate();
    const {addAlert} = useAlert();

    const registerSuccess = useAppSelector(selectIsRegisterSuccess);
    const error = useAppSelector(selectAuthError);

    useEffect(() => {
        if ( error ) clearUserErrorAction();

        return () => {
            if ( error ) clearUserErrorAction();
        }
    }, [name.value, email.value, password.value]);

    useEffect(() => {
        if ( registerSuccess) {
            addAlert('You account was created, please log in');
            clearUserStateAction();
            navigate('/login');
        }
    }, [registerSuccess]);


    const submitRegistration = (event: FormEvent) => {
        event.preventDefault();

        if( !email.value || !name.value || !password.value ) return addAlert('Please provide all fields');

        const credentialsToRegister: IRegisterCredentials = {
            name: name.value.toString(),
            email: email.value.toString(),
            password: password.value.toString()
        }

        registerUserThunkAction(credentialsToRegister);
    }

    const togglePasswordType = () => {
        setIsShowPassword((prev) => !prev);
    }

    const formError =  error === '' ? undefined : <p className="form-error">{error}</p>
    const isFormValid = getIsFormValid(name.isValid, email.isValid, password.isValid);

    const nameErrors = getErrorsPopup(name.errors, name.touched);
    const emailErrors = getErrorsPopup(email.errors, email.touched);
    const passwordErrors = getErrorsPopup(password.errors, password.touched);

    return (
        <div className='registration'>
            <form
                className='form'
                onSubmit={submitRegistration}
            >
                <h2 className='form-title'>Register</h2>

                <fieldset className='form-input'>
                    <div className='form-fieldset-errored'>
                        <div className='form-fieldset-errored-input'>
                            <Input
                                labelText={'Name'}
                                onChange={name.onChange}
                                value={name.value}
                                onBlur={name.onBlur}
                                autoComplete='react-courses-name'
                            />
                        </div>
                        {nameErrors}
                    </div>
                </fieldset>

                <fieldset className='form-input'>
                    <div className='form-fieldset-errored'>
                        <div className='form-fieldset-errored-input'>
                            <Input
                                labelText={'Email'}
                                onChange={email.onChange}
                                value={email.value}
                                onBlur={email.onBlur}
                                autoComplete='react-courses-email'
                            />
                        </div>
                        {emailErrors}
                    </div>
                </fieldset>

                <fieldset className='form-input'>
                    <div className='form-fieldset-errored'>
                        <div className='form-fieldset-errored-input'>
                            <Input
                                labelText={'Password'}
                                onChange={password.onChange}
                                value={password.value}
                                onBlur={password.onBlur}
                                type={isShowPassword ? 'text' : 'password'}
                                autoComplete='react-courses-password'
                            />
                            <div
                                className='form-password-toggle'
                                onClick={togglePasswordType}
                            >
                                &#128064;
                            </div>
                        </div>
                        {passwordErrors}
                    </div>
                </fieldset>

                {formError}

                <fieldset className='form-button'>
                    <Button
                        buttonText={'Registration'}
                        type={'submit'}
                        disabled={!isFormValid}
                    />
                </fieldset>

                <p className='form-info'>
                    If you have an account you can <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Registration;
