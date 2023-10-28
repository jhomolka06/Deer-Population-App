# Deer-Population-App

Project Description: 
This is just a project showing whitetail deer populations by state. I used VS Code to do javascript & html. You can enter the state in how many deer are in it and it will put the data into a table. that can be cleared.

Live URL:
https://www.youtube.com/watch?v=XFbbAfcTk_4

Technologies Used:

In this project I used javascript, html, & bootstrap

Favorite Features:

It has the ability to fill out of form with the info you want and delete it.

Code Snippets:

```javascript
 // This is a function to add a new row to the table
    function addRow(state, population) {
        const row = document.createElement('tr');
        row.setAttribute('class','toDel')
        row.innerHTML = `
            <td>${state}</td>
            <td>${population}</td>
        `;
        tableBody.appendChild(row);
    }
```

Installation & Usage Instructions:

If you would like to make this project you will need to incorporate bootstrap, css, javascript, and html. To use this project right click in the html and click open in live sever.

Contributing Section:

If you would like to contribute to this project please email me.

License Section:

Terms and conditions need not apply 

Contact Info: 

jhomolka06@hotmail.com
