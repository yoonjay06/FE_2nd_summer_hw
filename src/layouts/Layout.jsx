import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Layout() {
    return (
        <>
        <Header>
            <HeaderInner>
            <Logo to="/">velog</Logo>
            <RightArea>
                <LoginButton>로그인</LoginButton>
            </RightArea>
            </HeaderInner>
        </Header>
        <Outlet />
        </>
    );
}

const Header = styled.header`
    height: 64px;
    display: flex;
    align-items: center;
`;

const HeaderInner = styled.div`
    max-width: 1376px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.a.attrs({ href: '/' })`
    font-size: 20px;
    font-weight: 800;
    color: #212529;
    text-decoration: none;
`;

const RightArea = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const LoginButton = styled.button`
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #212529;
    border: none;
    border-radius: 16px;
    padding: 6px 16px;
    cursor: pointer;
`;

export default Layout;