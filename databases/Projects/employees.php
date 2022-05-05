<!DOCTYPE HTML>
<html>
  <head>
    <meta charset = "utf-8"/>
    <title>ahalverson Database - itins3</title>
  </head>
  <body>
    <h1>ahalverson Database - EMPLOYEE Table</h1>
    <hr/>
    <?php
    
      // Connect to itins3 database
      // use your username as the second parameter instead of crice
      // use your password, instead of the constant DB_PASSWORD, it will be something like
      // 's1234567'
      $databaseConnection = mysqli_connect('itins3.madisoncollege.edu', 'ahalverson', s2694082, 'ahalverson');
     
      // Test the database connection
      if (!$databaseConnection)
      {
        exit("Connection failed. " . $databaseConnection);
      }
    ?>
    <h2>Employees</h2>
    <table border = '1'>
      <tr>
        <th>Employee Number</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      <?php
        // Create SQL Statement
        $sqlQuery = "SELECT EmployeeNumber, FirstName, LastName, Email from EMPLOYEE;";
        $resultSet = mysqli_query($databaseConnection, $sqlQuery);

        if (!$resultSet)
        {
          exit ("SQL Statement Error: " . $sqlQuery);
        }

        while ($row = mysqli_fetch_array($resultSet))
        {
          echo "<tr>";
          echo "<td>" . $row['EmployeeNumber'] . "</td>";
          echo "<td>" . $row['FirstName'] . "</td>";
          echo "<td>" . $row['LastName'] . "</td>";
          echo "<td>" . $row['Email'] . "</td>";
          echo "</tr>";
        }

        mysqli_close($databaseConnection);
      ?>
    </table>
  </body>
</html>