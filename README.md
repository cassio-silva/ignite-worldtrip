# WorldTrip

Este projeto é uma aplicação do que aprendemos no capítulo IV do curso ***ignite*** da [@RocketSeat](https://www.rocketseat.com.br/).

Para a inicialização do projeto foi utilizado o seguinte comando, com o template para typescript

```node
yarn create next-app --typescript
```

Para a estilização CSS utilizamos o [Chakra-ui](https://chakra-ui.com/), e a lib [Swiper](https://swiperjs.com/) para o carrossel de imagens.

## Swiper
Exemplo da aplicação do Swiper nesse projeto, primeiramente importamos o `SwiperCore` e os módulos que serão utilizados:
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
Para tornar um componente Chakra-ui responsivo, basta passar um array com os valores desejados à uma propriedade de um componente:

```javascript
  <Text
    fontSize={["0.875rem", "1.5rem"]}
  >
```
Neste exemplo o tamanho da fonte é definida no mobile como `0.875rem` e no Desktop como `1.5rem`, isso funciona com a grande maioria das propriedades dos componentes do Chakra.

## Componente Image e propriedade `sx`

Caso seja necessário aplicar CSS customizado em algum componente ou o componente não possua a propriedade listada, o Chakra-ui conta com a prop `sx` que permite adicionar as propriedades do CSS diretamente. 

```javascript
  <Image
    sx={{
      filter: 'brightness(0.85)'
    }}
  />
```
