import styled from 'styled-components'

function PostCard({post}) {
    return(
        <cardWrapper>
            <Thumbnail src={post.thumbnail} alt={post.title} />
            <Title>{post.title}</Title>
            <Summary>{post.summary}</Summary>
            <DateRow>{post.date} · {post.comments}개의 댓글</DateRow>
            <MetaRow>
                <AuthorInfo>
                    <Avatar />
                    <AuthorName>by {post.author.name}</AuthorName>
                </AuthorInfo> 
                <LikeInfo><i class="fa-regular fa-heart"></i> {post.likes}</LikeInfo>
            </MetaRow>
        </cardWrapper>
    );
}

const CardWrapper = styled.div`
    width: 100%;
    cursor: pointer;
`;

const Thumbnail = styled.img`
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 8px;
`;

const Title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    margin: 12px 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Summary = styled.p`
    font-size: 14px;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const DateRow = styled.p`
    font-size: 13px;
    color: #999;
    margin: 8px 0;
`;

const MetaRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const Avatar = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ddd;
`;

const AuthorName = styled.span`
    font-size: 13px;
    font-weight: 600;
`;

const LikeInfo = styled.span`
    font-size: 13px;
    color: #666;
`

export default PostCard;