import { Answer } from "../answer/answer";

export interface Question {
    id:number;
    text:string;
    testId:number;
    answers?: Answer[];
}

