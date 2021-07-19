<template>
  <h1>Mantenimiento</h1>
  <section class="mantenimiento">
            <div class="caja">
                <div class="botones">
                    <img alt="Vue Editar" src="../assets/editar2.png">                    
                    <img class="cerrar" alt="Vue Eliminar" src="../assets/cerrar.jpg" @Click = "Eliminar ($route.params.id)">    
                </div>
                <div class="texto">
                    <p><strong>Nombre: </strong>{{objeto.nombre}}</p>
                    <p><strong>Teléfono: </strong>{{objeto.telefono}}</p>
                    <p><strong>Correo: </strong>{{objeto.correo}}</p>
                    <p><strong>Dirección: </strong>{{objeto.direccion}}</p>
                </div>
                
            </div>
    </section>
    
</template>

<script>
export default {
    data(){
      return{        
        objeto: {},          
        contacts:[
        {id:1,nombre:"Edgar Chang",telefono: "123456789", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:2,nombre:"Raul",telefono: "245987321", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:3,nombre:"Hilda",telefono: "515987412", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:4,nombre:"Janth",telefono: "123456789", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:5,nombre:"Karina",telefono: "987456321", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:6,nombre:"Jessica",telefono: "159357852", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:7,nombre:"Sunshy",telefono: "987456357", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:8,nombre:"Solange",telefono: "774456631", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:9,nombre:"Veronica",telefono: "7412589963", correo:"@chang", direccion:"Calle Rosario del solar"},
        {id:10,nombre:"Emily",telefono: "369852147", correo:"@chang", direccion:"Calle Rosario del solar"}
    ],
      };       
    },
    methods:{
        async getTodo(){
            const id = this.$route.params.id;
            const data = this.contacts[`${id}`-1];
            this.objeto = data;
            //console.log(id);
        },    
        async Eliminar(id) {        
        alert('Desea Eliminar al contacto');
        //this.contacts[id].splice(id, 1);
              }
    },
    created(){
        this.getTodo();
    }
}
</script>

<style scoped>
    .mantenimiento{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .caja{
        border: 1px solid black;
        max-width: 40%;
        width: 30%;        
    }
    .botones{
        width: 100%; 
        display: flex; 
        justify-content: space-between;
        background: skyblue;
        margin: 0;        
    }
    img{
        width: 10%;
        margin: 3%;
    }
    .cerrar{
        border-radius: 50%;
    }
</style>