import { Organization } from '@/models/organization/Organization'

export const getters = {
    organization(state: any): any {
        return Organization.fromFirestore(state.data)
    }
}