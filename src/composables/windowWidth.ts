import { ref, computed, onMounted, onUnmounted } from 'vue';

export function useWindowWidth() {
  const windowWidth = ref(window.innerWidth);

  const isDesktop = computed((): boolean => windowWidth.value > 1023);

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });

  return {
    windowWidth,
    isDesktop,
  };
}