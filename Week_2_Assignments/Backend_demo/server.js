//Create http server
import exp from 'express';
const app = exp();
//it creates an express application and calls it 
//Express application internally contains http server and more things in it

//use body body parser middleware
app.use(exp.json(console.log("middleware executed")));
app.use(exp.json(console.log("middleware2 executed")));
app.use(exp.json(console.log("middleware3 executed")));

//set a port number
const port = 3000;

//Assign port number to http server
app.listen(port, () => console.log('Server listening port',port));

//Test data(Replace this data with test data in data base)
let users=[]

//Create USER API(REST(Representational State Transfer) API)
    //Route to handle GET request of Client(http://localhost:3000/users)
    //when we create api url paths we should only use nouns not verbs
    app.get('/users', (req,res)=>{
        //read all users
        res.json({message:"all users",payload: users})
    })

    //Get user by id
    app.get('/users/:id', (req, res)=>{
        let idOfUrl = Number(req.params.id)
        //find index
        let index = users.find(userObj=>userObj.id===idOfUrl)
        //not found
        if(index===undefined){
           return res.json({message:"User not found"})
        }
        //if found
        res.json({user:"User found", payload: index})
    })
    //Route to handle POST request of Client
    app.post('/users', (req,res)=>{
        //get user from client
        const newUser=req.body
        //push user into users
        users.push(newUser)
        //send response
        res.json({message:"User Created"})
    })
    //Route to handle PUT request of Client
    app.put('/users', (req,res)=>{
        //get modified user from client{}
        let modifiedUser=req.body;
        //get index of existing user in users array
        let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
        //if user is not found
        if(index===-1){
           return res.json({message:"User not found"})
        }
        //update user with index
        users.splice(index, 1, modifiedUser)
        //send response
        res.json({message:"user updated"})
    })
    //Route to handle DELETE request of Client
    app.delete('/users/:id', (req,res)=>{
        //get the user id from the url parameter
        let idOfUrl = Number(req.params.id) //returns {id : '1'} key value pairs
        //findIndex of the user
        let index = users.findIndex(userObj=>userObj.id===idOfUrl)
        //if user not found
        if(index===-1){
            return res.json({message:"User not found to delete"})
        }
        //delete user by index
        users.splice(index,1)
        //send res
        res.json({message:"User removed"})
    })



    //Test data(Replace this data with test data in data base)
let products=[]

//Create product API(REST(Representational State Transfer) API)
    //Route to handle GET request of Client(http://localhost:3000/products)
    //when we create api url paths we should only use nouns not verbs
    app.get('/products', (req,res)=>{
        //read all products
        res.json({message:"all products",payload: products})
    })

    //Get product by id
    app.get('/products/:name', (req, res)=>{
        let nameOfUrl = req.params.id
        //find index
        let name = products.find(productObj=>productObj.id===nameOfUrl)
        //not found
        if(name===undefined){
           return res.json({message:"product not found"})
        }
        //if found
        res.json({product:"product found", payload: name})
    })
    //Route to handle POST request of Client
    app.post('/products', (req,res)=>{
        //get product from client
        const newproduct=req.body
        //push product into products
        products.push(newproduct)
        //send response
        res.json({message:"product Created"})
    })
    //Route to handle PUT request of Client
    app.put('/products', (req,res)=>{
        //get modified product from client{}
        let modifiedproduct=req.body;
        //get index of existing product in products array
        let index=products.findIndex(productObj=>productObj.id===modifiedproduct.id)
        //if product is not found
        if(index===-1){
           return res.json({message:"product not found"})
        }
        //update product with index
        products.splice(index, 1, modifiedproduct)
        //send response
        res.json({message:"product updated"})
    })
    //Route to handle DELETE request of Client
    app.delete('/products/:id', (req,res)=>{
        //get the product id from the url parameter
        let idOfUrl = Number(req.params.id) //returns {id : '1'} key value pairs
        //findIndex of the product
        let index = products.findIndex(productObj=>productObj.id===idOfUrl)
        //if product not found
        if(index===-1){
            return res.json({message:"product not found to delete"})
        }
        //delete product by index
        products.splice(index,1)
        //send res
        res.json({message:"product removed"})
    })