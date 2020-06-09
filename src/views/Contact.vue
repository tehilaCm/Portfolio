<template>
    <div class="contact">
        <h1>Get in touch</h1>
        <p class="get-in-touch">If you wanna get in touch, talk to me about a project collaboration or just say hi,
            fill up the awesome form below or send an email to 
            tehilahchasidim@gmail.com
            and ~let's talk.
        </p>
        <div class="contact-form">
            <form action="" method="get">
                <input type="text" name="full-name" placeholder="Name" class="name" required>
                <input type="email" name="email" placeholder="Email" class="email" required>
                <input type="text" name="subject" placeholder="Subject" class="subject" required>
                <textarea id="message" rows="5" cols="50" placeholder="Message" class="message" required></textarea>
                <button type="button" class="send" @click="uploadData()">
                    <p class="Ill-be-in-touch">I'll be in touch</p>
                    <p class="send-text">send</p>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from '../firebaseConfig.js'

export default {
    name: "Contact",
    mounted() {
        window.scrollTo(0,0);
    },
    methods: {
        uploadData: function(){

            if(!this.checkValidation())
                return;

            var database = firebase.database();
            var ref =  database.ref("contact");
      
            ref.push({
                name: document.querySelector(".name").value,
                email: document.querySelector(".email").value,
                subject: document.querySelector(".subject").value,
                message: document.querySelector(".message").value
            });

            document.querySelector(".name").value = "";
            document.querySelector(".email").value = "";
            document.querySelector(".subject").value = "";
            document.querySelector(".message").value = "";

            let $ = require('jquery');
            $(document).ready(function () {
                $(".Ill-be-in-touch")
                .css('display', 'block').css('color', '#f456d5')
                .animate({
                opacity: 1.0,
                left: '120px'
                }, 600);
                $(".send-text")
                .css('display', 'none');
                 $(".send")
                .css('border', '2px solid #f456d5' )
                .css('background-color', 'transparent' )
                .css('cursor', 'auto' )
                .prop('disabled',true);
            });  
        },
        checkValidation: function()
        {
            let name = document.querySelector(".name");
            let email = document.querySelector(".email");
            let subject = document.querySelector(".subject");
            let message = document.querySelector(".message");

            if(!name.checkValidity()){
                name.focus();
                return false;
            }
            if(!email.checkValidity()){
                email.focus();
                return false;
            }
            if(!subject.checkValidity()){
                subject.focus();
                return false;
            }
            if(!message.checkValidity()){
                message.focus();
                return false;
            }
            return true;
        }
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

    .get-in-touch{
        color: white;
        padding: 1rem;
        font-size: 1.1rem;
    }

    .contact-form{
        padding: 1rem 0;
    }

    input, textarea, .send{
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
        opacity: 0;
        animation: 1s ease-out 1s 1 slideIn;
        animation-fill-mode: both;
    }

    @keyframes slideIn {
        0% {
            opacity: 0;
            transform: translate3d(0,100%,0);
        }
        100% {
            opacity: 1;
        }
    }


    textarea{
        resize: none;
        font-family: 'Alef', sans-serif;
    }

    .send{
        text-align: center;
        cursor: pointer;
        background-color: transparent;
        border: 2px solid #00c3ff;
        color: #00c3ff;
        font-size: 1.2rem;
        font-weight: bold;
        transition: all 0.5s ease-in-out;
    }

    .send:hover{
        background-color: #00c3ff;
        color: #1f1f1f;
    }

    .Ill-be-in-touch {
        display: none;
        opacity: 0.0;
        position: relative;
        margin-left: -120px;
        width: 100%;
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

    @media(min-width: 95rem)
    {
      h1{
        padding-top: 5rem;
        font-size: 4rem;
      }

      .get-in-touch{
        font-size: 1.5rem;
      }
    }

</style>