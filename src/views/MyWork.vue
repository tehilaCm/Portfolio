<template>
    <div class="my-work">
        <h1>My work</h1>
        <Project v-for="(project, index) in projects" :title="project.title" :description="project.description" :link="project.link" :name="project.name" :img="project.img" :key.sync="index">
        </Project>
    </div>
</template>

<script>
import Project from "@/components/Project.vue";
import firebase from '../firebaseConfig.js'

const database = firebase.database();
let projectsRef = database.ref("projects");

export default {
    name: "MyWork",
    data(){
        return{
            projects:[]
        }
    },
    components: {
        Project
    },
    mounted(){
        window.scrollTo(0,0);

        projectsRef.once("value", projects => {
            projects.forEach(item => {
                this.projects.push({
                name: item.child("name").val(),
                description: item.child("description").val(),
                link: item.child("link").val(),
                img: item.child("img").val(),
                title: item.child("title").val(),
                });
            });
        });
    }
}
</script>

<style scoped>

    h1{
        padding-top: 3rem;
        color: #00c3ff;
        font-size: 2.5rem;
    }

    .my-work{
        min-height: calc(100vh - 5rem);
    }

    @media (min-width: 40rem)
    {
        .my-work{
            min-height: calc(100vh);
            width: calc(100% - 5rem);
            margin-left: 5rem;
        }

        h1{
            font-size: 3rem;
        }
    }
</style>