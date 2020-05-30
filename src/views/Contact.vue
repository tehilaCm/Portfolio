<template>
    <div class="contact">
        <h1>Get in touch</h1>
        <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,
            fill up the awesome form below or send an email to 
            tehilahchasidim@gmail.com
            and ~let's talk.
        </p>
        <div class="contact-form">
            <form action="" method="get">
                <input type="text" name="full-name" placeholder="Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="text" name="subject" placeholder="Subject" required>
                <textarea id="message" rows="5" cols="50" placeholder="Message" required></textarea>
                <button>send</button>
            </form>
        </div> 
    </div>
</template>

<script>
export default {
    name: "Contact",
     created() {
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>

    .contact{
        min-height: calc(100vh - 5rem);
    }

    h1{
        padding-top: 3rem;
        color: #00c3ff;
        font-size: 2.5rem;
    }

    p{
        color: white;
        padding: 1rem;
        font-size: 1.2rem;
    }

    .contact-form{
        padding: 1rem 0;
    }

    input, textarea, button{
        background-color: #444242;
        border: 1px solid black;
        color: white;
        border-radius: 0.4rem;
        display: block;
        text-align: left;
        font-size: 1rem;
        margin: 1.5rem auto;
        padding: 0.7rem;
        width: 18rem;
    }

    textarea{
        resize: none;
        font-family: 'Alef', sans-serif;
    }

    button{
        text-align: center;
        cursor: pointer;
        background-color: transparent;
        border: 2px solid #00c3ff;
        color: #00c3ff;
        font-size: 1.2rem;
        font-weight: bold;
    }

    button:hover{
        background-color: #00c3ff;
        color: #1f1f1f;
    }

     @media (min-width: 40rem)
    {
        .contact{
            min-height: calc(100vh);
            width: calc(100% - 5rem);
            margin-left: 5rem;
        }

        h1{
            font-size: 3rem;
        }

        p{
            max-width: 37rem;
            margin: auto;
        }

        input, textarea, button{
            font-size: 1.2rem;
            width: 25rem;
        }
    }

</style>