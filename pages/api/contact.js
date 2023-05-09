import { MongoClient } from "mongodb";

async function handler(req,res){
    if(req.method==='POST'){
        const{email,name,message}=req.body;
        if(!email || !email.includes('@') || !name || name.trim()==="" || !message || message.trim()===""){
            res.status(422).json({message:'invalid input'});
            return;
    }
    const newMessage={email,name,message}
   let client;
    try{
         client=await MongoClient.connect(`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.mxmcvpm.mongodb.net/?retryWrites=true&w=majority`);
    }
    catch{
        res.status(500).json({messsage:'failed to connect to db'})
        return;
    }
    try{
        const db= client.db();
       const result=await db.collection('texts').insertOne(newMessage)
       newMessage.id=result.insertedId;
    }
    catch{
        client.close()
        res.status(500).json({messsage:'failed to receive result'})
        return;
    }
    client.close();
    res.status(201).json({message:newMessage})
}


}
export default handler