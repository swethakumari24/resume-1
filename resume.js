function resume(){
    let firstname;
    firstname=document.getElementById('firstname').value;
    let middlename;
    middlename=document.getElementById('middlename').value;
    let lastname;
    lastname=document.getElementById('lastname').value;
    document.getElementById('Name').innerHTML=firstname+middlename+lastname;
    let EmailId;
    EmailId=document.getElementById('mail').value;
    document.getElementById('EmailId').innerHTML=EmailId;
    let DOB;
    DOB=document.getElementById('DateOfBirth').value;
    document.getElementById('DOB').innerHTML=DOB;
}