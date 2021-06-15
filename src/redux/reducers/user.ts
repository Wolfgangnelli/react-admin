import { User } from './../../models/user';
import {SET_USER} from '../actions/actionTypes';

const initialState = {
    user: new User()
}

const userReducer = (state = initialState, action: { type: string, user: User}) => {
    switch (action.type) {

    case `${SET_USER}`:
        return { 
            ...state, 
            user: action.user 
        }
    default:
        return state;
    }
}


export default userReducer;