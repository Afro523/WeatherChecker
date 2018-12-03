import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action){
    switch (action.type) {
    case FETCH_WEATHER:
        // return state.concat([action.payload.data]);
        // The line below is an es6 way of doing the line above
        return [action.payload.data, ...state]
            
    }
    return state;
}