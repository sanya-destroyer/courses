import {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import {useActions} from '../../../../hooks/useAction';

import {useAppSelector} from '../../../../hooks/redux';
import {selectCoursesFilter} from '../../../../store/courses/courses.selectors';
import {selectUserIsAdmin} from "../../../../store/user/user.selectors";

import './SearchBar.css';


function SearchBar() {
  const filter = useAppSelector(selectCoursesFilter);
  const isUserAdmin = useAppSelector(selectUserIsAdmin);

  const [input, setInput] = useState(filter);

  const {changeCourseFilterAction} = useActions();
  const navigate = useNavigate();

  const inputChange = (event: ChangeEvent) => {
    setInput((event.target as HTMLInputElement).value);

    if ((event.target as HTMLInputElement).value === '') {
      changeCourseFilterAction('');
    }
  };

  const onSubmit = (event: FormEvent) => {
      event.preventDefault();
      changeCourseFilterAction(input);
  };

  const addNewCourse = useCallback(() => {
      navigate('/courses/add');
  }, []);

  const getSearchBarButtons = (isAdmin: boolean) => {
      if( !isAdmin ) return;

      return (
          <div className="search-bar-button">
              <Button buttonText={'Add new course'} testId="search-bar-add" onClick={addNewCourse}/>
          </div>
      )
  }

  const searchBarButtons = getSearchBarButtons(isUserAdmin);

  return (
        <form
            className="search-bar"
            onSubmit={onSubmit}
            data-testid="search-bar"
        >
            <div className="search-bar-search">
                <div className='search-bar-search-input'>
                    <Input labelText='Search course' onChange={inputChange} value={input}/>
                </div>
                <div className='search-bar-search-button'>
                    <Button buttonText={'Search'} type='submit' />
                </div>
            </div>
            {searchBarButtons}
        </form>
  );
}
export default SearchBar;
