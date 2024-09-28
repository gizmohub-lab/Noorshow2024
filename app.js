const express = require ('express')
const app = express()

const mongoose = require('mongoose');

const path = require('path');
const Announcement = require('./models/Announcement')
const bidayaModel = require('./models/bidayaModel');
const uoolaModel = require('./models/uoolaModel');
const thaniyaModel = require('./models/thaniya');
const thanawiyyaModel = require('./models/thanawiyyaModel')
const aliyaModel = require('./models/aliyaModel');
const kulliyaModel = require('./models/kulliyaModel');
const Score =  require('./models/resultModel')
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//connection code

mongoose.connect('mongodb+srv://gizmohub-lab:Gizmoashi063@noorshow.vzgcz.mongodb.net/?retryWrites=true&w=majority&appName=noorshow')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));





  //loding
app.get('/',function(req,res){
    res.render('loding')
})
//homepage
app.get('/home',function(req,res){
    res.render('home')
})
//aboutpage
app.get('/about',function(req,res){
    res.render('about')
})
//gallery

// Route to display the gallery
app.get('/gallery', async (req, res) => {
  res.render('gallery')
});


//gallery rotes ends here






// Route to display the announcement form for admin
app.get('/adminannounce', (req, res) => {
    res.render('adminannounce'); // Render the admin announcement page
});
// Route to handle the announcement form submission
app.post('/adminannounce', async (req, res) => {
    const { title, content } = req.body;
    const newAnnouncement = new Announcement({ title, content });
    
    try {
        await newAnnouncement.save();
        res.redirect('/announcements'); // Redirect to the announcements page
    } catch (error) {
        console.error('Error saving announcement:', error);
        res.status(500).send('Error saving announcement.');
    }
});
// Route to display all announcements
app.get('/announcements', async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ createdAt: -1 });
        res.render('announcement', { announcements });
    } catch (error) {
        console.error('Error fetching announcements:', error);
        res.status(500).send('Error fetching announcements.');
    }
});


// Route to render the admin results form
app.get('/adminres', (req, res) => {
    res.render('adminres');
});

// Route to handle form submission and save scores
app.post('/result', async (req, res) => {
    const { 
        teamA, teamB, teamC, teamD, 
        bidayatopper, bidayatopperscore, 
        uoolatopper, uoolatopperscore, 
        thaniyatopper, thaniyatopperscore, 
        thabawiyayatopper, thanawiyatopperscore, 
        aliyyatopper, aliyatopperscore, 
        kulliyatopper, kulliyatopperscore 
    } = req.body;

    // Save the data to the database
    const newScore = new Score({ 
        teamA, teamB, teamC, teamD, 
        bidayatopper, bidayatopperscore, 
        uoolatopper, uoolatopperscore, 
        thaniyatopper, thaniyatopperscore, 
        thabawiyayatopper, thanawiyatopperscore, 
        aliyyatopper, aliyatopperscore, 
        kulliyatopper, kulliyatopperscore 
    });

    await newScore.save();

    // Redirect to the results page
    res.redirect('/result');
});

// Route to render the results page
app.get('/result', async (req, res) => {
    const scores = await Score.find();
    const lastScore = scores[scores.length - 1]; // Get the latest score

    // Render the result with the latest score
    res.render('result', { score: lastScore });
});


//catogarie based results
//bidaya
app.get('/adminBd',function(req,res){
    res.render('adminBd')
})

