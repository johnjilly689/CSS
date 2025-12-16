<?php
if (isset($_FILES['noticefiles'])){
    print_r($_FILES['noticefiles'])."<br>";
    echo $_FILES['noticefiles']['name'];
    echo "<br>";
    echo $_FILES['noticefiles']['type'];
    echo "<br>";
    echo $_FILES['noticefiles']['size']; // size in bytes
    echo "<br>";
    echo $_FILES['noticefiles']['tmp_name'];
    $filesname = $_FILES['noticefiles']['name'];
    $filetempname = $_FILES['noticefiles']['tmp_name'];
    move_uploaded_file($filetempname, "upload/".$filesname); // upload is a folder which is created in the same directory where this file is present, to store the uploaded files. and move_uploadedo_file takes two parameters, first is the temporary name of the file and second is the destination where we want to store the file joining the folder name and file name. in above e.g we used upload as folder name and $filesname as file name.$filesname is the variable which stores the original name of the file.instead of "upload/".$filesname we can also use "upload/".$_FILES['noticefiles']['name'].or you can give any other name to the file instead of original name. but when uploaded in database it is better to store the original name of the file.
}
if(isset($_POST['personname'])){
    echo $_POST['personname'];
}
?>