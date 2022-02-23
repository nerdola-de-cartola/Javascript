function factorial(base_number) {
    for (var factorial_multiple = base_number - 1; factorial_multiple !== 1; factorial_multiple -= 1) {
        base_number = base_number * factorial_multiple
    }
    return base_number
}
 
console.log(factorial(10));