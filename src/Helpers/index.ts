export const formatCurrency = (num: number) => {
    return "$" + Number(num.toFixed(1).toLocaleString() + " ");
}
