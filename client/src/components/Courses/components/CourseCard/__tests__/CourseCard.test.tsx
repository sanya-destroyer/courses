import {cleanup, render, screen} from '@testing-library/react';

import TestTemplate from '../../../../../tests/utils/TestTemplate';

import CourseCard from '../CourseCard';

import {formatDate} from '../../../../../utils/format/formatDate';
import {formatDuration} from '../../../../../utils/format/formatDuration';

import {getMockedStore} from '../../../../../tests/mocks/store';

import {mockedCourses} from '../../../../../tests/mocks/courses';
import {mockedAuthors} from '../../../../../tests/mocks/authors';

const course = mockedCourses[0];

const courseTestId = {
    course: "course-card",
    title: "course-card-title",
    description: "course-card-description",
    duration: "course-card-duration",
    date: "course-card-date",
    author: "course-card-author",
    buttonContainer: "course-card-buttons",
    showCourseButton: "course-card-show",
}


describe("Course card component", () => {
    beforeEach(() => {
        const mockedStore = getMockedStore({courses: mockedCourses, authors: mockedAuthors});

        render(
            <TestTemplate store={mockedStore}>
                <CourseCard {...course}/>
            </TestTemplate>
        );
    });

    it("should render course card", () => {
        expect(screen.getByTestId(courseTestId.course)).toBeInTheDocument();
    });

    it('should display title', () => {
        expect(screen.getByTestId(courseTestId.title)).toBeInTheDocument();
        expect(screen.getByTestId(courseTestId.title)).toHaveTextContent(course.title);
    });

    it('should display description', () => {
        expect(screen.getByTestId(courseTestId.description)).toBeInTheDocument();
        expect(screen.getByTestId(courseTestId.description)).toHaveTextContent(course.description);
    });

    it('should display created date in correct format', () => {
        const formattedDate = formatDate(course.creationDate);

        expect(screen.getByTestId(courseTestId.date)).toBeInTheDocument();
        expect(screen.getByTestId(courseTestId.date)).toHaveTextContent(formattedDate);
    });

    it('should display duration in correct format', () => {
        const formattedDuration = formatDuration(course.duration);

        expect(screen.getByTestId(courseTestId.duration)).toBeInTheDocument();
        expect(screen.getByTestId(courseTestId.duration)).toHaveTextContent(formattedDuration);
    });

    it('should not display admin buttons', () => {
        expect(screen.getByTestId(courseTestId.buttonContainer).children.length).toBe(1);
    });

    it('should display admin buttons', () => {
        cleanup();

        const mockedAdminStore = getMockedStore({courses: mockedCourses, authors: mockedAuthors, isAdmin: true});

        render(
            <TestTemplate store={mockedAdminStore}>
                <CourseCard {...course}/>
            </TestTemplate>
        );

        expect(screen.getByTestId(courseTestId.buttonContainer).children.length).toBe(3);
    });

    it('should display course authors', () => {
        expect(screen.getAllByTestId(courseTestId.author).length).toBe(course.authors.length);
    })
});