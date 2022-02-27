import { createStore } from 'redux'

const initialState = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: 'Iniciando com React',
            lessons: [
                { id: 1, title: "Primeira Aula"},
                { id: 2, title: "Segunda Aula"}
            ]
        },
        {
            id: 2,
            title: 'Aprendendo Redux',
            lessons: [
                { id: 3, title: "Terceira Aula"},
                { id: 4, title: "Quarta Aula"}
            ]
        }
    ]
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'TOGGLE_LESSON':
            const { lesson, module } = action;
            return {...state, activeLesson: lesson, activeModule: module }
        default: 
        return state
    }
}

