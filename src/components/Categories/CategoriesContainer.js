import React, {Component} from 'react';
import { GetProducts, GetCategories } from '../../actions/actions.js';

class CategoriesContainer extends Component {

    // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
    componentDidMount() {
      
      const boundGetCategories = () => {
        this.props.dispatch((dispatch) => {
            dispatch(GetCategories())
        })
      }

      const boundGetProducts = () => {
        this.props.dispatch((dispatch) => {
            dispatch(GetProducts())
        })
      }
      
      // check if we already have a moltin products in the store
      if(this.props.products.fetched === false) {
        boundGetProducts()
      }
      
      // check if we already have a moltin products in the store
      if(this.props.categories.fetched === false) {
        boundGetCategories();  
      }

    }
  render() {
    return (
      <div>
      
      </div>
    )
  }
};

export default CategoriesContainer;
