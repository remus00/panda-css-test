import { css } from '../../styled-system/css';

interface Props {
    label: string;
    cssProps?: Parameters<typeof css>[0]; // ✅ Correctly infers valid CSS properties
}

export const Heading = ({ label, cssProps }: Props) => {
    return (
        <div
            className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                ...cssProps,
            })}
        >
            <div className={css({ w: '72px', h: '2px', bg: 'gold' })} />
            <p
                className={css({
                    color: 'gold',
                    fontSize: '18px',
                    letterSpacing: '6px',
                    textTransform: 'uppercase',
                    fontWeight: 'extrabold',
                })}
            >
                {label}
            </p>
        </div>
    );
};
