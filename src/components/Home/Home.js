import React, { useState, useEffect, useCallback, useRef } from 'react';
import TextTransition, { presets } from "react-text-transition";
import { isMobile, mobileVendor, mobileModel } from "react-device-detect";
import { publicIpv4 } from 'public-ip';
import LinksGrid from "../LinksGrid/LinksGrid";
import MobileScroller from "../MobileScroller/MobileScroller";
import { DESKTOP_LINKS, MOBILE_LINKS } from "../../constants/links";
import './Home-style.css';

const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isTouching, setIsTouching] = useState(false);
    const [isResetting, setIsResetting] = useState(false);
    const resetTimeoutRef = useRef(null);
    
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
        if (process.env.NODE_ENV === 'production') {
            notifyPhone();
        }
    }, [notifyPhone]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const changeText = (buttonSelected, prefix, r, middle, suffix, link) => {
        if (resetTimeoutRef.current) {
            clearTimeout(resetTimeoutRef.current);
            setIsResetting(false);
        }

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
        if (state.selected === "raj.Bar") return;

        setIsResetting(true);
        setState(prev => ({
            ...prev,
            selected: "raj.Bar",
            prefix: "",
            r: "r",
            middle: ".",
            suffix: "",
            link: ""
        }));

        if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = setTimeout(() => {
            setIsResetting(false);
        }, 850);
    };

    const handleMobileScrollChange = (link, progress) => {
        if (!link && (!progress || progress === 0)) {
            resetSelection();
        } else if (link) {
            changeText(link.id, link.data.prefix, link.data.r, link.data.middle, link.data.suffix, link.data.link);
        } else if (progress > 0 && state.selected !== "raj.Bar") {
            if (isResetting) {
                setIsResetting(false);
                if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
            }
        }
    };

    const { prefix, suffix, middle, r, link, selected } = state;

    return (
        <main className={`home-container ${isMobile ? 'mobile-view' : 'desktop-view'} ${isTouching ? 'is-touching' : ''}`}>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <header className={`hero-section ${isMobile ? (selected === "raj.Bar" ? 'mobile-centered' : 'mobile-top') : ''} ${isResetting ? 'is-resetting' : ''}`}>
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
                        links={MOBILE_LINKS} 
                        selectedId={selected} 
                        onScrollChange={handleMobileScrollChange} 
                        setIsTouching={setIsTouching}
                    />
                ) : (
                    <>
                        <LinksGrid links={DESKTOP_LINKS} changeText={changeText} selected={selected} />
                        <div className="reset-container">
                            {selected !== "raj.Bar" && (
                                <button className="reset-button" onClick={resetSelection}>
                                    Reset View
                                </button>
                            )}
                        </div>
                    </>
                )}
            </section>
        </main>
    );
};

export default Home;
