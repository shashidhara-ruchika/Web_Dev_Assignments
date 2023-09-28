//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

count = 1;

// On Page Load
function onloadFunction() {
  // Insert Name & NU ID
  var heading = document.createElement("h1");
  heading.textContent = "Ruchika Shashidhara - 002245068";
  heading.style.textAlign = "center";
  var body = document.body;
  body.insertBefore(heading, body.firstChild);

  // Event listener for "Add New Student" button
  var addButton = document.getElementById("add");
  addButton.addEventListener("click", addNewRecord);

  // Event listener for "expand button" dropDown img
  // Toggle View onClick: Expanded Table should not load until drop down arrow img is clicked
  document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("expand-button")) {
      var trParent = event.target.closest("tr");
      var trNext = trParent.nextElementSibling;
      trNext.classList.toggle("hidden");
    }
  });
}

// Add New Student Record
function addNewRecord() {
  try {
    var table = document.getElementById("myTable");
    var tbodyRef = document.getElementsByTagName("tbody")[0];
    var studentName =
      table.firstElementChild?.lastElementChild?.previousElementSibling
        ?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";
    var lastIndex = studentName.split(" ")[1];

    // Add New Student Table Row
    var trNode1 = document.createElement("tr");

    var trCheckBoxCell = document.createElement("td");
    trCheckBoxCell.innerHTML =
      '<input type="checkbox" onClick="onCheckBoxClick(this)"/><br /><br />';

    var trDownImg = document.createElement("img");
    trDownImg.src = "down.png";
    trDownImg.style.width = "25px";
    trDownImg.className = "expand-button";

    trCheckBoxCell.appendChild(trDownImg);

    var trStudentCell = document.createElement("td");
    trStudentCell.innerHTML = "Student " + (parseInt(lastIndex) + 1);

    var trTeacherCell = document.createElement("td");
    trTeacherCell.innerHTML = "Teacher " + (parseInt(lastIndex) + 1);

    var trApprovedCell = document.createElement("td");
    trApprovedCell.innerHTML = "Approved";

    var trFallCell = document.createElement("td");
    trFallCell.innerHTML = "Fall";

    var trTACell = document.createElement("td");
    trTACell.innerHTML = "TA";

    var trBudgetCell = document.createElement("td");
    trBudgetCell.innerHTML = "12345";

    var trPercentageCell = document.createElement("td");
    trPercentageCell.innerHTML = "100%";

    trNode1.appendChild(trCheckBoxCell);
    trNode1.appendChild(trStudentCell);
    trNode1.appendChild(trTeacherCell);
    trNode1.appendChild(trApprovedCell);
    trNode1.appendChild(trFallCell);
    trNode1.appendChild(trTACell);
    trNode1.appendChild(trBudgetCell);
    trNode1.appendChild(trPercentageCell);

    // Add Expanded Row for Newly Added Student Row
    var trNode2 = document.createElement("tr");
    trNode2.className = "dropDownTextArea hidden";

    var trDropDownTextArea = document.createElement("td");
    trDropDownTextArea.colSpan = "8";
    trDropDownTextArea.innerHTML =
      "Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";

    trNode2.appendChild(trDropDownTextArea);

    // Append Both Nodes to tbody
    tbodyRef.appendChild(trNode1);
    tbodyRef.appendChild(trNode2);
  } catch (error) {
    alert(error);
  } finally {
    alert(trStudentCell.innerHTML + " Record is added successfully");
  }
}

// On Click Check Box functionalities:
// Enable Submit Selected Awards button
// Toggle Delete Column
// Toggle Edit Column
function onCheckBoxClick(checkbox) {
  var table = document.getElementById("myTable");
  var headerRef = table.firstElementChild.firstElementChild;

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  var submitButtonRef = document.getElementById("button");

  // True if Atleast One checkbox is Selected
  var anyCheckboxChecked = Array.from(checkboxes).some(function (cb) {
    return cb.checked;
  });

  // If any Checkbox is Selected
  if (anyCheckboxChecked) {
    // Enable Submit Selected Awards Button
    submitButtonRef.disabled = false;

    // If any Delete Button is not already present, add Delete & Edit Columns
    if (!document.getElementById("thDelete")) {
      // Add Delete Column
      var thDelete = document.createElement("th");
      thDelete.innerHTML = "DELETE";
      thDelete.id = "thDelete";
      headerRef.appendChild(thDelete);
      // Add Edit Column
      var thEdit = document.createElement("th");
      thEdit.innerHTML = "EDIT";
      thEdit.id = "thEdit";
      headerRef.appendChild(thEdit);
    }
  } else {
    // If any Checkbox is not Selected
    // Remove Delete Column, Remove Edit Column, Disable Submit Selected Awards Button
    removeDeleteEditColumnsDisableSubmitButton();
  }

  var rowSelect = checkbox.parentElement.parentElement;
  // On selecting given row's checkbox
  if (checkbox.checked) {
    // Set Row's Background Color as Yellow
    rowSelect.style.backgroundColor = "Yellow";
    
    // Add Delete Button
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleted");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick = "deleteRow(this)"> Delete </button>';
    rowSelect.appendChild(deleteButton);

    // Add Edit Button
    var editButton = document.createElement("td");
    editButton.setAttribute("id", "edited");
    editButton.innerHTML =
      '<button id="edit" type="button" onclick = "editRow(this)"> Edit </button>';
    rowSelect.appendChild(editButton);

  } else { // On deselecting given row's checkbox
    // Reset Row's Background Color to White
    rowSelect.style.backgroundColor = "White";
    // Remove Edit Button
    rowSelect.deleteCell(9);
    // Remove Delete Button
    rowSelect.deleteCell(8);
  }
}

// On click Submit Selected Awards Button
function submitAwards() {
  alert("Submitted Selected Student Records");
}

// Delete Student Record
function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement;
  // Delete Expanded Row for Selected Student Row
  document.getElementById("myTable").deleteRow(tr.rowIndex + 1);
  // Delete Row for Selected Student Row
  document.getElementById("myTable").deleteRow(tr.rowIndex);

  count--;

  // If any Delete button is not present, 
  // Remove Delete Column, Remove Edit Column, Disable Submit Selected Awards Button
  if (!document.getElementById("delete")) {
    removeDeleteEditColumnsDisableSubmitButton();
  }

  var studentRef =
    rowObject.parentElement.parentElement.firstElementChild.nextElementSibling;
  alert(studentRef.innerHTML + " Record deleted successfully");
}

// Edit Student Record
function editRow(rowObject) {
  var studentRef =
    rowObject.parentElement.parentElement.firstElementChild.nextElementSibling;
  var editDeatils = prompt("Edit details of " + studentRef.innerHTML);
  if (editDeatils != null) {
    alert(
      studentRef.innerHTML + " data: " + editDeatils + " is updated succesfully"
    );
  }
}

// Remove Delete Column, Remove Edit Column, Disable Submit Selected Awards Button
function removeDeleteEditColumnsDisableSubmitButton() {
  var table = document.getElementById("myTable");
  var headerRef = table.firstElementChild.firstElementChild;
    // Remove Delete Column
    headerRef.removeChild(document.getElementById("thDelete"));
    // Remove Edit Column
    headerRef.removeChild(document.getElementById("thEdit"));
    // Disable Submit Selected Awards Button
    var submitButtonRef = document.getElementById("button");
    submitButtonRef.disabled = true;
}
