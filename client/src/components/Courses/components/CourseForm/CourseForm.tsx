import {ChangeEvent, Dispatch, FormEvent, useCallback, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {useAlert} from "../../../../context/AlertContext";

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { formatDuration } from '../../../../utils/format/formatDuration';

import {useActions} from "../../../../hooks/useAction";

import {useAppSelector} from '../../../../hooks/redux';
import {selectAuthors} from '../../../../store/authors/authors.selectors';
import {selectCourseById} from "../../../../store/courses/courses.selectors";

import {IAuthor, IAuthorAction} from '../../../../models/author';
import {ICourseAction} from '../../../../models/course';

import Author from "./components/Author/Author";
import ROUTES from "../../../../contants/routes";

import './CourseForm.css';


export const CourseFormTypes = {
  CREATE: "CREATE",
  UPDATE: "UPDATE"
} as const;

type CourseFormType = keyof typeof CourseFormTypes;

interface CourseFormProps {
  formType: CourseFormType
}

function CourseForm({ formType }: CourseFormProps) {
  const {addCourseThunkAction, addAuthorThunkAction, updateCourseThunkAction} = useActions();
  const { addAlert } = useAlert();
  const navigate = useNavigate();

  const { id } = useParams<any>();
  const course =  useAppSelector(selectCourseById(id)) ;
  const authors = useAppSelector(selectAuthors);

  const [selectedAuthors, setSelectedAuthors] = useState<IAuthor[]>(() => {
    if( formType === 'UPDATE' && course ) {
      const courseAuthors =  course.authors.map((id) =>
          authors.find((author) => author.id === id))

      return courseAuthors.filter(Boolean) as IAuthor[];
    }
    return [];
  });
  const [title, setTitle] = useState(() =>
      formType === 'UPDATE' && course ? course.title : ''
  );
  const [description, setDescription] = useState(() =>
      formType === 'UPDATE' && course ? course.description : ''
  );
  const [duration, setDuration] = useState(() =>
      formType === 'UPDATE' && course ? course.duration : 0
  );
  const [newAuthorName, setNewAuthorName] = useState('');

  const goBack = useCallback(() => {
    navigate(ROUTES.COURSES);
  }, [])

  const handleCourseSubmit = (event: FormEvent) => {
    event.preventDefault();

    formType === 'CREATE' ?
        createCourse() :
        updateCourse();
  }

  const checkIsFormValid = () => {
    if( !title ) {
      addAlert('Title is required')
      return false;
    }

    if( !description ) {
      addAlert('Description is required');
      return false;
    }

    if( duration === 0 ) {
      addAlert('Duration should be more than 0')
      return false;
    }

    return true;
  }

  const generateCourse = (courseDate: string): ICourseAction => {
    const courseAuthors = (selectedAuthors.length > 0) ?
        selectedAuthors.map((author) => author.id)
        : []

    return {
      title,
      duration,
      description,
      creationDate: courseDate,
      authors: courseAuthors
    }
  }

  const createCourse = () => {

    const isFormValid = checkIsFormValid();

    if( !isFormValid ) return;

    const courseDate = new Date().toLocaleDateString();

    const newCourse = generateCourse(courseDate)

    addCourseThunkAction(newCourse);
    goBack();
  }

  const updateCourse = () => {
    const isFormValid = checkIsFormValid();

    if( !isFormValid ) return;

    const updatedCourse = generateCourse(course!.creationDate);

    updateCourseThunkAction(course!.id, updatedCourse);
    goBack();
  }


  const commitAddingAuthor = useCallback(() => {
    if (newAuthorName === '') return addAlert('Author name should not be empty');

    const newAuthor: IAuthorAction = {
      name: newAuthorName
    }

    addAuthorThunkAction(newAuthor);
    setNewAuthorName('');
  }, [])

  const handleInputChange = (event: ChangeEvent, setState: Dispatch<string>) => {
    const inputValue = (event.target as HTMLInputElement).value;
    setState(inputValue);
  }

  const changeCourseDuration = useCallback((event: ChangeEvent) => {
    const newDuration = +(event.target as HTMLInputElement).value;

    if (!isNaN(newDuration)) setDuration(newDuration);
    else { setDuration(0) }
  }, [])

  const removeSelectedAuthor = (id: string) => {
    setSelectedAuthors((prev) =>
      prev.filter((author) => author.id !== id)
    )
  }

  const addSelectedAuthor = (id: string) => {
    const selected = authors.find((author) => author.id === id);
    const isSelectedChosen = selectedAuthors.find((author) => author.id === id);

    if (selected == null) return;
    if (isSelectedChosen != null) return;

    setSelectedAuthors((prev) =>
      [...prev, selected]
    )
  }

  const getAuthorsToSelect = useCallback((authors: IAuthor[]) => {

    if( !authors.length ) return <div>There is no authors to select</div>

    return authors.map((author) => {
      const isAuthorSelected = selectedAuthors.find((selectedAuthor) => selectedAuthor.id === author.id)
      if( isAuthorSelected ) return undefined;
      return <Author
          testId="author_to_select"
          key={author.id}
          author={author}
          onClick={addSelectedAuthor}
          buttonText='Add'
      />
    })
  }, [selectedAuthors, authors])

  const getSelectedAuthors = useCallback((authors: IAuthor[]) => {
    if( !authors.length ) return <div>There is no selected authors</div>

    return authors.map((author) => (
        <Author
            testId="author_selected"
            key={author.id}
            author={author}
            onClick={removeSelectedAuthor}
            buttonText='Remove'
        />
    ))
  }, [selectedAuthors])


  const courseDuration = formatDuration(duration);
  const toSelectItems = getAuthorsToSelect(authors);
  const selectedItems = getSelectedAuthors(selectedAuthors);
  const courseActionButtonText = formType === 'CREATE' ? "Create course" : "Update course";

  return (
        <div className='create-course' data-testid="course-form">
            <form
                className='course-form'
                onSubmit={handleCourseSubmit}
            >
              <fieldset className="course-form-head">
                <div className="course-form-head-input">
                  <Input
                      testId='course-form-title'
                      labelText='Title'
                      value={title}
                      onChange={(event: ChangeEvent) => handleInputChange(event, setTitle)}
                  />
                </div>
                <div className='course-form-head-buttons'>
                  <Button
                      buttonText='Go back'
                      onClick={goBack}
                  />
                  <Button
                      testId="course-form-action-button"
                      buttonText={courseActionButtonText}
                      type='submit'
                  />
                </div>
              </fieldset>

              <fieldset className='course-form-description'>
                  <label
                      className='course-form-description-label'
                      htmlFor="course-form-description-input"
                  >
                    Description
                  </label>
                  <textarea
                      data-testid='course-form-description'
                      id="course-form-description-input"
                      className='course-form-description-input'
                      cols={30}
                      rows={10}
                      value={description}
                      onChange={(event) => handleInputChange(event, setDescription)}
                  >
                  </textarea>
              </fieldset>

              <div className='course-form-grid'>

                <fieldset className='course-form-create'>
                  <h2 className='course-form-title'>Add author</h2>
                  <div className='course-form-create-input'>
                    <Input
                        testId="course-form-author-input"
                        labelText='Author name'
                        value={newAuthorName}
                        onChange={(event: ChangeEvent) => handleInputChange(event, setNewAuthorName)}
                    />
                  </div>
                  <div className='course-form-author-button'>
                    <Button
                      buttonText='Create author'
                      onClick={commitAddingAuthor}
                      testId="course-form-author-add"
                    />
                  </div>
                </fieldset>

                <fieldset className='course-form-authors'>
                  <h2 className='course-form-title'>Authors</h2>
                  <div className="course-form-authors-items">
                    {toSelectItems}
                  </div>
                </fieldset>

                <fieldset className='course-form-duration'>
                  <div className='course-form-duration-input'>
                    <Input
                        testId='course-form-duration'
                        labelText='Duration'
                        type='number'
                        value={duration}
                        onChange={changeCourseDuration}
                    />
                  </div>
                  <div className='course-form-duration-value'>
                    Duration: <span className='course-form-duration-bold'>{courseDuration}</span> hours
                  </div>
                </fieldset>

                <fieldset className='course-list-authors'>
                  <h2 className='course-form-title'>Course authors</h2>
                  <div className='course-form-authors-items'>
                    {selectedItems}
                  </div>
                </fieldset>

              </div>

            </form>
        </div>
  );
}

export default CourseForm;
