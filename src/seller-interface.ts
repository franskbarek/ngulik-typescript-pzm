export interface Seller {
    id: string,
    name: string,
    address?: string | null,
    readonly nib: string,
    readonly npwp: string
}