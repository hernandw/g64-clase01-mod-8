import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const home = (req, res) => {
  res.send("Hola mundo desde controller");
};
const mostrarBici = (req, res) => {
  const bicicletasJSON = JSON.parse(
    fs.readFileSync("./data/Bicicletas.json", "utf-8")
  );
  res.send(bicicletasJSON);
};

const addBicycle = (req, res) => {
  try {
    const id = uuidv4().slice(0, 8);
    const { marca, modelo, precio } = req.body;
    const bicicleta = { id, marca, modelo, precio };
    const bicicletasJSON = JSON.parse(
      fs.readFileSync("./data/Bicicletas.json", "utf-8")
    );

    const bicicletas = bicicletasJSON;

    bicicletas.push(bicicleta);

    fs.writeFileSync("./data/Bicicletas.json", JSON.stringify(bicicletas));
    res.send("Bicicleta agregada");
  } catch (error) {
    console.log(error);
  }
};

const editBicycle = (req, res) => {
  const id = req.params.id;
  const { marca, modelo, precio } = req.body;
  const bicicleta = { id, marca, modelo, precio };
  const bicicletasJSON = JSON.parse(
    fs.readFileSync("./data/Bicicletas.json", "utf-8")
  );
  const bicicletas = bicicletasJSON;
  const bicicletaResult = bicicletas.map((item) => {
    if (item.id === id) {
      return bicicleta;
    } else {
      return item;
    }
  });
  fs.writeFileSync("./data/Bicicletas.json", JSON.stringify(bicicletaResult));
  res.send("Bicicleta editada");
};

const deleteBicycle = (req, res) => {
  const id = req.params.id;
  const bicicletasJSON = JSON.parse(
    fs.readFileSync("./data/Bicicletas.json", "utf-8")
  );
  const bicicletas = bicicletasJSON;
  const bicicletaResult = bicicletas.filter((item) => item.id !== id);
  fs.writeFileSync("./data/Bicicletas.json", JSON.stringify(bicicletaResult));
  res.send("Bicicleta eliminada");
};

export { mostrarBici, home, addBicycle, editBicycle, deleteBicycle };
