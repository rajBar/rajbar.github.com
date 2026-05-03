import React, { useState, useEffect, useCallback } from 'react';
import TextTransition, { presets } from "react-text-transition";
import { isMobile, mobileVendor, mobileModel } from "react-device-detect";
import { publicIpv4 } from 'public-ip';
import LinksGrid from "../LinksGrid/LinksGrid";
import MobileScroller from "../MobileScroller/MobileScroller";
import { LINKS } from "../../constants/links";
import './Home-style.css';

const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [state, setState] = useState({
        selected: "raj.Bar",
        r: "r",
        prefix: "",
        suffix: "",
        middle: ".",
        link: "",
        alerted: false,
        numberOfSelections: 0,
    });

    const notifyPhone = useCallback(async () => {
        try {
            const ipv4 = await publicIpv4();
            const platform = isMobile ? `${mobileVendor} ${mobileModel}` : navigator.platform;
            const url = `https://maker.ifttt.com/trigger/site_visited/with/key/b_Yu8_AU_JIDYDYR_WXF5-?value1=${ipv4}&value2=${platform}&value3=raj.Bar`;
            
            if (!state.alerted) {
                fetch(url, { method: 'post' }).catch(e => console.log(e));
                setState(prev => ({ ...prev, alerted: true }));
            }
        } catch (e) {
            console.error("Failed to notify:", e);
        }
    }, [state.alerted]);

    useEffect(() => {
        notifyPhone();
    }, [notifyPhone]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const changeText = (buttonSelected, prefix, r, middle, suffix, link) => {
        let { numberOfSelections } = state;
        numberOfSelections += 1;

        let finalLink = link;
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && buttonSelected === "linkedin") {
            finalLink = "linkedin://profile/gulrajbariah";
        }

        setState(prev => ({
            ...prev,
            selected: buttonSelected,
            r,
            prefix,
            suffix,
            middle,
            link: finalLink,
            numberOfSelections,
        }));
    };

    const resetSelection = () => {
        setState(prev => ({
            ...prev,
            selected: "raj.Bar",
            prefix: "",
            r: "r",
            middle: ".",
            suffix: "",
            link: ""
        }));
    };

    const handleMobileScrollChange = (link) => {
        if (!link) {
            resetSelection();
        } else {
            changeText(link.id, link.data.prefix, link.data.r, link.data.middle, link.data.suffix, link.data.link);
        }
    };

    const { prefix, suffix, middle, r, link, selected } = state;

    return (
        <main className={`home-container ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <header className={`hero-section ${isMobile ? (selected === "raj.Bar" ? 'mobile-centered' : 'mobile-top') : ''}`}>
                <a 
                    href={link || "#"} 
                    target={link ? "_blank" : "_self"} 
                    rel="noopener noreferrer"
                    className={`dynamic-header ${!link ? 'no-link' : ''}`}
                    onClick={(e) => !link && e.preventDefault()}
                >
                    <div className="raj-bar-display">
                        <TextTransition text={prefix} springConfig={presets.wobbly} inline className="text-secondary" />
                        <TextTransition text={r} springConfig={presets.wobbly} inline className="text-main" />
                        <TextTransition text="aj" springConfig={presets.wobbly} inline className="text-main" />
                        <TextTransition text={middle} springConfig={presets.wobbly} inline className="text-secondary" />
                        <TextTransition text="Bar" springConfig={presets.wobbly} inline className="text-main" />
                        <TextTransition text={suffix} springConfig={presets.wobbly} inline className="text-secondary" />
                    </div>
                </a>
                
                <div className="spacer" style={{ height: '24px' }} />
            </header>

            <section className="links-section">
                {isMobile ? (
                    <MobileScroller 
                        links={LINKS} 
                        selectedId={selected} 
                        onScrollChange={handleMobileScrollChange} 
                    />
                ) : (
                    <>
                        <LinksGrid changeText={changeText} selected={selected} />
                        {selected !== "raj.Bar" && (
                            <button className="reset-button" onClick={resetSelection}>
                                Reset View
                            </button>
                        )}
                    </>
                )}
            </section>
        </main>
    );
};

export default Home;
