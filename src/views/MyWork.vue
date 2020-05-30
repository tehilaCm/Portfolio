<template>
    <div class="my-work">
        <Project v-for="(project, index) in projects" :title="project.title" :description="project.description" :link="project.link" :name="project.name" :img="project.img" :key.sync="index">
        </Project>
    </div>
</template>

<script>
import Project from "@/components/Project.vue";

export default {
    name: "MyWork",
    data(){
        return{
            projects:[
                {
                    name: "Looking-good",
                    link: "https://looking-good-60522.web.app/",
                    img: "looking-good",
                    title: "A gym in Petah Tiqva.",
                    description: "The website contain the different activities the gym has to offer, it's schedual and trainers."
                },
                {
                    name: "Goodies",
                    link: "https://goodies-20207.firebaseapp.com/",
                    img: "goodies",
                    title: "An Italian restaurant.",
                    description: "The website contain the restaurant menus and gallery."
                }
            ]
        }
    },
    components: {
        Project
    },
     created() {
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>

    .my-work{
        min-height: calc(100vh - 5rem);
    }

    @media (min-width: 40rem)
    {
        .my-work{
            min-height: calc(100vh);
        }
    }
</style>