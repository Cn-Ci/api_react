<?php

$entryFolder = '/developper/api_react/api/api/';
$fullRoute = $_SERVER["REQUEST_URI"];
$route = str_replace($entryFolder,'',$fullRoute);
$routeParts = explode('/',$route);
$controllerName = array_shift($routeParts);
if(!isset($controllerName) || empty($controllerName))
    die(json_encode(false));

$controllerFile = "controller/$controllerName.controller.php";
if(!file_exists($controllerFile)) 
    die(json_encode(false));

include_once $controllerFile;
$controllerClass = ucfirst($controllerName)."Controller";
$controller = new $controllerClass($routeParts);

$controller->sendResponse();


