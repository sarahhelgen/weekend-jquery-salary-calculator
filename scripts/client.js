$( document ).ready (onReady );

let employeeInfo = [];

function onReady(){
    console.log( 'in JQ');
    $( '#addSubmitButton ').on( 'click ', addEmployee );
    //init display
    calculateMonthlyCosts();
    $( '#clickDeleteButton ').on( 'click', deleteEmployee );
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
    //calculate monthly costs
    calculateMonthlyCosts();
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

function calculateMonthlyCosts(){
    console.log( 'in calculateMonthlyCosts');
    //loop through employees array
    let monthlyCosts = 0;
    for( let i=0; i<employeeInfo.length; i++){
      //for each employee, add total of all salaries
        monthlyCosts += Number(employeeInfo[i].salary);
       //divide by 12 for monthly salary
       monthlyCosts /= 12; 
    }//end for
    //display monthly costs - if monthly costs >20000, turn the background red
  let el = $( '#totalMonthlyCost');
    el.empty();
    el.append( monthlyCosts );
    if( monthlyCosts >= 20000){
        $( '#totalMonthlyCost').css( "background-color", "red");
    }
} // end calculateMonthlyCosts

function deleteEmployee(){
    $(this).parent().parent().remove();

}//end deleteEmployee