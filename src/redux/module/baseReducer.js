// 액션 
const ADD_WORD = '단어추가하기';
const RESET_WORD = '단어초기화';

// 액션 크리에이터
export function addWord(text){
    return {type :ADD_WORD, data:text}
}
export function resetWord(){
    return {type :RESET_WORD}
}

// 초기값
const iniState = {
    list : [],
}

// 리듀서
function baseReducer(state = iniState, action){
    switch (action.type)
    {
        case ADD_WORD:{
            const newList = [...state.list, action.data]
            return { list : newList }
        }

        case RESET_WORD:{
            const newList = []
            return { list : newList }
        }

        default:
            return state;
    }

    return state;
}

export default baseReducer;