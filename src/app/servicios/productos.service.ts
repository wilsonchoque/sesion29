import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc , updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../modelo/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(private firestore : Firestore) { }

  

  agregarProducto(producto:Producto){
    const productoRef = collection(this.firestore, 'productos');
    return addDoc(productoRef, producto) 
  }
  obtenerProducto():Observable<Producto[]>{
    const productoRef = collection(this.firestore, 'productos')
    return collectionData(productoRef, {idField:'id'}) as Observable<Producto[]>
  }
  eliminarProducto( producto : Producto){
    const productoRef = doc(this.firestore, `productos/${producto.id}`)
    return deleteDoc(productoRef);
  } 
}
