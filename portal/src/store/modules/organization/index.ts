import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { state } from './state'

export const organization = {
    firestorePath: "organizations/GCKFRT0sVIl2sF1MuAoa",
    firestoreRefType: "doc",
    moduleName: "organization",
    statePropName: "data",
    namespaced: true,

    state: state,
    actions: actions,
    getters: getters,
    mutations: mutations,
};