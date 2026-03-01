//Find smallest of an array
function findSmallest(array)
{
    let small = array[0];
    for(let i=1; i<array.length; i++)
    {
        if(marks[i]<small){
            small = marks[i];
        }   
    }
    return small;
}
console.log(findSmallest([90,78,30,45,80]))