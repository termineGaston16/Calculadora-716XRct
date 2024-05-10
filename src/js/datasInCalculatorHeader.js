/* obtener la fecha actual */
export const getFechaActual = () => {
    const fechaCompleta = new Date();
    const dia = fechaCompleta.getDate();
    const mes = fechaCompleta.getMonth();
    const anio = fechaCompleta.getFullYear();

    return `${dia}/${(mes + 1)}/${anio}`
}

/* obtener la hora actual */
export const getHoraActual = () => {
    const horaActual = new Date();
    const hora = horaActual.getHours();
    const minutos = horaActual.getMinutes() < 10 ? '0' + horaActual.getMinutes() : horaActual.getMinutes();
    const segundos = horaActual.getSeconds() < 10 ? '0' + horaActual.getSeconds() : horaActual.getSeconds();

    return `${hora}:${(minutos)}:${segundos}`
}