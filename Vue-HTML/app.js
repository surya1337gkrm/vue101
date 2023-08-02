Vue.createApp({
  data() {
    return {
      counter: 0,
      fname: '',
      lname: '',
      fullname: '',
      htmlText:
        '<h3 style="color:black;background-color:unset;">Rendering HTML Text here</h3>',
      inputText: '',
      imageDesc: 'Sample Image',
      imageHeight: '100',
      imageWidth: '100',
      imageLink:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
      sampleText: '',
      name: '',
      goals: [],
      enteredGoal: '',
    };
  },
  watch: {
    // if we want to watch changes to a specific property,
    // we can add a function with same name as the property and this function will take a param which hold
    // the current value of the property.
    counter(value) {
      if (value > 10) {
        this.counter = 0;
      }
    },
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
    handleRightClick() {
      alert('Right Mouse Button Clicked.');
    },
    handleEnterKeyUp() {
      alert(this.inputText);
    },
    handleSubmit() {
      alert('Form Submitted.');
    },
    increment() {
      this.counter += 5;
    },
    updateSampleText(event) {
      this.sampleText = event.target.value;
    },
    outputSampleText() {
      console.log(this.sampleText);
      if (!this.sampleText) return '';
      else return this.sampleText + ' ...Sample';
    },
    clearForm() {
      this.fname = '';
      this.lname = '';
    },
    addGoals() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
  computed: {
    // functions defined in computed can be used directly in the template
    // when the properties used to create a computed property changes, computed property is updated
    fullName() {
      if (!this.fname || !this.lname) return '';
      else return this.fname + ' ' + this.lname;
    },
    handleSubmitComputed() {
      this.fullname = this.fname + ' ' + this.lname;
    },
  },
  // this mounted method will be invoked when the component/page is first mounted
  mounted() {
    this.fullname = this.outputFullname();
  },
}).mount('#main');
