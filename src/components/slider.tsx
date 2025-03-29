import { css } from '../../styled-system/css';

const textStyle = css({
    fontSize: '18px',
    fontWeight: 'bold',
});

export const Slider = () => {
    return (
        <div className={css({ display: 'flex', alignItems: 'center', gap: '32px' })}>
            <div
                className={css({
                    display: 'flex',
                    flexDir: 'column',
                    gap: '40px',
                    textAlign: 'end',
                })}
            >
                <p className={textStyle}>Start</p>
                <p className={textStyle}>01</p>
                <p className={textStyle}>02</p>
                <p className={textStyle}>03</p>
            </div>
            <div
                className={css({
                    w: '3px',
                    bg: 'rgba(255, 255, 255, 50%)',
                    h: '240px',
                    position: 'relative',
                })}
            >
                <div
                    className={css({
                        w: '3px',
                        h: '60px',
                        bg: 'white',
                        opacity: '100%',
                        position: 'absolute',
                    })}
                ></div>
            </div>
        </div>
    );
};
