import express from 'express';
import Productos from '../src/productosClass.js';

const router = express.Router();

router.post('/guardar', (req, res) => {
  try {
    const body =  req.body
    const pr = new Productos()
    let nuevo =  pr.add(body)
        res.json(
          nuevo
      )    
  } catch (error) {
    console.log('POST Error:', error)
  }

})

router.get('/listar', (req, res)=>{
  try {
    const pr = new Productos()
    const productos = pr.show()
    if(productos.length > 0){
      res.json({
        productos
      })
    }
    else {
      res.json({error : 'no hay productos cargados'})
    }
  } catch (error) {
    console.log('GetAll Error:', error)
  }
})
router.get('/listar/:id', (req, res)=>{
  try {
    const id = req.params.id
    const pr = new Productos()
    const producto = pr.showOne(id)

    if(producto.length>0){
      res.json(
        producto[0]
      )
    }
    else {
      res.json(
        { error : 'producto no encontrado' }
      )
    }
  } catch (error) {
    console.log('GetById:', error)
  }
})
router.put('/actualizar/:id', (req, res)=>{
  try {
    const id = req.params.id
    const body = req.body
    const pr = new Productos()
    const producto = pr.edit(id, body)
    res.json(
      producto
    )

  } catch (error) {
    console.log('Update:', error)
  }
})

router.delete('/borrar/:id', (req, res)=>{
  try {
    const id = req.params.id
    const pr = new Productos()
    const producto = pr.delete(id)
    res.json(producto)

  } catch (error) {
    console.log('Delete:', error)
  }
})
export default router