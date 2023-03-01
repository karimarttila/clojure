# Re-Frame Exercise  <!-- omit in toc -->

Check my blog [Clojure Re-Frame Exercise](https://www.karimarttila.fi/clojure/2020/10/15/clojure-re-frame-exercise.html) for the documentation of this re-frame exercise.

## Calva instructions

`just frontend` ... and wait until you see `build completed`. (I.e. you don't have to start the backend REPL since Calva uses the JVM process shadow-cljs starts.)

In VSCode/Calva: `Connect to a running repl server in the project` => `backend + frontend` . You are good to go.

See: [Configuring VSCode/Calva for Clojure programming - Part 3](https://www.karimarttila.fi/clojure/2022/10/18/clojure-calva-part3.html)

## The Port

Once you have both frontend and backend REPLs running, and you have done the Integrant reset (see in file `user.clj`), you can see the frontend in browser at `http://localhost:6161`. The backend is also running at the same port, see examples in the `scripts` directory.