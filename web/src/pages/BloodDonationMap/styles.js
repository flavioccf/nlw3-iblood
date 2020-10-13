import styled from 'styled-components';

export const BloodDonationMapArea = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    position: relative;

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
    }

    .leaflet-container {
        z-index: 5;
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