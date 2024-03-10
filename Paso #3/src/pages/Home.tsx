import { useRef } from 'react';

import { withBasicLayout } from '../layout/basicLayout';
import AboutMe from '../sections/AboutMe';
import Hero from '../sections/Hero';
import Portfolio from '../sections/Portfolio';
import Carousel from '../sections/Carousel';
import Contact from '../sections/Contact';

export type SectionsReferences = {
    [key: string]: {
        ref: React.RefObject<HTMLElement>;
        scrollTo: () => void;
    };
};

export const Home = () => {
    const heroRef = useRef<HTMLElement>(null);
    const aboutMeRef = useRef<HTMLElement>(null);
    const portfolioRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const headerHeight = 96;

    const sectionsRef: SectionsReferences = {
        heroRef: {
            ref: heroRef,
            scrollTo: () => {
                const offset = (heroRef.current?.getBoundingClientRect().top ?? 0) - headerHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                });
            },
        },
        aboutMeRef: {
            ref: aboutMeRef,
            scrollTo: () => {
                const offset = (aboutMeRef.current?.getBoundingClientRect().top ?? 0) - headerHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                });
            },
        },
        portfolioRef: {
            ref: portfolioRef,
            scrollTo: () => {
                const offset = (portfolioRef.current?.getBoundingClientRect().top ?? 0) - headerHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                });
            },
        },
        contactRef: {
            ref: contactRef,
            scrollTo: () => {
                const offset = (contactRef.current?.getBoundingClientRect().top ?? 0) - headerHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                });
            },
        },
    };

    return (
        <div>
            <Hero
                reference={ heroRef }
                sectionsRef={ sectionsRef }
            />
            <Carousel />
            <AboutMe
                title={ 'title' }
                description={ ['description_1', 'description_2'] }
                reference={ aboutMeRef }
                sectionsRef={ sectionsRef }
                isLeft={ true }
            />
            <Portfolio reference={ portfolioRef } />
            <Contact reference={ contactRef } sectionsRef={ sectionsRef } />
        </div>
    );
};

export default withBasicLayout(Home);
