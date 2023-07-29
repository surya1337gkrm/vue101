Vue.createApp({
  data() {
    return {
      fname: 'Surya',
      htmlText:'<h3 style="color:black;background-color:unset;">Rendering HTML Text here</h3>',
      imageDesc: 'Sample Image',
      imageHeight: '200',
      imageWidth: '200',
      imageLink:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    };
  },
  methods: {
    outputFullname() {
      if (Math.random() > 0.5) {
        return 'Madhuri Jangiti';
      } else {
        return this.fname + ' Venkatesh Vijjana';
      }
    },
  },
}).mount('#main');