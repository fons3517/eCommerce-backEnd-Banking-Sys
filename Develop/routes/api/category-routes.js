const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const allCategories = await Category.findAll({

      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find  category by id
    const allCategories = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Product }],
    })
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }});

router.post('/', async (req, res) => {
  try {
    // find all categories
    const allCategories = await Category.create(req.body);
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update by category id
    const allCategories = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
