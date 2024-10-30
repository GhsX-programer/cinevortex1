const Dotenv = require('dotenv').config();
const express = require('express');
const Sequelize = require('sequelize')
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs');
const connection = require('./database/conection');
//const cadastrouser = require('./database/cadastro_usuario').default
//const Usuario = require('./database/cadastro_usuario')//.default
app.use(express.json());
const usuario = require('./database/cadastro_usuario');


//config body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//config ejs
app.set('view engine','ejs')

//config arquivos estaticos(css)
app.use(express.static('public'))

//configuração da conexão com banco de dados
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão sucefull')
    }).catch((error)=>{
        console.log('error')
    })


//rota principal
app.get('/', (req , res)=>{
    res.render('index')
})

//rota home
app.get('/home', (req , res)=>{
    res.render('index')
})

//rota filmes
app.get('/filmes', (req , res)=>{
    res.render('filmes')
})

//rota series
app.get('/series', (req , res)=>{
    res.render('series')
})

//rota login
app.get('/login', (req , res)=>{
    res.render('login')
})

//rota cadastro
app.get('/singup', (req , res)=>{
    res.render('singup')
})


//rota de cadastro
app.post('/cadastro-user' , (req , res)=>{

    var email = req.body.email
    var senha = req.body.senha

    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(senha , salt)

        usuario.create({
            email: email,
            email2: req.body.email2,
            senha: hash,
            senha2: req.body.senha2
    }).then(function () {
        res.redirect("/login")
    }).catch(function (erro) {
        res.send("Houve algum erro em seu cadastro, tente novamente!" + erro)
    })
})

//rota logado com  sucesso
app.post('/logado', (req , res)=>{

    var email = req.body.email
    var senha = req.body.senha

    usuario.findOne({where:{email:email}}).then(usuario =>{
        if(usuario!=undefined){
            var correct = bcrypt.compareSync(senha, usuario.senha)
            if(correct){
                res.redirect("/home")
            }else{
                res.redirect("/singup")
            }

        }else{
            res.redirect("/singup")
        }
    })

})


//rota terror
app.get('/terror', (req , res)=>{
    res.render('terror')
})

//rota romance
app.get('/romance', (req , res)=>{
    res.render('romance')
})

//rota serie terror
app.get('/sterror', (req , res)=>{
    res.render('sterror')
})

//rota serie romance
app.get('/sromance', (req , res)=>{
    res.render('sromance')
})

//rota trailer id=1
app.get('/id1', (req , res)=>{
    res.render('filmes/filmeid1')
})
//rota filme id=1
app.get('/id1f', (req , res)=>{
    res.render('filmes/fcid1')
})


//iniciando servidor
app.listen(port , ()=>{
    console.log('Servidor Online!')
})
