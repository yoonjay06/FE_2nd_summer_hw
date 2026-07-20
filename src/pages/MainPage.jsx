import dummyData from '../data/dummy_data';
import PostCard from '../components/PostCard';
import styled from 'styled-components';

function MainPage() {
    return (
        <GridWrapper>
            {dummyData.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </GridWrapper>
    );
}

const GridWrapper = styled.div`
    max-width: 1080px;
    min-width: 0;
    margin: 0 auto;
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
`

export default MainPage;