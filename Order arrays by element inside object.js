// Problema:
  /// A questão era ordenar os valores de ADDOPTIONS e NOTES pelo campo DATE que estão dentro do objeto ANIMAL em ordem crescente / timeline

var animal = {'id': 1, 'nome': 'dog inglês', 'addoptions':  [{'date': '2020-04-16T17:23:47.578Z', 'user': 'lipão1'} , {'date': '2020-04-16T17:22:47.578Z', 'user': 'lipão2'}], 'notes': [{'note': 'nota 1', 'date': '2020-04-20T17:22:50:570T'}, {'note':'nota 2', 'date': '2020-04-20T17:20:50:570T'}]}
var { addoptions, notes, ...animal_sorted } = animal
var addoptions_sorted = addoptions.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1)
var notes_sorted = notes.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1)
animal_sorted.addoptions = addoptions_sorted
animal_sorted.notes = notes_sorted
console.log(animal_sorted)
