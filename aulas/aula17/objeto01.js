let amigo = {
    nome: `José`,
    sexo: `M`,
    peso: 86.4,
    engordar(p) {
        this.peso +=  p
        console.log('Engordou');
    },
}


console.log(typeof(amigo));
console.log(amigo);
console.log(`O ${amigo.nome} pesava ${amigo.peso}Kg`);
amigo.engordar(0.6)
console.log(`O ${amigo.nome} agora pesa ${amigo.peso}Kg`);