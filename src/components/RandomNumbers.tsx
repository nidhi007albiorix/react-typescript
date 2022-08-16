
type RandomNumbersType={
    value:number,
  
}

type PositiveNumberProps= RandomNumbersType &{
    isPositive:Boolean
    isNegative?:never
    isZero?:never
}
type NegativeNumberProps= RandomNumbersType &{
    isNegative:Boolean
    isPositive?:never
    isZero?:never
}
type isZeroProps= RandomNumbersType &{
    isZero:Boolean
    isPositive?:never
    isNegative?:never
}
type RandomNumbersProps=PositiveNumberProps|NegativeNumberProps|isZeroProps
function RandomNumbers({value, isNegative,isPositive,isZero}:RandomNumbersProps) {
    return (
        <div>
            {value}{isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'zero'}
        </div>
    );
}

export default RandomNumbers;