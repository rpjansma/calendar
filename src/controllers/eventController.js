"use strict";

const ValidationContract = require("../validation/contractValidators.js");
const repository = require("../repositories/eventRepository.js");
const errorResponse = require("../services/errorResponse");
const eventService = require("../services/eventService");
const authService = require("../services/authService");

exports.get = async (req, res, next) => {
  try {
    eventService.getAllEvents(res);
  } catch (error) {
    errorResponse.error500(res);
  }
};

exports.getById = async (req, res, next) => {
  try {
    eventService.getEventById(req.params.id, res);
  } catch (error) {
    errorResponse.error500(res);
  }
};

exports.post = async (req, res, next) => {
  eventService.validateEventData(req.body, res);

  try {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    eventService.createEvent(req.body, token, res);
  } catch (error) {
    errorResponse.error500(res);
  }
};

exports.put = async (req, res, next) => {
  eventService.validateEventData(req.body, res);

  try {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    eventService.updateEvent(req.params.id, req.body, token, res);
  } catch (error) {
    errorResponse.error500(res);
  }
};

exports.delete = async (req, res, next) => {
  try {
    eventService.deleteEventById(req.params.id, res);
  } catch (error) {
    errorResponse.error500(res);
  }
};
