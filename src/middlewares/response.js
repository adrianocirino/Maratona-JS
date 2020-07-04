const { getMessage } = require('../helpers/messages')

const TYPE_JSON = 'application/json'
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401; 
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const jsonOK = function(data, msg, metaData)  {

    const status = STATUS_CODE_OK;
    
    msg = msg ? msg : getMessage('response.json_ok');
    metaData = (metaData) ? metaData : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ msg, data, metaData, status: status });
}

const jsonBadRequest = function(data, msg, metaData)  {

    const status = STATUS_CODE_BAD_REQUEST;

    msg = (msg) ? msg : getMessage('response.json_bad_request');
    metaData = (metaData) ? metaData : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ msg, data, metaData, status: status});
}

const jsonUnauthorized = function(data, msg, metaData)  {

    const status = STATUS_CODE_UNAUTHORIZED;

    msg = (msg) ? msg : getMessage('response.json_unauthorized');
    metaData = (metaData) ? metaData : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ msg, data, metaData, status: status});
}

const jsonNotFound = function(data, msg, metaData)  {

    const status = STATUS_CODE_NOT_FOUND;

    msg = (msg) ? msg : getMessage('response.json_not_found');
    metaData = (metaData) ? metaData : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ msg, data, metaData, status: status});
}
const jsonServerError = function(data, msg, metaData)  {

    const status = STATUS_CODE_SERVER_ERROR;

    msg = (msg) ? msg : getMessage('response.json_server_error');
    metaData = (metaData) ? metaData : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ msg, data, metaData, status: status});
}

const responde = (req, res, next) => {
    
    res.jsonOK = jsonOK;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonUnauthorized = jsonUnauthorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerError = jsonServerError;

    next();
};

module.exports = responde;