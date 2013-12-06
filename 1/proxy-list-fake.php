<?php
// Set your return content type
header('Content-type: application/json');

// Website url to open
if(isset($_GET['requestCode'])) {

	$url = 'http://node.ux-republic.com/details/' . $_GET['requestCode'];
		
} else {    
	$url = 'http://node.ux-republic.com/todolist';
	

}

if (isset($_GET['downloadCode'])) {
	
	$url = 'http://node.ux-republic.com/download/2';
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