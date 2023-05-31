import {Navigate, Route, Routes} from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Courses from '../Courses/Courses';
import PublicRoute from '../PublicRoute/PublicRoute';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import AdminRoute from '../AdminRoute/AdminRoute';
import CourseForm from '../Courses/components/CourseForm/CourseForm';
import CourseInfo from '../CourseInfo/CourseInfo';

import ROUTES from '../../contants/routes';

function AppRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.COURSES} element={<PrivateRoute redirectTo={ROUTES.LOGIN}/>}>
                <Route path={ROUTES.COURSES} element={<Courses />}/>
            </Route>

            <Route path={ROUTES.LOGIN} element={<PublicRoute redirectTo={ROUTES.COURSES}/>}>
                <Route path={ROUTES.LOGIN} element={<Login />}/>
            </Route>

            <Route path={ROUTES.REGISTRATION} element={<PublicRoute redirectTo={ROUTES.COURSES}/>}>
                <Route path={ROUTES.REGISTRATION} element={<Registration />}/>
            </Route>

            <Route path={ROUTES.ADD_COURSE} element={<AdminRoute />}>
                <Route path={ROUTES.ADD_COURSE} element={<CourseForm formType="CREATE"/>}/>
            </Route>

            <Route path={ROUTES.UPDATE_COURSE} element={<AdminRoute />}>
                <Route path={ROUTES.UPDATE_COURSE} element={<CourseForm formType="UPDATE"/>}/>
            </Route>

            <Route path={ROUTES.COURSE} element={<PrivateRoute redirectTo={ROUTES.COURSES}/>}>
                <Route path={ROUTES.COURSE} element={<CourseInfo />}/>
            </Route>

            <Route path={'*'} element={<Navigate to={'/login'}/>}/>
        </Routes>
    );
}

export default AppRoutes;