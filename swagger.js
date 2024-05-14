const swaggerJsDoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const options={
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Gadget Website Apis',
          version: '1.0.0',
        },
        servers:[{
            url: 'http://192.168.29.53:8000',
        }]
    },
    apis:['swagger.js']
}

const swaggerSpec=swaggerJsDoc(options);


module.exports=function swaggerDocs(app){
    app.use('/api-docs',swaggerui.serve,swaggerui.setup(swaggerSpec))
}


//// **** Gadget Schemas *****
/**
 * @swagger
 *  components:
 *      securitySchemes:
 *          bearerAuth:
 *              type: http
 *              scheme: Bearer
 *              bearerFormat: JWT
 *      schemas:
 *          gadgettype:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  descriptions:
 *                      type: string
 *                  gadgetIcon: 
 *                      type: string
 *                      format: binary      
 *          gadgetcategory:
 *              type: object
 *              properties:
 *                  gadgetName:
 *                      type: string
 *                  image:
 *                      type: array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  description:
 *                      type: string
 *          addspecificationincategory:
 *              type: object
 *              properties:
 *                  id:
 *                      type: string
 *                  specificationName:
 *                      type: string
 *                  fields:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              key: 
 *                                  type: string
 *                              value:
 *                                  oneOf:
 *                                    - type: string
 *                                    - type: integer
 *                                    - type: boolean
 *                                    - type: float
 *                              type:
 *                                  type: string
 *                                  default: null
 *          findcategorydata:
 *              type: object
 *              properties:
 *                  gadgetName:
 *                      type: string
 */


/**
 * @swagger
 * /api/v1/gadget/add-gadget-type:
 *  post:
 *      summary: add gadget type
 *      description: add gadget type
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      $ref: '#components/schemas/gadgettype'
 *      responses:
 *          201:
 *              description: Gadget Type Add Successfully
 */


/**
 * @swagger
 * /api/v1/gadget/add-gadget-category:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: add gadget category
 *      description: add gadget category
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      $ref: '#components/schemas/gadgetcategory'
 *      responses:
 *          201:
 *              description: Gadget Category Add Successfully
 */


/**
 * @swagger
 * /api/v1/gadget/add-specification-incategory:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: add specifications in gadget category
 *      description: add specifications in gadget category
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/addspecificationincategory'
 *      responses:
 *          201:
 *              description: Specifications In Gadget Category Add Successfully
 */


/**
 * @swagger
 * /api/v1/gadget/filter/:
 *  get:
 *      security:
 *          - bearerAuth: []
 *      summary: show all filter data
 *      description: show all filter data
 *      parameters:
 *          - in: query
 *            name: id
 *            required: true
 *            description: filter data
 *            schema:
 *                type: string 
 *          - in: query
 *            name: brand
 *            required: false
 *            description: filter data
 *            schema:
 *                type: string 
 *          - in: query
 *            name: price
 *            required: false
 *            description: filter data
 *            schema:
 *                type: string 
 *      responses:
 *          200:
 *              description: all data
 */

/**
 * @swagger
 * /api/v1/gadget/related:
 *  get:
 *      security:
 *          - bearerAuth: []
 *      summary: show all releted category
 *      description: show all releted category
 *      parameters:
 *          - in: query
 *            name: id
 *            required: true
 *            description: filter data
 *            schema:
 *                type: string 
 *      responses:
 *          200:
 *              description: all data
 */


/**
 * @swagger
 * /api/v1/gadget/find-gadget-category:
 *  get:
 *      security:
 *          - bearerAuth: []
 *      summary: show all releted category data
 *      description: show all releted category data
 *      parameters:
 *          - in: query
 *            name: gadgetName
 *            required: true
 *            description: data
 *            schema:
 *                type: string 
 *      responses:
 *          200:
 *              description: all data
 */


// ***** seller schemas *****
/**
 * @swagger
 *  components:
 *      schemas:  
 *          signupseller:
 *              type: object
 *              properties:
 *                  sellerName:
 *                      type: string
 *                  email:
 *                      type: string    
 *                  password:
 *                      type: string
 *                  mobileNo:
 *                      type: string     
 *          signinseller:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string        
 */


/**
 * @swagger
 * /api/v1/seller/seller-signup:
 *  post:
 *      summary: signup seller
 *      description: signup seller
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/signupseller'
 *      responses:
 *          201:
 *              description: Seller Added
 */

