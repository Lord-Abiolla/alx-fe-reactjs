import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                );
                setPost(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch blog post');
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) return <div>Loading blog post...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Blog Post {id}</h1>
            {post ? (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => navigate('/blog/' + (parseInt(id) + 1))}>
                        Next Blog Post
                    </button>
                </>
            ) : (
                <p>Blog post not found</p>
            )}
        </div>
    );
}

export default BlogPost;