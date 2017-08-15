import { 
    ADD_TODO, 
    CHANGE_TODO_TO_DOING, 
    CHANGE_DOING_TO_TODO,
    CHANGE_DOING_TO_DONE,
    CHANGE_DONE_TO_DOING,
    DELETE_TODO 
} from '../actions';

let todos;

(() => {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos);
    } else {
        todos = [];
    }
})();

const todolist = (state = todos, action) => {
    console.log(action.type, ADD_TODO);
    switch (action.type) {
        /*
         * 添加新的事项
         * 并进行本地化存储
         * 使用ES6展开运算符链接新事项和旧事项
         * JSON.stringify()进行对象深拷贝 
         */
        case ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([
                ...state,
                {
                    todo: action.text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ]));

            return [
                ...state,
                {
                    todo: action.text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ];
        /*
         * todo -> doing 
         */
        case CHANGE_TODO_TO_DOING:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    istodo: false,
                    doing: true
                }),
                ...state.slice(parseInt(action.index) + 1)
            ]));

            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    istodo: false,
                    doing: true
                }),
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         *  doing -> todo 
         */
        case CHANGE_DOING_TO_TODO:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index],{
                    istodo: true,
                    doing: false
                }),
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index],{
                    istodo: true,
                    doing: false
                }),
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         * doing -> done 
         */
        case CHANGE_DOING_TO_DONE:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index],{
                    doing: false,
                    done: true
                }),
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index],{
                    doing: false,
                    done: true
                }),
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         * done -> doing
         */
        case CHANGE_DONE_TO_DOING:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index],{
                    doing: true,
                    done: false
                }),
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index],{
                    doing: true,
                    done: false
                }),
                ...state.slice(parseInt(action.index) + 1)
            ];
        /*
         * 删除某个事项 
         */
        case DELETE_TODO:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                ...state.slice(parseInt(action.index) + 1)
            ];
        default:
            return state;
    }
};

export default todolist;

