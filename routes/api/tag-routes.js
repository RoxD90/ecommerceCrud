const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll({
      include: [Product],
    });
    res.json(tags);}
    catch (err){
      res.status(500).json(err);
    } 
  });


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tag = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    });

    res.json(tag);}
    catch (err){
      res.status(500).json(err);
    } 
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const tag = await Tag.create(req.body); 
  
    res.json(tag);}
    catch (err){
      res.status(500).json(err);
    } 
  });


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const [changeTagNum] = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (changeTagNum === 0) {
      res.status(404).json({ message: 'tag for ID is not found!' });
    } 
    
    else {
      res.json({ message: 'tag has been updated!' });
    }
  } 

  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json(tag);}
    catch (err){
      res.status(500).json(err);
    } 
  });


module.exports = router;

// {
//   "tag_name": "pops"
// }

//http://localhost:3000/api/tags/