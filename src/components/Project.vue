<template>
    <div class="project">
        <h1>{{name}}</h1>
        <p>{{title}}</p>
        <p>{{description}}</p>
        <!-- <img src="../assets/lap2.png" class="computer"> -->
        <img :src="getSrc(img)" class="project-image">
        <a :href="link" target="_blank">View project</a>
    </div>
</template>

<script>
export default {
    name: "Project",
    props: ['name', 'img', 'link', 'description', 'title'],
    methods: {
         getSrc(name) {
            var images = require.context('../assets/', false, /\.png$/);
            return images('./' + name + ".png")
        }
    }  
}
</script>
    
<style scoped>

    .project{
        width: fit-content;
        margin: auto;
        padding: 2rem 0 2rem 0;
    }

    h1{
        color: white;
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
        width: 95%;
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
        .project{
            width: calc(100% - 5rem);
            margin-left: 5rem;
        }

        .project-image{
            width: 90%;
            max-width: 70rem;
        }

        a{
            font-size: 1.2rem;
        }

        p{
            padding: 0 1rem;
        }
    }

</style>