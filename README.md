# React JS - Redux Pokémon 

* API - https://docs.pokemontcg.io

Bu projede React, Redux, axios, combineReducers ve ApplyMiddleware kullandım.

### Nasıl Kullanılır

#### Kurulum
```
$ git clone https://github.com/sadumankucuk/pokedex.git
$ npm install or yarn install
$ npm run start or yarn run start

run app node server.js on localhost:3000
```
### Projenin İçeriği

#### Pages

* PokemonList Page (Home Page) :
Tabloda göstermek için name, supertype, evolvesFrom, hp, rarity ve image link card bilgilerini kullandım. Bunun için evolvesFrom bilgisi olmayan ve rarity bilgisi boş olan card'ları filtreledim.

* Pokemon Page :
Pokemon'a ait  name, supertype, evolvesFrom, hp, rarity, image, attacks (only list of names and damage) bilgilerini görüntülememizi sağlar.

### Projede Neler Yapabiliriz

* Tablo üzerinden pokemon adlarına göre arama yapılabilir.
* Tablo üzerinden Hp kolonuna göre ASC DESC sıralama yapılabilir.
* Tablo üzerinden Rarity kolonuna göre filtreleme yapılabilir.
