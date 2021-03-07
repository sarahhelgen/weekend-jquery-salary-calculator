$( document ).ready (onReady );

let employeeInfo = [];

function onReady(){
    console.log( 'in JQ');
    $( '#addSubmitButton ').on( 'click ', addEmployee );
}
//end onReady

function addEmployee(){
    console.log( 'in addEmployee ');
    //create object with user input
    let newEmployees = {
        firstName: $( '#firstNameIn').val(),
        lastName: $( '#lastNameIn' ).val(),
        id: $( '#idIn').val(),
        title: $( '#titleIn').val(),
        salary: $( '#salaryIn').val()
    }//end newEmployees
    //push the object into array
    employeeInfo.push ( newEmployees );
    //update DOM
    displayEmployees();
    //empty text input
    $( '#firstNameIn').val('');
    $( '#lastNameIn' ).val( '');
    $( '#idIn').val( '');
    $( '#titleIn').val( '');
    $( '#salaryIn').val( '');

}//end addEmployee

function displayEmployees(){
console.log( 'in displayEmployees ');
//target table by id
let el = $( '#employeeTable');
//empty table
el.empty();
//loop thru array
for( let i =0; i<employeeInfo.length; i++){
    el.append(`<th>${employeeInfo[i].firstName}</th>
        <th>${employeeInfo[i].lastName}</th>
        <th>${employeeInfo[i].id}</th>
        <th>${employeeInfo[i].title}</th>
        <th>${employeeInfo[i].salary}</th>
        <td>
            <button>Delete</button>
        </td>`);
}//end for
//append each item to DOM
}//end displayEmployees

