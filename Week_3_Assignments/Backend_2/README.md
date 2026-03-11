### 1. Generate package.json
    npm init -y

### 2. Create express server

### 3. install mongoose and connect to mongoDB server
        REST API ----- MongoDB native Driver -----> DB server
        REST API ----- Mongoose ODM tool ------> DB server
                        (object document mapper)

### 4. Build user REST API
                -Create User
                -Read all users
                -Read user by ID
                -update a user by ID
                -Delete a user by ID

### 5. Create Schema and Model of the Resource(User)

### 6. Create USER API and define routes
        
    
### 7. 
--> Handling unavailable resources
        adding if statement for error 404
    //      200 --> success
    //      201 --> created
    //      400 --> bad request
    //      401 --> Unauthorized
    //      404 --> Not found
    // All the 4 series status codes represents client-side error
    //      500 --> Server error
    // All 5 series status codes represents server-side error

--> validators during update
        runvalidators

--> Hashing password
        using bcrypt

--> unique fields
        using unique in the model schema

--> Refined version of error handling middleware

### 8.  User Authentication(Login)
        -Submit credintials and get token
        req -------> Public routes (By anyone)
        req------>middleware------>Protected routes(By authenticated users only)
        