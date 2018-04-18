<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Questions</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src='../api/questions.js'></script>

</head>
<body>          
                <% if (title.length > 0) { %>
                <% for (i=0; i< title.length; i++) { %>
                    <h1><%= title[i]%></h1>
                    <h2><%= content[i] %></h2>
                    <h3>By User: <%= userid[i] %></h3>
                    <h3>Category: <%= category[i] %></h3>
                    <h3>Date Posted: <%= posted_date[i] %></h3>
                    <br>
                <% } %>
                <% } %>

</body>
</html>