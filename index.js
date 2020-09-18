var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var demoModel   = require('./models/demo');

mongoose.connect('mongodb://localhost:27017/demotest',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log('err',err));

var app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

app.get('/',(req,res)=>{
   res.render('home');
});

app.post('/checkout',async (req,res)=>{
    try {
        var a;
        a = req.body;
        console.log(a);
        var resp = a.da.map((ele,index)=>{
              return ele;
         });
         var response = await demoModel.insertMany(resp);
         if(response){
             console.log(response);
             return res.json({'msg':true});
         }
         else{
            return res.json({'msg':false});
         }    
    } catch (error) {
        console.log(error);
    }
});

var port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`server run at port ${port}`));

module.exports = app;