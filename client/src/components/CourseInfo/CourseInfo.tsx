import {Link, useParams} from 'react-router-dom';

import {formatDuration} from '../../utils/format/formatDuration';
import {formatDate} from '../../utils/format/formatDate';

import {useAppSelector} from '../../hooks/redux';
import {selectCourseById} from '../../store/courses/courses.selectors';
import {selectAuthors} from '../../store/authors/authors.selectors';

import {IAuthor} from '../../models/author';

import './CourseInfo.css';


function CourseInfo() {

    const params = useParams();

    const course = useAppSelector(selectCourseById(params?.id));
    const authors = useAppSelector(selectAuthors);

    const getCourseAuthors = (authors: IAuthor[], courseAuthors: string[]) => {
        if( !authors.length || !courseAuthors.length ) return <div>There is no authors</div>

        return courseAuthors.map((authorId) => {
            const author = authors.find((author) => author.id === authorId);

            if( !author ) return <div>Unknown</div>

            return <div key={author.id} className='course-info-author'>{author.name}</div>
        })
    }

    if ( !course ) {
        return (
            <>
                <Link to={'/courses'}>&#x2190; Back to courses</Link>
                <div className='course-info-error'>Course not found</div>
            </>
        )
    }

    const courseDuration = formatDuration(course.duration);
    const courseDate = formatDate(course.creationDate);
    const courseAuthors = getCourseAuthors(authors, course.authors);

    return (
        <div className='course-info'>
            <div className='course-info-link'>
                <Link to={'/courses'}>&#x2190; Back to courses</Link>
            </div>
            <h2 className='course-info-title'>
                {course.title}
            </h2>

            <div className='course-info-container'>
                <div className='course-info-description'>
                    <p className='course-info-description-text'>
                        {course.description}
                    </p>
                </div>
                <div className='course-info-details'>
                    <ul className='course-info-list'>
                        <li className='course-info-list-item'>
                            <strong>ID:</strong> {course.id}
                        </li>
                        <li className='course-info-list-item'>
                            <strong>Duration:</strong> {courseDuration}
                        </li>
                        <li className='course-info-list-item'>
                            <strong>Created:</strong> {courseDate}
                        </li>
                        <li className='course-info-list-item'>
                            <strong>Authors:</strong>
                            <div className='course-info-authors'>
                                {courseAuthors}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CourseInfo;
