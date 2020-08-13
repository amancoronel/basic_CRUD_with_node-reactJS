const serveStatic = require('serve-static');
const path = require('path');
const express = require('express');
const cors = require('cors');

const redis = require('redis')
const session = require('express-session')

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()


module.exports = (app, dirname) => {

    app.set("views", path.join(dirname, "views"));
    app.set("view engine", "pug");
    app.set("view options", {layout : false});
    app.set('view cache', false);
    app.use(cors()); // Cross Origin
    app.use(express.json());
    app.use(
        session({
          store: new RedisStore({ client: redisClient }),
          secret: 'keyboard cat',
          resave: false,
        })
      )
    app.use(serveStatic(path.join(dirname, "/src")));
}