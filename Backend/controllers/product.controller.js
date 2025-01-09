import Product from '../models/product.model.js';

const findAll = async (req, res) => {
    try{
        const product = await Product.find();
        if ( product.length === 0 ){
            return res.json( 'No todo found' );
        }
        res.json(product);
    } catch (err) {
        res.json( 'Internal Server Error' );
    }
}

const findById = (req, res) => {

}

const create = (req, res) => {

}

const update = (req, res) => {

}

export default { findAll, findById, create, update };