const express=require('express');
const hbs=require('hbs');
var app=express();

const port=process.env.PORT|| 3000;
hbs.registerPartials(__dirname+ '/views/partials')
app.set('view engine',hbs);


app.use((req,res,next)=>{
  var now=new Date().toString();
console.log(`${now}: ${req.method} ${req.url}`);
next();
});

app.use((req,res,next)=>{
  res.render('maintainance.hbs');
});

app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getcurrentyear',()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
});


app.get ('/',(req,res)=>{
//  res.send('<h1>hello express</h1>');

res.send({
name:'prachi',
likes:['coding',
        'shopping'
      ]
})
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About pppppPage',
    welcomeMessage: 'welcome to about page'
  });
});

app.get('/bad',(req,res)=>{
  res.send({errorMessage:'Unable to handle request' });

});
app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
