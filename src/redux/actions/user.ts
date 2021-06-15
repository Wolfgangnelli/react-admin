import { User } from '../../models/user';
import {SET_USER} from './actionTypes';

export const setUser = (user: User) => ({
    type: `${SET_USER}`,
    user
});
