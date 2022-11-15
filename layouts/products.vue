<template>
    <div class="m-container">
        <header>
            <Logo />
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </header>

        <div>
            <slot />
        </div>

        <footer>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
        </footer>
    </div>
</template>