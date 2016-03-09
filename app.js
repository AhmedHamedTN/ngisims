/**
 * Created by ahmed on 2/3/16.
 */
    var app=angular.module('ngisims', ['ngRoute','ngAnimate']);

//Our Routes go here
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'StudentController',
            templateUrl:'People.html'
        })
        .when('/Otherpeople',
        {
            controller: 'OtherStudentsController',
            templateUrl:'Otherpeople.html'
        })
        .otherwise({ redirectTo: '/' });
        });