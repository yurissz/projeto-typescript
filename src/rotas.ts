import { Router } from "express";
import { atualizarCarros, cadastrarCarros, detalharCarros, excluirCarros, listarCarros } from './controladores/carros'

const rotas = Router()

// listagem dos carros
rotas.get('/', listarCarros)
// detalhe dos carros
rotas.post('/', detalharCarros)
// cadastro de carro
rotas.post('/', cadastrarCarros)
// atualizacao de carro
rotas.put('/', atualizarCarros)
// exclusao de carro
rotas.delete('/', excluirCarros)

export default rotas