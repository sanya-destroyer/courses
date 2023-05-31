import {memo} from "react";

import Button from "../../../../../../common/Button/Button";

import {IAuthor} from "../../../../../../models/author";


interface AuthorProps {
    author: IAuthor;
    onClick: (id: string) => void;
    buttonText: string;
    testId?: string;
}


function Author({ author, onClick, buttonText, testId = "author" }: AuthorProps) {
    return (
        <div className='course-form-author' key={author.id} data-testid={testId}>
            <p className='course-form-author-name'>{author.name}</p>
            <div className='course-form-author-button'>
                <Button
                    testId={`${testId}-button`}
                    buttonText={buttonText}
                    onClick={() => onClick(author.id)}
                />
            </div>
        </div>
    );
}

export default memo(Author);
