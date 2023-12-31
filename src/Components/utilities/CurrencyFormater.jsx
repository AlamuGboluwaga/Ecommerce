


export const CurrencyFormater=({number})=>{

    const CURRENCY_FORMATER = new Intl.NumberFormat(undefined,{currency:"EUR",style:"currency"})

    
    return(
        <>
{CURRENCY_FORMATER.format(number)}
        </>
    )
}