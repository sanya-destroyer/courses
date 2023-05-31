import * as ActionTypes from './courses.types';
import {CourseActions} from './courses.types';

import {ICourse} from '../../models/course';


export const getCoursesAction = (): ActionTypes.GetCourses => ({ type: CourseActions.GET_COURSES });
export const getCoursesSuccessAction = (payload: ICourse[]): ActionTypes.GetCoursesSuccess => ({ type: CourseActions.GET_COURSES_SUCCESS, payload });
export const getCoursesFailureAction = (payload: string): ActionTypes.GetCoursesFailure => ({ type: CourseActions.GET_COURSES_FAILURE, payload });

export const addCourseAction = (): ActionTypes.CreateCourse => ({ type: CourseActions.CREATE_COURSE});
export const addCourseSuccessAction = (payload: ICourse): ActionTypes.CreateCourseSuccess => ({ type: CourseActions.CREATE_COURSE_SUCCESS, payload });
export const addCourseFailureAction = (payload: string): ActionTypes.CreateCourseFailure => ({ type: CourseActions.CREATE_COURSE_FAILURE, payload });

export const deleteCourseAction = (): ActionTypes.DeleteCourse => ({ type: CourseActions.DELETE_COURSE });
export const deleteCourseSuccessAction = (payload: string): ActionTypes.DeleteCourseSuccess => ({ type: CourseActions.DELETE_COURSE_SUCCESS, payload});
export const deleteCourseFailureAction = (payload: string): ActionTypes.DeleteCourseFailure => ({ type: CourseActions.DELETE_COURSE_FAILURE, payload });

export const updateCourseAction = (): ActionTypes.UpdateCourse => ({ type: CourseActions.UPDATE_COURSE });
export const updateCourseSuccessAction = (payload: ICourse): ActionTypes.UpdateCourseSuccess => ({ type: CourseActions.UPDATE_COURSE_SUCCESS, payload });
export const updateCourseFailureAction = (payload: string): ActionTypes.UpdateCourseFailure => ({ type: CourseActions.UPDATE_COURSE_FAILURE, payload });

export const changeCourseFilterAction = (payload: string): ActionTypes.CoursesFilterChange => ({ type: CourseActions.FILTER_CHANGE, payload });

export const clearCoursesErrorAction = (): ActionTypes.ClearCoursesError => ({ type: CourseActions.CLEAR_ERROR });
export const clearCourseStateAction = (): ActionTypes.ClearCoursesState => ({ type: CourseActions.CLEAR_STATE });