/**
 * @swagger
 * /api/v1/seller/seller-signin:
 *  post:
 *      summary: signin seller
 *      description: signin seller
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/signinseller'
 *      responses:
 *          200:
 *              description: seller login
 */



////***** User Schema *****
/**
 * @swagger
 *  components:
 *      schemas:  
 *          signupuser:
 *              type: object
 *              properties:
 *                  userName:
 *                      type: string
 *                  email:
 *                      type: string    
 *                  password:
 *                      type: string 
 *          signinuser:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string   
 *          createuser:
 *              type: object
 *              properties:
 *                  userName:
 *                      type: string
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string     
 */


/**
 * @swagger
 * /api/v1/auth/sign-up:
 *  post:
 *      summary: user signup
 *      description: user signup
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/signupuser'
 *      responses:
 *          201:
 *              description: User Registration Successfully
 */

/**
 * @swagger
 * /api/v1/auth/sign-in:
 *  post:
 *      summary: login user
 *      description: login user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/signinuser'
 *      responses:
 *          200:
 *              description: User Login Successfully
 */

/**
 * @swagger
 * /api/v1/auth/create-user:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: create user by super admin
 *      description: create user by super admin
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/createuser'
 *      responses:
 *          201:
 *              description: User Created Successfully
 */


///// ***** Review Schema ***** 

/**
 * @swagger
 *  components:
 *      schemas:  
 *          addreview:
 *              type: object
 *              properties:
 *                  categoryId:
 *                      type: string  
 *                  rating:
 *                      type: number
 *                  description:
 *                      type: string          
 */

/**
 * @swagger
 * /api/v1/review/add-review:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: give review for perticular gadget category
 *      description: give review for perticular gadget category
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/addreview'
 *      responses:
 *          201:
 *              description: Review Added Successfully
 */


///// ***** Role Schema *****
/**
 * @swagger
 *  components:
 *      securitySchemes:
 *          bearerAuth:
 *              type: http
 *              scheme: Bearer
 *              bearerFormat: JWT
 *      schemas:
 *          addrole:
 *              type: object
 *              properties:
 *                  role:
 *                      type: string
 *                  permissions:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              name: 
 *                                  type: string
 *                              route:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *          updaterole:
 *              type: object
 *              properties:
 *                  permissions:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              name: 
 *                                  type: string
 *                              route:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *          deletepermission:
 *              type: object
 *              properties:
 *                  permissionName:
 *                      type: string
 *                  route:
 *                      type: array
 *                      items:
 *                          type: string
 */


/**
 * @swagger
 * /api/v1/role/add-role:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: add role and permissions
 *      description: add role and permissions
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/addrole'
 *      responses:
 *          201:
 *              description: Role And Permissions Add Successfully
 */

/**
 * @swagger
 * /api/v1/role/getall-role:
 *  get:
 *      security:
 *          - bearerAuth: []
 *      summary: show all role and permission data
 *      description: show all role and permission data
 *      responses:
 *          200:
 *              description: all data
 */

/**
 * @swagger
 * /api/v1/role/getperticular-role/{id}:
 *  get:
 *      security:
 *          - bearerAuth: []
 *      summary: show perticular role data
 *      description: show perticular role data
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Search role
 *            schema:
 *                type: string 
 *      responses:
 *          200:
 *              description: role data
 */

/**
 * @swagger
 * /api/v1/role/update-role/{id}:
 *  put:
 *      security:
 *          - bearerAuth: []
 *      summary: update role data
 *      description: update role data
 *      parameters:
 *          - in: path
 *            name: id
 *            description: update role
 *            schema:
 *                type: string 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/updaterole'
 *      responses:
 *          200:
 *              description: updated role data
 */

/**
 * @swagger
 * /api/v1/role/delete-permission/{id}:
 *  delete:
 *      security:
 *          - bearerAuth: []
 *      summary: delete any permission of role data
 *      description: delete any permission of role data
 *      parameters:
 *          - in: path
 *            name: id
 *            description: delete permission
 *            schema:
 *                type: string 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/deletepermission'
 *      responses:
 *          200:
 *              description: delete permission
 */

/**
 * @swagger
 * /api/v1/role/delete-role/{id}:
 *  delete:
 *      security:
 *          - bearerAuth: []
 *      summary: delete any role data
 *      description: delete any role data
 *      parameters:
 *          - in: path
 *            name: id
 *            description: delete role
 *            schema:
 *                type: string 
 *      responses:
 *          200:
 *              description: delete role
 */