import express from "express";
import routes from "./routes/routes.js";
const app = express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());


//Rutas
app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))