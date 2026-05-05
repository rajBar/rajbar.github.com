import React from 'react';
import { isMobile } from "react-device-detect";
import './LinksGrid.css';

const LinksGrid = ({ links, changeText, selected }) => {
    return (
        <div className="links-grid">
            {links.map((link) => (
                <a
                    key={link.id}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="link-item-wrapper"
                    onMouseEnter={() => !isMobile && changeText(link.id, link.data.prefix, link.data.r, link.data.middle, link.data.suffix, link.data.link)}
                    onClick={() => changeText(link.id, link.data.prefix, link.data.r, link.data.middle, link.data.suffix, link.data.link)}
                >
                    <div className={`link-item ${selected === link.id ? 'selected' : ''} ${link.isText ? 'text-item' : ''}`}>
                        {link.isText ? (
                            <>
                                <img 
                                    src={link.icon} 
                                    alt={link.label} 
                                    className={`link-icon ${link.isInvertible ? 'invertible' : ''}`} 
                                />
                                <span className="link-text-label">{link.label}</span>
                            </>
                        ) : (
                            <img 
                                src={link.icon} 
                                alt={link.label} 
                                className={`link-icon ${link.isInvertible ? 'invertible' : ''}`} 
                            />
                        )}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default LinksGrid;
