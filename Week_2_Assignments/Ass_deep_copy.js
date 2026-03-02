const order={
    orderId: "ORD1001",
    customer:{
        name:"Anitha",
        address:{
            city:"Hyderabad",
            pincode:500098
        }
    },
    items:[
        {
            product:"Laptop",
            price:"70000"
        }
    ]
};
//creating deep copy using structuredClone
ordercopy = structuredClone(order)
ordercopy.customer.address.city="Chennai"
ordercopy.items[0].price=90000
console.log(order)
console.log(ordercopy)

//it'll not affect the nested object