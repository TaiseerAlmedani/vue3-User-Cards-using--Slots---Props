<script>
export default {
  props:{
    twitter:{
      type:String,
      default:'https://www.twitter.com',
    },
    linkedin:{
      type:String,
      default:'https://www.linkedin.com'
    },
    envelope:{
      type:String,
      default:'https://www.envelope.com'
    },
    github:{
      type:String,
      default:'https://www.github.com'
    },
    name:String
  }
}
</script>
<template>
  <div class="column">
    <div class="card">
      <div class="img-container">
        <img src="@/assets/avatar.png" />
      </div>
      <h3><slot name="fullName">John doe</slot></h3>
      <p><slot name ="role">nothinng</slot></p>
      <p class="brief">
        <slot name="brief">Lorem, ipsum dolor.</slot>
      </p>
      <div class="icons">
        <a :href="twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a :href="linkedin">
          <i class="fab fa-linkedin"></i>
        </a>
        <a :href="github">
          <i class="fab fa-github"></i>
        </a>
        <a :href="envelope">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</template>