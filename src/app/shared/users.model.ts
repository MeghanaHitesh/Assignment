   export interface Name {
        id: number;
        name: string;
        surname: string;
        birthDate: string;
        phone: string;
        city: string;
        street: string;
        number: number;
    }

    export interface UsersModel {
        names: Name[];
    }

