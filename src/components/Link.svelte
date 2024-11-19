<script lang="ts">
    import Fa from 'svelte-fa';

    export let href;
    export let ariaLabel;
    export let tooltip;
    export let icon: any;
</script>

<a {href} aria-label={ariaLabel} class="tooltip" data-title={tooltip}>
    <Fa {icon} size="lg" />
</a>

<style>
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

    @media (hover: hover) and (pointer: fine) {
        a:hover {
            text-decoration: none;
            color: #4d4d64;
        }
    }
</style>
