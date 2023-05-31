import {Dispatch} from "redux";

import {
    addCourseAction,
    addCourseFailureAction,
    addCourseSuccessAction,
    deleteCourseAction,
    deleteCourseFailureAction,
    deleteCourseSuccessAction,
    getCoursesAction,
    getCoursesFailureAction,
    getCoursesSuccessAction, updateCourseAction, updateCourseFailureAction, updateCourseSuccessAction
} from './courses.action.creators';

import {addCourse, deleteCourse, getCourses, updateCourse} from '../../services/courses.service';

import {ICourse, ICourseAction} from '../../models/course';

import {AppThunk} from "../index";


export const getCoursesThunkAction = (): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(getCoursesAction());

        try {
            const courses = await getCourses();

            dispatch(getCoursesSuccessAction(courses));
        } catch (error) {
            dispatch(getCoursesFailureAction(error as string));
        }
    }
}

export const addCourseThunkAction = (course: ICourseAction): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(addCourseAction());

        try {
            const newCourse: ICourse = await addCourse(course);

            dispatch(addCourseSuccessAction(newCourse));
        } catch (error) {
            dispatch(addCourseFailureAction(error as string));

        }
    }
}

export const updateCourseThunkAction = (id: string, course: ICourseAction): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(updateCourseAction());

        try {
            const updatedCourse = await updateCourse(id, course);

            dispatch(updateCourseSuccessAction(updatedCourse))

        } catch (error) {
            console.log(error);
            dispatch(updateCourseFailureAction(error as string))
        }
    }
}

export const deleteCourseThunkAction = (id: string): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(deleteCourseAction());

        try {
            await deleteCourse(id);

            dispatch(deleteCourseSuccessAction(id));
        } catch (error) {
            dispatch(deleteCourseFailureAction(error as string));
        }
    }
}
