
// function which set up onclick method on each table td tags
//
function getTableValueByMouseClick(tableId){    
    let t = document.getElementById(tableId); // select table
    let trs = t.getElementsByTagName("tr"); //list of "tr" tags
    let tds = null;
    //let playerFire = true;
    for (var i=0; i<trs.length; i++)
    {         
        tds = trs[i].getElementsByTagName("td"); //list of "td" tags
        for (let n=0; n<tds.length;n++)
        {      
              tds[n].onclick = function() {  // set up function which responce for mouse click
                //code here
              }         
        }
    }  
  }
  ///
  //function check which radio was selected
  function printResult(){
    const stringToFprmat = document.getElementById("inputText").value;
    let radios = document.getElementsByName("outputType");
    let res = [];
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        if(radios[i].value === "vowel") { //check by value each radios
          //code here
        }else {
         //code here
        }  
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }    
  }
  //
  //Function sortr arrey of objects
  // array is sorted by band, in ascending order by default
  //https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  /*
  const singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
];
singers.sort(compareValues('band'));
  */
  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }