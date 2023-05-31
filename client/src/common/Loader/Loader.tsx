import './Loader.css';

interface LoaderProps {
    size?: number;
}

const defaultFontSize = 20;

function Loader({ size = 1}: LoaderProps) {

    const fontSize = size * defaultFontSize + 'px';

    return (
        <div
            data-testid="loader-element"
            className='loader'
            style={{ fontSize: fontSize }}
        >
            <span className='loader-bubble'></span>
            <span className='loader-bubble'></span>
            <span className='loader-bubble'></span>
        </div>
    );
}

export default Loader;