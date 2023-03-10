<?php

namespace Router;

class Router
{
    private string $url;
    private array $routes = [];

    public function __construct($url)
    {
        $this->url = $url;
    }

    public function get($path, $callback) {
        return $this->add($path, $callback, 'GET');
    }

    public function post($path, $callback) {
        return $this->add($path, $callback, 'POST');
    }

    public function put($path, $callback) {
        return $this->add($path, $callback, 'PUT');
    }

    public function delete($path, $callback) {
        return $this->add($path, $callback, 'DELETE');
    }

    public function options($path, $callback) {
        return $this->add($path, $callback, 'OPTIONS');
    }

    private function add($path, $callback, $method) {
        $route = new Route($path, $callback);
        $this->routes[$method][] = $route;
        return $route;
    }

    public function run()
    {
        if (!isset($this->routes[$_SERVER['REQUEST_METHOD']])) {
            throw new RouterException('REQUEST_METHOD does not exist');
        }

        foreach($this->routes[$_SERVER['REQUEST_METHOD']] as $route) {
            if ($route->match($this->url)) {
                return $route->call();
            }
        }
        
        throw new RouterException('No matching routes');
    }
}