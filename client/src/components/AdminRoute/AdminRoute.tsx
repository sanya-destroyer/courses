import {Navigate, Outlet} from "react-router-dom";

import {useAppSelector} from "../../hooks/redux";
import {selectIsAuth, selectUserIsAdmin} from "../../store/user/user.selectors";

import ROUTES from "../../contants/routes";


function AdminRoute() {
    const isAuth = useAppSelector(selectIsAuth);
    const isAdmin = useAppSelector(selectUserIsAdmin);

    if( !isAuth ) {
        return <Navigate to={ROUTES.LOGIN} />
    }

    if( !isAdmin ) {
        return <Navigate to={ROUTES.COURSES} />
    }

    return <Outlet />
}

export default AdminRoute;
