function factorial(base_number) {
    if (base_number == 1) {
        return 1
    } else {
        base_number = base_number * factorial(base_number-1)
        return base_number
    }
}

console.log(factorial(5));