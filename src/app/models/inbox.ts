import { BaseModel } from './baseModel';

export class Inbox extends BaseModel {
    SenderMail : string;
    SenderFullName : string;
    SenderPhone : string;
    Message : string;
}