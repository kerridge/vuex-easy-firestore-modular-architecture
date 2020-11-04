export const actions = {
    async syncOrganization(context: any) {
        await context.dispatch("openDBChannel");
    }
}