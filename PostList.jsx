import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          date={post.date}
          text={post.text}
          image={post.image}
        />
      ))}
    </section>
  );
}

export default PostList;