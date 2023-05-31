import {CoursesLoadingType, ICoursesInitialState} from '../courses.types';
import {coursesReducer} from '../courses.reducer';
import {mockedCourses} from '../../../tests/mocks/courses';
import {addCourseSuccessAction, getCoursesSuccessAction} from '../courses.action.creators';
import axios from '../../../utils/axios';
import {getCoursesThunkAction} from '../courses.thunk';
import {getCourses} from '../../../services/courses.service';

jest.mock('axios', () => {
    return {
        create: jest.fn(() => ({
            get: jest.fn(),
            interceptors: {
                request: { use: jest.fn(), eject: jest.fn() },
                response: { use: jest.fn(), eject: jest.fn() }
            }
        }))
    }
});

describe('Courses reducer test', () => {
    let mockedInitialState: ICoursesInitialState;

    beforeEach(() => {
        mockedInitialState = {
            loading: CoursesLoadingType.NONE,
            courses: [],
            filteredCourses: [],
            filter: '',
            error: ''
        }
    });

    it('should return default state', () => {
        const wrongAction: any = {};
        const mockedInitialStateCopy: ICoursesInitialState = {
            ...mockedInitialState
        };

       expect(coursesReducer(mockedInitialState, wrongAction)).toEqual(mockedInitialStateCopy);
    });

    it('should handle course save and return new state', () => {
       const newCourse = mockedCourses[0];
       const mockedStateWithNewCourse: ICoursesInitialState = {
           ...mockedInitialState,
           courses: [...mockedInitialState.courses, newCourse],
           filteredCourses: [...mockedInitialState.filteredCourses, newCourse],
       };

       expect(coursesReducer(mockedInitialState, addCourseSuccessAction(newCourse))).toEqual(mockedStateWithNewCourse)
    });

    it('should handle get courses and return new state', async () => {
        axios.get = jest.fn().mockResolvedValueOnce({
            data: {
                result: mockedCourses
            }
        });

        const courses = await getCourses();

        const expectedState: ICoursesInitialState = {
            ...mockedInitialState,
            courses: courses,
            filteredCourses: courses
        };

        expect(coursesReducer(mockedInitialState, getCoursesSuccessAction(courses))).toEqual(expectedState);
    });
});