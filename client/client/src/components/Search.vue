<template>
  <div>
    <input v-on:keyup.enter="search()" v-model="message" id="query" type="text" placeholder="Search repositores">
    <button v-on:click="search()" id="search">Search</button>

    <table>
        <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Latest Tag</th>
        </tr>
        <tr v-for="(repo,index) in repositories" :key="index" >
            <th>{{ formatValue(repo.full_name) }}</th>
            <th>{{ formatValue(repo.language) }}</th>
            <th>{{  tag[index]}}</th>
            <th>add</th>
        </tr>

    </table>
  </div>
</template>

<script>

export default {

  data () {
      
    return {
        message: "",
        repositories: [],
        tag: []
    }
    
  },
  methods: {
      search: function(){

        this.$http.get("http://api.github.com/search/repositories?q=" + this.message).then(function(data){
            this.repositories = data.body.items.slice(0,10)
            console.log(data)

            for(let i = 0; i < 10; i++){
                var repo = this.repositories[i]
                this.formatTag(repo.tags_url)
            }
        });

      },
      formatValue: function(value){
          return value || 'N/A'
      },
      getTag: function(url){

          

            this.$http.get(url).then(function(data){
            var tag = data.body
            var tagString = JSON.stringify(tag);
            
            if(tagString == "[]"){
                tag = '-'
                this.tag.push("-")
            } else {
                tag = data.body.pop()
                tag = tag.name
                this.tag.push(tag)
            }
        });
        
      },
      formatTag: function(url){ 
            console.log(this.getTag(url))
            return this.getTag(url)
                   
      }
  },
  created(){
      console.log("Search engine live...")
  }
}
</script>

<style scoped>
    table {
        border-collapse: collapse;
        width: 50%;
    }

    table, th, td {
        border: 1px solid black;
        height: 50px;
    }
    #query {
        height: 35px;
        width: 250px;
        font-size: 18px;
    }
    #search {
        height: 41px;
        font-size: 18px;
    }
</style>
