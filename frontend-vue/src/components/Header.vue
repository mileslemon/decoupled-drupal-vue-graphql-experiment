<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-logotype">
        <h3>Drupal & VueJS</h3>
        <p>A headless Drupal experiment using VueJS and GraphQL.</p>
      </div>
      <div class="header-cta">
        <div class="cta-log-in">Log in</div>
        <div class="cta-sign-up">Create an account</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.header {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(3, 27, 78, 0.06);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  padding: 16px 0;

  .header-logotype {
    h3 {
      font-size: 1em;
      margin-bottom: 8px;
    }
    p {
      font-size: 0.875em;
      margin-top: 0;
    }
  }

  .header-cta {
    display: flex;
    flex-direction: row;

    .cta-log-in {
      align-self: center;
      margin-right: 32px;
      &:hover {
        cursor: pointer;
      }
    }

    .cta-sign-up {
      align-self: center;
      background: #2c3e50;
      border-radius: 100px;
      color: white;
      padding: 16px 24px;
      transition: ease-out all 0.2s;
      &:hover {
        box-shadow: 0 5px 10px rgba(3, 27, 78, 0.2);
        cursor: pointer;
        transform: translateY(-2px);
      }
    }
  }
}
</style>
