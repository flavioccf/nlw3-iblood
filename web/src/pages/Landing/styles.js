import styled from 'styled-components';
import bkgImg from '../../images/blood-donate.svg';

export const PageLanding = styled.div `
    background: linear-gradient(329.54deg, #FF9A9A 0%, #B65F5F 100%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .content-wrapper {
        padding: 1rem;
        position: relative;

        width: 100%;
        max-width: 1100px;

        height: 100%;
        max-height: 680px;

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;

        background: url(${bkgImg}) no-repeat 80% center;
        background-size: contain;

        .logo-img {
            height: 2.5rem;
        }

        main {
            max-width: 350px;
            h1 {
                font-size: 6rem;
                font-weight: 900;
                line-height: 6rem;
            }
            p {
                margin-top: 40px;
                font-weight: 600;
                font-size: 2rem;
                line-height: 34px;
                @media (max-width: 568px) {
                    width: 50%;
                }
            }
        }

        .location {
            position: absolute;
            right: 0;
            top: 0;

            font-size: 24px;
            line-height: 34px;

            display: flex;
            flex-direction: column;
            
            text-align: right;

            strong {
                font-weight: 800;
            }
        }

        .enter-app {
            position: absolute;
            right: 0.3rem;
            bottom: 0.3rem;

            width: 80px;
            height: 80px;
            background: #ffd666;
            border-radius: 30px;

            display: flex;
            align-items: center;
            justify-content: center;
            
            transition: background-color 0.2s;

            &:hover {
                background: #D12929;
            }
        }
        
    }
`;