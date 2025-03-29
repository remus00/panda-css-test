import { css } from '../../styled-system/css';
import { BGHero, Clouds } from '../assets/images';

export const BgImgs = () => {
    return (
        <div className={css({ pos: 'relative', zIndex: 0 })}>
            <img
                src={BGHero}
                alt="cloud"
                className={css({
                    objectFit: 'cover',
                    resize: 'none',
                    width: '100vw',
                    height: '100vh',
                    zIndex: 2,
                    pos: 'relative',
                })}
            />
            <img
                src={Clouds}
                alt="cloud"
                className={css({
                    objectFit: 'cover',
                    resize: 'none',
                    width: '100vw',
                    height: '1513px',
                    pos: 'absolute',
                    left: 0,
                    top: '-400px',
                    zIndex: 0,
                })}
            />
        </div>
    );
};
