import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = 3001;

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});