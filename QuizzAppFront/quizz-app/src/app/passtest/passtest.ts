import { Question } from "../question/question";
import { Questions } from "./questions";

export interface Passtest {
    interviewee?:string;
    questions: Question[];
}
