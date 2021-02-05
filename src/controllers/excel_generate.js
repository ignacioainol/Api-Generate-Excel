const ctrl = {};
const ExcelJS = require('exceljs');
const path = require('path');

ctrl.index = async (req, res) => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('My Sheet');
    sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
    // add column headers
    sheet.columns = [
        { header: 'Package', key: 'package_name' },
        { header: 'Author', key: 'author_name' }
    ];

    // save workbook to disk
    workbook
        .xlsx
        .writeFile('Informe.xlsx')
        .then(() => {
            console.log("saved");
        })
        .catch((err) => {
            console.log("err", err);
        });

    const pathFile = path.join(__dirname, '../../Informe.xlsx');
    res.download(pathFile);
    //res.send("oh yeah controller");
};

module.exports = ctrl;