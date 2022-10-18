//external import
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

//internal import


//middleware
app.use(express.json());
app.use(cors());

