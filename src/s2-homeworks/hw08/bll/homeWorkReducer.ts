import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
           if ( action.payload === 'up'){
               return state.sort((a,b)=>a.name >b.name ? 1: -1)
           }else{
               return state.sort((a,b)=>a.name >b.name ? -1: 1)
           }
           // return state// need to fix
        }
        case 'check': {
            return state.filter(f => f.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
