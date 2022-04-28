<!DOCTYPE HTML>
<html>
  <head>
    <meta charset = "utf-8"/>
    <title>Northwind Database - itins3</title>
  </head>
  <body>
    <h1>Northwind Database - Customers Table</h1>
    <hr/>
    <?php

      // Connect to itins3 database
      $databaseConnection = mysqli_connect('itins3.madisoncollege.edu', 'ahalverson', 's2694082', 'ahalverson');

      // Test the database connection
      if (!$databaseConnection)
      {
        exit("Connection failed. " . $databaseConnection);
      }
    ?>
    <h2>Customers</h2>
    <table border = '1'>
      <tr>
        <th>Animal ID</th>
        <th>Animal Name</th>
      </tr>
      <?php
        // Create SQL Statement
        $sqlQuery = "SELECT AnimalID, AnimalName FROM Animals";
        $resultSet = mysqli_query($databaseConnection, $sqlQuery);

        if (!$resultSet)
        {
          exit ("SQL Statement Error: " . $sqlQuery);
        }

        while ($row = mysqli_fetch_array($resultSet))
        {
          echo "<tr>";
          echo "<td>" . $row['AnimalID'] . "</td>";
          echo "<td>" . $row['AnimalName'] . "</td>";
          echo "</tr>";
        }

        mysqli_close($databaseConnection);
      ?>
    </table>
  </body>
</html>