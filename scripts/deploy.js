
const deploy = async () => {

    // deployer es un objeto que nos permite desplegar contratos a la red que tengamos configurada
    const [deployer] = await ethers.getSigners(); // getSigners() trae la información que traemos desde nuestra llave privada

    console.log("Deploying contract with the account: ", deployer.address);

    const PlatziPunks = await ethers.getContractFactory("PlatziPunks");

    // Instancia del contracto desplegado
    const deployed = await PlatziPunks.deploy();

    console.log("Platzi Punks is deployed at: ", deployed.address);

    
};

deploy().then(()=>process.exit(0)).catch((error) => {console.log(error); process.exit(1);})