
<?php 
  
  header("Content-Type: application/octet-stream"); 
    
  $file = $_GET["file"]  . ".pdf"; 
    
  if ($file) { 
    header('Pragma: public');  // required
    header('Expires: 0');  // no cache
    header("Content-disposition: attachment; filename=".basename($file));
    header("Content-type: application/pdf");
    readfile($file);
    exit();
    
    }
  ?>