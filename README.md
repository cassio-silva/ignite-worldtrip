# WorldTrip

Este projeto é uma aplicação do que aprendemos no capítulo IV do curso ***ignite*** da [@RocketSeat](https://www.rocketseat.com.br/).

### Sumário
- [Next.js - \_document.tsx](https://github.com/cassio-silva/ignite-worldtrip/edit/main/README.md#nextjs---configura%C3%A7%C3%A3o-do-arquivo-_document)
- [Swiper](https://github.com/cassio-silva/ignite-worldtrip/edit/main/README.md#swiper)
- [Chakra-ui e responsividade](https://github.com/cassio-silva/ignite-worldtrip/edit/main/README.md#chakra-ui-e-responsividade)

Para a inicialização do projeto foi utilizado o seguinte comando, com o template para typescript

```node
yarn create next-app --typescript
```

## Next.js - Configuração do arquivo \_document
Para adicionarmos fontes externas no nosso projeto next, podemos configurar um arquivo chamado `_document.tsx`. O \_document vai conter nossas importações de fontes externas que serão usadas em toda a aplicação, segue abaixo um exemplo de configuração deste arquivo:

<details><summary>Exemplo do _document.tsx</summary>

```javascript
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&family=EB+Garamond&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```
</details>
O _document sobrescreve a estrutura básica HTML da aplicação em Next.js, aplicando as suas alterações ao invés da estrutura padrão.

Para a estilização CSS utilizamos o [Chakra-ui](https://chakra-ui.com/), e a lib [Swiper](https://swiperjs.com/) para o carrossel de imagens.

## Swiper
Exemplo da aplicação do Swiper nesse projeto.
Primeiramente importamos o `SwiperCore` e os módulos que serão utilizados:
<details><summary>Exemplo</summary>

```javascript
  import { Swiper, SwiperSlide } from "swiper/react";
  import SwiperCore, { Navigation, Pagination } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
```
</details>

Em seguida esse módulos precisam ser "instalados", para que o Swiper reconheça que eles serão utilizados:

```javascript
  SwiperCore.use([Navigation, Pagination]);  
```

Aplicação do Swiper como componente: 

<details><summary>Exemplo</summary>
  
```javascript
  <Swiper
    slidesPerView={1}
    spaceBetween={50}
    navigation={true}
    pagination={true}
  >
    <SwiperSlide>
      /* CONTENT */
    <SwiperSlide>
  </Swiper>
``` 
</details>
    
## Chakra-ui e Responsividade
Para tornar um componente Chakra-ui responsivo, basta passar um array com os valores desejados a uma propriedade de um componente:

```javascript
  <Text
    fontSize={["0.875rem", "1.5rem"]}
  >
```
Neste exemplo o tamanho da fonte é definida no mobile como `0.875rem` e no Desktop como `1.5rem`, isso funciona com a grande maioria das propriedades dos componentes do Chakra.
