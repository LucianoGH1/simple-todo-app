import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';

export const estadoInicial: Todo[] = [
    new Todo('Generic task'),
    
];

const _todoReducer = createReducer(
    estadoInicial,
  on(crear, (state, { texto }) => [...state,  new Todo( texto ) ]),
  on(borrar, (state, {id}) =>  state.filter( todo => todo.id !== id) ),
  on(limpiarCompletados, (state) =>  state.filter( todo => !todo.completado ) ),
  on(toggleAll, (state, { completado }) =>  state.map( todo => {
    return {
        ...todo,
        completado: completado
    };
  }) ),
  on(editar, (state, { id, texto }) => {
    return state.map( todo => {

        if (todo.id === id) {
            return {
                ...todo,
                texto: texto
            }
        } else {
            return todo;
        }

    });
  }),
  on(toggle, (state, { id }) => {
    return state.map( todo => {

        if (todo.id === id) {
            return {
                ...todo,
                completado: !todo.completado
            }
        } else {
            return todo;
        }

    });
  })
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}