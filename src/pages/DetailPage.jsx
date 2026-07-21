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
        <PageWrapper>
            <Sidebar>
                <LikeButton>
                    <i class="fa-solid fa-heart"></i>
                </LikeButton>
                <LikeCount>{post.likes}</LikeCount>
                <ShareButton aria-label="공유">
                    <i className="fa-solid fa-share-nodes"></i>
                </ShareButton>
            </Sidebar>

            <Article>
                <Title>{post.title}</Title>
                <MetaRow>
                    <AuthorDate>
                        <AuthorName>{post.author.name}</AuthorName>
                        <Separator>·</Separator>
                        <DateText>{post.date}</DateText>
                    </AuthorDate>
                    <FollowButton>팔로우</FollowButton>
                </MetaRow>
                <Summary>{post.summary}</Summary>
                <Thumbnail src={post.thumbnail} alt={post.title} />
                <Content>{post.content}</Content>

                <AuthorCard>
                    {post.author.avatar ? (
                        <Avatar src={post.author.avatar} alt={post.author.name} />
                    ) : (
                        <AvatarPlaceholder>
                            <svg width="128" height="128" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="8" r="4" fill="#adb5bd" />
                                <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#adb5bd" />
                            </svg>
                        </AvatarPlaceholder>
                    )}
                    <AuthorCardName>{post.author.name}</AuthorCardName>
                    <FollowButton>팔로우</FollowButton>
                </AuthorCard>
            </Article>
        </PageWrapper>
    );
}

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 88px;
    padding: 0 20px 64px;
`;

const Sidebar = styled.div`
    position: sticky;
    top: 24px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const LikeButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 48px;
    height: 48px;
    padding: 12px 0;
    border: 1px solid #e9ecef;
    border-radius: 50%;
    background: #fff;
    color: #868e96;
    font-size: 18px;
    cursor: pointer;
`;

const LikeCount = styled.span`
    font-size: 13px;
    color: #868e96;
`;

const ShareButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e9ecef;
    border-radius: 50%;
    background: #fff;
    color: #868e96;
    font-size: 18px;
    cursor: pointer;
`;

const Article = styled.div`
    width: 768px;
    max-width: 100%;
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

const FollowButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    color: #12b886;
    background: #fff;
    border: 1px solid #12b886;
    border-radius: 16px;
    padding: 0 16px;
    cursor: pointer;
    height: 32px;
    width: 96px;
    align-content: center;
    justify-content: center;
`;

const Thumbnail = styled.img`
    width: 100%;
    border-radius: 4px;
    margin-bottom: 32px;
`;

const Summary = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: #495057;
    line-height: 72px;
    margin-bottom: 32px;
`;

const Content = styled.p`
    font-size: 18px;
    line-height: 30.6px;
    color: #212529;
    margin-bottom: 18px;
    white-space: pre-line;
`;

const AuthorCard = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 48px;
    padding: 20px;
    border: 1px solid #f1f3f5;
    border-radius: 8px;
`;

const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
`;

const AvatarPlaceholder = styled.div`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background: #f1f3f5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthorCardName = styled.span`
    flex: 1;
    font-size: 24px;
    font-weight: 700;
    color: #212529;
    width: auto;
    height: 32px;
`;

const NotFound = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: #999;
`;

export default DetailPage;