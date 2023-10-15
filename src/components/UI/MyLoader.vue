<template>
  <div class="loader" style="margin-top: 10%; margin-left: 45%">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
  </div>
</template>

<script>
export default {
  name: "my-loader",
};
</script>

<style scoped>
.loader {
  position: relative;
  --size: 20px;
  --color: black;
  --parentWidth: 240px;
  --margin: 10px;
  --speed: 1.5s;
  --speedDif: 0.05s;

  width: var(--parentWodth);
  height: var(--size);
}

.loader div {
  position: absolute;
  top: 0;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: var(--color);
}

@keyframes move1 {
  from {
    left: calc(var(--size) * 2 + var(--margin) * 2);
  }
  to {
    left: calc(var(--parentWidth) - var(--size));
  }
}

@keyframes move2 {
  from {
    left: calc(var(--size) + var(--margin));
  }
  to {
    left: calc(var(--parentWidth) - var(--size) * 2 - var(--margin));
  }
}
@keyframes move3 {
  from {
    left: 0px;
  }
  to {
    left: calc(var(--parentWidth) - var(--size) * 3 - var(--margin) * 2);
  }
}

.circle1 {
  left: calc(var(--size) * 2 + var(--margin) * 2);
  animation: var(--speed) ease-in-out 0s infinite alternate move1;
}

.circle2 {
  left: calc(var(--size) + var(--margin));
  animation: var(--speed) ease-in-out 0s infinite alternate move2;
}

.circle3 {
  left: 0px;
  animation: var(--speed) ease-in-out 0s infinite alternate move3;
}
</style>
