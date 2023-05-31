import {bindActionCreators} from 'redux';
import {useMemo} from 'react';

import * as authActionCreators from '../store/user/user.action.creators';
import * as coursesActionCreators from '../store/courses/courses.action.creators';
import * as authorsActionCreators from '../store/authors/authors.action.creators';

import * as authThunkActionCreators from '../store/user/user.thunk';
import * as coursesThunkActionCreators from '../store/courses/courses.thunk';
import * as authorsThunkActionCreators from '../store/authors/authors.thunk';

import {useAppDispatch} from "./redux";

const actionCreators = {
    ...authActionCreators,
    ...coursesActionCreators,
    ...authorsActionCreators,

    ...authThunkActionCreators,
    ...coursesThunkActionCreators,
    ...authorsThunkActionCreators,
}

export function useActions() {
    const dispatch = useAppDispatch();

    return useMemo(() => {
        return bindActionCreators(actionCreators, dispatch);
    }, [])
}
