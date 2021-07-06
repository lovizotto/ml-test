export const getCurrency = (amount, currencyId) => amount.toLocaleString('arg', {
    style: 'currency', currency: currencyId
})
