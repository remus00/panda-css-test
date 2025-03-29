import { css } from '../../styled-system/css';

export const Logo = () => {
    return (
        <p
            className={`chronicle ${css({ fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase' })}`}
        >
            mntn
        </p>
    );
};
