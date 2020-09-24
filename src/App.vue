<template>
  <main>
    <router-view/>
  </main>
</template>

<style>

  * {
    padding: 0;
    margin: 0;
    outline: none;
    text-decoration: none;
  }

  main {
    font-family: Roboto, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  form {
    width: 250px;
    padding: 2rem;
    box-shadow: 0 0 5px 1px #948383;
    border-radius: 10px;
  }

  .field {
    display: flex;
  }
  .field input {
    border-radius: 10px;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 100%;
    padding: 0.5rem 1rem;
    font-weight: 500;
  }

  input[placeholder] {
    font-weight: 600;
  }

  button {
    display: block;
    width: 60%;
    padding: 0.5rem 1rem;
    font-size: 14px;
    font-weight: 600;
    margin: 0.5rem auto;
    border: 1px solid;
    background-color: #07f;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }

  .small {
    text-align: center;
    font-size: 12px;
    font-weight: 500;
  }

  .small a {
    color: #07f;
  }

  a:hover {
    text-decoration: underline;
  }

</style>
