import {RootState} from '../../store';

import {IUser, UserRole} from '../../models/user';

import {UserLoadingType} from '../../store/user/user.types';

import {CoursesLoadingType} from '../../store/courses/courses.types';
import {AuthorsLoadingType} from '../../store/authors/authors.types';
import {ICourse} from '../../models/course';
import {IAuthor} from '../../models/author';



interface createStoreProps {
    courses?: ICourse[];
    authors?: IAuthor[];
    isAuth?: boolean;
    isAdmin?: boolean;
}

export const createMockedState = ({ courses = [], authors = [], isAuth = true, isAdmin = false }: createStoreProps): RootState => ({
   user: {
        user: {
            id: "id",
            name: "Username",
            role: isAdmin ? UserRole.ADMIN : UserRole.USER,
            token: "token",
            email: "email"
        },
        token: isAuth ? 'some token' : "",
        loading: UserLoadingType.NONE,
        error: '',
        success: false,
    },
    courses: {
       courses,
       error: '',
       filteredCourses: courses,
       loading: CoursesLoadingType.NONE,
       filter: ''
    },
    authors: {
       authors,
       loading: AuthorsLoadingType.NONE,
       error: ''
    },
});

export const getMockedStore = (options: createStoreProps): any => {
    const state = createMockedState(options);

    return {
        getState: () => state,
        subscribe: jest.fn(),
        dispatch: jest.fn()
    }
};