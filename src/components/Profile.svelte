<script lang="ts">
    import { OnMount } from 'fractils';
    import { fly } from 'svelte/transition';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import {
        faGithub,
        faLinkedin,
        faBluesky,
        faYoutube,
        faInstagram,
    } from '@fortawesome/free-brands-svg-icons';
    import Link from './Link.svelte';
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
            <h2 id="title">Full Stack Developer</h2>
            <h2 id="location">
                <a id="work_link" href="https://hertilityhealth.com/">Hertility Health</a> • Fife, Scotland
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
            <Link
                href="mailto:max@maxwilson.co.uk"
                ariaLabel="Email"
                tooltip="max@maxwilson.co.uk"
                icon={faEnvelope}
            />
            <Link
                href="https://github.com/MaxJW"
                ariaLabel="Github"
                tooltip="MaxJW"
                icon={faGithub}
            />
            <Link
                href="https://linkedin.com/in/maxjwilson-1"
                ariaLabel="LinkedIn"
                tooltip="Max Wilson"
                icon={faLinkedin}
            />
            <Link
                href="https://bsky.app/profile/maxwilson.co.uk"
                ariaLabel="Bluesky"
                tooltip="@maxwilson.co.uk"
                icon={faBluesky}
            />
            <Link
                href="https://instagram.com/maxjwilson_/"
                ariaLabel="Instagram"
                tooltip="maxjwilson_"
                icon={faInstagram}
            />
            <Link
                href="https://youtube.com/@MaxJW_"
                ariaLabel="YouTube"
                tooltip="@MaxJW_"
                icon={faYoutube}
            />
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
        justify-content: space-between;
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
