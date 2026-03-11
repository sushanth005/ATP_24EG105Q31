import {Schema, model} from 'mongoose';


//create user schema(username. password, email, age)
const userSchema = new Schema({
    //Structure of User resource
    username:{
        //we should define mongoose data type
        //
        type:String,
        required: [true,"Username is required"],
        minLength: [4, "Min length of username is 4 characters"],
        maxLength:[8, "Username size exceed 6 chars"]
    },
    password:{
        type:String,
        required:[true,'Password Required']
    },
    email:{
        type: String,
        required:[true,'Email required'],
        unique:[true,"Email already existed"]
    },
    age:{
        type: Number,
    }
},{
    versionKey:false,
    timestamps:true
});
export const UserModel = model("user", userSchema);


