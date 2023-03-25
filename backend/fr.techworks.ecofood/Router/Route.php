<?php

namespace Router;

use Services\AuthTrait;

class Route
{
    use AuthTrait;

    private string $path;
    private mixed $callback;
    private string $prefix;
    private $matches;
    private array $params = [];
    private bool $isAuthenticated = true;
    private bool $beAuthenticated = false;

    public function __construct(string $path, mixed $callback)
    {
        $this->path = trim($path, '/');
        $this->callback = $callback;
    }

    public function call() {
        if ($this->beAuthenticated) {
            $this->isAuthenticated = $this->authenticate();
        }

        if (is_string($this->callback)) {
            $params = explode('.', $this->callback);
            
            if (isset($this->prefix)) {
                $controller = "\\Controllers\\" . $this->prefix . "\\" .  ucfirst($params[0]) .'Controller';
            } else {
                $controller = "Controllers\\" . ucfirst($params[0]) .'Controller';
            }

            $controller = new $controller();
            return call_user_func_array([$controller, $params[1]], $this->matches);
        } else {
            return call_user_func_array($this->callback, $this->matches);
        }
    }

    public function match($url)
    {
        if ($url === '/') {
            return true;
        }

        $url = trim($url, '/');
        $path = preg_replace_callback('/:([\w]+)/', [$this, 'paramMatch'], $this->path);
        $regex = "#^$path$#i";

        if (!preg_match($regex, $url, $matches)) {
            return false;
        }

        array_shift($matches);
        $this->matches = $matches;
        return true;
    }

    private function paramMatch($match) 
    {   
        if (!isset($this->params[$match[1]])) {
            return '(' . $this->params[$match[1]] . ')';
        }
        return '([^/]+)';
    }

    public function prefix($prefix) 
    {
        $this->prefix = ucfirst($prefix);
        return $this;
    }

    public function with($param, $regex) 
    {
        $this->params[$param] = str_replace('(', '(?:', $regex);
        return $this;
    }

    public function auth() 
    {
        $this->beAuthenticated = true;
        return $this;
    }
}