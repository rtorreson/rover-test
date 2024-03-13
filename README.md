# Rover Navigation System

Este projeto implementa um sistema de navegação de rovers em um planalto, onde cada rover pode ser posicionado e movido de acordo com instruções específicas.

## Funcionalidades

- Criação de um planalto com dimensões especificadas.
- Posicionamento de rovers no planalto.
- Movimento dos rovers de acordo com instruções fornecidas.

## Design Patterns

Neste projeto, foram utilizados os seguintes padrões de projeto:

1. **Factory Method**: O padrão Factory Method foi utilizado para criar instâncias dos rovers. Isso permite que diferentes tipos de rovers sejam criados de forma flexível, de acordo com as instruções fornecidas.

2. **Strategy Pattern**: O padrão Strategy foi utilizado para implementar diferentes estratégias de navegação dos rovers. Isso permite que diferentes algoritmos de movimento sejam aplicados aos rovers de acordo com as necessidades.

3. **Command Pattern**: O padrão Command foi utilizado para encapsular as instruções de movimento dos rovers em objetos. Isso permite que as instruções sejam tratadas como objetos que podem ser armazenados, passados como parâmetros e desfeitos, se necessário.

4. **Singleton Pattern**: O padrão Singleton foi utilizado para garantir que apenas uma instância do plateau seja criada durante a execução do programa. Isso é útil quando se deseja garantir que há apenas um plateau em um determinado momento e que todas as partes do código tenham acesso à mesma instância.


