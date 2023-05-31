import {cleanup, render, screen} from '@testing-library/react';
import RouterTemplate from '../../../tests/utils/RouterTemplate';
import {getMockedStore} from '../../../tests/mocks/store';
import {mockedCourses} from '../../../tests/mocks/courses';
import {mockedAuthors} from '../../../tests/mocks/authors';
import userEvent from '@testing-library/user-event';

const coursesTestId = "courses";
const coursesEmptyTestId = "courses-empty";
const courseCardTestId = "course-card";
const coursesAddButtonTestId = "search-bar-add";
const courseFormTestId = "course-form";

describe('Courses page component', () => {

    beforeEach(() => {
        const mockedStore = getMockedStore({courses: mockedCourses, authors: mockedAuthors, isAdmin: true});

        render(
            <RouterTemplate store={mockedStore} initialEntry="/courses"/>
        );
    });

    it('should render component', () => {
       expect(screen.getByTestId(coursesTestId)).toBeInTheDocument();
    });

    it('should display all courses', () => {
        expect(screen.getAllByTestId(courseCardTestId).length).toBe(mockedCourses.length);
    });

    it('should display message if there is no courses', () => {
        cleanup();

        const store = getMockedStore({courses: []});

        render(
            <RouterTemplate store={store} initialEntry="/courses"/>
        );

        expect(screen.queryByTestId(courseCardTestId)).not.toBeInTheDocument();
        expect(screen.getByTestId(coursesEmptyTestId)).toBeInTheDocument();
    });

    it('should redirect to CourseForm page', () => {
        const addCourseButton = screen.getByTestId(coursesAddButtonTestId);

        userEvent.click(addCourseButton);

        expect(screen.getByTestId(courseFormTestId)).toBeInTheDocument();
    });
});