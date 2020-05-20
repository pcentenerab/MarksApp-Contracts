const Migrations = artifacts.require("Migrations");
const FTEL = artifacts.require("FTEL");
const PROG = artifacts.require("PROG");
const CORE = artifacts.require("CORE");
const IWEB = artifacts.require("IWEB");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(FTEL,"FTEL", "Fundamentos de los Sistemas Telemáticos", "Primero");
    deployer.deploy(PROG,"PROG", "Programación", "Primero");
    deployer.deploy(CORE,"CORE", "Computación en Red", "Tercero");
    deployer.deploy(IWEB,"IWEB", "Ingeniería Web", "Cuarto");
};