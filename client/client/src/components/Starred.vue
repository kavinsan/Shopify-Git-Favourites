<template>
  <div>
      
    <table>
        <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Latest Tag</th>
        </tr>
    </table>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
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
</style>
