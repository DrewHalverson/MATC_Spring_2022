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
      $databaseConnection = mysqli_connect('itins3.madisoncollege.edu', 'ahalverson', 's2694082', 'Northwind');

      // Test the database connection
      if (!$databaseConnection)
      {
        exit("Connection failed. " . $databaseConnection);
      }
    ?>
    <h2>Customers</h2>
    <table border = '1'>
      <tr>
        <th>Customer ID</th>
        <th>Customer Name</th>
        <th>Contact Name</th>
      </tr>
      <?php
        // Create SQL Statement
        $sqlQuery = "SELECT CustomerID, CompanyName, ContactName FROM Customers";
        $resultSet = mysqli_query($databaseConnection, $sqlQuery);

        if (!$resultSet)
        {
          exit ("SQL Statement Error: " . $sqlQuery);
        }

        while ($row = mysqli_fetch_array($resultSet))
        {
          echo "<tr>";
          echo "<td>" . $row['CustomerID'] . "</td>";
          echo "<td>" . $row['CompanyName'] . "</td>";
          echo "<td>" . $row['ContactName'] . "</td>";
          echo "</tr>";
        }

        mysqli_close($databaseConnection);
      ?>
    </table>
  </body>
</html>