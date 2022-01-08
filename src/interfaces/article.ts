import { Type } from "@angular/core";

export interface Article {
    title: string;
    type: string;
    link: string;
    image: string;
    component: Type<unknown>;
}