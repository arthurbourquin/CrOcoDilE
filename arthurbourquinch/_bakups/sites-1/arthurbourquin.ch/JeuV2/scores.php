<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $score = $_POST['score'];
	
  	$db = new SQLite3('mysqlitedb.db');

  	$sql = "CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    score INTEGER NOT NULL
	)";

	if ($db->exec($sql)) {
    	echo "Table 'scores' created successfully.";
	} else {
   		echo "Error creating table: " . $db->lastErrorMsg();
	}
  
  	// Prepare an SQL statement for insertion
    $stmt = $db->prepare('INSERT INTO scores (name, score) VALUES (:name, :score)');
    $stmt->bindValue(':name', $name, SQLITE3_TEXT);
    $stmt->bindValue(':score', $score, SQLITE3_INTEGER);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Score submitted successfully.";
    } else {
        echo "Error submitting score: " . $db->lastErrorMsg();
    }

    // Close the database connection
    $db->close();
}
?>