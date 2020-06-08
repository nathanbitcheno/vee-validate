<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
    <form 
      id="sign-up"
      @submit.prevent="handleSubmit(checkOptin)"
    >
        <div class="formfield">   
          <label for="username">User Name</label>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              id="username"
              v-model="userName"
              type="text"
              name="username"
              placeholder="Please enter your username"
              class="textfield"
            >
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="formfield"> 
          <label for="email">Email</label>
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              placeholder="Please enter your email address"
              class="textfield"
            >
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

      <p>
        <button
          type="submit"
        >submit
        </button>
      </p>

    </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      userName: null,
      email: null,
      optin: false
    }
  },
  methods: {
    checkOptin: function() {
      if(!this.userName) {
        console.log("Not yet")
      } else {
      console.log(this.userName)
      console.log(this.email)
      console.log(this.optin)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 400px;
  margin: auto;
  margin-top: 50px;
  text-align: left;
  background-color: #fff;
  padding: 80px 140px 80px 80px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.clear {
  clear: both;
}
.error {
  color: red;
  font-size: .9em;
  display: block;
}
.formfield {
  margin-bottom: 20px;
}
button {
  padding: 20px;
  background: rgb(219, 241, 255);
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin: 15px 15px 15px 0;
  border: none;
  cursor: pointer;
  display: inline;
  outline: none;
  border-radius: 5px;
}
button:hover {
  background: #b3bec5;
}
input {
  padding: 20px;
  background: rgb(219, 241, 255);
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin: 0px 0px 10px 0px;
  border: none;
  outline: none;
  border-radius: 5px;
}
input.textfield {
  width: 100%;
}
label {
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: bold;
}
label.inline {
  display: inline;
  margin-right: 5px;
}
.inline {
  margin-right: 15px;
}
input.button {
  cursor: pointer;
}
input.button:hover {
  background: #b3bec5;
}
</style>
