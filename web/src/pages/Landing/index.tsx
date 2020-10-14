import React, { useState, useEffect } from 'react';
import { PageLanding } from './styles';
import logoImg from '../../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <PageLanding>
            <div className="content-wrapper">
                <img className="logo-img" src={ logoImg } alt="iBlood"/>
                <main>
                    <h1>Doe amor para quem mais precisa</h1>
                    <p>Encontre o local mais próximo para fazer sua doação</p>
                </main>
                <div className="location">
                    <strong>Cidade</strong>
                    <span>Estado</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0, 0.6)"/>
                </Link>
            </div>
        </PageLanding>
    )
}

export default Landing;