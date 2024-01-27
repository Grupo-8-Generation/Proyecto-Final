//Clase para la creación de objetos
export class Producto
{
    //Constructor principal para que se pueda importar a la clase modal
    constructor(nombre, descripcion, imagen, cantidad, precio)
    {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}