# localStorage

O localStorage é um mecanismo que compôe a api WebStorage que permite armazemar dados no client-side em forma de pares de chave-valor. Ele permite persistir os dados mesmo depois que a página tenha sido recarregada e/ou a sessão encerrada.  

__OBS__: As chaves e valores de um objeto LocalStorage são armazenadas em forma de string.

__Métodos disponíveis para o LocalStorage:__
- getItem(chave): recupera um item armazenado no storage através de sua chave.
- setItem(chave, valor): armazena um item no storage definindo sua chave e seu valor. Se for informada uma chave já existente, o valor atual é substituído.
- removeItem(chave): remove o item armazenado buscando pela sua chave. Uma vez removido, o item não pode ser removido.
- clear(): limpa completamente o storage, removendo todos os itens definitivamente.  

Todos os métodos podem ser acessados através do ``Window.localStorage.metodoDesejado()``

créditos: http://www.linhadecodigo.com.br/artigo/3537/trabalhando-com-html5-web-storage.aspx#ixzz7UmIvhWjs
