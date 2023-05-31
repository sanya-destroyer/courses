import {useEffect} from 'react';

import {useAlert} from '../../context/AlertContext';


import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';


import {useActions} from '../../hooks/useAction';

import {useAppSelector} from '../../hooks/redux';
import {
  selectCoursesError,
  selectCoursesIsLoading,
  selectFilteredCourses
} from '../../store/courses/courses.selectors';

import { ICourse } from '../../models/course';

import getLoader from '../../common/Loader/utils/getLoader';

import './Courses.css';


function Courses() {
  const {clearCoursesErrorAction} = useActions();
  const {addAlert} = useAlert();

  const courses = useAppSelector(selectFilteredCourses);
  const isCoursesLoading = useAppSelector(selectCoursesIsLoading);
  const error = useAppSelector(selectCoursesError);


  useEffect(() => {
    if( error ) {
      addAlert(error);
      clearCoursesErrorAction();
    }
  }, [error]);

  const getFilteredCourseItems = (courses: ICourse[]) => {
    if (courses.length === 0) return <div data-testid="courses-empty">There is no courses</div>

    return courses.map((course) =>
        <CourseCard key={course.id} {...course}/>
    );
  }

  const loader = getLoader(isCoursesLoading);
  const courseItems = getFilteredCourseItems(courses);

  return (
        <div className='courses' data-testid="courses">
          <SearchBar />
          <div className='courses-items'>
            {loader}
            {courseItems}
          </div>
        </div>
  );
}

export default Courses;
