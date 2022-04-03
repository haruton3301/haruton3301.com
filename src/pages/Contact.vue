<template>
  <div class="my-8 mx-1 pa-9 white-bg googleform-wrapper">
    <div class="googleform-wrapper pa-3">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScwKzXrD4w0lfNJ386ICO7F1FDR_W0v9Rh6E0Iz_kneg359aw/viewform?embedded=true"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >読み込んでいます
      </iframe>
    </div>
  </div>
</template>

<style>
.googleform-wrapper {
  position: relative;
  width: 100%;
  height: 800px;
  overflow-y: scroll;
}

.googleform-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
