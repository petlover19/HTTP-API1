const respondJSON = (request, response, status, object) => {
    response.writeHead(status, { 'Content-Type': 'application.json' });
    response.write(JSON.stringify(object));
    response.end();
};

const success = (request, response) => {
    const responseJSON = {
        message: 'This is a sucessful response',
    };
    respondJSON(request, response, 200, responseJSON);
};
const badRequest = (request, response, params) => {
    const responseJSON = {
        message: 'This is a bad request',
    };
    // if the request does not contain a valid=true query parameter
    if (!params.valid || params.valid !== 'true') {
        // set our error message
        responseJSON.message = 'Missing valid query parameter set to true';
        // give the error a consistent id
        responseJSON.id = 'badRequest';
        // return our json with a 400 bad request code
        return respondJSON(request, response, 400, responseJSON);
    }

    // if the parameter is here, send json with a success status code
    return respondJSON(request, response, 200, responseJSON);
};
const unauthorized = (request, response, params) => {
    const responseJSON = {
        message: 'This is an unauthorized request ',
    };
    // if the request does not contain a loggedIn=true query parameter
    if (!params.loggedIn || params.loggedIn !== 'true') {
        // set our error message
        responseJSON.message = 'Missing login query parameter set to true';
        // give the error a consistent id
        responseJSON.id = 'unauthorized';
        // return our json with a 400 bad request code
        return respondJSON(request, response, 401, responseJSON);
    }

    // if the parameter is here, send json with a success status code
    return respondJSON(request, response, 200, responseJSON);
};
const forbidden = (request, response) => {
    const responseJSON = {
        message: 'You do not have access',
    };
    respondJSON(request, response, 403, responseJSON);
};
const internal = (request, response) => {
    const responseJSON = {
        message: 'Internal server error, something went wrong',
    };
    respondJSON(request, response, 500, responseJSON);
};
const notImplimented = (request, response) => {
    const responseJSON = {
        message: 'a get request has not been implimented',
    };
    respondJSON(request, response, 501, responseJSON);
};
const notFound = (request, response) => {
    const responseJSON = {
        message: '404 Not Found',
    };
    respondJSON(request, response, 404, responseJSON);
};

module.exports = {
    success,
    badRequest,
    internal,
    notImplimented,
    forbidden,
    unauthorized,
    notFound,
};