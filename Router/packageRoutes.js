const express = require('express');
const packageController = require('../Controller/packageController.js');
const { isAuth ,isAdmin } = require('../Util/auth');


const router = express.Router();

// Auth routes *****************************************************************
router.get('/web',packageController.getAllWebPackage);

  router
  .route('/')
  .get(packageController.getAllPackage)
  .post(isAdmin,packageController.createPackage)
  router
  .route('/:id')
  .get(packageController.getPackageById)
  .delete(isAdmin,packageController.deletePackage)
  .patch(isAdmin,packageController.updatePackage)

module.exports = router;