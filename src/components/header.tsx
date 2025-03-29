import { css } from '../../styled-system/css';
import { UserIcon } from '../assets/images';
import { Logo } from './logo';

const navStyle = css({
    fontWeight: 'bold',
    fontSize: '18px',
});

export const Header = () => {
    return (
        <header
            className={css({
                w: 'full',
                maxW: '1920px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'fixed',
                padding: '32px 16px',
                zIndex: '999',
                top: 0,
                backdropFilter: 'auto',
                backdropBlur: 'md',
            })}
        >
            <Logo />

            <nav className={css({ display: 'flex', alignItems: 'center', gap: '40px' })}>
                <p className={navStyle}>Equipment</p>
                <p className={navStyle}>About us</p>
                <p className={navStyle}>Blog</p>
            </nav>

            <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                <img src={UserIcon} alt="user icon" />
                <p className={navStyle}>Account</p>
            </div>
        </header>
    );
};
