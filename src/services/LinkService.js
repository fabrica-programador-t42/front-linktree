import AxiosClient from "./Api";

export async function buscarLinksPorId(id){
    try {
        const res = await AxiosClient.get(`/usuarios/${id}`)
        return res.data.links
    } catch (error) {
        console.log(error)
    }
}