import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./todos/filtro/filtro.actions";
import { filtroReducer } from "./todos/filtro/filtro.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";


export interface AppState {
    todos: Todo[],
    filtro: string,
    
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
};