app.post('/bidaya', async function(req,res){
    let {bidayaonename , bidayatwoname , bidayathreename , bidayaonegrade ,bidayatwograde ,bidayathreegrade ,
         bidayaoneteam , bidayatwoteam , bidayathreeteam ,programmebidaya} = req.body

         const bidaya = await bidayaModel.create({
            programmebidaya,
            bidayaonename,
            bidayatwoname,
            bidayathreename,
            bidayaonegrade ,
            bidayatwograde,
            bidayathreegrade,
            bidayaoneteam,
            bidayatwoteam ,
            bidayathreeteam
           
             
        
          })
           res.redirect('/adminbd')
            
        })

        app.get('/result/bidaya', async function(req,res){
            let bidaya = await bidayaModel.find()
            res.render('bidaya',{bidaya})
        })
  
        //uoola

        app.get('/adminul',function(req,res){
            res.render('adminUl')
        })
        
        app.post('/uoola', async function(req,res){
            let {uoolaonename , uoolatwoname , uoolathreename , uoolaonegrade ,uoolatwograde ,uoolathreegrade ,
                 uoolaoneteam , uoolatwoteam , uoolathreeteam ,programmeuoola} = req.body
        
                 const bidaya = await uoolaModel.create({
                    programmeuoola,
                    uoolaonename,
                    uoolatwoname,
                    uoolathreename,
                    uoolaonegrade ,
                    uoolatwograde,
                    uoolathreegrade,
                    uoolaoneteam,
                    uoolatwoteam ,
                    uoolathreeteam
                   
                     
                
                  })
                   res.redirect('/adminul')
                    
                })
        
                app.get('/result/uoola', async function(req,res){
                    let uoola = await uoolaModel.find()
                    res.render('uoola',{uoola})
                })
          
        //thaniya

        app.get('/admintn',function(req,res){
            res.render('admintn')
        })
        
        app.post('/thaniya', async function(req,res){
            let {thaniyaonename , thaniyatwoname , thaniyathreename ,thaniyaonegrade ,thaniyatwograde ,thaniyathreegrade ,
                 thaniyaoneteam , thaniyatwoteam , thaniyathreeteam ,programmethaniya} = req.body
        
                 const thaniya = await thaniyaModel.create({
                    programmethaniya,
                    thaniyaonename,
                    thaniyatwoname,
                    thaniyathreename,
                    thaniyaonegrade ,
                    thaniyatwograde,
                    thaniyathreegrade,
                    thaniyaoneteam,
                    thaniyatwoteam ,
                    thaniyathreeteam
                   
                     
                
                  })
                   res.redirect('/admintn')
                    
                })
        
                app.get('/result/thaniya', async function(req,res){
                    let thaniya = await thaniyaModel.find()
                    res.render('thaniya',{thaniya})
                })


                   
        //thanawiyya

        app.get('/admintan',function(req,res){
            res.render('admintan')
        })
        
        app.post('/thanawiyya', async function(req,res){
            let {thanawiyyaonename , thanawiyyatwoname , thanawiyyathreename ,thanawiyyaonegrade ,thanawiyyatwograde ,thanawiyyathreegrade ,
                 thanawiyyaoneteam , thanawiyyatwoteam , thanawiyyathreeteam ,programmethanawiyya} = req.body
        
                 const thanawiyya = await thanawiyyaModel.create({
                    programmethanawiyya,
                    thanawiyyaonename,
                    thanawiyyatwoname,
                    thanawiyyathreename,
                    thanawiyyaonegrade ,
                    thanawiyyatwograde,
                    thanawiyyathreegrade,
                    thanawiyyaoneteam,
                    thanawiyyatwoteam ,
                    thanawiyyathreeteam
                   
                     
                
                  })
                   res.redirect('/admintan')
                    
                })
        
                app.get('/result/thanawiyya', async function(req,res){
                    let thanawiyya = await thanawiyyaModel.find()
                    res.render('thanawiyya',{thanawiyya})
                })

                            
        //aliya

        app.get('/adminal',function(req,res){
            res.render('adminal')
        })
        
        app.post('/aliya', async function(req,res){
            let {aliyaonename , aliyatwoname , aliyathreename ,aliyaonegrade ,aliyatwograde ,aliyathreegrade ,
                 aliyaoneteam , aliyatwoteam , aliyathreeteam ,programmealiya} = req.body
        
                 const aliya = await aliyaModel.create({
                    programmealiya,
                    aliyaonename,
                    aliyatwoname,
                    aliyaonegrade,
                    aliyatwograde ,
                    aliyathreegrade,
                    aliyaoneteam,
                    aliyatwoteam,
                    aliyathreeteam ,
                    aliyathreename
                   
                     
                
                  })
                   res.redirect('/adminal')
                    
                })
        
                app.get('/result/aliya', async function(req,res){
                    let aliya = await aliyaModel.find()
                    res.render('aliya',{aliya})
                })
          
                //kulliyya

                app.get('/adminkl',function(req,res){
                    res.render('adminkl')
                })
                
                app.post('/kulliya', async function(req,res){
                    let {kulliyaonename , kulliyatwoname , kulliyathreename ,kulliyaonegrade ,kulliyatwograde ,kulliyathreegrade ,
                         kulliyaoneteam , kulliyatwoteam , kulliyathreeteam ,programmekulliya} = req.body
                
                         const kulliya = await kulliyaModel.create({
                            programmekulliya,
                            kulliyaonename,
                            kulliyatwoname,
                            kulliyathreename,
                            kulliyaonegrade ,
                            kulliyatwograde,
                            kulliyathreegrade
                           
                         
                          
                           
                             
                        
                          })
                           res.redirect('/adminkl')
                            
                        })
                
                        app.get('/result/kulliya', async function(req,res){
                            let kulliya = await kulliyaModel.find()
                            res.render('kulliya',{kulliya})
                        })


const PORT = process.env.PORT 
app.listen(PORT,function(){
    console.log('connected ')
})