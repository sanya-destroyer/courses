import {useEffect} from 'react';

import {useAlert} from "./context/AlertContext";

import {useAppSelector} from './hooks/redux';
import {selectAuthIsUserLoading, selectIsAuth} from './store/user/user.selectors';

import {useActions} from "./hooks/useAction";

import {FlexContainer} from './components/Container/Container';

import Header from './components/Header/Header';
import AppRoutes from './components/AppRoutes/AppRoutes';

import getAlertItems from './components/Alert/utils/getAlerts';
import getLoader from './common/Loader/utils/getLoader';

import './App.css';


function App() {

    const {getUserThunkAction, getCoursesThunkAction, getAuthorsThunkAction} = useActions();
    const {getAlerts, removeAlert} = useAlert();
    const alerts = getAlerts();

    const isAuth = useAppSelector(selectIsAuth);
    const isUserLoading = useAppSelector(selectAuthIsUserLoading);

    useEffect(() => {
        getUserThunkAction();
    }, []);

    useEffect(() => {
        if( isAuth ) {
            getUserThunkAction();
            getCoursesThunkAction();
            getAuthorsThunkAction();
        }
    }, [isAuth]);


    const loader = getLoader(isUserLoading);
    const alertItems = getAlertItems(alerts, removeAlert);

    return (
        <div className='App'>
            {alertItems}
            <FlexContainer>
                <Header />
                <main className='main'>
                    {loader}
                    <AppRoutes />
                </main>
            </FlexContainer>
        </div>
  );
}

export default App;
