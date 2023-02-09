//Practice - 8th Feb- 2023
//Create a student schema using mongoose with details like - Name, Session, Address, etc
//Use it to create mongoose model, within same database
//Use this student model to create an api with name save student
//In save student get the schema values from query string and save it to the mongodb using model.save
//In next call update the schema with new value - CurrentSession and save the same value to check that we can save different documents within same collection
//mongooseModel.find(datamodel,()=>{}) retrieve all info from mongodb
// router.get('/api/getproducts',(req, res)=>{
//     //fetch all the products saved in product collection
//     ProductDataModel.find((err, products)=>{ //error first callback
//         if (err) {
//                 console.log(err)
//                 res.send("Error in getting products");
//         } else {
//                 res.send(products);
//         }
//     })
// })