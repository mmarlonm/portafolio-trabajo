import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="custom-header">
            <div className="custom-header-left">
                <span className="custom-header-dot">●</span>
                <span className="custom-header-name">Marlon</span>
            </div>
            <div className="custom-header-right">
                <button className="custom-header-menu">
                    <span className="custom-header-menu-label">MENU</span>
                    <span className="custom-header-menu-icon">≡</span>
                </button>
            </div>
        </header>
    );
};

export default Header;