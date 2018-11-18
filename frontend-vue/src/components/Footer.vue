<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="footer-col footer-col-1">
        <h4>Drupal & VueJS</h4>
        <ul>
          <li>Get started</li>
          <li>Products</li>
          <li>Tools</li>
          <li>Blog</li>
        </ul>
      </div>
      <div class="footer-col footer-col-2">
        <h4>About</h4>
        <ul>
          <li>About us</li>
          <li>Our philosophy </li>
          <li>Information</li>
          <li>Specification</li>
        </ul>
      </div>
      <div class="footer-col footer-col-3">
        <h4>Technologies</h4>
        <ul>
          <li>Drupal</li>
          <li>VueJS</li>
          <li>GraphQL</li>
          <li>Apollo</li>
        </ul>
      </div>
      <div class="footer-col footer-col-4">
        <h4>Contact</h4>
        <ul>
          <li>Get in touch</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
.footer {
  background: #2c3e50;
  color: #fff;
  margin-top: 80px;
  padding: 56px 0;

  .footer-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 60%;
  }

  h4,
  p {
    margin: 0;
  }
  .footer-col {
    min-width: 160px;
    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 8px;
        opacity: 0.8;
      }
    }
  }
}
</style>
