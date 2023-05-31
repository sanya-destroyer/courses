import {ICourse} from '../../models/course';

export interface ICoursesInitialState {
    loading: CoursesLoadingType;
    courses: ICourse[];
    filteredCourses: ICourse[];
    filter: string;
    error: string;
}

export enum CoursesLoadingType {
    NONE="NONE",
    LOADING_COURSES="LOADING_COURSES",
    COURSE_ACTION="COURSE_ACTION"
}


export enum CourseActions {
    GET_COURSES="GET_COURSES",
    GET_COURSES_SUCCESS="GET_COURSES_SUCCESS",
    GET_COURSES_FAILURE="GET_COURSES_FAILURE",

    CREATE_COURSE="CREATE_COURSE",
    CREATE_COURSE_SUCCESS="CREATE_COURSE_SUCCESS",
    CREATE_COURSE_FAILURE="CREATE_COURSE_FAILURE",

    DELETE_COURSE="DELETE_COURSE",
    DELETE_COURSE_SUCCESS="DELETE_COURSE_SUCCESS",
    DELETE_COURSE_FAILURE="DELETE_COURSE_FAILURE",

    UPDATE_COURSE="UPDATE_COURSE",
    UPDATE_COURSE_SUCCESS="UPDATE_COURSE_SUCCESS",
    UPDATE_COURSE_FAILURE="UPDATE_COURSE_FAILURE",

    FILTER_CHANGE="FILTER_CHANGE",

    CLEAR_ERROR="CLEAR_ERROR",
    CLEAR_STATE="CLEAR_STATE"
}

// **********************
// **********************

export interface GetCourses {
    type: CourseActions.GET_COURSES;
}

export interface GetCoursesFailure {
    type: CourseActions.GET_COURSES_FAILURE;
    payload: string;
}

export interface GetCoursesSuccess {
    type: CourseActions.GET_COURSES_SUCCESS;
    payload: ICourse[];
}

// **********************
// **********************

export interface DeleteCourse {
    type: CourseActions.DELETE_COURSE,
}

export interface DeleteCourseSuccess {
    type: CourseActions.DELETE_COURSE_SUCCESS
    payload: string;
}

export interface DeleteCourseFailure {
    type: CourseActions.DELETE_COURSE_FAILURE
    payload: string;
}

// **********************
// **********************

export interface CreateCourse {
    type: CourseActions.CREATE_COURSE,
}

export interface CreateCourseSuccess {
    type: CourseActions.CREATE_COURSE_SUCCESS
    payload: ICourse;
}

export interface CreateCourseFailure {
    type: CourseActions.CREATE_COURSE_FAILURE
    payload: string;
}

// **********************
// **********************


export interface UpdateCourse {
    type: CourseActions.UPDATE_COURSE,
}

export interface UpdateCourseSuccess {
    type: CourseActions.UPDATE_COURSE_SUCCESS,
    payload: ICourse;
}

export interface UpdateCourseFailure {
    type: CourseActions.UPDATE_COURSE_FAILURE
    payload: string;
}

// **********************
// **********************

export interface CoursesFilterChange {
    type: CourseActions.FILTER_CHANGE,
    payload: string;
}

// **********************
// **********************

export interface ClearCoursesError {
    type: CourseActions.CLEAR_ERROR;
}

export interface ClearCoursesState {
    type: CourseActions.CLEAR_STATE;
}

// **********************
// **********************


export type CourseAction = GetCourses
                        | GetCoursesSuccess
                        | GetCoursesFailure
                        | CreateCourse
                        | CreateCourseSuccess
                        | CreateCourseFailure
                        | DeleteCourse
                        | DeleteCourseSuccess
                        | DeleteCourseFailure
                        | UpdateCourse
                        | UpdateCourseSuccess
                        | UpdateCourseFailure
                        | ClearCoursesError
                        | ClearCoursesState
                        | CoursesFilterChange
