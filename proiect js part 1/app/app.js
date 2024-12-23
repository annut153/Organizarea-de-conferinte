const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models"); // Conexiune la baza de date
const conferencesRoutes = require("./routes/conference"); // Rutele pentru conferințe
const articlesRoutes = require("./routes/articles"); // Rutele pentru articole
const authenticate = require("./middleware/authenticate"); // Middleware de autentificare
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json"); // Documentația Swagger

const app = express();

// Middleware pentru a permite cererile CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware pentru a interpreta datele din cereri ca JSON
app.use(bodyParser.json());

// Rutele pentru conferințe și articole
app.use("/api/conferences", conferencesRoutes);
app.use("/api/articles", articlesRoutes);

// Rutele Swagger pentru documentație
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ruta de autentificare (exemplu de utilizare middleware)
app.post("/api/login", authenticate, (req, res) => {
  // Logica de autentificare, eventual returnarea unui token JWT
  res.status(200).json({ message: "User authenticated" });
});

// Testează conexiunea la baza de date și pornește serverul
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Serverul rulează pe portul 3000");
  });
}).catch((err) => {
  console.error("Eroare la conectarea la baza de date:", err);
});
