import {Navigate, Outlet} from "react-router-dom";

import {useAppSelector} from "../../hooks/redux";
import {selectIsAuth} from '../../store/user/user.selectors';

import ROUTES from "../../contants/routes";

type PrivateRouteProps =  {
    redirectTo: string;
}

function PrivateRoute ({ redirectTo = ROUTES.LOGIN }: PrivateRouteProps) {

    const isAuth = useAppSelector(selectIsAuth);

    if( !isAuth ) {
        return <Navigate to={redirectTo} />
    }

    return <Outlet />
}

export default PrivateRoute;
