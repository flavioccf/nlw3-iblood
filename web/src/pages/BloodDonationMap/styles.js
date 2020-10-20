import styled from 'styled-components';

export const BloodDonationMapArea = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
    }

    aside {
        width: 440px;
        background: linear-gradient(329.54deg, #FF9A9A 0%, #B65F5F 100%);
        padding: 80px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        header {
            .marker-img {
                width: 50px;
            }
            h2 {
                font-size: 40px;
                font-weight: 800;
                line-height: 42px;
                margin-top: 64px;
            }

            p {
                line-height: 28px;
                margin-top: 24px;
            }
        }

        footer {
            display: flex;
            flex-direction: column;
            line-height: 25px;

            strong {
                font-weight: 800;
            }
        }
        @media (max-width: 768px) {
            width: 100%;
            max-height: 20%;
            padding: 1rem;
            flex-direction: row;
            justify-content: space-between;
            header {
                h2 {
                margin-top: 1rem;
                font-size: 2rem;
                line-height: 2rem;
            }
            p{
                font-size: 1.2rem;
                line-height: 1.2rem;
            }
            }
        }
    }

    .leaflet-container {
        z-index: 5;
        .leaflet-popup {
            z-index: 99999;
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
                box-shadow: none;

                .leaflet-popup-content {
                    color: #B65F5F;
                    font-size: 20px;
                    font-weight: bold;
                    margin: 8px 12px;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    a {
                        width: 40px;
                        height: 40px;
                        background: #FF9A9A;
                        box-shadow: 17px 27px 41px rgba(23, 142, 166, 0.16);
                        border-radius: 12px;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                .leaflet-popup-tip-container {
                    display: none;
                }
                }
    }

    
    .create-blood-donation {
        z-index: 10;
        position: absolute;
        right: 40px;
        bottom: 40px;
        width: 64px;
        height: 64px;
        border-radius: 20px;
        background: #FF9A9A;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.2s;

        &:hover {
            background: #D12929;
        } 
    }
`;