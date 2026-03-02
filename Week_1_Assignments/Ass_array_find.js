function searchelement(arr, element)
{
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i] == element)
        {
            return i;
        }
    }
    return "Not Found!";
}
console.log(searchelement([10,20,30,40,55,93,43], 93));
console.log(searchelement([10,33,45,20,22,1], 93));