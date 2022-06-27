import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import allTodos from '../utilities/action/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allTodos());
    }, [dispatch])
    return (
        <div>
            <h1>Welcome to todos project</h1>
            {isLoading && <h3>Loading.......</h3>}
            {error && <h3>{error.message}</h3>}
            {
                todos.slice(0, 5).map(todo => {
                    const { id, title } = todo;
                    return <section key={id}>
                        <article>
                            <h3>{id}</h3>
                            <h3>{title}</h3>
                        </article>
                    </section>
                })
            }
        </div>
    );
};

export default Todos;