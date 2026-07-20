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
                    {post.date} <Separator>·</Separator> {post.comments}개의 댓글
                </MetaText>
                <MetaRow>
                    <AuthorInfo>
                        <Avatar />
                        <MetaText as="span">by {post.author.name}</MetaText>
                    </AuthorInfo>
                    <LikeInfo>♡ {post.likes}</LikeInfo>
                </MetaRow>
            </Content>
        </CardWrapper>
    );
}

const CardWrapper = styled(Link)`
    display: block;
    min-width: 0;
    text-decoration: none;
    color: inherit;
    text-align: left;
    border-radius: 4px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    background: #fff;
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
`;

const Title = styled.h4`
    font-size: 16px;
    font-weight: 700;
    color: #212529;
    line-height: 24px;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Summary = styled.p`
    font-size: 14px;
    color: #495057;
    margin-bottom: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const MetaText = styled.p`
    font-size: 12px;
    color: #868e96;
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

const LikeInfo = styled.span`
    font-size: 12px;
    color: #868e96;
`;

export default PostCard;