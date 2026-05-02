import React, { useRef } from 'react';
import './MobileScroller.css';

const MobileScroller = ({ links, selectedId, onScrollChange }) => {
    const scrollerRef = useRef(null);

    const handleScroll = () => {
        if (!scrollerRef.current) return;
        
        const scroller = scrollerRef.current;
        const scrollPosition = scroller.scrollTop;
        const itemHeight = scroller.clientHeight * 0.6; // Matches item height in CSS
        
        const index = Math.round(scrollPosition / itemHeight);
        if (links[index] && links[index].id !== selectedId) {
            onScrollChange(links[index]);
        }
    };

    const scrollToItem = (index) => {
        if (!scrollerRef.current) return;
        const itemHeight = scrollerRef.current.clientHeight * 0.6;
        scrollerRef.current.scrollTo({
            top: index * itemHeight,
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
                            <img src={link.icon} alt="" className="rail-icon" />
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
                {links.map((link) => (
                    <div key={`main-${link.id}`} className="scroller-item">
                        <a 
                            href={link.url} 
                            target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="large-link-card"
                        >
                            {link.isText ? (
                                <div className="large-text-label">{link.label}</div>
                            ) : (
                                <img src={link.icon} alt={link.label} className="large-icon" />
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
