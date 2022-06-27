import axios from "axios";
import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../constants/todosConstants"

const allTodos = () => async (dispatch) => {
    dispatch({ type: TODOS_REQUEST });
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")
        dispatch({ type: TODOS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: TODOS_FAILED, payload: error })
    }
}

export default allTodos;