import { css } from '../styled-system/css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Section } from './components/section';
import { sectionsData } from './constants';
import './index.css';

const App = () => {
    return (
        <div className={css({ bg: '#0B1D26' })}>
            <div
                className={`gilroy ${css({ maxW: '1920px', w: 'full', margin: 'auto', pos: 'relative', zIndex: 0, color: 'white', paddingInline: '16px' })}`}
            >
                <Header />
                <Hero />
                <div className={css({ display: 'flex', flexDir: 'column', gap: '200px' })}>
                    {sectionsData.map(
                        ({ reverse, description, headingLabel, imgSrc, label, sectionId }) => (
                            <Section
                                key={sectionId}
                                reverse={reverse}
                                headingLabel={headingLabel}
                                label={label}
                                description={description}
                                imgSrc={imgSrc}
                                sectionId={sectionId}
                            />
                        ),
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
