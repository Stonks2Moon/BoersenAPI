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

public api = new BörsenAPI('moonstonks token')
```

## Eine Order stellen
Es gibt viele verschiedene Orders, diese können je nach bedarf dynamisch oder statisch gestellt werden. Hierzu gibt es mehrere Methoden, welche über unsere **BörsenAPI** erreichbar sind.

```ts
import { OrderManager } from "moonstonks-boersenapi";

public orderManager = new OrderManager(api, 'onPlace' 'onMatch', 'onComplete', 'onDelete')
```

### Eine Buy Market Order stellen

> ```ts
> async function placeBuyMarketOrder(shareId: string, amount: number): Promise<Job>
> ```
```ts
orderManager.placeBuyMarketOrder("shareId", 20)
  .then((job) => console.log('Job', job))
  .catch((error) => console.error(error));
```

### Eine Buy Limit Order stellen
> ```ts
> async function placeBuyLimitOrder(shareId: string, amount: number, limit: number): Promise<Job>
> ```
```ts
orderManager.placeBuyLimitOrder("shareId", 20, 200)
  .then((job) => console.log('Job', job))
  .catch((error) => console.error(error));
```

### Eine Buy Stop Market Order stellen
```ts
orderManager.placeBuyStopMarketOrder("shareId", 20, 200, 250)
  .then((job) => console.log('Job', job))
  .catch((error) => console.error(error));
```

### Eine Buy Stop Limit Order stellen
```ts
orderManager.placeBuyStopLimitOrder("shareId", 20, 200, 250, 260)
  .then((job) => console.log('Job', job))
  .catch((error) => console.error(error));
```

### Eine Sell Market Order stellen
```ts
orderManager.placeSellMarketOrder("shareId", 20)
  .then((job) => console.log('Job', job))
  .catch((error) => console.error(error));
```

### Eine Sell Limit Order stellen
```ts
orderManager.placeSellLimitOrder("shareId", 20, 210)
  .then((job) => console.log('Job', job))
  .catch((error) => console.error(error));
```

### Eine Sell Stop Market Order stellen
```ts
orderManager.placeSellStopMarketOrder("shareId", 20, 210, 150)
  .then((job) => console.log('Job', job))
  .catch((error) => console.error(error));
```

### Eine Sell Stop Limit Order stellen
```ts
orderManager.placeSellStopLimitOrder("shareId", 20, 210, 150, 140)
  .then((job) => console.log('Job', job))
  .catch((error) => console.error(error));
```

## Shares

Shares sind items, welche in der MoonStonks Börse gehandelt werden können. Hierzu stellt die Börse verschiedene Methoden zur Verfügung, um Informationen wie den aktuellen Kurs, die Preisentwicklung und andere abzurufen.

```ts
import { ShareManager } from "moonstonks-boersenapi";
```

### Alle handelbaren Items abrufen

```ts
ShareManager.getShares();
```

### Den aktuellen Kurs eines items erhalten
```ts
ShareManager.getPrice("shareId");
```

### Die Preisentwicklung abrufen
```ts
ShareManager.getPrices("shareId");
ShareManager.getPricesFrom("shareId", from);
ShareManager.getPricesUntil("shareId", until);
ShareManager.getPricesFromUntil("shareId", from, until);
```

# Datenmodelle

## Order

| Attribut | Type | Beschreibung |
|:--|:--|:--|
|id|string|TODO:|
|shareId|string|TODO:|
|timestamp|number|TODO:|
|type|"buy" \| "sell"|TODO:|
|amount|number|TODO:|
|limit?|number|TODO:|
|stop?|number|TODO:|
|stopLimit?|number|TODO:|

___
## Job

| Attribut | Type | Beschreibung |
|:--|:--|:--|
|id|string|TODO:|
|data| { dto: PlaceOrderDto \| DeleteOrderDto, broker: Broker }|TODO:|

___

## Share

| Attribut | Type | Beschreibung |
|:--|:--|:--|
id|string|TODO:|
name|string|TODO:|
price|string|TODO:|

___
## Price

| Attribut | Type | Beschreibung |
|:--|:--|:--|
timestamp|number|TODO:|
price|number|TODO:|
  ___
## Broker

| Attribut | Type | Beschreibung |
|:--|:--|:--|
|type|'private' \| 'business' \| 'simulation' \| 'stockmarket'|TODO:|
|displayName|string|TODO:|


# DTOs

## PlaceOrderDto

| Attribut | Type | Beschreibung |
|:--|:--|:--|
|shareId|string|TODO:|
|amount|number|TODO:|
|onPlace|string|TODO:|
|onMatch|string|TODO:|
|onComplete|string|TODO:|
|onDelete|string|TODO:|
|type|'buy' \| 'sell'|TODO:|
|limit|number|TODO:|
|stop|number|TODO:|
|stopLimit|number|TODO:|

## UnqueueJobDto

| Attribut | Type | Beschreibung |
|:--|:--|:--|
|jobId|string|TODO:|

___
## DeleteOrderDto

| Attribut | Type | Beschreibung |
|:--|:--|:--|
|orderId|string|TODO:|

___

//
TBC..

