import mongosse from "mongosse";

const freelancerSchema = new mongosse.Schema({
    skils: { type: [String], require: false, default: [] },
    tags: { type: [String], require: false, default: [] },
    balance: { type: Number, require: true, default: 0 },
    blockedBalance: { type: Number, require: true, default: 0 },
    profilePosts: { type: [String], require: false, default: [] },
    //countComplatedWorks : { type: Number, require: true, default:0 },
    complatedWorks: { type: [String], require: false, default: [] },
    //countUnfinishedWorks : { type: Number, require: true, default:0 },
    unfinishedWorks: { type: [String], require: false, default: [] },
    //countWorksInProgress : { type: Number, require: true, default:0 },
    worksInProgress: { type: [String], require: false, default: [] },
    description: { type: String },
    comment: { type: [String], default: [] },
    // verifiedInfo : { type: Number, require: true, default : 0 }, // ( cin phone number email is verified )
    levelOfFreelancer: { type: Number, require: true, default: 0 }, // ( +100 complatedWorks = 1 , +300 complatedWorks = 2 , +500 complatedWorks = 3 , +1000 complatedWorks = 4)
    stars: { type: [String], require: false, default: [] }, //collection stars contains _id, idOfClient, idOfFreelancer ( this ), numberOfStars.
    // likes: { type: [String], require: false, default: [] },
    myProfileSubscribes: { type: [String], require: false, default: [] },
    mySubscribes: { type: [String], require: false, default: [] },
    countOfDemand: { type: Number, require: true, default: 10 },
    countOfDemandInProgress: { type: Number, require: true, default: 0 },
    // isVip : { type : Number, require: false },

});

const clientSchema = new mongosse.Schema({
    balance: { type: Number, require: true, default: 0 },
    blockedBalance: { type: Number, require: true, default: 0 },
    posts: { type: [String], require: false, default: [] },// create a post to search for freelancer
    mySubscribes: { type: [String], require: false, default: [] },
    complatedWorks: { type: [String], require: false, default: [] },
    unfinishedWorks: { type: [String], require: false, default: [] },
    worksInProgress: { type: [String], require: false, default: [] },
});

const userSchema = mongosse.Schema({
    firstName: { type: String, require: false },
    lastName: { type: String, require: false },
    email: { type: String, require: true },
    password: { type: String, require: false },
    fromGoogle: { type: Boolean, require: false },
    googleId: { type: String, require: false },
    image: { type: String, require: false },
    phoneNumber: { type: Number, require: true },
    cin: { type: String, require: false },
    adresse: { type: String, require: false },
    verifiedEmail: { type: Boolean, require: false },
    verifiedPhoneNumber: { type: Boolean, require: false },
    verifiedCin: { type: Boolean, require: false },
    typeOfUser: { type: Number, require: true, default: 1 }, // 1 = client, 2 = freelancer
    accountCreationDate: { type: date, require: true, default: date.now() },
    lastConnectionDate: { type: date, require: true, default: date.now() },
    client: { type: clientSchema, require: true },
    freelancer: { type: freelancerSchema, require: true },

});

const User = mongosse.model("User", userSchema);

export default User;