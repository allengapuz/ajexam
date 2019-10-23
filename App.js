import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       items : [
        {
          img: 'http://getwallpapers.com/wallpaper/full/2/0/1/1089111-amazing-cookie-monster-background-2700x1800-xiaomi.jpg',
          item: 'Cookie Monster',
          id: 1,
          description: 'Blue lovable, eats only cookies and nothing else.',
          price: 10000,
          quantity: 1
        },
        {
          img: 'https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$',
          item: 'PS4',
          id: 2,
          description: 'about to be obsolete due to the ps5. it came after the ps3',
          price: 18000,
          quantity: 9
        },
        {
          img: 'https://images-na.ssl-images-amazon.com/images/I/41OPB1vuXyL._SL1024_.jpg',
          item: 'Airpods',
          id: 3,
          description: 'White, innovative, expensive. Apple',
          price: 10000,
          quantity: 6
        },
        {
          img: 'https://pbs.twimg.com/profile_images/993830245315760128/djMy6_0P_400x400.jpg',
          item: 'Seaver',
          id: 4,
          description: 'smort but his body is the best!',
          price: 10,
          quantity: 1
        }
       ],
       imgText:'',
       itemText:'',
       descText:'',
       priceText:'',
       qtyText:'',
       totalText: 0,
    }
  }
  
  changeImgHandler (img) {
    this.setState({
      imgText: img
    })
  }

  changeItemHandler (item) {
    this.setState({
      itemText: item
    })
  }

  changeDescHandler (description) {
    this.setState({
      descText: description
    })
  }

  changePriceHandler (price) {
    this.setState({
      priceText: price
    })
  }

  changeQuantityHandler = (quantity) => {
    this.setState({
      qtyText: quantity
    })
  }

  addToList = (img, item, description, price, quantity) => {
    let copyArray = [...this.state.items];
    
    price = parseInt(price)
    quantity = parseInt(quantity)

    let currItem = {
      img,
      item,
      description,
      price,
      quantity
    }

    copyArray.push(currItem);

    this.setState({
        items: copyArray,
        imgText:'',
        itemText:'',
        descText:'',
        priceText:'',
        qtyText:'',
    })
}

    getTotal = () => {
      var total = 0
      for(var i = 0; i <  this.state.items.length; i++){
        total += this.state.items[i].price
        //console.log(total)
      }
      return total
    }

    buttonAddHandler = (index) => {
      let copyArray = [...this.state.items];
      console.log(copyArray)

      var priceEach = copyArray[index].price/copyArray[index].quantity
      copyArray[index].quantity += 1
      copyArray[index].price += priceEach
      
      this.setState({
        items: copyArray
      })
    }

    buttonMinusHandler = (index) => {
      let copyArray = [...this.state.items];
      console.log(copyArray)

      var priceEach = copyArray[index].price/copyArray[index].quantity
      
      if(copyArray[index].quantity > 1){
        copyArray[index].quantity -= 1
        copyArray[index].price -= priceEach
      }  
      
      this.setState({
        items: copyArray
      })
    }

  render() {
    const newItems = this.state.items
    return (
      <div class="container-fluid border rounded text-center" >
        
        <input 
            placeholder="Image URL" 
            type="text"
            value={this.state.imgText}
            onChange={(e) => this.changeImgHandler(e.target.value)} />

        <input 
            placeholder="Item" 
            type="text"
            value={this.state.itemText}
            onChange={(e) => this.changeItemHandler(e.target.value)} />
            
        <input 
            placeholder="Description" 
            type="text"
            value={this.state.descText}
            onChange={(e) => this.changeDescHandler(e.target.value)} />

        <input 
            placeholder="Price" 
            type="number"
            value={this.state.priceText}
            onChange={(e) => this.changePriceHandler(e.target.value)} />

        <input 
            placeholder="Quantity" 
            type="number"
            value={this.state.qtyText}
            onChange={(e) => this.changeQuantityHandler(e.target.value)} />

        <button onClick={() => 
          this.addToList(this.state.imgText, this.state.itemText, this.state.descText, this.state.priceText, this.state.qtyText)}>
            Add</button>
        
        {newItems.map((item, index) => (
          <div key={index}  class="row border rounded">
              <div class="col-sm-3 border">
                <img src={item.img} alt='' height="200vh" width="250px" />
              </div>

              <div class="col-sm-2 border">
                {item.item}
              </div>
              <div class="col-sm-3 border">
                {item.description}
              </div> 
              <div class="col-sm-2 border">
                {item.price}
              </div>
              <div class="col-sm-2 border">
                <button onClick={() => this.buttonAddHandler(index)}> + </button> 
                {''} {item.quantity} {''} 
                <button onClick={() => this.buttonMinusHandler(index)}>-</button>
              </div>
          </div>
        ))}
        <div class="text-center">Total: {this.getTotal()} PHP</div>
      </div>
    )
  }
}

export default App
