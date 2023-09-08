import React from 'react';
import HeaderLink from './HeaderLink';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    max-width: 960px;
    margin: 0 auto;
    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
    }
`

const Header = ({  }) => {
    return (
        <>
            <HeaderStyle>
                <ul>
                    <HeaderLink directionPoint="/" linkName="home" />
                    <HeaderLink directionPoint="/contact" linkName="contact" />
                    <HeaderLink directionPoint="/about" linkName="about" />
                </ul>
            </HeaderStyle>
        </>
    );
}

export default Header;
