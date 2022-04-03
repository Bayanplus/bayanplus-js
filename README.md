# Bayanplus JS

Frontend library written in Typescript for [Bayanplus](https://bayanplus.co) 

[![version](https://img.shields.io/npm/v/bayanplus-js)](https://www.npmjs.com/package/bayanplus-js)
[![downloads](https://img.shields.io/npm/dm/bayanplus-js)](https://www.npmjs.com/package/bayanplus-js)

## Features ✨
* You can use it with any frontend framework you want
* Very simple and light
* Fully typed
 
💡 Full Documentation [here](https://docs.bayanplus.co) 

## Install
To install the packages run in one of these commands 

`npm install bayanplus-js`

or with yarn

`yarn add bayanplus-js`

## Basic usage
```javascript
import bayanplus from 'bayanplus-js'

// first and most important initiliaze the app with the project id
// you can find the project id on https://bayanplus.co
// you only need to do this once
bayanplus.init({
    projectId: 'xxxxx'
})

// now you can track any event you want like
// you can track as many events you want on any file as long as you initiliazed the app
bayanplus.track('Buy Book')

```
