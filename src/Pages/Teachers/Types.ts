export type RowType = {
    language: string
    avatars: Array<string>
    names: Array<string>
    surnames: Array<string>
    descriptions: Array<string>
    handler: (e: any) => void
}