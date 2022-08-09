import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import {IoSunny, IoSunnyOutline, IoAccessibilitySharp} from 'react-icons/io5'
import {Link } from 'react-router-dom';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

const Title = styled.li`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    margin-left: 2rem;
    text-decoration: none;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    list-style-type: none;
    `;

const Logo = styled.a.attrs({
        href: '/',
    })`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    `;

const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const ModeSwitcher = styled.li`
    margin-left: 2rem;
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
    text-transform: uppercase;
    list-style-type: none;
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
                    <Link to='/'><Logo><IoAccessibilitySharp size="25px"/></Logo></Link>
                    <Nav>
                        <Link style={{ textDecoration: 'none' }} to='/'><Title>home</Title></Link>
                        <a style={{ textDecoration: 'none' }} href='https://github.com/maximmorenko/spa-friends-project'><Title>repo</Title></a>
                        <Link style={{ textDecoration: 'none' }} to='/blog'><Title>blog</Title></Link>
                        <ModeSwitcher onClick={toggleTheme}>
                            {theme === 'light' ? (
                            <IoSunny size="12px" />
                            ) : (
                            <IoSunnyOutline size="12px" />
                            )}{' '}
                            <span style={{ marginLeft: '0.2rem' }}>{theme} Theme</span>
                        </ModeSwitcher>
                    </Nav>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}

export {Header}; 
