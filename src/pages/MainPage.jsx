import dummyData from '../data/dummy_data';
import PostCard from '../components/PostCard';

function MainPage() {
    return (
        <div>
            {dummyData.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default MainPage;