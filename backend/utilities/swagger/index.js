import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Rest Api docs',
            version: '1.0.0'
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app) {
    //Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    //Docs in json format
    app.get('docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })

    console.log('Docs added at endpoint')
}

export default swaggerDocs