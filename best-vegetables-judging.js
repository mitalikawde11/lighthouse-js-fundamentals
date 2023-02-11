const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const judgeVegetable = function (vegetables, metric) {
  let i;
  if(vegetables[metric] === vegetables.redness) {
    vegetables.sort((a, b) => a.redness - b.redness); 
    i = vegetables.length - 1;
    return vegetables[i].submitter;
  } 
}
const metric = 'redness';
console.log(judgeVegetable(vegetables, metric));
