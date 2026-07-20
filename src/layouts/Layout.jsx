import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Layout() {
    return (
        <>
        <Header>
            <HeaderInner>
            <Logo to="/">velog</Logo>
            <RightArea>
                <IconButton aria-label="알림">
                    <i className="fa-regular fa-bell"></i>
                </IconButton>
                <IconButton aria-label="검색">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </IconButton>
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
    gap: 12px;
`;

const IconButton = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    color: #212529;
    transition: background 0.2s;

    &:hover {
        background: #f1f3f5;
    }
`;

const LoginButton = styled.button`
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #212529;
    border: none;
    border-radius: 16px;
    padding: 1px 16px;
    cursor: pointer;
    height: 32px;
    width: 80px;
`;

export default Layout;