import { css } from '../../styled-system/css';
import { ArrowDown, InstagramIcon, TwitterIcon } from '../assets/images';
import { Heading } from './heading';
import { Slider } from './slider';

export const Hero = () => {
    return (
        <div
            className={css({
                w: 'full',
                h: 'dvh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            })}
        >
            <div
                className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    w: 'full',
                })}
            >
                <div
                    className={css({
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    })}
                >
                    <p
                        className={css({
                            fontSize: '18px',
                            fontWeight: 'bold',
                            writingMode: 'vertical-lr',
                        })}
                    >
                        Follow us
                    </p>
                    <img
                        src={InstagramIcon}
                        alt="instagram"
                        className={css({ w: '24px', h: '24px' })}
                    />
                    <img
                        src={TwitterIcon}
                        alt="Twitter"
                        className={css({ w: '24px', h: '24px' })}
                    />
                </div>

                <div className={css({ maxW: '950px', w: 'full', spaceY: '32px' })}>
                    <Heading label="A hiking guide" />
                    <h1
                        className={`chronicle ${css({ fontSize: '88px', lineHeight: '100px', fontWeight: 'semibold', textTransform: 'capitalize' })}`}
                    >
                        Be prepared for the mountains and beyond!
                    </h1>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '16px' })}>
                        <p className={css({ fontSize: '18px', fontWeight: 'bold' })}>scroll down</p>
                        <img src={ArrowDown} alt="arrow down" />
                    </div>
                </div>

                <Slider />
            </div>
        </div>
    );
};
