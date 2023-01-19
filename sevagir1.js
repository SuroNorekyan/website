// function myFunction(){
//     const inqy = document.getElementById('d1')
//     const val = document.getElementById('d1').innerHTML
//    inqy.append(" klr")
//     alert(val)

// }

// let sum = (a,b) => a+b;

// let sum1 = function(a,b){
//     console.log("Sum is: ")
//     let aPb = a+b
//     const res = a+b >10 ? "a+b is greater than 10. a + b is: " + aPb : "a+b is smaller than 10. a+b is" + aPb 
//     return res
// }

// let checkType = function(a){
//      //let res = (typeof a == 'number') ? console.log("a is a number") : "a is not a number"
//      let res = (typeof a == 'number') ? "a is a number" : "a is not a number"
//      return res
// }
// let CTArrow = (a) => (typeof a == 'number') ? "a is a number" : "a is not a number"

// let height = (height) => (height !== undefined && height !== null) ? height : 100; //height ?? 100

// function setUser(name,surname,height){
//     function printInner(){
//         console.log(this.name + " " + this.surname + " " + this.height)
//     }
//     return{
//         name: name,
//         surname: surname,
//         height: height,
//     }
    
   
// }
//  function printUser(user){
//         console.log(user.name + " " + user.surname + " " + user.height)
//     }

    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
      };

      let user = {
        name: "Andrew",
        surname:"Frey",
        height: 180,
      }

    let keys = Object.keys(prices)
    console.log(keys)

    let values = Object.values(prices)
    console.log(values)

    let entries = Object.entries(prices)
    console.log(entries)

    let sumVal = function(prices){
        let sum1 = 0;
        for(let gin of Object.values(prices)){
            sum1 += gin
        }
        return sum1;
    } 

    let klir = function(o){
        let balniq = Object.keys(o)
        let arjeq = Object.values(o)
        console.log("Keys: " + balniq + " Values: " + arjeq )
    }

    console.log(sumVal(prices))

    entries.map(([index,item]) => console.log(index,item))

    klir(user)




