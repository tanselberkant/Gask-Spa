import { BaseModel } from "./baseModel";

export class Gallery extends BaseModel {
    imageName : string;
    imageFile : File;
    imageSrc : string;
}

