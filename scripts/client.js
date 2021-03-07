$( document ).ready( onReady );

let totalEmployees = []; //created totalEmployees array

function onReady(){
    $('#submitButton').on( 'click', addEmployee );
}

function addEmployee(){
    //create object from user inputs
    let inputEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $( '#idIn').val(),
        title: $( '#titleIn').val(),
        annualSalary: $('#salaryIn').val()
    }//end inputEmployee
    //empty
    $( '.inputInfo').val('');
    //push inputEmployee into totalEmployees array
    totalEmployees.push( inputEmployee );
    //update DOM
    displayEmployee(totalEmployees);
}

function displayEmployee(){
    console.log( 'in displayEmployee ');
    //target output by ID
    let el = $( '#table ');
    //empty
    el.empty();
    //loop thru employees array
    for( i=0; i<totalEmployees.length; i++ ){
        el.append(` <tr>
                    <th>${totalEmployees[i].firstName}</th>
                    <th>${totalEmployees[i].lastName}</th>
                    <th>${totalEmployees[i].id}</th>
                    <th>${totalEmployees[i].title}</th>
                    <th>${totalEmployees[i].annualSalary}</th>
                    <td><button>Delete</button></td>
                </tr>`);

    }//end for
}//end displayEmployees