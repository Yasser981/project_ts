<template>
    <div class="row" style="margin-top: 5rem;">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Laravel 8 CRUD Example from scratch - laravelcode.com</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-success" href="#"> Create New Post</a>
            </div>
        </div>
    </div>
    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Details</th>
            <th width="280px">Action</th>
        </tr>
        <tr>

        </tr>
    </table>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
    setup(){
        const store = useStore();
        let cosa:string = 'Hola como estas';
        return {
            cosa,
        }
    },
    data(){

    },
    mounted() {
      this.cosajecutar();
    },
    methods: {
        cosajecutar(){
            console.log(this.cosa);
        }
    }
})
</script>
