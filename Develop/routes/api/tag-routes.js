const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({

      // be sure to include its associated Product data
      include: [{model: Product}, {model: ProductTag}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
      // find a single tag by its `id`
  const tagData = await Tag.findByPk(req.params.id, {

    // be sure to include its associated Product data
    include: [{model: Product}, {model: ProductTag}],
  });
  if (!tagData) {
    res.status(404).json({ message: 'Tag not found with matching id!'});
    return;
  }
  res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new tag
    const newTagData = await Tag.create({
      tag_name: req.body.tag_name,
      tag_id: req.body.tag_id,
    });
    res.status(200).json(newTagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // Tag.create(req.body)
  // .then((tag) => {
  //   if (req.body.tagIds.length) {
  //     const TagIdArr = req.body.tagIds.map((tag_id) => {
  //       return {
  //         tag_id: tag_id,
  //       }
  //     });
  //   }
  // });
  
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
