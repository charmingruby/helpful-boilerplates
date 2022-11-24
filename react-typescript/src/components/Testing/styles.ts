import styled from 'styled-components';

export const Container = styled.div`
    background-color: #2d3748;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #26293d;
    height: 5rem;
    padding: 20px;
    transition: .1s;

    &:hover {
        transition: .1s;
        transform: scale(1.2)
    }
    
    a {
        text-decoration: none;
    }

    h1 {
        cursor: pointer;
        color: #fff;
        font-weight: 400;
    }

    span {
        color: #1473fa;
    }
`;