var express = require('express')
var path = require('path')
var compression = require('compression')

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './config/routes'

var app = express()

app.use(compression())
app.use(express.static(__dirname))

//send all requests to index.html so browserHistory in React Router works
app.get('*', function(req, res) {
	match({ routes: routes, location: req.url }, (err, redirect, props) => {
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message)
	    } else if (redirect) {

	      res.redirect(redirect.pathname + redirect.search)
	    } else if (props) {

	      const appHtml = renderToString(<RouterContext {...props}/>)
	      res.send(renderPage(appHtml))
	    } else {

	      res.status(404).send('Not Found')
	    }
	  })
})

function renderPage(appHtml){
	return `
		<!DOCTYPE html>
		<html lang="en">
		<meta charset="UTF-8">
		<title>Github Profile Viewer</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
		<div id="app">${appHtml}</div>
		<script src="bundle.js"></script>
	`
}



var PORT = process.env.PORT || 8080
app.listen(PORT, function(){
	console.log('Server running at localhost:'+PORT)
})