<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Users Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .action-links a { margin-right: 10px; }
        .form-container { margin-bottom: 20px; }
    </style>
</head>
<body>

    <h2>User Management</h2>

    <h3>Current Users</h3>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        
        <?php
        // 1. Include the database connection
        include 'db.php';
        
        // 2. Write the SQL query to get all users
        $sql = "SELECT id, name, email FROM users";
        $result = $conn->query($sql);
        
        // 3. Check if there are any results
        if ($result->num_rows > 0) {
            // 4. Loop through each row of data
            while($row = $result->fetch_assoc()) {
                // 5. Display the data in the table row
                echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["name"] . "</td>";
                echo "<td>" . $row["email"] . "</td>";
                echo "<td class='action-links'>";
                // We'll create these files next
                echo "<a href='update_form.php?id=" . $row["id"] . "'>Edit</a>";
                echo "<a href='delete.php?id=" . $row["id"] . "'>Delete</a>";
                echo "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No users found</td></tr>";
        }
        
        // 6. Close the database connection
        $conn->close();
        ?>
    </table>

</body>
</html>