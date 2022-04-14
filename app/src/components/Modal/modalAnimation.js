export const cardVariants = { // анимация всплытия модалки
    start: {
      opacity: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    end: {
      opacity: 0,
      scale: 0.5,
    },
  }

export const wrVariants = { // анимация обертки
    start: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
      },
    },
    end: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }