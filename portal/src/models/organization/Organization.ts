export class Organization {
    id: string
    name: string

    constructor(
        id: string,
        name: string
    )
    {
        this.id = id
        this.name = name
    }

    static fromFirestore(doc: any): Organization {
        return new Organization(
            doc.id,
            doc.name
        )
    }
}