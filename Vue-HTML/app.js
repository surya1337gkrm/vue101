Vue.createApp({
  data() {
    return {
      fname: 'Surya',
      fullname: '',
      htmlText:
        '<h3 style="color:black;background-color:unset;">Rendering HTML Text here</h3>',
      inputText: '',
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
        return 'Random';
      } else {
        return this.fname + ' SV';
      }
    },
    setInputText(event) {
      this.inputText = event.target.value;
    },
  },
  // this mounted method will be invoked when the component/page is first mounted
  mounted() {
    this.fullname = this.outputFullname();
  },
}).mount('#main');
