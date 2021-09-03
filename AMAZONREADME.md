# Atividade: JavaScript Katas (loops e o DOM)

### Visão geral ###

Você criará uma única página da web, com um título rotulado para cada kata individual seguido de sua solução. Para estes katas, ao invés de usar `console.log ()` ou `document.write ()`, você é ** requerido ** para inserir seus resultados no HTML usando o nó `document.createElement ()` e `. métodos appendChild () `.

A maneira mais fácil de começar é copiando o arquivo de exemplo da ** Mini-Lesson: Inserting new Elements within a Page **. Você pode copiar e colar do código embutido na lição.

Você pode continuar adicionando cada novo kata na parte inferior da página.

Vários dos katas usarão a seguinte matriz de amostra, que você pode copiar e colar em seu código:

`` `js
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
`` `

Observe que os primeiros 10 katas devem parecer familiares: eles são uma repetição dos que você fez em ** Avaliação: JavaScript Katas 1 **. Desta vez, você irá inserir os resultados em sua página HTML, em vez de simplesmente registrá-los no console.

### Katas ###

1. Exiba os números de 1 a 20. _ (1, 2, 3, ..., 19, 20) _
2. Exiba os números pares de 1 a 20. _ (2, 4, 6, ..., 18, 20) _
3. Exiba os números ímpares de 1 a 20. _ (1, 3, 5, ..., 17, 19) _
4. Exiba os múltiplos de 5 a 100. _ (5, 10, 15, ..., 95, 100) _
5. Exiba os [números quadrados] (https://simple.wikipedia.org/wiki/Square_number) de 1 a 100. _ (1, 4, 9, ..., 81, 100) _
6. Exiba os números em contagem regressiva de 20 a 1. _ (20, 19, 18, ..., 2, 1) _
7. Exiba os números pares em contagem regressiva de 20 a 1. _ (20, 18, 16, ..., 4, 2) _
8. Exiba os números ímpares de 20 a 1, em contagem regressiva. _ (19, 17, 15, ..., 3, 1) _
9. Exiba os múltiplos de 5, em contagem regressiva de 100 a 1. _ (100, 95, 90, ..., 10, 5) _
10. Exiba os números quadrados, em contagem regressiva a partir de 100. _ (100, 81, 64, ..., 4, 1) _
11. Exiba os 20 elementos de sampleArray. _ (469, 755, 244, ..., 940, 472) _
12. Exiba todos os números pares contidos em sampleArray. _ (244, 758, 450, ..., 940, 472) _
13. Exiba todos os números ímpares contidos em sampleArray. _ (469, 755, 245, ..., 179, 535) _
14. Exiba o quadrado de cada elemento em sampleArray. _ (219961, 570025, ..., 222784) _
15. Exiba a soma de todos os números de 1 a 20.
16. Exiba a soma de todos os elementos em sampleArray.
17. Exiba o menor elemento em sampleArray.
18. Exiba o maior elemento em sampleArray.


### Bônus ###

Se você gostaria de um desafio adicional, tente completar cada um dos itens acima novamente _sem usar qualquer loop `for` ou` while`_.

### * Opcional * Bônus ###

* Esses problemas envolvem o uso de estilo CSS e exigem um conhecimento prévio em CSS para serem concluídos.

19. Exiba 20 retângulos cinza sólidos, cada um com 20 px de altura e 100 px de largura.
20. Exiba 20 retângulos cinza sólidos, cada um com 20 px de altura, com larguras que variam uniformemente de 105 a 200 px (lembre-se do item 4, acima).
21. Exiba 20 retângulos cinza sólidos, cada um com 20px de altura, com larguras em pixels fornecidas pelos 20 elementos de sampleArray.
22. Como no item 21, mas alterne as cores para que todos os outros retângulos fiquem vermelhos.
23. Como no item 21, mas pinte os retângulos com larguras pares de vermelho.
