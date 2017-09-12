import { User } from "./github.user";

export interface Repository {

    name: string;
    description: string;
    owner: User;
}

