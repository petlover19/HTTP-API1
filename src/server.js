const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const onRequest = (request, response) => {
    console.log(request.url);

    switch (request.url) {
        case '/':
            htmlHandler.getIndex(request, response);
            break;
        case '/style.css':
            htmlHandler.getStyle(request, response);
            break;
        case '/success':
            responses.success(request, response);
            break;
        case '/badRequest':
            responses.badRequest(request, response);
            break;
        case '/unauthorized':
            responses.unauthorized(request, response);
            break;
        case '/forbidden':
            responses.forbidden(request, response);
            break;
        case '/internal':
            responses.internal(request, response);
            break;
        case '/notImplimented':
            responses.notImplimented(request, response);
            break;
        default:
            responses.notFound(request, response);
            break;
    }
};

http.createServer(onRequest).listen(port);

console.log(`listening on 127.0.0.1: ${port}`);