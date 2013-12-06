<?php
// Set your return content type
header('Content-type: application/json');

// Website url to open
if(isset($_GET['id'])) {
	$url = 'http://node.ux-republic.com/info-real/' . $_GET['id'] . '/';	
} else {    //http://json.localhost/info-real/1/
	$url = 'http://node.ux-republic.com/list-real';
}


// Get that website's content
$handle = fopen($url, "r");

// If there is something, read and return
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>