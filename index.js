// This will wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Define an array to store the deer population data
    const deerData = [];

    // This gets references to the form and table elements
    const form = document.getElementById('deerForm');
    const tableBody = document.getElementById('deerTableBody');
    const resetButton = document.getElementById('resetForm'); // Get the reset button

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

    // This is a event listener 
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // This gets values from form inputs
        const stateInput = document.getElementById('stateInput');
        const populationInput = document.getElementById('populationInput');

        const state = stateInput.value.trim();
        const population = populationInput.value.trim();

        // This will check if both fields are filled
        if (state === '' || population === '') {
            alert('Please fill out both fields.');
            return;
        }

        // This will add the data to the array and the table
        deerData.push({ state, population });
        addRow(state, population);

        // This will clear the form
        stateInput.value = '';
        populationInput.value = '';
    });

    // Event listener for reset button click
    resetButton.addEventListener('click' , function () {
        //Clears the table 
        tableBody.innerHTML = '';
        //Clears the population data 
        deerData.length = 0;
    })

    //This will insert content to the table with start off data
    initialData.forEach(({ state, population }) => {
        deerData.push({ state, population });
        addRow(state, population);
    });
});



