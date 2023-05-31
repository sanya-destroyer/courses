import {Navigate, Outlet} from "react-router-dom";

import {useAppSelector} from "../../hooks/redux";
import {selectIsAuth} from "../../store/user/user.selectors";

import ROUTES from "../../contants/routes";


function PublicRoute({ redirectTo = ROUTES.COURSES }) {

    const isAuth = useAppSelector(selectIsAuth);

    if( isAuth ) {
        return <Navigate to={redirectTo} />
    }


    return <Outlet />
}

export default PublicRoute;
