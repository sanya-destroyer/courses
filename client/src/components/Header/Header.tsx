import {Link} from 'react-router-dom';
import {memo} from "react";

import Button from '../../common/Button/Button'
import Logo from './components/Logo/Logo'

import {useActions} from "../../hooks/useAction";

import {useAppSelector} from "../../hooks/redux";
import {selectAuthIsUserLoading, selectIsAuth, selectUser} from '../../store/user/user.selectors';

import getLoader from '../../common/Loader/utils/getLoader';

import ROUTES from "../../contants/routes";

import './Header.css';


function Header() {

    const {logoutThunkAction} = useActions();

    const isUserLoading = useAppSelector(selectAuthIsUserLoading);
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectUser);

    const handleLogOut = () => {
        logoutThunkAction();
    }

    const getContent = (isAuth: boolean) => {
        if( !isAuth ) return;

        return (
            <>
                <div className='header-name' data-testid="header-username">{greetings}</div>
                <div className='header-button'>
                    <Button onClick={handleLogOut} buttonText={'Logout'} small={true} />
                </div>
            </>
        )
    }

    const greetings = user?.name ? `Hello, ${user.name}` : user?.role ? `Hello, ${user.role}` : 'Hello';
    const loader = getLoader(isUserLoading);
    const headerLinkTo = isAuth ? ROUTES.COURSES : ROUTES.LOGIN;
    const content = getContent(isAuth);

    return (
        <header data-testid="header" className='header'>
            {loader}
            <div className='header-logo'>
                <Link to={headerLinkTo}>
                    <Logo />
                </Link>
            </div>
            {content}
        </header>
  )
}

export default memo(Header);
