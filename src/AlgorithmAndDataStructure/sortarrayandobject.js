const sortArr = function () {
    var items = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 13 },
        { name: 'Zeros', value: 37 }
    ];

// sort by value
    items.sort(function (a, b) {
        return a.value - b.value;
    });

// sort by name
    items.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase

        //ascending order
        if (nameA < nameB) {
            return -1;
        }

        //descending order
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    const sortArray = function(arr, order){
        //ascending order sorting
        if(order === 'asc'){
            arr.sort(function(a,b){
                return a - b
            })
        }

        if(order === 'descending'){
            arr.sort(function(a,b){
                return b - a
            })
        }

        return arr
    }

    /*
    * Takes an array of object and sort by property ex. name, firstname, lastname etc...
    */
    const sortByFieldOrProperty = function (arr,property){

    }


    var stringArray = ['Blue', 'Humpback', 'Beluga'];
    var numericStringArray = ['80', '9', '700'];
    var numberArray = [40, 1, 5, 200];
    var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

    function compareNumbers(a, b) {
        return a - b;
    }

    console.log('stringArray:', stringArray.join());
    console.log('Sorted:', stringArray.sort());

    console.log('numberArray:', numberArray.join());
    console.log('Sorted without a compare function:', numberArray.sort());
    console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

    console.log('numericStringArray:', numericStringArray.join());
    console.log('Sorted without a compare function:', numericStringArray.sort());
    console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

    console.log('mixedNumericArray:', mixedNumericArray.join());
    console.log('Sorted without a compare function:', mixedNumericArray.sort());
    console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
}

export default sortArr
