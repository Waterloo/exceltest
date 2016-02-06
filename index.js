var parseXlsx = require('excel');

parseXlsx('spreadsheet.xlsx', function (err, data) {
    if (err) throw err;
    // data is an array of arrays

    console.log(data);
});