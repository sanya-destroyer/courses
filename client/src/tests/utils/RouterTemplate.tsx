import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import AppRoutes from '../../components/AppRoutes/AppRoutes';

interface RouterTemplateProps {
    initialEntry: string;
    store: any;
}

function RouterTemplate({initialEntry = "/", store}: RouterTemplateProps) {
    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialEntry]}>
                <AppRoutes />
            </MemoryRouter>
        </Provider>
    );
}

export default RouterTemplate;