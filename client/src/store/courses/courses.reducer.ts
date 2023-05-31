import {CourseAction, CourseActions, CoursesLoadingType, ICoursesInitialState} from './courses.types';


const initialState: ICoursesInitialState = {
    loading: CoursesLoadingType.NONE,
    courses: [],
    filteredCourses: [],
    filter: '',
    error: ''
}

export const coursesReducer = (state = initialState, action: CourseAction) => {
    switch (action.type) {
        case CourseActions.GET_COURSES:
            return {
                ...state,
                loading: CoursesLoadingType.LOADING_COURSES,
            }

        case CourseActions.GET_COURSES_SUCCESS:
            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                courses: action.payload,
                filteredCourses: action.payload.filter(
                    (course) => course.title.trim().toLowerCase().startsWith(state.filter.trim().toLowerCase())
                )
            }

        case CourseActions.GET_COURSES_FAILURE:
            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                error: action.payload
            }

        case CourseActions.CREATE_COURSE:
            return {
                ...state,
                loading: CoursesLoadingType.COURSE_ACTION
            }

        case CourseActions.CREATE_COURSE_SUCCESS: {
            const refreshedCourses = [...state.courses, action.payload];

            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                courses: refreshedCourses,
                filteredCourses: refreshedCourses.filter(
                    (course) => course.title.trim().toLowerCase().startsWith(state.filter.trim().toLowerCase())
                )
            }
        }


        case CourseActions.CREATE_COURSE_FAILURE:
            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                error: action.payload
            }

        case CourseActions.DELETE_COURSE:
            return {
                ...state,
                loading: CoursesLoadingType.COURSE_ACTION,
            }

        case CourseActions.DELETE_COURSE_SUCCESS: {
            const refreshedCourses = state.courses.filter(course => course.id !== action.payload);

            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                courses: refreshedCourses,
                filteredCourses: refreshedCourses.filter(course =>
                    course.title.trim().toLowerCase().startsWith(state.filter.trim().toLowerCase())
                )
            }
        }


        case CourseActions.DELETE_COURSE_FAILURE:
            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                error: action.payload
            }

        case CourseActions.UPDATE_COURSE:
            return {
                ...state,
                loading: CoursesLoadingType.COURSE_ACTION
            }

        case CourseActions.UPDATE_COURSE_SUCCESS: {
            const updatedCourses = state.courses.map((course) => course.id === action.payload.id ? action.payload : course);

            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                courses: updatedCourses,
                filteredCourses: updatedCourses.filter((course) =>
                    course.title.trim().toLowerCase().startsWith(state.filter.trim().toLowerCase())
                )
            }
        }


        case CourseActions.UPDATE_COURSE_FAILURE:
            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                error: action.payload
            }

        case CourseActions.FILTER_CHANGE:
            return {
                ...state,
                filter: action.payload,
                filteredCourses: state.courses.filter(
                    (course) => course.title.trim().toLowerCase().startsWith(action.payload.trim().toLowerCase())
                )
            }

        case CourseActions.CLEAR_ERROR:
            return {
                ...state,
                error: ''
            }

        case CourseActions.CLEAR_STATE:
            return initialState;

        default:
            return state;
    }
}
