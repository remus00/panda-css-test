import { css } from '../../styled-system/css';
import { Logo } from './logo';

const footerCol = css({ display: 'flex', flexDir: 'column', gap: '24px' });

const footerLabel = css({
    fontWeight: 'bold',
    color: 'gold',
    fontSize: '24px',
    lineHeight: '32px',
});

const footerLink = css({
    fontSize: '18px',
    lineHeight: '32px',
    fontWeight: 'medium',
});

const footerLeft = [
    'About MNTN',
    'Contributors & Writers',
    'Write For Us',
    'Contact Us',
    'Privacy Policy',
];

const footerRight = ['The Team', 'Jobs', 'Press'];

export const Footer = () => {
    return (
        <footer
            className={css({
                maxW: '1462px',
                w: 'full',
                marginX: 'auto',
                marginTop: '200px',
                marginBottom: '128px',
                display: 'flex',
                justifyContent: 'space-between',
            })}
        >
            <div
                className={css({
                    display: 'flex',
                    flexDir: 'column',
                    justifyContent: 'space-between',
                })}
            >
                <div className={css({ spaceY: '24px' })}>
                    <Logo />
                    <p className={css({ fontWeight: 'bold', fontSize: '18px' })}>
                        Get out there & discover your next <br /> slope, mountain & destination!
                    </p>
                </div>
                <p className={css({ fontWeight: 'medium', fontSize: '18px', opacity: '50%' })}>
                    Copyright 2023 MNTN, Inc. Terms & Privacy
                </p>
            </div>

            <div className={css({ display: 'flex', gap: '212px' })}>
                <div className={footerCol}>
                    <h4 className={footerLabel}>More on The Blog</h4>
                    {footerLeft.map((item, idx) => (
                        <p key={idx} className={footerLink}>
                            {item}
                        </p>
                    ))}
                </div>
                <div className={footerCol}>
                    <h4 className={footerLabel}>More on MNTN</h4>
                    {footerRight.map((item, idx) => (
                        <p key={idx} className={footerLink}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </footer>
    );
};
