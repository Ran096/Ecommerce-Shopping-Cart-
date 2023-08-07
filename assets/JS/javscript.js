let triger = (id, a, b) => {
    var table = document.querySelectorAll('.table');
    var box = document.querySelectorAll('.box');
  
    // Using onclick event we send a parameter like id,a,b
    // table id for table shown, box id for background change,p1 for get a price details
  
    Object.values(table).map((item, index) => {
      table[index].style.display = 'none';
    });
  
    Object.values(box).map((item, index) => {
      if (index <= 2) {
        box[index].style.cssText =
          'border: 1px solid black;background-color: white;';
      }
    });
    //for onclick event we show the table block
    let sel = document.getElementById(id);
    sel.style.display = 'block';
  
    //for onclick event we change the background
    let sel1 = document.getElementById(a);
    sel1.style.cssText = 'border: 1px solid #007F61;background-color: #F4FBF9;';
  
    //get onclick price detail in total
    let price = document.getElementById(b).innerHTML;
    document.querySelector('.total').innerHTML = `Total : ${price}`;
  };
  
  //It can be use for cannot select any pair then the add card button will alert
  let add = () => {
    let total = document.querySelector('.total').innerHTML;
    console.log(total);
    total !== 'DKK 0.00'
      ? alert(`Cart Added successfuly`)
      : alert('plz select first');
  };
  
  