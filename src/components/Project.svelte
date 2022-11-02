<!-- Component used for displaying a project card -->
<script lang="ts">
    export let link: string;
    export let title: string;
    export let languages: string;
    export let source: string;
    export let icon: string;
    export let image: string;
    export let image_webp: string;
    export let notif_text: string = '';
    export let notif_colour: string = '';
</script>

<div class="card">
    {#if notif_text}
        <div class="notif" style="background-color: {notif_colour}">{notif_text}</div>
    {/if}
    <a href={link} class="overlay">
        <div class="card-content">
            <div class="card-title">
                <p class="title">{title}</p>
                <p class="languages">{languages}</p>
            </div>
            <div class="card-icon">
                <img
                    src="images/icon-images/{icon}"
                    alt="{source} Logo"
                    aria-label="{source} Logo"
                />
            </div>
        </div>
    </a>
    <picture>
        <source srcset="images/repo-images/{image_webp}" type="image/webp" />
        <source srcset="images/repo-images/{image}" type="image/png" />
        <img
            src="images/repo-images/{image}"
            alt="{title} Screenshot"
            aria-label="{title} Screenshot"
        />
    </picture>
</div>

<style>
    .card {
        display: inline-grid;
        border-radius: 10px;
        box-shadow: none;
        transition: box-shadow 0.25s ease;
        position: relative;
        aspect-ratio: 2 / 1;
    }

    .card picture {
        overflow: hidden;
        border-radius: 10px;
        max-height: inherit;
        z-index: 10;
    }

    .card picture img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        -webkit-transition: 0.6s ease;
        transition: 0.6s ease;
    }

    .card a.overlay {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 11;
    }

    .card-title {
        width: 80%;
    }

    .card-content {
        pointer-events: none;
        margin-bottom: 0px;
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 0px 0px 9px 9px;
        padding: 0px;
        z-index: 11;
    }

    .card-content p.title {
        transition: all 0.5s ease;
        font-size: 1rem;
        font-weight: bold;
        margin-left: 10px;
        color: #161616;
        max-width: 95%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 0.4rem;
        margin-top: 0.7em;
    }

    .card-content p.languages {
        transition: all 0.5s ease;
        font-size: 0.8rem;
        font-weight: normal;
        margin-left: 10px;
        color: #777777;
        max-width: 95%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 0;
    }

    .card-icon {
        display: flex;
        width: 70px;
        height: 70px;
        position: absolute;
        border-radius: 50%;
        border: 6px solid white;
        background: white;
        top: -50%;
        right: 5%;
        justify-content: center;
        align-items: center;
    }

    .card-icon img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        position: absolute;
        border-radius: 50%;
    }

    .notif {
        position: absolute;
        color: #fff;
        border-radius: 70px;
        z-index: 12;
        padding: 0.22rem 0.6rem;
        top: -0.5rem;
        left: -1.2rem;
        font-weight: bold;
        user-select: none;
    }

    a {
        color: white;
        cursor: pointer;
        transition: 0.25s ease;
    }

    /* Smartphones (portrait) */
    @media only screen and (max-width: 700px) {
        .card {
            margin-bottom: 20px;
        }

        .card-icon {
            width: 50px;
            height: 50px;
            top: -30%;
        }
    }

    @media (hover: hover) and (pointer: fine) {
        .card:hover {
            box-shadow: 0px 0px 20px #000000;
        }

        .card:hover picture img {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }

        a:hover {
            text-decoration: none;
            color: black;
        }
    }
</style>
