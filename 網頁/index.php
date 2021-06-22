<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>資料庫總覽</title>
    <link rel="stylesheet" href="./style/style.css">
</head>

<body>
    <div class="top">
        <div class="content">
            <button class="overview">資料庫總覽</button>
            <a href="predict.html"><button class="other">預測模型</button></a>
            <a href="chart.html"><button class="other">圖表呈現</button></a>
        </div>
    </div>
    <div class="under">
        <div class="content">
            <form  action="#" class="flexbox" method="POST">
                <?php 
                if ( isset($_POST["sub"]) ){
                    $focus = stripslashes($_POST["sub"]);
                }else{
                    $focus = "heart_disease";
                }
                if ($focus == "heart_disease") echo '<input class="topicwd focus" type="submit" name="sub" value="heart_disease">';
                else echo '<input class="topicwd unfocus" type="submit" name="sub" value="heart_disease">';
                if ($focus == "cardio_disease") echo '<input class="topicwd focus" type="submit" name="sub" value="cardio_disease">';
                else echo '<input class="topicwd unfocus" type="submit" name="sub" value="cardio_disease">';
                if ($focus == "stroke") echo '<input class="topicwd focus" type="submit" name="sub" value="stroke">';
                else echo '<input class="topicwd unfocus" type="submit" name="sub" value="stroke">';
            echo '</form><div class="tablebox">';
            if ( isset($_POST["sub"]) ) {
            $sql = "SELECT * FROM ".stripslashes($_POST["sub"]);
            $link = @mysqli_connect("localhost", "root", "") 
                    or die("無法開啟MySQL資料庫連接!<br/>");
            mysqli_select_db($link, "heart");  
            mysqli_query($link, 'SET NAMES utf8'); 
            $result = @mysqli_query($link, $sql); 

            if ( mysqli_errno($link) != 0 ) {
                echo "錯誤代碼: ".mysqli_errno($link)."<br/>";
                echo "錯誤訊息: ".mysqli_error($link)."<br/>";      
            } 
            else { 
                echo "<table>";
                echo "<tr>";
                while ( $meta = mysqli_fetch_field($result) )
                    echo "<th>".$meta->name."</th>";
                echo "</tr>";

                $total_fields = mysqli_num_fields($result);
                while ($rows = mysqli_fetch_array($result, MYSQLI_NUM)) {
                    echo "<tr>";
                    for ( $i = 0; $i < $total_fields; $i++ )
                        echo "<td>".$rows[$i]."</td>";
                    echo "</tr>";
                }
                echo "</table>";
                mysqli_free_result($result);
            }
            mysqli_close($link); 
            }
            else{
            $sql = "SELECT * FROM heart_disease";
            $link = @mysqli_connect("localhost", "root", "") 
            or die("無法開啟MySQL資料庫連接!<br/>");
            mysqli_select_db($link, "heart");  
            mysqli_query($link, 'SET NAMES utf8'); 
            $result = @mysqli_query($link, $sql); 

            if ( mysqli_errno($link) != 0 ) {
                echo "錯誤代碼: ".mysqli_errno($link)."<br/>";
                echo "錯誤訊息: ".mysqli_error($link)."<br/>";      
            } 
            else { 
                echo "<table>";
                echo "<tr>";
                while ( $meta = mysqli_fetch_field($result) )
                    echo "<th>".$meta->name."</th>";
                echo "</tr>";

                $total_fields = mysqli_num_fields($result);
                while ($rows = mysqli_fetch_array($result, MYSQLI_NUM)) {
                    echo "<tr>";
                    for ( $i = 0; $i < $total_fields; $i++ )
                        echo "<td>".$rows[$i]."</td>";
                    echo "</tr>";
                }
                echo "</table>";
                mysqli_free_result($result);
            }
            mysqli_close($link); 
            }
            ?>
            </div>
        </div>
    </div>
</body>
</html>