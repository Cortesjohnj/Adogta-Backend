const express = require("express");
const controllers = require("../controllers/controllers");
const { auth, authAdmin } = require("../middlewares/middlewares");
const app = express.Router();

app.get("/me", auth, controllers.loadUser);
app.post("/login", controllers.login);
app.delete("/pets/:id", auth, controllers.destroyPet);
app.get("/foundations", auth, controllers.listFoundations);
app.get("/foundations/:id/pets", auth, controllers.listPets);
app.get("/foundations/:id/requests", controllers.listFoundationRequests);
app.post("/foundations/:foundationId/pets", controllers.createPet);
app.get("/pets/:petId", controllers.getPet);
app.get("/pets/:petId/requests", controllers.listRequests);
app.put("/pets/:petId/requests/:requestId", controllers.updateRequest);
app.get("/admin", authAdmin, controllers.listFoundations);
app.delete("/admin", authAdmin, controllers.deleteFoundation);
app.get("/admin/users", authAdmin, controllers.listUsers);
app.delete("/admin/users", authAdmin, controllers.deleteUsers);

module.exports = app;
