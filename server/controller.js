const gallery = require("./watercolor.json");
let kits = [];

console.log(gallery[0].name);

module.exports = {
    displayAll:  (req, res) => {
        const {search} = req.query
        const resKits = []

        if(search){
            const myKits = gallery.filter(watercolor =>
                watercolor.name.toLowerCase().includes(search.toLowerCase())
            );
            for (let i = 0; i<25; i++){
                resKits.push.myKits[i]);
            }
            return res.status(200).send(resKits)
        }else{
            for(let i = 0; i<25; i++) {
                resKits.push(gallery[i]);
            }

        }
        return res.status(200).send(resKits);
    },

    getProjects: (req, res) => {

    },

    addToProj: (req, res) => {

    },

    editProj: (req, res) => {

    },

    deleteProj: (req, res) => {

    }