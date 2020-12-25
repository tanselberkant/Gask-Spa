import { BaseModel } from "./baseModel";
import { Photo } from "./photo";

export class Player extends BaseModel {
    firstName : string;
    lastName : string;
    stickSide : string;
    teamRole : string;
    teamId : number;
    imageName : string;
    imageFile : File;
    imageSrc : string;
}

