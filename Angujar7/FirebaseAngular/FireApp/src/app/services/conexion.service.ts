import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// Cada vez que usemos Firebase debemos de exportar AngularFireStore y AFS Collection

export interface Item {name: string; }
// Si tuviera mas campos en la Db se agregarian aqui...
// Esto es una clase que nos permite designar un item y el tipo de dato.
// tambien nos permite crear objetos que tengan siempre las mismas caracteristicas.  


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

private itemsCollection: AngularFirestoreCollection<Item>;
items: Observable<Item[]>;
private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items'); // traera una coleccion de items, esto refiere al nombre que esta en la Db
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

   getAll() {
    return this.items;
   }

   addItem(item: Item) {
    this.itemsCollection.add(item);
   }

   deleteItem(item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
   }

   editarItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
   }


}
