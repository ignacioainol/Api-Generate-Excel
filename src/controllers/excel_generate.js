const ctrl = {};
const ExcelJS = require('exceljs');
const path = require('path');
const dataQuery = require('../models/query');

ctrl.index = async (req, res) => {
    try {
        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'Iggnaxios Hansen';
        const sheet = workbook.addWorksheet('My Sheet');
        const allData = await dataQuery.getData();

        sheet.columns = [
            { header: 'Nombre Fondo', key: 'nombre_fondo', width: 17 },
            { header: 'Ap Paterno', key: 'ap_paterno', width: 15 },
            { header: 'Ap Materno.', key: 'ap_materno', width: 15 },
            { header: 'Nombre Func.', key: 'nombre_func', width: 17 },
            { header: 'Ficha.', key: 'ficha', width: 17 },
            { header: 'Rut Func.', key: 'rut_func', width: 17 },
            { header: 'Liquido.', key: 'liquido', width: 17 },
            { header: 'Forma Pago.', key: 'forma_pago', width: 17 }
        ];

        allData.forEach((data) => {
            sheet.addRow({ nombre_fondo: data.nombre_fondo, ap_paterno: data.ap_paterno_func, ap_materno: data.ap_materno_func, nombre_func: data.nombre_func, ficha: data.ficha, rut_func: data.rut_func, liquido: data.liquido, forma_pago: data.forma_pago });
        })

        const fileName = "Informe.xlsx";
        workbook.xlsx.writeFile(fileName).then(() => {
        }).then(() => {
            const filePath = path.join(__dirname, '../../Informe.xlsx');
            res.download(filePath);
        }).catch(() => {
            console.log("something was wrong");
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

ctrl.testQuery = async (req, res) => {
    try {
        const data = await dataQuery.getData();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }

}

module.exports = ctrl;