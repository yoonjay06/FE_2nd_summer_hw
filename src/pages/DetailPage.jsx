import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import dummyData from '../data/dummy_data';

function DetailPage() {
    const { postId } = useParams();
    const post = dummyData.find((item) => item.id === postId);

    if (!post) {
    return <NotFound>해당 게시글을 찾을 수 없습니다.</NotFound>;
    }

    return (
        <Wrapper>
            <Title>{post.title}</Title>
            <MetaRow>
                <AuthorDate>
                    <AuthorName>{post.author.name}</AuthorName>
                    <Separator>·</Separator>
                    <DateText>{post.date}</DateText>
                </AuthorDate>
                <LikeInfo><i class="fa-solid fa-heart"></i> {post.likes}</LikeInfo>
            </MetaRow>
            <Thumbnail src={post.thumbnail} alt={post.title} />
            <Content>{post.content}</Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 768px;
    max-width: 100%;
    margin: 88px auto 0;
    padding: 0 20px 64px;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: 800;
    color: #212529;
    line-height: 72px;
    margin-bottom: 32px;
`;

const MetaRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;  

const AuthorDate = styled.div`
    display: flex;
    align-items: center;
`;

const AuthorName = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: #212529;
`;

const Separator = styled.span`
    font-size: 16px;
    color: #495057;
    margin: 0 6px;
`;

const DateText = styled.span`
    font-size: 16px;
    color: #495057;
`;

const LikeInfo = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: #868e96;
`;

const Thumbnail = styled.img`
    width: 100%;
    border-radius: 4px;
    margin-bottom: 32px;
`;

const Content = styled.p`
    font-size: 18px;
    line-height: 30.6px;
    color: #212529;
    margin-bottom: 18px;
    white-space: pre-line;
`;

const NotFound = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: #999;
`;

export default DetailPage;