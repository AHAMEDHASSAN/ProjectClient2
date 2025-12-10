function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'First Name',
        'Last Name',
        'Full Name',
        'Phone',
        'Email',
        'City',
        'Area to Cover', // Added Area to Cover
        'Property Type',
        'Flooring Type',
        'When to Begin',
        'Budget Range',
        'Message'
      ]);
    }
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.fullName || '',
      data.phone || '',
      data.email || '',
      data.city || '',
      data.areaToCover || '', // Added Area to Cover
      data.propertyType || '',
      data.flooringType || '',
      data.whenToBegin || '',
      data.budgetRange || '',
      data.message || ''
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Google Apps Script is running!');
}
