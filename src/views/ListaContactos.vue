<template>
    <h1>Lista de Contactos</h1>
    <!-- <p v-if="event.direccion">{{ event.direccion }}</p>
    <button @click="deleteEvent(event)">Delete</button> -->
    <section>
        <p v-for="(contactoAll,index) in contacts" :key="index">
          <div class="contactoAll">
            <div class="nombre">
            <h3>Nombre</h3>
            <p>{{contactoAll.nombre}}</p>
          </div>
          <div class="telefono">
            <h3>Teléfono</h3>
            <p>{{contactoAll.telefono}}</p>
          </div>
          <div class="correo">
            <h3>Correo</h3>
            <p>{{contactoAll.correo}}</p>
          </div>
           <div class="direccion">
            <h3>Dirección</h3>
            <p>{{contactoAll.direccion}}</p>
          </div>
          <div class="img">
            <router-link :to="`/Mantenimiento/${contactoAll.id}`"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWk32JjUwdyJyaP8Axthx1Q6hG7iC9o9NnCEHTdRuntZ1i8GVKl4xSSoDoMfLfNMGrto&usqp=CAU" alt=""> </router-link>   
           
          </div>
          </div>
        </p>
      
    </section>
</template>

<script>
 //import contacts from "/db.json";
export default {
    data(){
      return{        
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
        contact: {nombre:'', telefono:'', correo:'', direccion:''},
        contactosAll:[],
      };       
    },

}
</script>
  
<style scoped>
  .contactoAll{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
  }
  .nombre, .telefono, .correo, .direccion, .img{
    border: 1px solid black;
    flex: 1 1 150px;
  }
  .img{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 40%;
  }
</style>