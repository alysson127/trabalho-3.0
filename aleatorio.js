const nomes = ["Alysson", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Fernanda"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);