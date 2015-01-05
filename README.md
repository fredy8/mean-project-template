Directory Layout
----------------
```
Template/                       
|-- angular-app/                # Contains the angular application components
|   `-- controllers/
|   `-- css/
|   `-- directives/
|   `-- factories/
|   `-- filters/
|   `-- tests/
|       `-- e2e/                # End to end tests
|       `-- unit/               # Unit tests
|       `-- karma.conf.js       # Karma configuration for unit tests
|       `-- protractor.conf.js  # Protractor configuration for e2e tests
|-- api/                        # Contains the API components
|   `-- controllers/            # Contains modules which define the API functionality
|   `-- models/                 # DB models
|   `-- routes/                 # Contains route file which hook up routes with controllers
|       `-- main.js             # The main route, hooked up to /api/
|   `-- tests/
|       `-- e2e                 # API end to end tests (uses mocha)
|       `-- unit                # API unit tests (uses mocha)
|-- node_modules/               # external modules used in the application
|-- public/                     # Static files served
|   `-- bower_components/       # External libraries
|   `-- css/                    # App css (angular-app/css is bundled and minified to this directory, do NOT modify).
|   `-- img/
|   `-- js/                     # App js (angular-app is bundled and minified to this directory, do NOT modify).
|   `-- views/                  # Contains static html files include angular app views
|   `-- index.html              # Bootstraps the angular app and asynchronously fetches js scripts.
|-- server/                     # Server related functionality
|   `-- cluster-launcher.js     # Lanches the server using clusters to make use of multiple cores
|   `-- credentials.js          # Contains server credentials (e.g. db string, cookiesecrect, etc.)
|   `-- error-handlers.js       # Error routes for the server
|   `-- error-shutdown.js       # Gracefully shuts down the server when uncaught exceptions occur
|-- .bowerrc                    # Bower options
|-- .csslintrc                  # css linting options
|-- .jshintrc                   # js linting options
|-- bower.json                  # Bower packages definition (front-end third party libraries)
|-- Gruntfile.js                # Grunt tasks definition (task automation)
|-- package.json                # Specifies project properties and dependencies
|-- README.md
|-- server.js                   # Node server
```

Prerequisites
-------------

1. Install git:
  `brew install git` or http://git-scm.com/
2. Install node and npm:
  `brew install node` or http://nodejs.org/
3. Install mongodb
  `brew install mongodb` or http://docs.mongodb.org/manual/installation/
4. Create database directory
  `sudo mkdir /data/db`

Installing
----------

1. Clone the repository:

  ```
  git clone https://github.com/fredy8/mean-project-template.git [my_project_name]
  cd [my_project_name]
  ```
2. Install dependencies
  `npm install`

Running
-------

1. Start the database
  `sudo mongod`
2. Run the server
  `npm start`

Testing
-------
  `npm test` (the server must be running)

This will first lint all javascript and css files, then run the tests in these order:

1. API tests using mocha
2. angular unit tests using karma
3. angular e2e tests using protractor

Developing
----------

1. Start the server. (The server is automatically restarted when changes are detected).
2. Run the watch script:
  ```npm run watch```
   * Every time a file is modified it gets linted to find potential errors.
   * If there were no lint errors, the angular app is bundled and minified to be served statically.

Debugging
---------
### Backend
When the server is running, just go to http://localhost:8080/debug?port=5858.

### Frontend
In chrome, go to View -> Developer Tools

Deploying
---------
TO DO
