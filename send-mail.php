<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $brand = htmlspecialchars($_POST['brand']);
    $model = htmlspecialchars($_POST['model']);
    $year = htmlspecialchars($_POST['year']);
    $budget = htmlspecialchars($_POST['budget']);
    $comment = htmlspecialchars($_POST['comment']);

    $to = "autostability@bk.ru"; 
    $subject = "Новая заявка с формы";
    $headers = "Content-Type: text/html; charset=UTF-8\r\n";

    $message = "
        <h2>Новая заявка с формы</h2>
        <p><strong>Имя:</strong> $name</p>
        <p><strong>Телефон:</strong> $phone</p>
        <p><strong>Марка:</strong> $brand</p>
        <p><strong>Модель:</strong> $model</p>
        <p><strong>Год выпуска:</strong> $year</p>
        <p><strong>Бюджет:</strong> $budget</p>
        <p><strong>Комментарий:</strong> $comment</p>
    ";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    http_response_code(405); 
    echo "Метод не поддерживается";
}
?>
