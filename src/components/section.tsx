import { css } from '../../styled-system/css';
import { ArrowLeft } from '../assets/images';
import { Heading } from './heading';

interface Props {
    reverse?: boolean;
    headingLabel: string;
    sectionId: number;
    label: string;
    description: string;
    imgSrc: string;
}

export const Section = ({
    reverse,
    headingLabel,
    sectionId,
    label,
    description,
    imgSrc,
}: Props) => {
    return (
        <div
            className={css({
                display: 'flex',
                flexDir: reverse ? 'row-reverse' : 'row',
                maxW: '1462px',
                w: 'full',
                marginX: 'auto',
                alignItems: 'center',
                justifyContent: 'space-between',
            })}
        >
            <div className={css({ maxW: '782px', w: 'full', pos: 'relative' })}>
                <p
                    className={css({
                        pos: 'absolute',
                        opacity: '10%',
                        fontSize: '240px',
                        fontWeight: 'extrabold',
                        top: '-80px',
                        left: 0,
                        lineHeight: '240px',
                    })}
                >
                    0{sectionId}
                </p>
                <div
                    className={css({
                        w: '632px',
                        display: 'flex',
                        flexDir: 'column',
                        gap: '32px',
                        marginLeft: 'auto',
                    })}
                >
                    <Heading label={headingLabel} />
                    <h2
                        className={`chronicle ${css({ fontWeight: 'semibold', fontSize: '64px' })}`}
                    >
                        {label}
                    </h2>
                    <p className={css({ fontWeight: 'bold', fontSize: '18px' })}>{description}</p>
                    <div className={css({ display: 'flex', gap: '16px', alignItems: 'center' })}>
                        <p className={css({ fontWeight: 'bold', fontSize: '18px', color: 'gold' })}>
                            read more
                        </p>
                        <img
                            src={ArrowLeft}
                            alt="arrow left"
                            className={css({ w: '24px', h: '16px' })}
                        />
                    </div>
                </div>
            </div>
            <div className={css({ position: 'relative', w: '566px', h: '720px' })}>
                <img
                    src={imgSrc}
                    alt={`section ${sectionId} img`}
                    className={css({ objectFit: 'cover', bgPosition: 'center' })}
                />
            </div>
        </div>
    );
};
