import { estilo } from './estilo.css';
import React from "react";

export default function SemAcesso() {
    return (
        <>
            <nav className="sidebar">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src='/icons/icon-32x32.png' alt='Ta Perdido' />
                        </span>

                        <div className="texte header-text">
                            <span className="name">Ta Perdido</span>
                        </div>
                    </div>

                </header>
            </nav>
        </>
    )
}

