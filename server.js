// Configurar o Back-End

const express = require('express')

const app = express()

// Rota para o Front-End
app.use(express.static('public'))

// Iniciar com localhost:3000
app.listen(3000, () =>{
    console.log('servidor rodando na porta 3000, http://localhost:3000')
})