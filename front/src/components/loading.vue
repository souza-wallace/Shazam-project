<template>
    <div class="lds-ripple"><div></div><div></div></div>
</template>
<style scoped>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 120px; /* Aumentando o tamanho para 120px */
  height: 120px; /* Aumentando o tamanho para 120px */
}
.lds-ripple div {
  position: absolute;
  border: 6px solid #000; /* Aumentando a espessura da borda para 6px */
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 54px; /* Ajustando a posição para 54px */
    left: 54px; /* Ajustando a posição para 54px */
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 54px; /* Ajustando a posição para 54px */
    left: 54px; /* Ajustando a posição para 54px */
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 54px; /* Ajustando a posição para 54px */
    left: 54px; /* Ajustando a posição para 54px */
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 108px; /* Ajustando o tamanho para 108px */
    height: 108px; /* Ajustando o tamanho para 108px */
    opacity: 0;
  }
}
</style>