import { estilo } from './estilo.css';
import React from "react";
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function SemAcesso() {
    return (
        <>
            <nav className="sidebar">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src='/icons/icon-72x72.png' alt='Ta Perdido' />
                        </span>

                        <div className="texte header-text">
                            <span className="name">Ta Perdido</span>
                        </div>
                    </div>

                    <MdKeyboardArrowRight className='toggle' />
                </header>
            </nav>
        </>
    )
}

