import { List, LoginInDao } from "../dao";
// var chatgpt = require("chatgpt");
var express = require("express");
//import express from "express";
//import { ChatGPTAPI } from "chatgpt";
var router = express.Router();
// var ChatGPTAPI = chatgpt.ChatGPTAPI;
var request = require("request");

//const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

router.get("/loginIn", function (req, res, next) {
  LoginInDao(req, res);
});

router.get("/list", function (req, res, next) {
  List(req, res);
});

/* GET home page. */
router.get("*", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export default router;
