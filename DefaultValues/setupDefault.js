let Web3 = require("web3");  // Cargar paquete web3
let FTELabi = require('./FTELabi.json')
let PROGabi = require('./PROGabi.json')
let COREabi = require('./COREabi.json')
let IWEBabi = require('./IWEBabi.json')

// Usar Provider: GANACHE 
let web3 = new Web3("ws://localhost:7545");

(async () => {
    try {

        const addresses = await web3.eth.getAccounts();
        const primaryAddress = addresses[0];

        const FTELaddr = "0xf86D2e2C79056E7be72d6DDE9b7361433f6af9f3";
        const PROGaddr = "0x30240b18b8ED2615CA9A1aF787466170c7dD39a9";
        const COREaddr = "0x5428fE2Ab04c5318857d9280FB466331a8B3CcE2";
        const IWEBaddr = "0x3426873327beAe5b97034Fbc9da933dFd7f50326";

        let FTELContract = new web3.eth.Contract(FTELabi, FTELaddr);
        let PROGContract = new web3.eth.Contract(PROGabi, PROGaddr);
        let COREContract = new web3.eth.Contract(COREabi, COREaddr);
        let IWEBContract = new web3.eth.Contract(IWEBabi, IWEBaddr);
        
        await FTELContract.methods.setEvaluacion("Parcial 1", 10, 35).send({from: primaryAddress, gas: 200000});
        await FTELContract.methods.setEvaluacion("Parcial 2", 1, 35).send({from: primaryAddress, gas: 200000});
        await FTELContract.methods.setEvaluacion("Prácticas", 1, 30).send({from: primaryAddress, gas: 200000});

        await PROGContract.methods.setEvaluacion("Parcial 1", 4, 15).send({from: primaryAddress, gas: 200000});
        await PROGContract.methods.setEvaluacion("Parcial 2", 5, 15).send({from: primaryAddress, gas: 200000});
        await PROGContract.methods.setEvaluacion("Parcial 3", 6, 50).send({from: primaryAddress, gas: 200000});
        await PROGContract.methods.setEvaluacion("Prácticas", 6, 20).send({from: primaryAddress, gas: 200000});

        await COREContract.methods.setEvaluacion("Parcial 1", 4, 35).send({from: primaryAddress, gas: 200000});
        await COREContract.methods.setEvaluacion("Parcial 2", 6, 35).send({from: primaryAddress, gas: 200000});
        await COREContract.methods.setEvaluacion("Prácticas", 6, 30).send({from: primaryAddress, gas: 200000});

        await IWEBContract.methods.setEvaluacion("Parcial 1", 10, 15).send({from: primaryAddress, gas: 200000});
        await IWEBContract.methods.setEvaluacion("Parcial 2", 11, 20).send({from: primaryAddress, gas: 200000});
        await IWEBContract.methods.setEvaluacion("Parcial 3", 1, 10).send({from: primaryAddress, gas: 200000});
        await IWEBContract.methods.setEvaluacion("Prácticas", 1, 55).send({from: primaryAddress, gas: 200000});

        //matriculo a Pedro en FTEL y PROG y a Pablo en FTEL
        await FTELContract.methods.setMatricula("Pedro", "pedro@alumnos.upm.es").send({from: addresses[1], gas: 200000});
        await PROGContract.methods.setMatricula("Pedro", "pedro@alumnos.upm.es").send({from: addresses[1], gas: 200000});
        await FTELContract.methods.setMatricula("Pablo", "pablo@alumnos.upm.es").send({from: addresses[2], gas: 200000});

        //asigno notas a Pedro y a Pablo
        await FTELContract.methods.setNota(addresses[1], 0, 1, 9).send({from: primaryAddress, gas: 200000});
        await FTELContract.methods.setNota(addresses[1], 2, 2, 10).send({from: primaryAddress, gas: 200000});

        await PROGContract.methods.setNota(addresses[1], 0, 1, 9).send({from: primaryAddress, gas: 200000});
        await PROGContract.methods.setNota(addresses[1], 1, 1, 7).send({from: primaryAddress, gas: 200000});
        await PROGContract.methods.setNota(addresses[1], 2, 1, 8).send({from: primaryAddress, gas: 200000});
        
        await FTELContract.methods.setNota(addresses[2], 0, 1, 9).send({from: primaryAddress, gas: 200000});
        await FTELContract.methods.setNota(addresses[2], 2, 2, 10).send({from: primaryAddress, gas: 200000});
        await FTELContract.methods.setNota(addresses[2], 1, 1, 6).send({from: primaryAddress, gas: 200000});
        
        console.log("Fin");
        
    } catch(error) {
        console.log("Error =", error);
        process.exit(1);
    }
})();
