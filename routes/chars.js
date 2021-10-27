var express = require('express');
var router = express.Router();

const db = require("../model/helper");


/* GET list */
router.get('/', async function(req, res, next) {
  await db(`SELECT * FROM characters`)
    .then(results => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});
/* select a char */
// router.get('/', function(req, res, next) 



/* insert a new char */
router.post('/', async function(req, res, next) {
  // 
  await db(`INSERT INTO characters (model, vtube, pet, bg, price, image, description) VALUES 
  ("${req.body.model}",
  "${req.body.vtube}",
  ${req.body.pet},
  ${req.body.bg},
  ${req.body.price},
  "${req.body.image}",
  "${req.body.description}");`
  )
  .then(() => {
    res.send({ message: "new item added" });
  })
  .catch((err) => res.status(500).send(err));
  })


// DELETE a char from the DB
router.delete("/:id", async function(req, res) {
  //see if exists
  try {
    let results = await db(`SELECT * characters WHERE id = ${req.params.id}`);
    let characters = results.data;
    if (characters.length === 1) {
      //if found delete
      await db(`DELETE FROM characters WHERE id = ${req.params.id}`);
      //return all characters
    let results = await db('SELECT * FROM characters');
    let characters = results.data;
    results.send(characters);
    } else {
      //didnt find 
      res.status(404).send({ error: 'Not found'})
    }

  } catch(err) {
    res.status(500).send({error: err.message});
  }
})

module.exports = router;
