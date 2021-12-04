// Cooldown en mensajes
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 3000);// 3sec es el cooldown para el siguiente comando;
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};