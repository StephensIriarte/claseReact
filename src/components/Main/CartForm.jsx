import React from 'react';
import {useState} from 'react'
import firebase from 'firebase/app'
import {  useCartContext } from '../context/cartContext';
import 'firebase/firestore'
import {getFirestore} from '../../Services/getFirebase'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


const CartForm = () => {

    const {cartList, precioTotal, borrarLista} = useCartContext()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: ''
    })
    const generarOrden = (e) =>{
       
        //validando input nombre 
        if(!formData.name || !formData.phone || !formData.email){
            
        }else{
            e.preventDefault();
    
                let orden = {}
                    orden.items = cartList.map(cartItem => {
                    const id = cartItem.item.id;
                    return {id}   
                 })
    
                const db = getFirestore();
                const ordersCol = db.collection('orders');
    
                ordersCol.add({
                    fecha_compra : firebase.firestore.Timestamp.fromDate(new Date()),
                    total: precioTotal(),
                    cliente: formData,
                    idProducto : orden
                })
                    .then((IdDocumento)=>{
                    console.log(IdDocumento.id)
                    })
                    .catch( err => {
                    console.log(err);
                    })
                    .finally(()=>{
                    borrarLista()
                    setFormData({
                        name:'',
                        phone:'',
                        email: ''
                })
                     console.log('terminó la compra')
                })
    
    
                const itemsToUpdate = db.collection('Items').where(
                    firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
                )
    
                itemsToUpdate.get()
                .then( collection=>{
                    collection.docs.forEach(docSnapshot => {
                        batch.update(docSnapshot.ref, {
                            stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
                        })
                    })
            
                    batch.commit().then(res =>{
                        console.log('resultado batch:', res)
                    })
                })
    
                const batch = db.batch();
                
    
            }
            


        }
        const handleChange=(e)=>{setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
                
            }
            
        )
    } 

    return (
        <div>
            <Button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleOpen}>Terminar Compra</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form  onSubmit={generarOrden}  onChange={handleChange} >
                                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Finalizar Compra</h2>
                                <div class="relative mb-4">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
                                    <input type="text" id="name" name="name" value={formData.name} placeholder="Ingrese Nombre" minlength="5" maxlength="40" required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <div class="relative mb-4">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Telefono</label>
                                    <input type="text" id="phone" name="phone" value={formData.phone} placeholder="Ingrese Telefono" required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <div class="relative mb-4">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} placeholder="Ingrese Correo" required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <div class="relative mb-4">
                                    <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
                                    <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button onClick={(e)=>generarOrden(e)} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Enviar</button>
                                <p class="text-xs text-gray-500 mt-3">Gracias por su compra estaremos en contacto</p>
                            
                            </form>  
                        </Box>
                    </Modal>
        </div>
    )
}

export default CartForm
