<?php

namespace Router;

class Route
{
    private string $url;

    public function __construct(string $url, string $callback)
    {
        $this->url = $url;
    }
}