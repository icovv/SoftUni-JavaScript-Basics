function solve(input){
    let command = input.shift();
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/g;
    let total = 0;
    while (command != `end of shift`){
        if(command.match(pattern)){
        let {name,product,count,price} = pattern.exec(command).groups;
        total += Number(count) * Number(price);
        console.log(`${name}: ${product} - ${(Number(price) * Number(count)).toFixed(2)}`)
        }
        command = input.shift();
    }
    console.log(`Total income: ${total.toFixed(2)}`)
}
// solve(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])
solve(['%InvalidName%<Croissant>|2|10.3$', '%Peter%<Gum>1.3$','%Maria%<Cola>|1|2.4','%Valid%<Valid>valid|10|valid20$', 'end of shift'])