import styled from 'styled-components';

const TABS = [
    { label: '트렌딩', icon: 'fa-solid fa-arrow-trend-up' },
    { label: '추천', icon: 'fa-regular fa-thumbs-up' },
    { label: '최신', icon: 'fa-regular fa-clock' },
    { label: '피드', icon: 'fa-solid fa-rss' },
];

function TabBar() {
    return (
        <Wrapper>
            <TabList>
                {TABS.map((tab, index) => (
                    <TabItem key={tab.label} $active={index === 0}>
                        <i className={tab.icon}></i>
                        {tab.label}
                    </TabItem>
                ))}
            </TabList>
            <RightArea>
                <PeriodButton>이번 주</PeriodButton>
                <MoreButton aria-label="더보기">⋮</MoreButton>
            </RightArea>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
    max-width: 1376px;
    width: 100%;
    margin: 0 auto;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TabList = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const TabItem = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 18px;
    font-weight: ${(props) => (props.$active ? 700 : 400)};
    color: ${(props) => (props.$active ? '#212529' : '#868e96')};
    padding-bottom: 12px;
    border-bottom: ${(props) => (props.$active ? '2px solid #212529' : 'none')};
    cursor: pointer;

    i {
        font-size: 15px;
    }
`;

const RightArea = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const PeriodButton = styled.button`
    font-size: 14px;
    color: #495057;
    background: none;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    padding: 6px 10px;
    cursor: pointer;
`;

const MoreButton = styled.button`
    font-size: 18px;
    color: #868e96;
    background: none;
    border: none;
    cursor: pointer;
`;

export default TabBar;