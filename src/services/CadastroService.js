import axios from "axios"

export async function criarConta(dados) {
    try {
        await axios.post('http://localhost:3001/usuarios', {
            nome: dados.name,
            email: dados.email,
            senha: dados.password
        })

        return {
            error: false,
            message: 'Usuário Criado'
        }
    } catch (error) {
        console.log(error.response.data);
        return {
            error: true,
            message: 'Erro ao criar usuario'
        }
    }
}