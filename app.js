import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/myDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    personal:{
        name: String,
        middleName: String,
        lastName: String,
        dateOfBirth: String
    },
    address:{
        premise:String,
        thoroughfare:String,
        locality:String,
        postalCode:String,
        livedDuration:String
    },
    contact:{
        email:String,
        mobileNumber:String,
        marketingPreferences:String
    },
    nationality:{
        citizenship:{
            name:String,
            flag:String,
            code:String
        },
        taxResidence:{
            name:String,
            flag:String,
            code:String
        }
    },
    employee:{
        employmentStatus:String,
        industry:String,
        occupation:String
    }
})

const User = new mongoose.model("User", userSchema);
  
app.get("/api/info", async(req,res)=>{
    try{
        const info = await User.find({});
        res.json(info);
        console.log("data send");
    }
    catch(error){
        console.log(error);
    }
});

app.post('/api/update/:id', async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    try {
        await User.findByIdAndUpdate(id, {$set:updateData[0]});

        if (updatedUser) {
            res.status(200).send({ message: 'Update successful', data: updatedUser });
        } else {
            res.status(404).send({ message: 'No document found matching the query' });
        }

    } catch (error) {
        res.status(500).send({ message: 'An error occurred', error });
    }
});

const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));