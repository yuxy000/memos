/**
 * action 类型
 */
export const ADD_TODO = 'Add_Todo';
export const CHANGE_TODO_TO_DOING = 'Change_Todo_To_Doing';
export const CHANGE_DOING_TO_DONE = 'Change_Doing_To_Done';
export const CHANGE_DONE_TO_DOING = 'Change_Done_To_Doing';
export const CHANGE_DOING_TO_TODO = 'Change_Doing_To_Todo';
export const SEARCH = 'Search';
export const DELETE_TODO = 'Delete_Todo';

/**
 * action 创建函数 添加新事项
 * @param {String} text
 */
export const addTodo = (text) => {
    return (dispatch, getState) => {
        //测试异步流
        const state = getState();
        localStorage.setItem('todos',
            JSON.stringify([
                ...state.todolist,
                {
                    todo: text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ])
        );

        setTimeout(() => {
            dispatch({
                type: ADD_TODO,
                text
            })
        }, 2)
    }
}

/**
 * 状态由todo转为doing
 * @param {number} index 需要改变状态的事项下标
 */
export const changeTodoToDoing = (index) => ({
    type: CHANGE_TODO_TO_DOING,
    index
});

/**
 * 状态由doing转为todo
 * @param {Number} index 需要改变状态的事项下标
 */
export const changeDoingToTodo = (index) => ({
    type: CHANGE_DOING_TO_TODO,
    index
});

/**
 * 状态由doing转为done
 * @param {Number} index 需要改变状态的事项下标
 */
export const changeDoingToDone = (index) => ({
    type: CHANGE_DOING_TO_DONE,
    index
});

/**
 * 状态由done转为doing
 * @param {Nubmer} index 需要改变状态的事项下标
 */
export const changeDoneToDoing = (index) => ({
    type: CHANGE_DONE_TO_DOING,
    index
});

/**
 * 删除事项
 * @param {Number} index 需要删除的事项下标
 */
export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    index
});





