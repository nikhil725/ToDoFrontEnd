export class UserNotes {

    noteId: number;
    title: string;
    discription: string;
    trash: boolean;
    archive: boolean;
    pin : boolean;
    color : string;
    reminder: Date;
    labels :Array<LabelObject>;
    collaborators : Array<CollaboratorObject>;
    collaboratorName:string;
}

export class LabelObject{
    labelId : number;
    name : string;
}
export class CollaboratorObject{

    sharedUserId : User;
}

export class User{

    email : string;
}
