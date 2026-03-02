const user={
    id:101,
    name:"Pranav",
    preferences: {
        theme:"dark",
        language:"en"
    }
};
let usercopy={...user}
user.name="Jeevan"
user.preferences.theme="light"
console.log(user)
console.log(usercopy)

//by changing the nested class as it is referenced in shallow copying type it'll change the theme there that is the drawback of this