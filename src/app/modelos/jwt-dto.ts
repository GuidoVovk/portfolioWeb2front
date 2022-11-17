import { throws } from "assert";

export class JwtDto {
    token: string;

    constructor(token:string){
        this.token = token;
    }
}
