import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import {IoSunny, IoSunnyOutline} from 'react-icons/io5'

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled.a.attrs({
        href: '/',
    })`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    `;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    // font-weight: var(--fw-bold);
    // text-transform: capitalize;
    text-transform: uppercase;
`;

function Header(props) {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
    
        document.body.setAttribute('data-theme', theme)

    }, [theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>do you have any friends?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                        <IoSunny size="12px" />
                        ) : (
                        <IoSunnyOutline size="12px" />
                        )}{' '}
                        <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}

export {Header}; 
