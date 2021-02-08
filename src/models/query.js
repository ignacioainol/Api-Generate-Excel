const { connecting } = require("./connect");

const getData = async () => {
    const connect = await connecting();

    const querySetSchema = 'set search_path to educacion;';
    await connect.query(querySetSchema);

    const query = `
            select
            nombre_fondo,
            ap_paterno_func,
            ap_materno_func,
            nombre_func,
            f.ficha,
            rut_func,
            ((select sum(monto_haber) from mes_contiene_haber inner join contrato using(cod_contrato) where cod_liquidacion = l.cod_liquidacion and cod_tipo_contrato in (select cod_tipo_contrato from tipo_contrato where cod_fondo=pf.cod_fondo) ) -
            (select sum(monto_descuento) from mes_contiene_descuento inner join contrato using(cod_contrato) where cod_liquidacion = l.cod_liquidacion and cod_tipo_contrato in (select cod_tipo_contrato from tipo_contrato where cod_fondo=pf.cod_fondo) ))::numeric(12,0) as liquido,
            case
            when forma_pago=1 then 'BANCO'
            else 'CHEQUE'
            end as forma_Pago
            from pre_fondos as pf, mes_liquidacion as l
            inner join funcionario as f on l.ficha=f.ficha
            where
            (select sum(monto_haber) from mes_contiene_haber
            left join contrato using(cod_contrato) where cod_liquidacion = l.cod_liquidacion and cod_tipo_contrato in (select cod_tipo_contrato from tipo_contrato where cod_fondo=pf.cod_fondo) ) -
            (select sum(monto_descuento) from mes_contiene_descuento left join contrato using(cod_contrato) where cod_liquidacion = l.cod_liquidacion and cod_tipo_contrato in (select cod_tipo_contrato from tipo_contrato where cod_fondo=pf.cod_fondo) )
            >0
            order by 1,8,2,3,4`;

    const result = await connect.query(query);
    connect.release();
    return result.rows;
}

module.exports = {
    getData
}
