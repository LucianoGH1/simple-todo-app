import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'All' | 'Completed' | 'Pending';


export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: string }>()
);



