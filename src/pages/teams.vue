<template>
  <div>
    <div class="q-ma-xl" v-bind:style="{ 'background-color': 'FF9C00',  }">

      <h5>{{team.fullName}}</h5>
    </div>
    <div class="row q-ma-md">
      <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12 q-pa-md" v-for="(team,i) in teamSquad" :key="i">
        <q-card>
          <img src="../assets/img-person-placeholder.jpg" width="50%" />
          <div class="q-ma-md">
              <div>
           <h6 class="q-ma-xs text-center"> {{team.fullName}} </h6>
          </div>
          <div class="row">
            <div class="col-6 text-left">
               <span>Nationality <br> {{team.nationality}} </span> </div>
            <div class="col-6 text-right">
               <span>Date Of Birth <br> {{team.dateOfBirth}} </span> </div>
          </div>
          </div>

        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {

  data(){
    return {
      teamColor : "",
      team : {},
      teamSquad : []

    }
  },
  mounted(){
    this.getParamters()
  },
  methods: {
      getParamters(){

        console.log(this.$route.params);
        axios({
        method: "get",
        url:
        `https://cricketapi.platform.iplt20.com/tournaments/18790/squads/${this.$route.params.teamId}?matchTypes=ALL`
      })
      .then(res =>{
        console.log(res.data['ALL'].players,"res");

        this.team = res.data['ALL'].team
        this.teamColor = res.data['ALL'].team.secondaryColor
        this.teamSquad = res.data['ALL'].players
      })
      .catch(err =>{
        console.error(err);
      })

      }
  },
}
</script>
