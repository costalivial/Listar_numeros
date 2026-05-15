Lívia- [costalivial](https://github.com/costalivial)


Este projeto é um laboratório prático em JavaScript desenvolvido para estudar e comparar a eficiência de diferentes algoritmos de busca: **Linear** e **Binária**. O código gera dados aleatórios, ordena listas e mede o tempo de resposta de cada método.


- **Geração Dinâmica:** Criação de listas com milhares de números aleatórios.
- **Busca Linear:** Implementação sequencial com log de verificação passo a passo.
- **Busca Binária:** Implementação otimizada com lógica de "divisão e conquista".
- **Benchmarking:** Medição de performance em milissegundos utilizando a API `performance.now()`.
- **Tratamento de Dados:** Ordenação numérica de arrays para compatibilidade com busca binária.


### 1. Busca Linear (`O(n)`)
O algoritmo percorre a lista do início ao fim. É útil para listas pequenas ou não ordenadas, mas o tempo de execução cresce proporcionalmente ao tamanho da lista.

### 2. Busca Binária (`O(log n)`)
O algoritmo divide a lista ao meio repetidamente. É extremamente rápido para grandes volumes de dados, mas exige que a **lista esteja previamente ordenada**.

*   **Linguagem:** JavaScript (Node.js)
*   **Ambiente:** Terminal/Console


O projeto utiliza três funções principais para demonstrar os conceitos:

*   **`gerarListaAleatoria(tamanho)`**: Gera um array preenchido com valores entre 1 e 2000.
*   **`buscaLinear(lista, valor)`**: Realiza a busca sequencial e imprime cada tentativa no console.
*   **`buscaBinaria(lista, valor)`**: Realiza a busca otimizada dividindo o espaço de busca pela metade.