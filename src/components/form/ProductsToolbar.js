import React, { Component } from 'react'
import Select from "./Select"
import '../../assets/sass/components/productsToolbar.scss';

export class ProductsToolbar extends Component {
  state = {
    ActiveGrid: true,
    ActiveList: false
  };
  render() {
    return (
      <div className="products-toolbar">
        <div className="sort">
          <Select style={{ width: "200px" }} name="vehicleSystem"
            formGroupProps={{ row: true }}
            filterable={true}
          />
        </div>
        <div className="view" onClick={this.onSortClick}>
          <i className={this.state.ActiveList ? "material-icons active" : "material-icons"} >
            view_list
          </i>
          <i className={this.state.ActiveGrid ? "material-icons active" : "material-icons"}>
            view_module
          </i>

        </div>
      </div>
    )
  }
  onSortClick = (e) => {
    const element = e.nativeEvent.target.innerText;
    switch (element) {
      case "view_list":
        this.setState({ ActiveList: true, ActiveGrid: false });
        break;
      case "view_module":
        this.setState({ ActiveList: false, ActiveGrid: true });
        break;
      default:
        break;
    }
  }
}

export default ProductsToolbar;