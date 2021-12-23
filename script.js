function sendEmail(e) {

  if ( e.range.columnStart == 8 && e.range.isChecked() ) { //execute only if column is 8 and value is checked

      //get data from sheet
    const rData = e.source.getActiveSheet().getRange(e.range.rowStart,1,1,8).getValues();
    let projectName = e.source.getActiveSheet().getRange(3, 2).getValues(); //get project name
    let transmittalNo = rData[0][2]; //get transmittal form number
    let issuedBy = rData[0][4]; //get issued by name
    let transmittalDoc = rData[0][5]; //get transmittal document link
    let softcopyDoc = rData[0][6]; //get softcopy drawing link
    
    // Protect range A1:B10, then remove all other users from the list of editors.
    var ss = e.source.getActiveSheet();
    var range = ss.getRange(e.range.rowStart,1,1,8);
    var protection = range.protect().setDescription('Protected Range'); //reference: https://developers.google.com/apps-script/reference/spreadsheet/protection

    // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
    // permission comes from a group, the script throws an exception upon removing the group.
    protection.removeEditors(protection.getEditors());
    if (protection.canDomainEdit()) {
      protection.setDomainEdit(false);
    }
    Logger.log("Range Protected" + e.user.getEmail());

      //write out message
    let msg = "Project Name: " + projectName + "\nTransmittal No: " + transmittalNo + "\nIssued by: " + issuedBy + "\nTransmittal Document: " + transmittalDoc + "\nDrawing Document: " + softcopyDoc;
    let controllerEmail = "";   //add email address here
    let subject = "Document Transmittal form Issued by" + issuedBy;
    Logger.log(msg);
    GmailApp.sendEmail(controllerEmail, subject, msg); //send email

  }

}
