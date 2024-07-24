const { Router } = require(`express`);
const { home, details, search } = require("../src/controllers/catalog");
const { about } = require("../src/controllers/about");
const { createGet: createCastGet, createPost: createCastPost } = require("../src/controllers/cast");
const { createGet, createPost } = require("../src/controllers/movie");
const { notFound } = require("../src/controllers/404");

const router = Router();

router.get(`/`, home);
router.get(`/about`, about);
router.get(`/create/movie`, createGet);
router.get("/details/:id", details);
router.get("/search", search);
router.post("/create/movie", createPost);
router.get("/create/cast", createCastGet);
router.post("/create/cast", createCastPost);
router.get("*", notFound);

module.exports = {
    router
}