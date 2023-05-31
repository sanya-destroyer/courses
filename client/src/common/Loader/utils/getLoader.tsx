import Loader from '../Loader';

const getLoader = (show: boolean, size = 1) => {

    if (!show) return;

    return (
        <Loader size={size} />
    )
}

export default getLoader;