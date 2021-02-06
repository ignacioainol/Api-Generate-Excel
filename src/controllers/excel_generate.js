const ctrl = {};
const ExcelJS = require('exceljs');
const path = require('path');

ctrl.index = (req, res) => {
    const ExcelJS = require('exceljs');
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Iggnaxios Hansen';
    const sheet = workbook.addWorksheet('My Sheet');

    sheet.columns = [
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'D.O.B.', key: 'dob', width: 10 }
    ];

    sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
    const fileName = "Informe2.xlsx";
    workbook.xlsx.writeFile(fileName).then(() => {
        console.warn(" waaa ok");
    });

    res.send("almost excel");

};

module.exports = ctrl;