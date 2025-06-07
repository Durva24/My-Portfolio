const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('home', { title: 'Home' }));
router.get('/about', (req, res) => res.render('about', { title: 'About Me' }));
router.get('/projects', (req, res) => res.render('projects', { title: 'Projects' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact' }));

module.exports = router;
