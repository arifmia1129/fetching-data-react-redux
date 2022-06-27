import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import allPosts from '../utilities/action/postsAction';

const Posts = () => {
    const { isLoading, posts, error } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allPosts());
    }, [dispatch])
    return (
        <div>
            <h1>Welcome to Posts Project</h1>
            {isLoading && <h3>Loading.......</h3>}
            {error && <h3>{error}</h3>}
            {
                posts && posts.slice(0, 5).map(post => {
                    const { id, title, body } = post;
                    return <section key={id}>
                        <article>
                            <h3>{title}</h3>
                            <h3>{body}</h3>
                        </article>
                    </section>
                })
            }
        </div>
    );
};

export default Posts;