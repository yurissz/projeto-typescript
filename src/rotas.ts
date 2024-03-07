import { Router } from "express";
import { atualizarCarros, cadastrarCarros, detalharCarros, excluirCarros, listarCarros } from './controladores/carros'

const rotas = Router()


rotas.get('/carros', listarCarros)

rotas.get('/carros/:id', detalharCarros)

rotas.post('/cadastrar', cadastrarCarros)

rotas.put('/atualizar/:id', atualizarCarros)

rotas.delete('/excluir/:id', excluirCarros)

export default rotas