import {memo} from 'react';
import {useNavigate} from 'react-router-dom';

import Button from '../../../../common/Button/Button';

import {useActions} from "../../../../hooks/useAction";

import {useAppSelector} from '../../../../hooks/redux';
import {selectAuthors} from '../../../../store/authors/authors.selectors';
import {selectUserIsAdmin} from "../../../../store/user/user.selectors";

import {ICourse} from '../../../../models/course';
import {IAuthor} from '../../../../models/author';

import {formatDate} from '../../../../utils/format/formatDate';
import {formatDuration} from '../../../../utils/format/formatDuration';

import './CourseCard.css';


function CourseCard({ id, title, description, creationDate, duration, authors }: ICourse) {

  const availableAuthors = useAppSelector(selectAuthors);
  const isUserAdmin = useAppSelector(selectUserIsAdmin);
  const navigate = useNavigate();
  const { deleteCourseThunkAction } = useActions();

  const showCourse = () => {
    navigate(`/courses/${id}`);
  }

  const handleRemoveCourse = () => {
    deleteCourseThunkAction(id);
  }

  const handleUpdateCourse = () => {
    navigate(`/courses/update/${id}`);
  }

  const getCourseAuthors = (authors: IAuthor[], courseAuthors: string[]) => {
    if ( !authors.length || !courseAuthors.length ) {
      return <div>No authors</div>
    }

    return courseAuthors.map((courseAuthorId, index) => {
      const author = authors.find((author) => author.id === courseAuthorId);

      if (author == null) return '';

      if (index === courseAuthors.length - 1) return <span key={courseAuthorId} data-testid="course-card-author">{author.name}</span>;
      return <span key={courseAuthorId} data-testid="course-card-author">{author.name + ', '}</span>;
    })
  }

  const getCourseAdminButtons = (isAdmin: boolean) => {
    if ( !isAdmin ) return;

    return (
        <>
          <Button onClick={handleUpdateCourse}>&#9998;</Button>
          <Button onClick={handleRemoveCourse}>&#128465;</Button>
        </>
    )
  }

  const courseAuthors = getCourseAuthors(availableAuthors, authors);
  const courseDate = formatDate(creationDate);
  const courseDuration = formatDuration(duration);
  const courseAdminButtons = getCourseAdminButtons(isUserAdmin);

  return (
      <div className='course' data-testid="course-card">
        <div className='course-text'>
          <h3 className='course-title' data-testid="course-card-title">{title}</h3>
          <p className='course-content' data-testid="course-card-description">{description}</p>
        </div>
        <div className='course-side'>
          <div className='course-details'>
            <ul className='course-list'>
              <li className='course-list-item course-list-authors'><strong>Authors: </strong>
                {courseAuthors}
              </li>
              <li className='course-list-item' data-testid="course-card-duration"><strong>Duration: </strong>{courseDuration} hours</li>
              <li className='course-list-item' data-testid="course-card-date"><strong>Created: </strong>{courseDate}</li>
            </ul>
          </div>
          <div className='course-buttons' data-testid="course-card-buttons">
            <Button onClick={showCourse} buttonText={'Show Course'} testId="course-card-show" />
            {courseAdminButtons}
          </div>
        </div>
      </div>
  );
}

export default memo(CourseCard);
