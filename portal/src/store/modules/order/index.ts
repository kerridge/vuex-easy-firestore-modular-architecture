import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { state } from './state'

export const order = {
    firestorePath: "yo/dog",
    firestoreRefType: "doc",
    moduleName: "order",
    statePropName: "data",
    namespaced: true,

    state: state,
    actions: actions,
    getters: getters,
    mutations: mutations,
};
