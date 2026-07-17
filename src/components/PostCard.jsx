function PostCard({post}) {
    return(
        <div>
            <p>{post.title}</p>
            <p>{post.author.name}</p>
        </div>
    );
}

export default PostCard;