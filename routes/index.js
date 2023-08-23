const express = require("express");
const Url = require("../models/url");
const router = express.Router();
const takeScreenShot = require("../utils/takescreenshot");
const { SERVER_BASE_URL } = require("../utils/constants");
const getMetaData = require("metadata-scraper");
const authMiddleWare = require("../auth/authMiddleware");

router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

router.get("/previews", async (req, res) => {
  const url = await Url.findAll();
  res.status(200).send(url);
});

router.post("/preview", async (req, res) => {
  const { urlString } = req.body;
  const path = await takeScreenShot(urlString);
  getMetaData(urlString)
    .then(async ({ title, description, icon }) => {
      const anyUrl = await Url.findOne({ where: { url: urlString } });
      console.log(anyUrl);
      if (!anyUrl) {
        const url = await Url.create({
          url: urlString,
          previewImgSrc: path,
          image: `${SERVER_BASE_URL}/${path}`,
          title: title,
          description: description,
          icon: icon,
        });
        res.status(200).send(url);
      } else {
        await Url.update(
          {
            number_of_calls: anyUrl.number_of_calls + 1,
          },
          { where: { id: anyUrl.id } }
        );
        const url = await Url.findByPk(anyUrl.id);
        res.status(200).send(url);
      }
    })
    .catch((err) => res.status(500).send("Internal Server Error"));
});

router.get("/current-user", authMiddleWare, (req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;
