Travis Badge Here

Lab - 07 - CRUD

/lib/routes.js defines the following routes:

get '/', homePage
get '/list', listPage
post  '/list', createCategory
delete  '/list', deleteCategory
put '/list', editCategory

Each route calls a function with an airty of 2, a request and a response.  