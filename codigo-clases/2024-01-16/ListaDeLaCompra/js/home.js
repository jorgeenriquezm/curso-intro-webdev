/* Cada elemento que creemos va a llevar un identificador único, un número
que irá incrementándose cada vez que creemos un nuevo ítem. Al entrar en la 
home comprobamos si no existe, de ser así, sería la primera vez que usamos
la aplicación y entonces crearíamos ese elemento con el valor cero ya que 
aún no hemos creado ningún item */
if(localStorage.getItem('lista-ultimo-id')==null){
    localStorage.setItem('lista-ultimo-id', 0)
}