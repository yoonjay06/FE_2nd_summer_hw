import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const TABS = [
    { label: '트렌딩', icon: 'fa-solid fa-arrow-trend-up' },
    { 
        label: '추천', 
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 15 2 2 4-4" />
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
        ),
    },
    { label: '최신', icon: 'fa-regular fa-clock' },
    { label: '피드', icon: 'fa-solid fa-rss' },
];

const PERIOD_OPTIONS = ['오늘', '이번 주', '이번 달', '올해']

function TabBar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() =>{
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Wrapper>
            <TabList>
                {TABS.map((tab, index) => (
                    <TabItem key={tab.label} $active={index === 0}>
                        {typeof tab.icon === 'string' ? <i className={tab.icon}></i> : tab.icon}
                        {tab.label}
                    </TabItem>
                ))}  
            </TabList>
            <RightArea>
                <DropdownWrapper ref={dropdownRef}>
                    <PeriodButton onClick={() => setIsOpen((prev) => !prev)}>
                        이번 주
                        <i className={`fa-solid fa-sort-down ${isOpen ? 'open' : ''}`}></i>
                    </PeriodButton>
                    {isOpen && (
                        <OptionList>
                            {PERIOD_OPTIONS.map((option) => (
                                <OptionItem key={option}>{option}</OptionItem>
                            ))}
                        </OptionList>
                    )}
                </DropdownWrapper>
                <MoreButton aria-label="더보기">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </MoreButton>
            </RightArea>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
    max-width: 1376px;
    width: 100%;
    margin: 12px auto 0;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TabList = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const TabItem = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100px;
    height: 24px;
    line-height: 24px;
    font-size: 18px;
    font-weight: ${(props) => (props.$active ? 700 : 400)};
    color: ${(props) => (props.$active ? '#212529' : '#868e96')};
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -12px;
        height: 2px;
        background: ${(props) => (props.$active ? '#212529' : 'transparent')};
    }
`;  

const RightArea = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    width: 134px;
`;

const DropdownWrapper = styled.div`
    position: relative;
    margin-right: 10px;
`;

const PeriodButton = styled.button`
    width: 100px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #495057;
    background: none;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    padding: 0 8px;
    cursor: pointer;

    i {
        font-size: 14px;
        transition: transform 0.15s ease-out;
    }


`;

const OptionList = styled.ul`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100px;
    background: #fff;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 4px;
    list-style: none;
    z-index: 10;
`;

const OptionItem = styled.li`
    font-size: 14px;
    color: #495057;
    padding: 8px 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #f8f9fa;
    }
`;

const MoreButton = styled.button`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #495057;
    background: none;
    border: none;
    cursor: pointer;
`;

export default TabBar;