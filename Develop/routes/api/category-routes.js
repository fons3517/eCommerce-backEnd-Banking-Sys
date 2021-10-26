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
    // create new category
    const allCategories = await Category.create(req.body); //Confirm with Jeremy
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update by category id
    const allCategories = await Category.update(req.body, { //Confirm with Jeremy
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

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryDelete = await Category.destroy({
      where: {
        id: req.params.id
      },
    });
    if (!categoryDelete) {
      res.status(404).json({ message: 'No product found with matching id!!' });
      return;
    }
    res.status(200).json(categoryDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
