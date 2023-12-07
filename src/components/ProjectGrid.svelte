<script lang="ts">
    import Project from './Project.svelte';
</script>

<div class="container">
    <div class="githublinks" id="projects">
        <div class="featured">
            <Project
                link="https://new.myrentalcv.com/Login/Login"
                title="MyRentalCV"
                languages="C#.NET · ASP.NET Razor · HTML · CSS · JavaScript"
                source="LettingWeb"
                icon="LT.png"
                image="MRCV.png"
                image_webp="MRCV.webp"
                notif_text="Featured"
                notif_colour="#6256a5"
            />
            <Project
                link="https://github.com/MaxJW/Monch"
                title="Monch - Recipe Manager"
                languages="SvelteKit · TypeScript · TailwindCSS"
                source="Website"
                icon="personal.png"
                image="monch.png"
                image_webp="monch.webp"
                notif_text="Latest"
                notif_colour="#f8d53a"
            />
        </div>
        <Project
            link="https://github.com/MaxJW/WeddingJeopardy"
            title="Wedding Jeopardy"
            languages="Svelte · JavaScript · HTML · CSS"
            source="Website"
            icon="personal.png"
            image="wedjeo.png"
            image_webp="wedjeo.webp"
        />
        <Project
            link="https://github.com/MaxJW/GroomsmaidPhotoChallenge"
            title="Photo Challenges"
            languages="Svelte · JavaScript · HTML · CSS"
            source="Website"
            icon="personal.png"
            image="photochallenge.png"
            image_webp="photochallenge.webp"
        />
        <Project
            link="https://marvel.maxwilson.co.uk/"
            title="Upcoming Marvel Releases"
            languages="Svelte · JavaScript · HTML · CSS"
            source="Website"
            icon="personal.png"
            image="marvel.png"
            image_webp="marvel.webp"
        />
        <Project
            link="https://todo.maxwilson.co.uk/"
            title="🥕 Carrotodo"
            languages="Svelte · JavaScript · HTML · CSS"
            source="Website"
            icon="personal.png"
            image="todo.png"
            image_webp="todo.webp"
        />
        <Project
            link="https://github.com/MaxJW/Egocentric-Video-Segmentation"
            title="Egocentric Video Segmentation"
            languages="Python"
            source="University of Dundee"
            icon="UoD.png"
            image="ego.png"
            image_webp="ego.webp"
        />
        <Project
            link="https://github.com/MaxJW/Overturned-Game"
            title="Overturned"
            languages="Unity · C#"
            source="University of Dundee"
            icon="UoD.png"
            image="overturned.png"
            image_webp="overturned.webp"
        />
        <Project
            link="https://github.com/MaxJW/Craneware-Project"
            title="Price Doctor"
            languages="Angular · JavaScript · MongoDB · HTML · CSS"
            source="Craneware"
            icon="CW.png"
            image="craneware.png"
            image_webp="craneware.webp"
        />
        <Project
            link="https://zeno.computing.dundee.ac.uk/2018-ac32006/Team3/index.php"
            title="OpenAirBooking"
            languages="PHP · JavaScript · MySQL · HTML · CSS"
            source="University of Dundee"
            icon="UoD.png"
            image="openair.png"
            image_webp="openair.webp"
        />
        <Project
            link="https://github.com/MaxJW/FullStack-React-Native"
            title="FullStack React Native Book"
            languages="React Native"
            source="Book"
            icon="personal.png"
            image="fullstackreactnative.png"
            image_webp="fullstackreactnative.webp"
        />
        <Project
            link="https://github.com/MaxJW/maxjw.github.io"
            title="Personal Website"
            languages="Svelte · JavaScript · HTML · CSS"
            source="Website"
            icon="personal.png"
            image="maxwilson.png"
            image_webp="maxwilson.webp"
        />
        <Project
            link="https://start.maxwilson.co.uk/"
            title="Browser Start-up Page"
            languages="HTML · CSS · JavaScript"
            source="Website"
            icon="personal.png"
            image="startpage.png"
            image_webp="startpage.webp"
        />
        <Project
            link="https://maxwilson.co.uk/tfthelper/"
            title="TFT Game Helper"
            languages="HTML · CSS · JavaScript"
            source="Website"
            icon="personal.png"
            image="tfthelper.png"
            image_webp="tfthelper.webp"
        />
        <Project
            link="https://maxwilson.co.uk/mototek/"
            title="Mototek - Company Website"
            languages="Bootstrap · HTML · CSS · JavaScript"
            source="Website"
            icon="personal.png"
            image="mototek.png"
            image_webp="mototek.webp"
        />
    </div>
</div>

<style>
    .container {
        min-height: 90vh;
    }

    #projects {
        scroll-margin: 20px;
    }

    .githublinks {
        border-radius: 5px;
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        margin-top: calc(100vh + 5%);
        margin-bottom: 5%;
        z-index: 10;
    }

    .githublinks > :first-child {
        grid-column: 1 / -1;
        max-width: none;
        margin: 0;
        max-height: 400px;
    }

    .githublinks .featured {
        display: flex;
        gap: 2rem;
    }

    .githublinks .featured > :global(div) {
        width: calc(50% - 1rem);
    }

    /* Desktops and laptops */
    @media only screen and (max-width: 989px) {
        .githublinks .featured {
            display: contents !important;
        }

        .githublinks .featured > :global(div) {
            width: auto !important;
        }
    }

    /* Smartphones (portrait) */
    @media only screen and (max-width: 700px) {
        .githublinks {
            display: block;
        }

        .githublinks > :first-child {
            margin-bottom: 20px;
        }
    }
</style>
