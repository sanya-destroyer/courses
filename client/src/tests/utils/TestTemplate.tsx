import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ReactNode} from 'react';

interface ITestTemplateProps {
    store: any;
    children: ReactNode;
}

function TestTemplate({ store, children }: ITestTemplateProps) {
    return (
        <MemoryRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </MemoryRouter>
    );
}

export default TestTemplate;