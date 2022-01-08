# Platzi Punk

Vamos hacer unos Punks rockeros bien mamalones para practicar el desarrollo blockchain

### ¿Que es Hardhat?

Es un entorno de desarrollo que permite compilar, probar y desplegar smart contracts.

¿Como instalar HardHat?

`npm install --save-dev hardhat`

Instalar dependencias extras

`npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers`

Compilación
`npx hardhat compile`

Tests
`npx hardhat test`

Deploy
`npx hardhat run scripts/sample-script.js`

### ¿Qué son las EIP?

Las propuestas de mejora de Ethereum (EIPs) son estándares que especifican nuevas características o procesos potenciales para Ethereum. Las EIP contienen especificaciones técnicas para los cambios propuestos y actúan como “fuente de verdad” para la comunidad. Las actualizaciones de la red y los estándares de aplicación para Ethereum se debaten y desarrollan a través del proceso de las EIP.

### Metadata ERC721

Es una extension del ERC721 que añade 3 funciones

- name: nombre del token
- symbol: el simbolo con el que se identifica en el mercado
- tokenURI: una URL que debe regresar un archivo JSON con las propiedades del NFT

![Web3](https://uploads-ssl.webflow.com/5ddd80927946cdaa0e71d607/614bae739b29ae6f4e7d97a1_Screen%20Shot%202021-09-22%20at%206.29.59%20PM.png "Web3")

![Web2 vs Web3](https://static.platzi.com/media/user_upload/4-web2-web3-f5597018-22b2-4b02-81c0-65fc912bf6d0.jpg "Web2 vs Web3")
