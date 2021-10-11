<?php

$route = $_SERVER["REQUEST_URI"];
$routeParts = explode('/',$route);
$controllerName = $routeParts[4] ?? null;
if(!isset($controllerName) || empty($controllerName))
    die(json_encode(false));

$controllerFile = "controller/$controllerName.controller.php";
if(!file_exists($controllerFile)) 
    die(json_encode(false));

include_once $controllerFile;
array_splice($routeParts,0,5);
$controllerClass = ucfirst($controllerName)."Controller";
$controller = new $controllerClass($routeParts);

$controller->sendResponse();


