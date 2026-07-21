import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <CardWrapper to={`/${post.id}`}>
            <ThumbnailWrapper>
                <Thumbnail src={post.thumbnail} alt={post.title} />
            </ThumbnailWrapper>
            <Content>
                <Title>{post.title}</Title>
                <Summary>{post.summary}</Summary>
                <MetaText>
                    {post.date}<Separator>·</Separator>{post.comments}개의 댓글
                </MetaText>
            </Content>
            <Footer>
                <AuthorInfo>
                    <Avatar />
                    <ByText>by</ByText>
                    <AuthorName as="span"> {post.author.name}</AuthorName>
                </AuthorInfo>
                <LikeInfo><i class="fa-solid fa-heart"></i> {post.likes}</LikeInfo>
            </Footer>
        </CardWrapper>
    );
}

const CardWrapper = styled(Link)`
    display: block;
    min-width: 0;
    text-decoration: none;
    color: inherit;
    border-radius: 4px;
    text-align: left;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    overflow: visible;
    background: #fff;
    transition: box-shadow 0.01s ease-out, transform 0.01s ease-out;

    &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        transform: translateY(-7px);
    }

`;

const ThumbnailWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 320 / 167;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Content = styled.div`
    padding: 16px;
    height: 133px;
`;

const Title = styled.h4`
    font-size: 16px;
    font-weight: 700;
    color: #212529;
    line-height: 24px;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Summary = styled.p`
    font-size: 14px;
    line-height: 20px;
    color: #495057;
    margin: 0 0 24px;
    min-height: 40px; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 63px;
`;

const MetaText = styled.p`
    font-size: 12px;
    color: #868e96;
    margin: 0;
`;

const Separator = styled.span`
    margin: 0 4px;
`;

const MetaRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const Avatar = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ddd;
`;

const ByText = styled.span`
    font-size: 12px;
    color: #868e96;
`;

const AuthorName = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: #212529;
`;

const LikeInfo = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #212529;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border-top: 1px solid #f1f3f5;
`;

export default PostCard;