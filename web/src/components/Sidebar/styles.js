import styled from 'styled-components';

export const SideBarAside = styled.aside `
position: fixed;
height: 100%;
padding: 32px 24px;
background: linear-gradient(329.54deg, #FF9A9A 0%, #B65F5F 100%);

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

img {
    width: 48px;
}

footer {

    a,
    button {
        width: 48px;
        height: 48px;

        border: 0;

        background: #B65F5F;
        border-radius: 16px;

        cursor: pointer;

        transition: background-color 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: #FF9A9A;
        }
    }
}
`;