'use strict';

var countryService = angular.module('myApp.services', ['ngResource']);

countryService.factory('Countries', function($resource){
    return $resource('http://localhost:8080/Backend/rs/countries',{}, {
       findAll:{method:'GET', isArray:true} 
    })
});