import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class FirstService{
    constructor(private httpClient:HttpClient){}

    getCountryNames():any{
        return this.httpClient.get("https://restcountries.eu/rest/v2/lang/es");
    }
}