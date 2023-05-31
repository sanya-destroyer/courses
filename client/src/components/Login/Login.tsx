import {FormEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {useAlert} from "../../context/AlertContext";
import {useInput} from '../../hooks/useInput';


import {useAppSelector} from "../../hooks/redux";
import {selectAuthError} from '../../store/user/user.selectors';

import {useActions} from '../../hooks/useAction';

import getErrorsPopup from '../../utils/errors/generateErrorPopup';
import getIsFormValid from '../../utils/errors/getIsFormCorrect';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import {ILoginCredentials} from '../../models/auth/login';

import '../../common/styles/inputError.css'
import '../../common/styles/form.css'
import './Login.css';


function Login() {

  const email = useInput('', { minLength: 5, maxLength: 25, required: true, email: true });
  const password = useInput('', { minLength:5, maxLength: 25, required: true });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {clearUserErrorAction, loginUserThunkAction} = useActions();
  const {addAlert} = useAlert();

  const error = useAppSelector(selectAuthError);

  useEffect(() => {
    if ( error ) clearUserErrorAction();

    return () => {
      if ( error ) clearUserErrorAction();
    }
  }, [email.value, password.value]);


  const submitLogin = (event: FormEvent) => {
    event.preventDefault();

    if( !email.value || !password.value ) return addAlert('Please provide all fields');

    const loginCredentials: ILoginCredentials = {
      email: email.value.toString(),
      password: password.value.toString()
    }

    loginUserThunkAction(loginCredentials);
  }

  const togglePasswordType = () => {
    setIsShowPassword((prev) => !prev);
  }

  const isFormValid = getIsFormValid(email.isValid, password.isValid);
  const formError =  error === '' ? undefined : <p className="form-error">{error}</p>

  const emailErrors = getErrorsPopup(email.errors, email.touched);
  const passwordErrors = getErrorsPopup(password.errors, password.touched);

  return (
        <div className='login'>
          <form
              className='form'
              onSubmit={submitLogin}
          >
            <h2 className='form-title'>Login</h2>

            <fieldset className='form-input'>
              <div className='form-fieldset-errored'>
                <div className='form-fieldset-errored-input'>
                  <Input
                      labelText={'Email'}
                      onChange={email.onChange}
                      onBlur={email.onBlur}
                      value={email.value}
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
                buttonText={'Login'}
                type={'submit'}
                disabled={!isFormValid}
              />
            </fieldset>

            <p className='form-info'>
              If you do not have an account you can <Link to='/registration'>Register</Link>
            </p>

          </form>
        </div>
  );
}

export default Login;
