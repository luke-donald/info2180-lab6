<?php

// accept a term (keyword)
// respond with a value

$xmldata = '<?xml version="1.0" encoding="UTF-8"?>

<entries>
    <definition name = "definition" author = "Matthew">
        A statement of the exact meaning of a word, especially in a dictionary.
    </definition>
    
    <definition name = "bar" author = "Mark">
        A place that sells alcholic beverages
    </definition>

    <definition name = "ajax" author = "Luke">
        Technique which involves the use of javascript and xml (or JSON)
    </definition>
    
    <definition name = "html" author = "John">
        The standard markup language for creating web pages and web applications.
    </definition>

    <definition name = "css" author = "Moses">
        A style sheet language used for describing the presentation of a document written in a markup language.
    </definition>

    <definition name = "javascript" author = "Mary">
        A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.
    </definition>

    <definition name = "php" author = "Joseph">
        A server-side scripting language, and a powerful tool for making dynamic and interactive websites
    </definition>

</entries>';

header('Content-Type: text/xml');
$xmlOutput = new SimpleXMLElement($xmldata);
echo $xmlOutput->asXML();
