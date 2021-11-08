exports.handler = (event, context, callback) => {
    try {
        const { request } = event.Records[0].cf;


        if(request.method === 'OPTIONS') {
            return callback(null, {
                status: 404,
                statusDescription: 'Not Found',
                headers: []
            })
        }

        const regexIndexToSlash = /\/index.html$/i

        if (regexIndexToSlash.test(request.uri)) {
            return callback(null, {
                status: 301,
                statusDescription: 'Moved Permanently',
                headers: {
                    location: [{
                        key: 'location',
                        value: request.uri.replace(regexIndexToSlash, '/'),
                    }],
                }
            })
        }

        if( /\/$/.test(request.uri) ) {
            request.uri += 'index.html'
            return callback(null, request)
        }


        return callback(null, request)
    } catch(error) {
        console.error('==============================')
        console.error('ERROR')
        console.error(error)
        console.error('==============================')
    }
}