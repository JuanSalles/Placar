# Placar Baja SAE - Overlay de Ranking de Enduro

Este projeto é um overlay desenvolvido para exibir o ranking de enduro durante as transmissões ao vivo das competições do Baja SAE. Ele foi projetado para ser utilizado em ferramentas de transmissão como o OBS Studio, permitindo uma exibição dinâmica e personalizada das informações de classificação.

## Demonstração

![Demonstração do Overlay](repo/Placar_overlay.gif)

## Funcionalidades
- Exibição em tempo real do ranking de enduro.
- Personalização de configurações através do arquivo `config.js`.
- Compatível com uso local e hospedagem online.

## Instruções de Uso

### Uso Local no OBS
1. Clone este repositório para sua máquina local:
    ```bash
    git clone https://github.com/JuanSalles/Placar.git
    ```
2. Abra o arquivo `config.js` e configure os seguintes parâmetros:
    ```javascript
    const config = {
        localUse: true, //caso você va usar localmente no OBS mantenha true
        event: "Código ou id do evento, exemplo: 24BR",
        API_URL: 'endpoint da API'
    };

    ```

    - Obs: Esse projeto foi idealizado para a API do Baja Sae e tem particularidades da mesma, porem, fiquem a vontade para customizar os parametros do config.js de acordo com as suas necessidades.    
3. No OBS Studio:
    - Adicione uma nova fonte do tipo "Navegador".
    - Configure a URL para o caminho local do arquivo `index.html`.
    - Ajuste a largura e altura conforme necessário.
    
### Uso Após Hospedagem
1. Hospede os arquivos do projeto em um servidor web de sua escolha (ex.: GitHub Pages, Vercel, Netlify).
2. Abra o arquivo `config.js` e configure os seguintes parâmetros:
    ```javascript
    const config = {
        localUse: false, //caso você va usar hospedado mantenha false
        event: "Código ou id do evento, exemplo: 24BR", //será usado como evento default caso os parametros não sejam passados na URL
        API_URL: 'endpoint da API'
    };

    ```

    - Obs: Esse projeto foi idealizado para a API do Baja Sae e tem particularidades da mesma, porem, fiquem a vontade para customizar os parametros do config.js de acordo com as suas necessidades.
3. No OBS Studio:
    - Adicione uma nova fonte do tipo "Navegador".
    - Configure a URL para o endereço hospedado do overlay (ex.: `https://seu-usuario.github.io/Placar/`).
    - Ainda na configuração da URL, adiciona ao fim dela o id do evento desta forma `https://seu-usuario.github.io/Placar?evento=25BR`, caso contrario o evento utilizado será o mesmo do arquivo config.js
    - Ajuste a largura e altura conforme necessário.



## Outras configurações 

1. No OBS Studio:
    - Caso tenha interesse em customizar as cores do placar direto no OBS, ao clicar em propriedades na fonte de navegador criada, voce ode utilizar o campo de custom css e inserir:
        ```css
        :root {
            --font-color: "COLOQUE A CODIGO DA COR" !important;
            --primary-color:"COLOQUE A CODIGO DA COR" !important;
            --secondary-color:"COLOQUE A CODIGO DA COR" !important;
            --odd-row-color-start:"COLOQUE A CODIGO DA COR" !important;
            --odd-row-color-end: "COLOQUE A CODIGO DA COR" !important;
            --even-row-color-start: "COLOQUE A CODIGO DA COR" !important;
            --even-row-color-end: "COLOQUE A CODIGO DA COR" !important;
            --highlight-color: "COLOQUE A CODIGO DA COR" !important;
        }
        ```
    - A customização pode ser feita também diretamente no arquivo `styles.css`, que está na mesma pasta do projeto. Neste caso, não é necessário usar `!important`.
    - Para manter a transparência do overlay durante as animações, é necessário adicionar um filtro Chroma Key no OBS Studio:
        1. No OBS Studio, clique com o botão direito na fonte do tipo "Navegador" que contém o overlay e selecione **Filtros**.
        2. Na janela de filtros, clique no botão **+** e escolha a opção **Chroma Key**.
        3. Configure a cor da Chroma Key para **Magenta** ou insira o código hexadecimal `#f02dc2`.
        4. Ajuste as configurações de similaridade, suavidade e redução de derramamento conforme necessário para obter o efeito desejado.
        5. Clique em **Fechar** para salvar as alterações.
    - É recomendavel marcar as opções `Desativar fonte quando invisível` e `Atualizar o navegador quando a cena se torna ativa` nas propriedades da fonte, caso contrario, você pode acabar exibindo o placar no meio e não no inicio.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## Licença
Este projeto está licenciado sob a [MIT License](./LICENSE).