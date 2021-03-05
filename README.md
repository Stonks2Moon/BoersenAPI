# MoonStonks Börsen API

Offizielle API der MoonStonks Börse, um jegliche Art von Order zu stellen.

## Installation

```shell
npm install moonstonks-boersenapi
```
oder

```shell
yarn add moonstonks-boersenapi
```

## Setup

```ts
import { BörsenAPI } from 'moonstonks-boersenapi';

public api = new BörsenAPI('moonstonks token', 'onMatch', 'onComplete', 'onDelete')
```

## Eine Order stellen
Es gibt viele verschiedene Orders, diese können je nach bedarf dynamisch oder statisch gestellt werden. Hierzu gibt es mehrere Methoden, welche über unsere **BörsenAPI** erreichbar sind.

### Eine Buy Market Order stellen
```ts
api.placeBuyMarketOrder("shareId", 20)
  .then((order) => console.log('Order', order))
  .catch((error) => console.error(error));
```

### Eine Buy Limit Order stellen
```ts
api.placeBuyLimitOrder("shareId", 20, 200)
  .then((order) => console.log('Order', order))
  .catch((error) => console.error(error));
```

### Eine Buy Stop Market Order stellen
```ts
api.placeBuyStopMarketOrder("shareId", 20, 200, 250)
  .then((order) => console.log('Order', order))
  .catch((error) => console.error(error));
```

### Eine Buy Stop Limit Order stellen
```ts
api.placeBuyStopLimitOrder("shareId", 20, 200, 250, 260)
  .then((order) => console.log('Order', order))
  .catch((error) => console.error(error));
```

### Eine Sell Market Order stellen
```ts
api.placeSellMarketOrder("shareId", 20)
  .then((order) => console.log('Order', order))
  .catch((error) => console.error(error));
```

### Eine Sell Limit Order stellen
```ts
api.placeSellLimitOrder("shareId", 20, 210)
  .then((order) => console.log('Order', order))
  .catch((error) => console.error(error));
```

### Eine Sell Stop Market Order stellen
```ts
api.placeSellStopMarketOrder("shareId", 20, 210, 150)
  .then((order) => console.log('Order', order))
  .catch((error) => console.error(error));
```

### Eine Sell Stop Limit Order stellen
```ts
api.placeSellStopLimitOrder("shareId", 20, 210, 150, 140)
  .then((order) => console.log('Order', order))
  .catch((error) => console.error(error));
```


