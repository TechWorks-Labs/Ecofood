<?php

namespace Autoload;

class Autoloader
{
    public static function register(): void
    {
        spl_autoload_register(array(__CLASS__, 'autoload')); 
    }

    public static function autoload(string $class): mixed
    {
        $class = str_replace('\\', '/', $class);
       
        $paths = array(
            implode(DS, [ROOT, 'Controllers/Api']),
            implode(DS, [ROOT, 'Controllers']),
            implode(DS, [ROOT, 'Models/Api']),
            implode(DS, [ROOT, 'Models']),
            implode(DS, [ROOT])
        );

        foreach($paths as $path) {
            $file = implode(DS, [$path, $class . '.php']);
            if (file_exists($file)) {
                require_once($file);
                return true;
            }
        }
        return false;
    }
}
