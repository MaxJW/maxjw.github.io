<script lang="ts">
    import { OnMount } from 'fractils';
    import { fly } from 'svelte/transition';
    import Fa from 'svelte-fa';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import {
        faGithub,
        faLinkedin,
        faTwitter,
        faYoutube,
        faMastodon,
    } from '@fortawesome/free-brands-svg-icons';
</script>

<OnMount>
    <div class="profile">
        <img
            class="profile-img"
            alt="Profile"
            aria-label="Profile"
            src="https://avatars1.githubusercontent.com/u/15789924"
            in:fly={{
                duration: 1000,
                y: -200,
                opacity: 0,
            }}
        />
        <div
            class="heading"
            in:fly={{
                delay: 300,
                duration: 1000,
                y: -120,
                opacity: 0,
            }}
        >
            <h1 id="name">Max Wilson</h1>
            <h2 id="title">Software Engineer</h2>
            <h2 id="location">
                <a id="work_link" href="https://adarma.com">Adarma</a> • Edinburgh, Scotland, UK
            </h2>
        </div>
        <div
            class="links"
            in:fly={{
                delay: 525,
                duration: 1000,
                y: 50,
                opacity: 0,
            }}
        >
            <a
                href="mailto:max@maxwilson.co.uk"
                aria-label="Email link"
                class="tooltip"
                data-title="max@maxwilson.co.uk"
            >
                <Fa icon={faEnvelope} size="lg" />
            </a>
            <a
                href="https://github.com/MaxJW"
                aria-label="GitHub link"
                class="tooltip"
                data-title="MaxJW"
            >
                <Fa icon={faGithub} size="lg" />
            </a>
            <a
                href="https://www.linkedin.com/in/maxjwilson-1"
                aria-label="LinkedIn link"
                class="tooltip"
                data-title="Max Wilson"
            >
                <Fa icon={faLinkedin} size="lg" />
            </a>
            <a
                href="https://twitter.com/MaxJW_"
                aria-label="Twitter link"
                class="tooltip"
                data-title="@MaxJW_"
            >
                <Fa icon={faTwitter} size="lg" />
            </a>
            <a
                href="https://mastodon.scot/@maxjw"
                aria-label="Mastodon link"
                class="tooltip"
                rel="me"
                data-title="@maxjw@mastodon.scot"
            >
                <Fa icon={faMastodon} size="lg" />
            </a>
            <a
                href="https://www.youtube.com/@MaxJW_"
                aria-label="YouTube link"
                class="tooltip"
                data-title="@MaxJW_"
            >
                <Fa icon={faYoutube} size="lg" />
            </a>
        </div>
    </div>
</OnMount>

<style>
    .profile {
        position: fixed;
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        justify-content: center;
        margin: 0 auto;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .profile-img {
        margin: 0 auto;
        display: block;
        border-radius: 50%;
        max-width: 70%;
        width: 300px;
        margin-bottom: 26px;
        box-shadow: none;
        transition: all 0.25s ease;
    }

    .heading {
        text-align: center;
        pointer-events: all;
    }

    .heading #name {
        font-size: 2.5rem;
        font-weight: 500;
        margin-top: 5px;
        margin-bottom: 0;
        color: white;
    }

    .heading h2 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #d3d3d3;
    }

    .heading #title {
        margin-top: 10px;
        margin-block-end: 0.1em;
    }

    .heading #location {
        margin-bottom: 30px;
        margin-block-start: 0.4em;
        font-size: 1rem;
    }

    .links {
        text-align: center;
        display: flex;
        justify-content: space-evenly;
    }

    /* setup tooltips */
    .tooltip {
        position: relative;
    }
    .tooltip:before,
    .tooltip:after {
        display: block;
        opacity: 0;
        pointer-events: none;
        position: absolute;
    }
    .tooltip:after {
        border-right: 6px solid transparent;
        border-bottom: 6px solid rgba(0, 0, 0, 0.75);
        border-left: 6px solid transparent;
        content: '';
        height: 0;
        top: 25px;
        left: 5px;
        width: 0;
    }
    .tooltip:before {
        background: rgba(0, 0, 0, 0.75);
        border-radius: 2px;
        color: #fff;
        content: attr(data-title);
        font-size: 14px;
        padding: 6px 10px;
        top: 31px;
        white-space: nowrap;
    }

    .tooltip:after,
    .tooltip:before {
        transform: translate3d(0, -10px, 0);
        transition: all 0.15s ease-in-out;
    }
    .tooltip:hover:after,
    .tooltip:hover:before {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    a {
        color: white;
        cursor: pointer;
        transition: 0.25s ease;
        text-decoration: none;
    }

    #work_link {
        color: #d3d3d3;
    }

    #work_link:hover {
        font-weight: bold;
        color: #d3d3d3;
    }

    @media (hover: hover) and (pointer: fine) {
        .profile-img:hover {
            box-shadow: 0 1px 8px black;
        }

        a:hover {
            text-decoration: none;
            color: #4d4d64;
        }
    }
</style>
