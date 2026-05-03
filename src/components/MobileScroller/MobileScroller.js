import React, { useRef } from 'react';
import './MobileScroller.css';

const MobileScroller = ({ links, selectedId, onScrollChange, setIsTouching }) => {
    const scrollerRef = useRef(null);

    const handleScroll = () => {
        if (!scrollerRef.current) return;
        
        const scroller = scrollerRef.current;
        const scrollPosition = scroller.scrollTop;
        const itemHeight = scroller.clientHeight * 0.6;
        
        // Calculate glide progress (0 to 1) for the first itemHeight
        const glideProgress = Math.min(scrollPosition / (itemHeight * 0.9), 1);
        const container = scroller.closest('.home-container');
        if (container) {
            requestAnimationFrame(() => {
                container.style.setProperty('--header-glide', glideProgress);
            });
        }

        // If at the very top, reset to raj.Bar
        if (scrollPosition < 10) {
            if (selectedId !== "raj.Bar") {
                onScrollChange(null, 0); 
            }
            return;
        }

        // Trigger wordplay change earlier to match the glide
        const index = Math.round(scrollPosition / itemHeight) - 1;
        if (links[index] && links[index].id !== selectedId) {
            onScrollChange(links[index], glideProgress);
        } else if (index < 0 && selectedId !== "raj.Bar") {
            onScrollChange(null, glideProgress);
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
                onTouchStart={() => setIsTouching(true)}
                onTouchEnd={() => setIsTouching(false)}
                onTouchCancel={() => setIsTouching(false)}
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
