import { useParams } from "react-router-dom";
import styled from "styled-components";
import dummyData from "../data/dummy_data";

function DetailPage() {
    const { postId } = useParams();
    const post = dummyData.find((item) => item.id === postId);

    if (!post) {
        return <div>해당 게시글을 찾을 수 없습니다.</div>;
    }
    
    return(
        <Wrapper>
            <Thumbnail src={post.thumbnail} alt={post.title} />
            <Title>{post.title}</Title>
            <MetaRow>
                <AuthorDate>
                    {post.author.name} · {post.date}
                </AuthorDate>
                <LikeInfo>♡ {post.likes}</LikeInfo>
            </MetaRow>
            <Divider />
            <Content>{post.content}</Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding: 40px 20px;
`;

const Thumbnail = styled.img`
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 24px;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 16px;
`;

const MetaRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
`;

const AuthorDate = styled.span``;

const LikeInfo = styled.span``;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid #eee;
    margin-bottom: 24px;
`;

const Content = styled.p`
    font-size: 16px;
    line-height: 1.8;
    white-space: pre-line;
`;

const NotFound = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: #999;
`;

export default DetailPage;