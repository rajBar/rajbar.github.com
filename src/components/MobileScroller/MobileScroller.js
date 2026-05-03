import React, { useRef } from 'react';
import './MobileScroller.css';

const MobileScroller = ({ links, selectedId, onScrollChange }) => {
    const scrollerRef = useRef(null);

    const handleScroll = () => {
        if (!scrollerRef.current) return;
        
        const scroller = scrollerRef.current;
        const scrollPosition = scroller.scrollTop;
        const itemHeight = scroller.clientHeight * 0.6;
        
        // If at the very top (or close to it), reset to raj.Bar
        if (scrollPosition < itemHeight / 2) {
            if (selectedId !== "raj.Bar") {
                onScrollChange(null); // Signal reset
            }
            return;
        }

        // Adjust index because of the spacer at the top
        const index = Math.round(scrollPosition / itemHeight) - 1;
        if (links[index] && links[index].id !== selectedId) {
            onScrollChange(links[index]);
        }
    };

    const scrollToItem = (index) => {
        if (!scrollerRef.current) return;
        const itemHeight = scrollerRef.current.clientHeight * 0.6;
        // +1 to account for the top spacer
        scrollerRef.current.scrollTo({
            top: (index + 1) * itemHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="mobile-scroller-container">
            {/* Side Navigation Rail */}
            <div className="side-rail">
                {links.map((link, index) => (
                    <div 
                        key={`rail-${link.id}`} 
                        className={`rail-dot ${selectedId === link.id ? 'active' : ''}`}
                        onClick={() => scrollToItem(index)}
                    >
                        {link.icon ? (
                            <img 
                                src={link.icon} 
                                alt="" 
                                className={`rail-icon ${link.isInvertible ? 'invertible' : ''}`} 
                            />
                        ) : (
                            <div className="rail-text-dot">{link.label[0]}</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Main Large Scroller */}
            <div 
                className="main-scroller" 
                ref={scrollerRef}
                onScroll={handleScroll}
            >
                {/* Initial Spacer for raj.Bar state */}
                <div className="scroller-item top-spacer"></div>

                {links.map((link) => (
                    <div key={`main-${link.id}`} className="scroller-item">
                        <a 
                            href={link.url} 
                            target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={`large-link-card ${selectedId === link.id ? 'focused' : 'dimmed'}`}
                        >
                            {link.isText ? (
                                <>
                                    <img 
                                        src={link.icon} 
                                        alt={link.label} 
                                        className={`large-icon ${link.isInvertible ? 'invertible' : ''}`} 
                                    />
                                    <div className="large-text-label-sub">{link.label}</div>
                                </>
                            ) : (
                                <img 
                                    src={link.icon} 
                                    alt={link.label} 
                                    className={`large-icon ${link.isInvertible ? 'invertible' : ''}`} 
                                />
                            )}
                            <div className="visit-hint">Tap to Visit</div>
                        </a>
                    </div>
                ))}
                {/* Spacer to allow the last item to be centered */}
                <div className="scroller-spacer"></div>
            </div>
        </div>
    );
};

export default MobileScroller;
