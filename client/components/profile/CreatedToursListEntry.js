import React from 'react'
import $ from 'jquery'

export default class CreatedToursListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      name: "",
      city: "",
      date: "",
      price: ""
    }

  }

  componentDidMount () {
    $.post('http://localhost:8080/fetchTourInfo', {data: this.props.tourId})
    .done( (data) => {
      var date = data.date.substring(0,10);
      this.setState({
        data: data,
        name : data.name,
        city : data.city,
        date : date,
        price : data.price
      })
    })
    .fail( (err) => {
      console.log('error getProfile', err);
    })
  }
  
  render() {
    return (
       <div className='createTourForm'>
            <div className='tourContainer' onClick={ () => this.props.getTourInfo(this.state.data) }>
              <div> {this.state.name} </div>
              <div> {this.state.city} </div>
              <div> {this.state.date} </div>
              <div> ${this.state.price} </div>
            </div>
      </div>

    )
  }

}