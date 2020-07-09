<template>
    <div class="my-work">
        <h1>My work</h1>
        <img src="lap2.png" alt="">
        <img src="goodies.png" alt="">
        <!-- <Project v-for="(project, index) in projects" :title="project.title" :description="project.description" :link="project.link" :name="project.name" :img="project.img" :key.sync="index">
        </Project>
        <div class="project">
            <h1 class="bulls-eye-header">Bull's eye</h1>
            <p>An android native application</p>
            <p>I wanted to share with you my final project from collage, so I added some snapshots. This is an online sunglasses shop that gives it's costumers the chance to see the way the sunglasses will look at them befor buying it. In each sunglasses details you will find the "How does it look" button that display the sunglass on the customer face using live camera.</p>
            <img src="@/assets/bulls-eye.png" class="project-image">
            <a href="https://bulls-eye-web.web.app/" target="_blank">View project</a>
        </div> -->
        
    </div>
</template>

<script>
// import Project from "@/components/Project.vue";
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
        // Project
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

    .project{
        width: fit-content;
        margin: auto;
        padding: 2rem 0 2rem 0;
    }

    .bulls-eye-header{
        color: #f456d5;
        font-size: 2.5rem;
        margin: 1rem auto;
    }

    p{
        color: white;
        font-size: 1.4rem;
        margin: auto auto 1rem auto;
        max-width: 40rem;
        padding: 0 0.5rem;
    }

    .project-image{
        width: 50%;
        margin: auto;
        margin-top: 1rem;
    }

    a{
        color: #00c3ff;
        text-decoration: none;
        width: 15rem;
        display: block;
        font-weight: bold;
        padding: 0.5rem;
        margin: 2rem auto 0 auto;
        border: 2px solid #00c3ff;
        transition: all 0.5s ease-in-out;
    }

     a:hover{
        color: white;
        background-color: #00c3ff;
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

          .project-image{
            max-width: 70rem;
        }

        a{
            font-size: 1.2rem;
        }

        p{
            padding: 0 1rem;
        }
    }

    @media(min-width: 95rem)
    {
      h1{
        padding-top: 5rem;
        font-size: 4rem;
      }
    }
</style>