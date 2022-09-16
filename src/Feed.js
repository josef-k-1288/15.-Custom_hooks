import Post from './Post';

const Feed = ({ posts }) => {
    return (
        <> 
            {posts.map(post => ( // map metodom prolazimo kroz svaki post
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed
