window.hostConfig = {
    foo: 'bar',
    // Config stuff that will be stubbed during local dev but provided by Stargate MVC view (if we go that route).
    // This object reference will be removed from the `window` during the hostInit() call.
    // hostInit() will return the initialized dependencies we want to provide to Stargate framework consumers (devs).
    // See /src/main.ts
    theme: {
        primary: 'purple',
        secondary: 'yellow',
        headerColor: 'purple',
        // whatever…
    }
};